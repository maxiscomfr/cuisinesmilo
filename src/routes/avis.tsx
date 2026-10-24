import { createFileRoute, Link } from "@tanstack/react-router";

import { Section, SectionLabel } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion/Reveal";
import { GOOGLE_PROFILE_URL } from "@/lib/reviews-config";

const OG_IMAGE =
  "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Laisser un avis | Cuisines Milo, cuisiniste à Royan" },
      {
        name: "description",
        content:
          "Vous avez fait installer une cuisine ou un dressing par Cuisines Milo ? Partagez votre expérience sur Google en 2 minutes : votre avis aide les futurs clients.",
      },
      { property: "og:title", content: "Laisser un avis | Cuisines Milo" },
      {
        property: "og:description",
        content: "Partagez votre expérience avec Cuisines Milo sur Google en 2 minutes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/avis" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/avis" }],
  }),
  component: AvisPage,
});

const etapes = [
  {
    titre: "Ouvrez notre fiche Google",
    texte: "Le bouton ci-dessous vous amène directement sur la fiche de Cuisines Milo.",
  },
  {
    titre: "Touchez « Rédiger un avis »",
    texte: "Vous devez être connecté à votre compte Google (le même que sur votre téléphone).",
  },
  {
    titre: "Notez et racontez en deux phrases",
    texte:
      "Ce qui vous a plu, le suivi du projet, la pose. Quelques mots suffisent, une photo de votre cuisine est un plus.",
  },
];

function AvisPage() {
  return (
    <>
      <Section>
        <SectionLabel>Votre avis compte</SectionLabel>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Vous avez fait appel à Cuisines Milo ? Dites-nous ce que vous en avez pensé
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Pour choisir un cuisiniste, on lit les avis des autres clients. Le vôtre aide les
          prochaines familles à se décider, et nous aide à nous améliorer. Cela prend deux minutes.
        </p>
        <div className="mt-8">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90"
          >
            Ouvrir la fiche Google et laisser un avis
          </a>
        </div>
      </Section>

      <Section bordered>
        <div className="grid gap-5 md:grid-cols-3">
          {etapes.map((e, i) => (
            <Reveal key={e.titre} delay={i * 0.08}>
              <div className="h-full rounded-xl border-hairline border-border p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Étape {i + 1}</p>
                <h2 className="mt-3 text-lg font-medium text-foreground">{e.titre}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{e.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Un souci avec votre projet ? Écrivez-nous d'abord à{" "}
          <a
            href="mailto:contact@cuisinesmilo.com"
            className="font-medium text-foreground underline underline-offset-4"
          >
            contact@cuisinesmilo.com
          </a>{" "}
          ou via la page{" "}
          <Link to="/contact" className="font-medium text-foreground underline underline-offset-4">
            contact
          </Link>
          , nous le réglerons.
        </p>
      </Section>
    </>
  );
}
