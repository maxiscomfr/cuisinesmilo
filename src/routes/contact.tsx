import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";

import { Section, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion/Reveal";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Devis cuisine sur mesure à Royan | Contact Cuisines Milo" },
      {
        name: "description",
        content:
          "Demandez votre devis gratuit de cuisine ou de dressing sur mesure à Royan : showroom 38 rue des Cerisiers, 05 46 38 44 94, du lundi au samedi.",
      },
      { property: "og:title", content: "Devis cuisine sur mesure à Royan | Contact Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Demandez votre devis gratuit de cuisine ou de dressing sur mesure à Royan : showroom 38 rue des Cerisiers, 05 46 38 44 94, du lundi au samedi.",
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
  return `mt-2 w-full border border-sand bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-ring ${
    error ? "border-destructive" : "border-border"
  }`;
}

function ContactPage() {
  return (
    <>
      <Section>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-serif mt-4 max-w-4xl text-5xl leading-[1] text-foreground md:text-7xl">
          Demandez votre devis de cuisine à Royan
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Envoyez-nous un message pour toute question ou demande d'information.
          Nous vous recontactons rapidement.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] lg:items-start">
          <Reveal>
            <ContactSimpleForm />
          </Reveal>
          <Reveal className="grid gap-6">
            <div className="border border-sand bg-card p-8 md:p-8">
              <p className={labelClass()}>Coordonnées</p>
              <h2 className="font-serif mt-2 text-3xl leading-tight text-foreground md:text-4xl">Cuisines Milo à Royan</h2>
              <address className="mt-6 grid gap-4 text-sm not-italic text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=38+rue+des+Cerisiers%2C+17200+Royan"
                    target="_blank"
                    rel="noreferrer"
                    className="story-link mt-1 inline-block hover:text-foreground"
                  >
                    38 rue des Cerisiers<br />
                    17200 Royan
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a href="tel:+33786229949" className="story-link mt-1 block w-fit hover:text-foreground">
                    Mobile : +33 7 86 22 99 49
                  </a>
                  <a href="tel:+33546384494" className="story-link block w-fit hover:text-foreground">
                    Fixe : +33 5 46 38 44 94
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:contact@cuisinesmilo.com"
                    className="story-link mt-1 inline-block hover:text-foreground"
                  >
                    contact@cuisinesmilo.com
                  </a>
                </div>
              </address>
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-sand bg-card">
              <iframe
                title="Carte de Cuisines Milo, 38 rue des Cerisiers à Royan"
                src="https://www.google.com/maps?q=38%20rue%20des%20Cerisiers%2C%2017200%20Royan&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function ContactSimpleForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const sendContact = useServerFn(submitContact);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs: Errors = {};
    const name = String(fd.get("nom") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name) errs.nom = "Ce champ est requis";
    if (!email) errs.email = "Ce champ est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Adresse email invalide";
    if (!message) errs.message = "Ce champ est requis";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      await sendContact({ data: { name, email, message } });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-sand bg-card p-8 md:p-8"
      noValidate
    >
      <p className={labelClass()}>Formulaire simple</p>
      <h2 className="font-serif mt-2 text-3xl leading-tight text-foreground md:text-4xl">Nous écrire</h2>

      {submitted && (
        <div className="mt-6 border border-sand border-accent bg-accent/10 p-4 text-sm text-foreground">
          Merci pour votre message, nous vous répondons au plus vite.
        </div>
      )}

      {serverError && (
        <div className="mt-6 border border-sand border-destructive bg-destructive/10 p-4 text-sm text-destructive">
          {serverError}
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
        disabled={loading}
        className="mt-8 eyebrow inline-flex min-h-12 items-center justify-center bg-primary px-8 py-4 text-primary-foreground transition-colors duration-200 hover:bg-walnut disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
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
