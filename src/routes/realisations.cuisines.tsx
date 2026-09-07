import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { realisations } from "@/lib/site-data";

export const Route = createFileRoute("/realisations/cuisines")({
  head: () => ({
    meta: [
      { title: "Réalisations de cuisines — Cuisines Milo" },
      {
        name: "description",
        content:
          "Cuisines sur mesure réalisées par Cuisines Milo en Charente-Maritime : galerie de chantiers livrés.",
      },
      { property: "og:title", content: "Réalisations de cuisines — Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Galerie de cuisines sur mesure réalisées par Cuisines Milo : chantiers livrés en Charente-Maritime, du croquis à la pose finale.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://cuisinesmilo.com/realisations/cuisines" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [
        {
          rel: "canonical",
          href: "https://cuisinesmilo.com/realisations/cuisines",
        },
      ],
  }),
  component: RealisationsCuisinesPage,
});

function RealisationsCuisinesPage() {
  const items = realisations.filter((r) => r.category === "Cuisine");

  return (
    <Section>
      <SectionLabel>Galerie</SectionLabel>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Réalisations de cuisines
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Chaque projet raconte une histoire. Voici quelques cuisines récemment
        livrées en Charente-Maritime.
      </p>

      <div className="mt-10">
        <RealisationsGrid items={items} columns={3} />
      </div>
    </Section>
  );
}
