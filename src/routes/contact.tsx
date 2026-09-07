import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cuisines Milo" },
      {
        name: "description",
        content:
          "Contactez Cuisines Milo pour toute question sur une cuisine ou un dressing sur mesure à Royan et en Charente-Maritime.",
      },
      { property: "og:title", content: "Contact — Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Contactez Cuisines Milo pour votre projet de cuisine ou de dressing sur mesure à Royan et en Charente-Maritime. Réponse rapide, devis gratuit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/contact" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/contact" }],
  }),
  component: ContactPage,
});

type Errors = Record<string, string>;

function labelClass() {
  return "text-xs uppercase tracking-[0.18em] text-accent";
}

function inputClass(error?: string) {
  return `mt-2 w-full rounded-md border-hairline bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring ${
    error ? "border-destructive" : "border-border"
  }`;
}

function ContactPage() {
  return (
    <>
      <Section>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Parlons de votre projet
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Envoyez-nous un message pour toute question ou demande d'information.
          Nous vous recontactons rapidement.
        </p>
      </Section>

      <Section bordered>
        <div className="mx-auto max-w-2xl">
          <ContactSimpleForm />
        </div>
      </Section>
    </>
  );
}

function ContactSimpleForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Errors = {};
    if (!String(fd.get("nom") ?? "").trim()) errs.nom = "Ce champ est requis";
    const email = String(fd.get("email") ?? "");
    if (!email.trim()) errs.email = "Ce champ est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Adresse email invalide";
    if (!String(fd.get("message") ?? "").trim()) errs.message = "Ce champ est requis";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      e.currentTarget.reset();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border-hairline border-border p-6 md:p-8"
      noValidate
    >
      <p className={labelClass()}>Formulaire simple</p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground">Nous écrire</h2>

      {submitted && (
        <div className="mt-6 rounded-md border-hairline border-accent bg-accent/10 p-4 text-sm text-foreground">
          Merci pour votre message, nous vous répondons au plus vite.
        </div>
      )}

      <div className="mt-6 grid gap-5">
        <Field label="Nom" name="nom" error={errors.nom} />
        <Field label="Email" name="email" type="email" error={errors.email} />
        <div>
          <label className={labelClass()}>Votre message</label>
          <textarea
            name="message"
            rows={6}
            className={inputClass(errors.message)}
            placeholder="Votre message"
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Envoyer
      </button>

      <div className="mt-8 border-hairline border-t border-border pt-6 text-sm text-muted-foreground">
        <p className="text-foreground font-medium">Zone d'intervention</p>
        <p className="mt-1">Royan, Saint-Palais-sur-Mer, Saujon, Vaux-sur-Mer et toute la Charente-Maritime.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClass()} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={inputClass(error)}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
