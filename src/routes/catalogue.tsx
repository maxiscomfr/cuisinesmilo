import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Catalogue Armony Cucine — Cuisines Milo" },
      {
        name: "description",
        content:
          "Catalogue Armony Cucine en cours d'intégration, sous réserve d'autorisation du fabricant.",
      },
      { property: "og:title", content: "Catalogue Armony Cucine — Cuisines Milo" },
      { property: "og:description", content: "Catalogue en cours d'intégration." },
    ],
  }),
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <Section>
      <SectionLabel>Catalogue</SectionLabel>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Catalogue Armony Cucine
      </h1>
      <div className="mt-10 rounded-xl border-hairline border-border p-8 md:p-12">
        <p className="text-base text-foreground">
          Catalogue en cours d'intégration, sous réserve d'autorisation du fabricant.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          En attendant la mise en ligne complète du catalogue Armony Cucine,
          vous pouvez découvrir nos réalisations ou nous contacter pour
          échanger sur les modèles, finitions et matériaux disponibles.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/realisations"
            className="inline-flex items-center justify-center rounded-md border-hairline border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          >
            Voir les réalisations
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </Section>
  );
}
