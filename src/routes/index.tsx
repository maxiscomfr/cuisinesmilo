import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchenAsset from "@/assets/hero-cuisine.jpg.asset.json";

const heroKitchen = heroKitchenAsset.url;
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { realisations, avisList } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuisines Milo — Cuisines et dressings sur mesure à Royan" },
      {
        name: "description",
        content:
          "Artisan cuisiniste en Charente-Maritime. Des cuisines pensées pour durer, dessinées pour vous. Demandez votre devis gratuit.",
      },
      { property: "og:title", content: "Cuisines Milo — Cuisiniste sur mesure" },
      {
        property: "og:description",
        content: "Cuisines et dressings sur mesure à Royan et en Charente-Maritime.",
      },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/" }],
  }),
  component: Home,
});

const reassurances = [
  {
    label: "POURQUOI NOUS ?",
    title: "Fabrication maîtrisée",
    text: "Choisir un cuisiniste local est la garantie d'un accompagnement personnalisé. Notre objectif est de créer une cuisine esthétique, pratique et durable.",
  },
  {
    label: "SUR MESURE.",
    title: "Dessiné pour votre pièce",
    text: "Chez Cuisines Milo, nous concevons chaque cuisine sur mesure en tenant compte de votre espace, de vos habitudes et de votre style de vie.",
  },
  {
    label: "NOS RÉALISATION",
    title: "Du croquis à la pose",
    text: "Découvrez quelques exemples de cuisines et de dressings installés récemment à Royan et d'autres communes du département de la Charente-Maritime.",
  },
];

function Home() {
  const highlights = realisations.slice(0, 3);
  const featuredAvis = avisList[0];

  return (
    <>
      {/* HERO */}
      <section className="relative border-hairline border-b border-border">
        <img
          src={heroKitchen}
          alt="Cuisine sur mesure en bois — Cuisines Milo"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-primary/55"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/90">
            Cuisiniste à Royan · Charente-Maritime
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-primary-foreground md:text-5xl">
            Des cuisines pensées pour durer, dessinées pour vous.
          </h1>
          <p className="mt-5 max-w-lg text-base text-primary-foreground/90">
            Cuisines Milo conçoit et pose des cuisines et dressings sur mesure,
            en travaillant les matériaux nobles et les finitions soignées.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/60 transition-colors hover:bg-primary/90"
            >
              Demander mon devis gratuit
            </Link>
            <Link
              to="/realisations/cuisines"
              className="inline-flex items-center justify-center rounded-md border-hairline border-primary-foreground/60 px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/40"
            >
              Voir les réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* RÉASSURANCES */}
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {reassurances.map((r) => (
            <div
              key={r.label}
              className="rounded-xl border-hairline border-border p-6"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {r.label}
              </p>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* APERÇU RÉALISATIONS */}
      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <SectionLabel>Réalisations récentes</SectionLabel>
            <SectionTitle>Quelques projets menés en Charente-Maritime</SectionTitle>
          </div>
          <Link
            to="/realisations/cuisines"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Voir toute la galerie →
          </Link>
        </div>
        <div className="mt-10">
          <RealisationsGrid items={highlights} columns={3} />
        </div>
      </Section>

      {/* AVIS */}
      <Section bordered>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Ils nous ont fait confiance</SectionLabel>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            « {featuredAvis.text} »
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">
            {featuredAvis.name} — {featuredAvis.location}
          </p>
          <div className="mt-8">
            <Link
              to="/a-propos"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              En savoir plus sur Cuisines Milo →
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section bordered>
        <div className="rounded-xl border-hairline border-border p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Parlons de votre projet
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Décrivez-nous votre espace et vos envies : nous vous rappelons
            pour affiner votre devis sur mesure.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Demander mon devis gratuit
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
