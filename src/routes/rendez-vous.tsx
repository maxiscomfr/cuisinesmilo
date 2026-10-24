import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";

import { Section, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion/Reveal";
import { submitContact } from "@/lib/contact.functions";

const OG_IMAGE =
  "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg";

export const Route = createFileRoute("/rendez-vous")({
  head: () => ({
    meta: [
      { title: "Rendez-vous showroom à Royan | Cuisines Milo" },
      {
        name: "description",
        content:
          "Réservez un rendez-vous au showroom Cuisines Milo à Royan (38 rue des Cerisiers) : voyez et touchez façades, plans de travail et finitions. Du lundi au samedi.",
      },
      { property: "og:title", content: "Rendez-vous showroom à Royan | Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Réservez un rendez-vous au showroom Cuisines Milo à Royan : façades, plans de travail et finitions à voir et toucher.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/rendez-vous" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/rendez-vous" }],
  }),
  component: RendezVousPage,
});

type Errors = Record<string, string>;

const creneaux = [
  "Matin (9h – 12h)",
  "Début d'après-midi (14h – 16h)",
  "Fin d'après-midi (16h – 18h)",
] as const;

function labelClass() {
  return "text-xs uppercase tracking-[0.18em] text-accent";
}

function inputClass(error?: string) {
  return `mt-2 w-full border border-sand bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-accent focus:ring-2 focus:ring-ring ${
    error ? "border-destructive" : "border-border"
  }`;
}

function todayIso() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function formatDateFr(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function RendezVousPage() {
  return (
    <>
      <Section>
        <SectionLabel>Showroom</SectionLabel>
        <h1 className="font-serif mt-4 max-w-4xl text-5xl leading-[1] text-foreground md:text-7xl">
          Prenez rendez-vous au showroom de Royan
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Venez voir et toucher les façades, les plans de travail et les finitions avant de vous
          décider. Le showroom est ouvert du lundi au samedi, sur rendez-vous. Choisissez le jour
          qui vous arrange, nous vous confirmons le créneau rapidement.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:items-start">
          <Reveal>
            <RendezVousForm />
          </Reveal>
          <Reveal className="grid gap-6">
            <div className="border border-sand bg-card p-8 md:p-8">
              <p className={labelClass()}>Le showroom</p>
              <h2 className="font-serif mt-2 text-3xl leading-tight text-foreground md:text-4xl">Cuisines Milo</h2>
              <address className="mt-6 grid gap-4 text-sm not-italic text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=38+rue+des+Cerisiers%2C+17200+Royan"
                    target="_blank"
                    rel="noreferrer"
                    className="story-link mt-1 inline-block hover:text-foreground"
                  >
                    38 rue des Cerisiers
                    <br />
                    17200 Royan
                  </a>
                </div>
                <div>
                  <p className="font-medium text-foreground">Horaires</p>
                  <p className="mt-1">Du lundi au samedi, sur rendez-vous</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Plutôt par téléphone ?</p>
                  <a href="tel:+33546384494" className="story-link mt-1 block w-fit hover:text-foreground">
                    Fixe : +33 5 46 38 44 94
                  </a>
                  <a href="tel:+33786229949" className="story-link block w-fit hover:text-foreground">
                    Mobile : +33 7 86 22 99 49
                  </a>
                </div>
              </address>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function RendezVousForm() {
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

    const name = String(fd.get("nom") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("telephone") ?? "").trim();
    const date = String(fd.get("date") ?? "").trim();
    const creneau = String(fd.get("creneau") ?? "").trim();
    const projet = String(fd.get("projet") ?? "").trim();
    const note = String(fd.get("message") ?? "").trim();

    const errs: Errors = {};
    if (!name) errs.nom = "Ce champ est requis";
    if (!email) errs.email = "Ce champ est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Adresse email invalide";
    if (!phone) errs.telephone = "Ce champ est requis";
    if (!date) errs.date = "Choisissez une date";
    else if (date < todayIso()) errs.date = "Cette date est passée";
    else if (new Date(`${date}T12:00:00`).getDay() === 0) errs.date = "Le showroom est fermé le dimanche";
    if (!creneau) errs.creneau = "Choisissez un créneau";

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const message = [
      "[DEMANDE DE RENDEZ-VOUS SHOWROOM]",
      `Date souhaitée : ${formatDateFr(date)}`,
      `Créneau : ${creneau}`,
      `Téléphone : ${phone}`,
      projet ? `Projet : ${projet}` : null,
      note ? `Message : ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n");

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

  if (submitted) {
    return (
      <div className="rounded-xl border-hairline border-accent bg-accent/10 p-6 md:p-8">
        <p className={labelClass()}>Demande envoyée</p>
        <h2 className="font-serif mt-2 text-3xl leading-tight text-foreground md:text-4xl">Merci, c'est bien reçu</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Nous vous rappelons rapidement pour confirmer votre créneau au showroom. Un empêchement
          ou une question ? Appelez-nous au{" "}
          <a href="tel:+33546384494" className="font-medium text-foreground underline underline-offset-4">
            05 46 38 44 94
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-foreground underline underline-offset-4"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-sand bg-card p-8 md:p-8" noValidate>
      <p className={labelClass()}>Réserver</p>
      <h2 className="font-serif mt-2 text-3xl leading-tight text-foreground md:text-4xl">Choisissez votre créneau</h2>

      {serverError && (
        <div className="mt-6 border border-sand border-destructive bg-destructive/10 p-4 text-sm text-destructive">
          {serverError}
        </div>
      )}

      <div className="mt-6 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Date souhaitée" name="date" type="date" min={todayIso()} error={errors.date} />
          <div>
            <label className={labelClass()} htmlFor="creneau">
              Créneau
            </label>
            <select id="creneau" name="creneau" defaultValue="" className={inputClass(errors.creneau)}>
              <option value="" disabled>
                Choisir…
              </option>
              {creneaux.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.creneau && <p className="mt-1 text-xs text-destructive">{errors.creneau}</p>}
          </div>
        </div>

        <Field label="Nom" name="nom" error={errors.nom} autoComplete="name" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Téléphone" name="telephone" type="tel" error={errors.telephone} autoComplete="tel" />
          <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
        </div>

        <div>
          <label className={labelClass()} htmlFor="projet">
            Votre projet <span className="normal-case tracking-normal text-muted-foreground">(facultatif)</span>
          </label>
          <select id="projet" name="projet" defaultValue="" className={inputClass()}>
            <option value="">Je ne sais pas encore</option>
            <option value="Cuisine sur mesure">Cuisine sur mesure</option>
            <option value="Dressing / placard sur mesure">Dressing / placard sur mesure</option>
            <option value="Cuisine et dressing">Cuisine et dressing</option>
          </select>
        </div>

        <div>
          <label className={labelClass()} htmlFor="message">
            Un mot sur votre projet <span className="normal-case tracking-normal text-muted-foreground">(facultatif)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1200}
            className={inputClass()}
            placeholder="Surface, style recherché, budget, délai…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 eyebrow inline-flex min-h-12 items-center justify-center bg-primary px-8 py-4 text-primary-foreground transition-colors duration-200 hover:bg-walnut disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? "Envoi en cours..." : "Demander ce rendez-vous"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Gratuit et sans engagement. Votre demande est confirmée par téléphone ou par email.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  min,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  min?: string;
  autoComplete?: string;
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
        min={min}
        autoComplete={autoComplete}
        className={inputClass(error)}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
