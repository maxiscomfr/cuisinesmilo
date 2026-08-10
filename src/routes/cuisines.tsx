import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { CataloguePlaceholder } from "@/components/site/CataloguePlaceholder";
import { ModelGallery, type ModelGroup } from "@/components/site/ModelGallery";


export const Route = createFileRoute("/cuisines")({
  head: () => ({
    meta: [
      { title: "Cuisines sur mesure — Cuisines Milo" },
      {
        name: "description",
        content:
          "Cuisines sur mesure conçues et posées par Cuisines Milo, artisan cuisiniste à Royan. Bois, pierre, finitions durables.",
      },
      { property: "og:title", content: "Cuisines sur mesure — Cuisines Milo" },
      {
        property: "og:description",
        content: "Cuisines sur mesure à Royan et en Charente-Maritime.",
      },
    ],
  }),
  component: CuisinesPage,
});

const etapes = [
  { n: "01", t: "Rencontre", d: "Nous prenons le temps de comprendre vos usages, vos volumes et votre budget." },
  { n: "02", t: "Plans & matières", d: "Nous dessinons plusieurs propositions et sélectionnons ensemble matériaux et finitions." },
  { n: "03", t: "Fabrication", d: "Vos meubles sont fabriqués selon nos plans par nos partenaires sélectionnés." },
  { n: "04", t: "Pose soignée", d: "Nous posons votre cuisine avec le même soin qu'un meuble d'ébénisterie." },
];

// Structure prête à recevoir les vraies photos : ajouter les imports d'assets
// dans `photos` (ex: photos: [equa1, equa2, ...]) et retirer `placeholders`.
const nomsModeles = [
  "Equa + Rho",
  "Quadro",
  "Skyline + Yota",
  "Aria",
  "Bloom",
  "Cloe",
  "Domino",
  "Elica",
  "Fenice",
  "Gaia",
  "Helios",
  "Iride",
  "Kubo",
  "Lumina",
  "Mira",
  "Nova",
  "Onda",
  "Prisma",
  "Quarzo",
  "Riva",
  "Sabbia",
  "Terra",
  "Urban",
  "Vela",
  "Wood",
  "Xilo",
  "Yuma",
  "Zenith",
];

const modelesFabricant: ModelGroup[] = nomsModeles.map((modele, i) => ({
  modele,
  photos: [],
  placeholders: 2 + (i % 3),
}));



function CuisinesPage() {

  return (
    <>
      <section className="border-hairline border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <SectionLabel>Cuisines sur mesure</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Une cuisine dessinée autour de votre quotidien.
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Nous concevons des cuisines qui vieillissent bien : matériaux
              nobles, finitions maîtrisées, agencements pensés pour durer.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Demander mon devis
              </Link>
            </div>
          </div>
          <div>
            <CataloguePlaceholder ratio="aspect-[16/10]" />
            <p className="mt-3 text-xs text-muted-foreground">
              Visuel provisoire — catalogue fabricant Armony Cucine en cours
              d'intégration.
            </p>
          </div>

        </div>
      </section>

      <Section>
        <SectionLabel>Notre méthode</SectionLabel>
        <SectionTitle>Quatre étapes, un interlocuteur</SectionTitle>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {etapes.map((e) => (
            <div key={e.n} className="rounded-xl border-hairline border-border p-6">
              <p className="text-xs font-medium tracking-[0.2em] text-accent">{e.n}</p>
              <h3 className="mt-3 text-lg font-medium text-foreground">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionLabel>Fabricant</SectionLabel>
        <SectionTitle>Cuisines du fabricant Armony Cucine</SectionTitle>
        <div className="mt-8 rounded-xl border-hairline border-border p-8 md:p-12">
          <p className="text-base text-foreground">
            En cours d'intégration, sous réserve d'autorisation du fabricant.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            En attendant la mise en ligne des visuels Armony Cucine, nous
            pouvons échanger sur les modèles, finitions et matériaux
            disponibles, et vous montrer nos réalisations.
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

      <Section bordered>
        <SectionLabel>Catalogue fabricant</SectionLabel>
        <SectionTitle>Modèles Armony Cucine</SectionTitle>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Ces visuels sont des modèles du fabricant Armony Cucine, et non des
          chantiers réalisés par Cuisines Milo. Cliquez sur un modèle pour
          parcourir ses photos.
        </p>
        <div className="mt-10">
          <ModelGallery groups={modelesFabricant} />
        </div>

        <div className="mt-8">
          <Link
            to="/realisations"
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Voir nos réalisations →
          </Link>
        </div>
      </Section>

    </>
  );
}
