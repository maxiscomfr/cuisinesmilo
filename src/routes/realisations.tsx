import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionLabel } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { realisations } from "@/lib/site-data";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Cuisines Milo" },
      {
        name: "description",
        content:
          "Galerie des réalisations de Cuisines Milo : cuisines et dressings sur mesure en Charente-Maritime.",
      },
      { property: "og:title", content: "Réalisations — Cuisines Milo" },
      { property: "og:description", content: "Cuisines et dressings récemment posés." },
    ],
  }),
  component: RealisationsPage,
});

type Filter = "Tout" | "Cuisine" | "Dressing";
const filters: Filter[] = ["Tout", "Cuisine", "Dressing"];

function RealisationsPage() {
  const [filter, setFilter] = useState<Filter>("Tout");
  const items =
    filter === "Tout" ? realisations : realisations.filter((r) => r.category === filter);

  return (
    <Section>
      <SectionLabel>Galerie</SectionLabel>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Nos réalisations
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Chaque projet raconte une histoire. Voici quelques cuisines et dressings
        récemment livrés en Charente-Maritime.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md border-hairline px-4 py-2 text-sm transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        <RealisationsGrid items={items} columns={3} />
      </div>
    </Section>
  );
}
