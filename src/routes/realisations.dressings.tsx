import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { realisations } from "@/lib/site-data";

export const Route = createFileRoute("/realisations/dressings")({
  head: () => ({
    meta: [
      { title: "Dressings et placards sur mesure à Royan" },
      {
        name: "description",
        content:
          "Dressings et placards sur mesure réalisés par Cuisines Milo en Charente-Maritime : galerie de chantiers livrés.",
      },
      { property: "og:title", content: "Dressings et placards sur mesure à Royan" },
      {
        property: "og:description",
        content:
          "Galerie de dressings et placards sur mesure réalisés par Cuisines Milo : rangements optimisés livrés en Charente-Maritime.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://cuisinesmilo.com/realisations/dressings" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [
        {
          rel: "canonical",
          href: "https://cuisinesmilo.com/realisations/dressings",
        },
      ],
  }),
  component: RealisationsDressingsPage,
});

function RealisationsDressingsPage() {
  const items = realisations.filter((r) => r.category === "Dressing");

  return (
    <Section>
      <SectionLabel>Galerie</SectionLabel>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Réalisations de dressings
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Dressings et placards sur mesure récemment livrés en Charente-Maritime.
      </p>

      <div className="mt-10">
        {items.length > 0 ? (
          <RealisationsGrid items={items} columns={3} />
        ) : (
          <p className="text-sm text-muted-foreground">
            Les réalisations de dressings seront bientôt publiées ici.
          </p>
        )}
      </div>
    </Section>
  );
}
