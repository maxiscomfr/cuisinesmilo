import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { Reveal } from "@/components/site/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/site/motion/Stagger";

const faqItems = [
  {
    question: "Intervenez-vous uniquement sur Royan ?",
    answer:
      "Nous intervenons principalement à Royan et dans toute la Charente-Maritime : Saint-Palais-sur-Mer, Vaux-sur-Mer, Saujon, Meschers-sur-Gironde, La Tremblade et environs. Un projet en dehors de cette zone ? Contactez-nous pour en discuter.",
  },
  {
    question: "Faites-vous uniquement des cuisines ?",
    answer:
      "Non. En plus des cuisines sur mesure, nous concevons et posons des dressings et placards sur mesure. Nous ne réalisons pas de salles de bains : c'est notre spécialité de cuisiniste.",
  },
  {
    question: "Travaillez-vous avec quel fabricant ?",
    answer:
      "Nos cuisines sont fabriquées par un partenaire italien reconnu, puis adaptées et posées sur mesure par nos soins. Vous bénéficiez ainsi de la qualité d'une fabrication italienne et du suivi d'un artisan local.",
  },
  {
    question: "Comment se déroule un projet, du premier contact à la pose ?",
    answer:
      "Nous commençons par un échange pour comprendre votre projet. Nous nous déplaçons ensuite chez vous pour prendre les mesures, puis nous vous proposons un plan détaillé, un choix de matériaux et un devis clair. Après validation, vos éléments sont fabriqués sur mesure puis posés avec soin.",
  },
  {
    question: "Le premier rendez-vous et le devis sont-ils payants ?",
    answer:
      "Le premier échange et l'étude de votre projet sont gratuits et sans engagement. Nous nous déplaçons sur rendez-vous, du lundi au samedi.",
  },
  {
    question: "Quel est le délai moyen pour une cuisine sur mesure ?",
    answer:
      "Le délai dépend de la configuration, des matériaux choisis et de la période de l'année. Le délai précis de fabrication et de pose vous est annoncé dès le devis, pour que vous puissiez organiser votre chantier sereinement.",
  },
];

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
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/a-propos" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/a-propos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
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
    label: "Artisanat",
    title: "Qualité et finitions soignées",
    text: "Cuisines Milo sélectionne des matériaux durables et des finitions soignées. Le résultat : des installations solides, belles et pensées pour durer.",
  },
  {
    label: "Accompagnement",
    title: "Un interlocuteur du début à la fin",
    text: "De la première prise de contact à la pose finale, vous avez un seul et même contact. Mesure, conception, choix des matériaux, installation : chaque étape est coordonnée avec rigueur.",
  },
];

function AProposPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
          Nous vous proposons un large choix de finitions, de matériaux et de
          configurations. Chaque projet est ensuite adapté à vos volumes et à
          votre budget.
        </p>
      </Section>

      <Section bordered>
        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.12}>
          {valeurs.map((v) => (
            <StaggerItem key={v.label} className="h-full">
              <div
                className="h-full rounded-xl border-hairline border-border p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {v.label}
                </p>
                <h3 className="mt-3 text-lg font-medium text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section bordered>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
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
          </Reveal>
          <Reveal delay={0.15}>
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
          </Reveal>
        </div>
      </Section>

      <Section bordered>
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Questions fréquentes</SectionTitle>
          <p className="mt-3 text-sm text-muted-foreground">
            Tout savoir sur nos cuisines et dressings sur mesure, autour de Royan
            et en Charente-Maritime.
          </p>
          <div className="mt-8 space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={item.question}
                className="rounded-xl border-hairline border-border"
              >
                <button
                  type="button"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq((v) => (v === i ? null : i))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground md:text-base"
                >
                  {item.question}
                  <span aria-hidden className="shrink-0 text-muted-foreground">
                {openFaq === i ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="reponse"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="border-hairline border-t border-border px-5 py-4 text-sm text-muted-foreground">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
