import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { createServerSupabaseClient } from "./supabase.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createServerSupabaseClient();
    const { data: inserted, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Contact submission error:", error);
      throw new Error("Impossible d'enregistrer votre message. Veuillez réessayer.");
    }

    try {
      const { sendTemplateEmail } = await import("./email-templates/send-email");
      await sendTemplateEmail("contact-notification", NOTIFICATION_RECIPIENT, {
        templateData: {
          name: data.name,
          email: data.email,
          message: data.message,
          receivedAt: new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "short",
            timeStyle: "short",
            timeZone: "Europe/Paris",
          }).format(inserted?.created_at ? new Date(inserted.created_at) : new Date()),
        },
        idempotencyKey: `contact-notification-${inserted?.id ?? crypto.randomUUID()}`,
        replyTo: data.email,
      });
    } catch (mailError) {
      console.error("Contact notification email error:", mailError);
    }

    return { ok: true };
  });


const updateContactSchema = z.object({
  id: z.string().uuid(),
  repliedAt: z.string().datetime().nullable().optional(),
  notes: z.string().max(2000).nullable().optional(),
});

export const getContactSubmissions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch contact submissions error:", error);
      throw new Error("Impossible de récupérer les messages.");
    }

    return { submissions: data ?? [] };
  });

export const updateContactSubmission = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data: unknown) => updateContactSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("contact_submissions")
      .update({
        replied_at: data.repliedAt ?? null,
        notes: data.notes ?? null,
      })
      .eq("id", data.id);

    if (error) {
      console.error("Update contact submission error:", error);
      throw new Error("Impossible de mettre à jour le message.");
    }

    return { ok: true };
  });
