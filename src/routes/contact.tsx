import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis — Cuisines Milo" },
      {
        name: "description",
        content:
          "Demandez votre devis pour une cuisine ou un dressing sur mesure à Royan et en Charente-Maritime.",
      },
      { property: "og:title", content: "Contact & devis — Cuisines Milo" },
      { property: "og:description", content: "Formulaires de devis et de contact." },
    ],
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
          Deux formulaires à votre disposition : un devis détaillé pour lancer
          votre projet, ou un simple message pour toute autre demande.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-10 lg:grid-cols-2">
          <DevisForm />
          <ContactSimpleForm />
        </div>
      </Section>
    </>
  );
}

function DevisForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Errors = {};

    const required = ["nom", "email", "telephone", "projet", "codePostal"];
    for (const k of required) {
      if (!String(fd.get(k) ?? "").trim()) errs[k] = "Ce champ est requis";
    }
    const email = String(fd.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Adresse email invalide";
    }
    const tel = String(fd.get("telephone") ?? "").replace(/[\s.\-]/g, "");
    if (tel && !/^(\+?\d{9,15})$/.test(tel)) {
      errs.telephone = "Numéro de téléphone invalide";
    }
    const cp = String(fd.get("codePostal") ?? "");
    if (cp && !/^\d{5}$/.test(cp)) errs.codePostal = "Code postal à 5 chiffres";

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
      <p className={labelClass()}>Formulaire de devis</p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground">
        Demande de devis détaillée
      </h2>

      {submitted && (
        <div className="mt-6 rounded-md border-hairline border-accent bg-accent/10 p-4 text-sm text-foreground">
          Merci, votre demande a bien été prise en compte. Nous vous recontactons rapidement.
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Nom & prénom" name="nom" error={errors.nom} />
        <Field label="Email" name="email" type="email" error={errors.email} />
        <Field label="Téléphone" name="telephone" type="tel" error={errors.telephone} />
        <Field label="Code postal" name="codePostal" error={errors.codePostal} />

        <div className="sm:col-span-2">
          <label className={labelClass()}>Type de projet</label>
          <select name="projet" defaultValue="" className={inputClass(errors.projet)}>
            <option value="" disabled>Choisir…</option>
            <option value="cuisine">Cuisine sur mesure</option>
            <option value="dressing">Dressing / placards</option>
            <option value="les-deux">Cuisine + dressing</option>
            <option value="autre">Autre</option>
          </select>
          {errors.projet && <p className="mt-1 text-xs text-destructive">{errors.projet}</p>}
        </div>

        <Field label="Budget estimé (optionnel)" name="budget" required={false} />
        <Field label="Délai souhaité (optionnel)" name="delai" required={false} />

        <div className="sm:col-span-2">
          <label className={labelClass()}>Décrivez votre projet</label>
          <textarea
            name="message"
            rows={5}
            className={inputClass()}
            placeholder="Dimensions, matériaux souhaités, contraintes de la pièce…"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Envoyer ma demande de devis
      </button>
    </form>
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
