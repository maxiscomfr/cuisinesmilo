import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/hero-kitchen.jpg";
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
  }),
  component: Home,
});

const reassurances = [
  {
    label: "Sur mesure",
    title: "Dessiné pour votre pièce",
    text: "Chaque projet est conçu à partir de vos volumes, de vos habitudes et de vos matériaux préférés.",
  },
  {
    label: "Artisanat",
    title: "Fabrication maîtrisée",
    text: "Nous travaillons avec des fabricants sélectionnés pour la qualité de leurs finitions et la durabilité de leurs matériaux.",
  },
  {
    label: "Accompagnement",
    title: "Du croquis à la pose",
    text: "Un interlocuteur unique, du premier rendez-vous à la mise en service de votre cuisine.",
  },
];

function Home() {
  const highlights = realisations.slice(0, 3);
  const featuredAvis = avisList[0];

  return (
    <>
      {/* HERO */}
      <section className="border-hairline border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Cuisiniste à Royan · Charente-Maritime
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Des cuisines pensées pour durer, dessinées pour vous.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">
              Cuisines Milo conçoit et pose des cuisines et dressings sur mesure,
              en travaillant les matériaux nobles et les finitions soignées.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Demander mon devis gratuit
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center justify-center rounded-md border-hairline border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={heroKitchen}
              alt="Cuisine sur mesure en bois — Cuisines Milo"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* RÉASSURANCES */}
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {reassurances.map((r) => (
            <div key={r.label} className="py-2">
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
      <Section>
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <SectionLabel>Réalisations récentes</SectionLabel>
            <SectionTitle>Quelques projets menés en Charente-Maritime</SectionTitle>
          </div>
          <Link
            to="/realisations"
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
      <Section>
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
              to="/avis"
              className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Lire tous les avis →
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section>
        <div className="py-8 text-center md:py-12">
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
