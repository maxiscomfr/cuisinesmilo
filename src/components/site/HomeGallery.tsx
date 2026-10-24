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
          className="eyebrow border-b border-brown pb-1 text-brown transition-colors hover:border-tan hover:text-walnut"
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
            className={`eyebrow min-h-11 border px-6 py-3 transition-colors ${
              filter === f.value
                ? "border-brown bg-brown text-cream"
                : "border-sand text-brown/80 hover:border-brown hover:text-brown"
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
          className="eyebrow inline-flex min-h-12 items-center justify-center border border-brown px-8 py-4 text-brown transition-colors hover:bg-brown hover:text-cream"
        >
          Toutes nos cuisines ({realisations.filter((r) => r.category === "Cuisine").length})
        </Link>
        <Link
          to="/realisations/dressings"
          className="eyebrow inline-flex min-h-12 items-center justify-center border border-brown px-8 py-4 text-brown transition-colors hover:bg-brown hover:text-cream"
        >
          Tous nos dressings ({realisations.filter((r) => r.category === "Dressing").length})
        </Link>
      </div>
    </Section>
  );
}
