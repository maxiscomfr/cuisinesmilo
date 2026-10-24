import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { RealisationsGrid } from "@/components/site/RealisationsGrid";
import { realisations } from "@/lib/site-data";

type Filter = "Toutes" | "Cuisine" | "Dressing";

const filters: { value: Filter; label: string }[] = [
  { value: "Toutes", label: "Toutes" },
  { value: "Cuisine", label: "Cuisines" },
  { value: "Dressing", label: "Dressings" },
];

const PREVIEW_COUNT = 9;

export function HomeGallery() {
  const [filter, setFilter] = useState<Filter>("Toutes");

  const items = useMemo(() => {
    if (filter === "Cuisine") return realisations.filter((r) => r.category === "Cuisine").slice(0, PREVIEW_COUNT);
    if (filter === "Dressing") return realisations.filter((r) => r.category === "Dressing").slice(0, PREVIEW_COUNT);
    // « Toutes » : on mélange cuisines et dressings (6 + 3) pour montrer la variété
    const cuisines = realisations.filter((r) => r.category === "Cuisine").slice(0, 6);
    const dressings = realisations.filter((r) => r.category === "Dressing").slice(0, 3);
    return [...cuisines, ...dressings];
  }, [filter]);

  return (
    <Section bordered>
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
        <div>
          <SectionLabel>Réalisations récentes</SectionLabel>
          <SectionTitle>Cuisines et dressings posés à Royan et en Charente-Maritime</SectionTitle>
        </div>
        <Link
          to="/realisations/cuisines"
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Voir toute la galerie →
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les réalisations">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full border-hairline px-4 py-1.5 text-sm transition-colors ${
              filter === f.value
                ? "border-foreground bg-foreground text-background"
                : "border-border text-foreground/80 hover:border-accent hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {/* key : remonte la grille quand le filtre change pour rejouer l'animation */}
        <RealisationsGrid key={filter} items={items} columns={3} />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/realisations/cuisines"
          className="inline-flex items-center justify-center rounded-md border-hairline border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
        >
          Toutes nos cuisines ({realisations.filter((r) => r.category === "Cuisine").length})
        </Link>
        <Link
          to="/realisations/dressings"
          className="inline-flex items-center justify-center rounded-md border-hairline border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent"
        >
          Tous nos dressings ({realisations.filter((r) => r.category === "Dressing").length})
        </Link>
      </div>
    </Section>
  );
}
