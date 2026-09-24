import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchenAsset from "@/assets/hero-cuisine.jpg.asset.json";

const heroKitchen = heroKitchenAsset.url;
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { Reveal } from "@/components/site/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/site/motion/Stagger";
import { ParallaxImage } from "@/components/site/motion/ParallaxImage";
import { realisations, avisList } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuisines Milo — Cuisiniste à Royan | Cuisines & dressings sur mesure" },
      {
        name: "description",
        content:
          "Cuisines Milo, cuisiniste à Royan (17200) : cuisines équipées, dressings et placards sur mesure conçus et posés en Charente-Maritime. Devis gratuit.",
      },
      { property: "og:title", content: "Cuisines Milo — Cuisiniste à Royan | Cuisines & dressings sur mesure" },
      {
        property: "og:description",
        content:
          "Artisan cuisiniste à Royan : cuisines et dressings sur mesure, conçus, fabriqués et posés en Charente-Maritime. Devis gratuit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cuisines Milo",
          description:
            "Artisan cuisiniste à Royan : cuisines et dressings sur mesure, conçus, fabriqués et posés en Charente-Maritime.",
          url: "https://cuisinesmilo.com/",
          image:
            "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "38 rue des Cerisiers",
            addressLocality: "Royan",
            addressRegion: "Charente-Maritime",
            postalCode: "17200",
            addressCountry: "FR",
          },
          areaServed: [
            "Royan",
            "Vaux-sur-Mer",
            "Saint-Georges-de-Didonne",
            "Saujon",
            "La Tremblade",
            "Charente-Maritime",
          ].map((name) => ({ "@type": "Place", name })),
          email: "contact@cuisinesmilo.com",
          telephone: "+33 7 86 22 99 49",
          priceRange: "€€",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              description: "Du lundi au samedi, sur rendez-vous",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const reassurances = [
  {
    label: "POURQUOI NOUS ?",
    title: "Cuisiniste local à Royan",
    text: "Choisir un cuisiniste à Royan, c'est l'assurance d'un accompagnement personnalisé, d'un interlocuteur unique et d'une cuisine esthétique, pratique et durable.",
  },
  {
    label: "SUR MESURE.",
    title: "Cuisines et dressings sur mesure",
    text: "Chez Cuisines Milo, chaque cuisine et chaque dressing sur mesure est dessiné selon votre espace, vos habitudes et votre style de vie.",
  },
  {
    label: "NOS RÉALISATIONS",
    title: "Du croquis à la pose en Charente-Maritime",
    text: "Découvrez des exemples de cuisines et de dressings installés récemment à Royan et dans les communes voisines de Charente-Maritime (17).",
  },
];

function Home() {
  const highlights = realisations.slice(0, 3);
  const featuredAvis = avisList[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-hairline border-b border-border">
        <ParallaxImage className="absolute inset-0" kenBurns speed={0.12}>
          <img
            src={heroKitchen}
            alt="Cuisine sur mesure en bois à Royan — Cuisines Milo, cuisiniste"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
        </ParallaxImage>
        <div
          aria-hidden
          className="absolute inset-0 bg-primary/55"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <Stagger stagger={0.12}>
            <StaggerItem y={16}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/90">
                Cuisiniste à Royan · Charente-Maritime
              </p>
            </StaggerItem>
            <StaggerItem y={20}>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-primary-foreground md:text-5xl">
                Cuisines et dressings sur mesure à Royan, pensés pour durer.
              </h1>
            </StaggerItem>
            <StaggerItem y={20}>
              <p className="mt-5 max-w-lg text-base text-primary-foreground/90">
                Cuisines Milo, artisan cuisiniste à Royan, conçoit et pose vos
                cuisines et dressings sur mesure partout en Charente-Maritime :
                matériaux nobles et finitions soignées.
              </p>
            </StaggerItem>
            <StaggerItem y={20}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/60 transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90"
                >
                  Demander mon devis gratuit
                </Link>
                <Link
                  to="/realisations/cuisines"
                  className="inline-flex items-center justify-center rounded-md border-hairline border-primary-foreground/60 px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/40"
                >
                  Voir les réalisations
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* RÉASSURANCES */}
      <Section>
        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.12}>
          {reassurances.map((r) => (
            <StaggerItem key={r.label} className="h-full">
              <div
                className="h-full rounded-xl border-hairline border-border p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {r.label}
                </p>
                <h3 className="mt-3 text-lg font-medium text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* APERÇU RÉALISATIONS */}
      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
          <div>
            <SectionLabel>Réalisations récentes</SectionLabel>
            <SectionTitle>
              Cuisines et dressings posés à Royan et en Charente-Maritime
            </SectionTitle>
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
          <Reveal>
            <blockquote className="mt-6 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              « {featuredAvis.text} »
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">
              {featuredAvis.name} — {featuredAvis.location}
            </p>
          </Reveal>
          <div className="mt-8">
            <Link
              to="/a-propos"
              className="story-link text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              En savoir plus sur Cuisines Milo →
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA final */}
      <Section bordered>
        <Reveal>
          <div className="rounded-xl border-hairline border-border p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Parlons de votre projet de cuisine ou de dressing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Décrivez-nous votre espace et vos envies : votre cuisiniste à Royan
              vous rappelle pour affiner votre devis sur mesure, partout en
              Charente-Maritime.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90"
              >
                Demander mon devis gratuit
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
