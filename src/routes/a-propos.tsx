import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Cuisines Milo" },
      {
        name: "description",
        content:
          "Cuisines Milo, artisan cuisiniste à Royan. Découvrez notre histoire, notre savoir-faire et notre méthode pour des cuisines et dressings sur mesure.",
      },
      { property: "og:title", content: "À propos — Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Artisan cuisiniste en Charente-Maritime : savoir-faire, accompagnement sur mesure et finitions soignées.",
      },
    ],
  }),
  component: AProposPage,
});

const valeurs = [
  {
    label: "POURQUOI NOUS ?",
    title: "Fabrication maîtrisée",
    text: "Choisir un cuisiniste local est la garantie d'un accompagnement personnalisé. Notre objectif est de créer une cuisine esthétique, pratique et durable.",
  },
  {
    label: "SUR MESURE",
    title: "Dessiné pour votre pièce",
    text: "Chez Cuisines Milo, nous concevons chaque cuisine sur mesure en tenant compte de votre espace, de vos habitudes et de votre style de vie.",
  },
  {
    label: "Accompagnement",
    title: "Un interlocuteur du début à la fin",
    text: "De la première prise de contact à la pose finale, vous avez un seul et même contact. Mesure, conception, choix des matériaux, installation : chaque étape est coordonnée avec rigueur.",
  },
];

function AProposPage() {
  return (
    <>
      <Section>
        <SectionLabel>À propos</SectionLabel>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Cuisines Milo, cuisiniste artisan à Royan
        </h1>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          Basée en Charente-Maritime, Cuisines Milo conçoit et pose des cuisines
          et des dressings sur mesure pour les particuliers. Notre approche est
          simple : écouter vos besoins, étudier votre espace, puis proposer une
          solution technique et esthétique qui vous ressemble.
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Nous travaillons en exclusivité avec le fabricant italien Armony
          Cucine, ce qui nous permet de vous offrir un large choix de
          finitions, de matériaux et de configurations. Chaque projet est ensuite
          adapté à vos volumes et à votre budget.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-5 md:grid-cols-3">
          {valeurs.map((v) => (
            <div
              key={v.label}
              className="p-6"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {v.label}
              </p>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bordered>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionTitle>Notre méthode</SectionTitle>
            <ol className="mt-6 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-hairline border-border text-sm font-medium text-foreground">
                  1
                </span>
                <div>
                  <p className="font-medium text-foreground">Prise de contact</p>
                  <p className="text-sm text-muted-foreground">
                    Vous nous décrivez votre projet, votre espace et vos envies.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-hairline border-border text-sm font-medium text-foreground">
                  2
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    Visite et mesures
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nous nous déplaçons sur la zone de Royan et de
                    Charente-Maritime pour prendre les mesures et affiner le
                    besoin.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-hairline border-border text-sm font-medium text-foreground">
                  3
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    Conception et devis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Nous vous proposons un plan détaillé, un choix de matériaux
                    et un devis clair.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-hairline border-border text-sm font-medium text-foreground">
                  4
                </span>
                <div>
                  <p className="font-medium text-foreground">Fabrication et pose</p>
                  <p className="text-sm text-muted-foreground">
                    Vos éléments sont fabriqués sur mesure, puis posés avec
                    soin par nos équipes.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="rounded-xl border-hairline border-border p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Zone d'intervention
            </p>
            <p className="mt-4 text-foreground">
              Nous intervenons principalement autour de Royan et dans toute la
              Charente-Maritime : Saint-Palais-sur-Mer, Vaux-sur-Mer, Saujon,
              Meschers-sur-Gironde, La Tremblade et environs.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Un projet en dehors de cette zone ? Contactez-nous pour en
              discuter.
            </p>
          </div>
        </div>
      </Section>

      <Section bordered>
        <div className="rounded-xl border-hairline border-border p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            Parlons de votre projet
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Vous envisagez une nouvelle cuisine ou un dressing sur mesure ?
            Échangeons ensemble pour étudier la faisabilité de votre projet.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
