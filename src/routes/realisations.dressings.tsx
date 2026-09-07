import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { realisations } from "@/lib/site-data";

export const Route = createFileRoute("/realisations/dressings")({
  head: () => ({
    meta: [
      { title: "Réalisations de dressings — Cuisines Milo" },
      {
        name: "description",
        content:
          "Dressings et placards sur mesure réalisés par Cuisines Milo en Charente-Maritime : galerie de chantiers livrés.",
      },
      { property: "og:title", content: "Réalisations de dressings — Cuisines Milo" },
      { property: "og:description", content: "Dressings sur mesure récemment posés." },
      links: [
        {
          rel: "canonical",
          href: "https://cuisinesmilo.com/realisations/dressings",
        },
      ],
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
