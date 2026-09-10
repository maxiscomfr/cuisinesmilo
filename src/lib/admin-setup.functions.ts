import { createServerFn } from "@tanstack/react-start";

export const createInitialAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
    });

    if (createError || !userData.user) {
      console.error("Create user error:", createError);
      throw new Error("Impossible de créer l'utilisateur administrateur.");
    }

    const { error: roleError } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: userData.user.id, role: "admin" });

    if (roleError) {
      console.error("Grant admin role error:", roleError);
      throw new Error("Utilisateur créé, mais impossible d'attribuer le rôle admin.");
    }

    return { ok: true, userId: userData.user.id };
  });
