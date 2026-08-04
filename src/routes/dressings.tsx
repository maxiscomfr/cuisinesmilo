import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import {
  CataloguePlaceholder,
  CataloguePlaceholderGrid,
} from "@/components/site/CataloguePlaceholder";


export const Route = createFileRoute("/dressings")({
  head: () => ({
    meta: [
      { title: "Dressings & placards sur mesure — Cuisines Milo" },
      {
        name: "description",
        content:
          "Dressings et placards sur mesure en Charente-Maritime. Optimisation des volumes, portes coulissantes, aménagements intérieurs.",
      },
      { property: "og:title", content: "Dressings sur mesure — Cuisines Milo" },
      {
        property: "og:description",
        content: "Dressings et placards sur mesure à Royan et alentours.",
      },
    ],
  }),
  component: DressingsPage,
});

const points = [
  { t: "Optimisation", d: "Chaque centimètre exploité, y compris sous les pentes et dans les recoins." },
  { t: "Aménagements", d: "Tiroirs, penderies, tringles, tiroirs coulissants, cases à chaussures : tout est pensé pour vous." },
  { t: "Portes & façades", d: "Battantes ou coulissantes, en bois, laquées ou avec miroir, selon vos préférences." },
];

const modelesFabricant = [
  "Modèle fabricant — dressing ouvert",
  "Modèle fabricant — portes coulissantes",
  "Modèle fabricant — placard sous pente",
  "Modèle fabricant — façades miroir",
  "Modèle fabricant — aménagement intérieur",
  "Modèle fabricant — placard d'entrée",
];

function DressingsPage() {

  return (
    <>
      <section className="border-hairline border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <SectionLabel>Dressings & placards</SectionLabel>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Des rangements pensés pour votre pièce.
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Du placard d'entrée au dressing complet, nous concevons des
              aménagements sur mesure qui s'intègrent naturellement à votre
              intérieur.
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
            <CataloguePlaceholder
              ratio="aspect-[16/10]"
              label="Photo catalogue fabricant"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Visuel provisoire — catalogue fabricant en cours d'intégration.
            </p>
          </div>

        </div>
      </section>

      <Section>
        <SectionLabel>Ce que nous faisons</SectionLabel>
        <SectionTitle>Un aménagement conçu pour vous</SectionTitle>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="rounded-xl border-hairline border-border p-6">
              <h3 className="text-lg font-medium text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionLabel>Réalisations</SectionLabel>
        <SectionTitle>Nos dressings & placards</SectionTitle>
        <div className="mt-10">
          <RealisationsGrid items={dressings} columns={3} />
        </div>
      </Section>
    </>
  );
}
