import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { CataloguePlaceholder } from "@/components/site/CataloguePlaceholder";
import { ModelGallery, type ModelGroup } from "@/components/site/ModelGallery";
import yota1 from "@/assets/yota/system-yota-1.jpg.asset.json";
import yota2 from "@/assets/yota/system-yota-2.jpg.asset.json";
import yota3 from "@/assets/yota/system-yota-3.jpg.asset.json";
import yota4 from "@/assets/yota/system-yota-4.jpg.asset.json";
import yota5 from "@/assets/yota/system-yota-5.jpg.asset.json";
import yota6 from "@/assets/yota/system-yota-6.jpg.asset.json";
import yota7 from "@/assets/yota/system-yota-7.jpg.asset.json";
import yota8 from "@/assets/yota/system-yota-8.jpg.asset.json";
import yota9 from "@/assets/yota/system-yota-9.jpg.asset.json";
import sys1 from "@/assets/system/system-1.jpg.asset.json";
import sys2 from "@/assets/system/system-2.jpg.asset.json";
import sys4 from "@/assets/system/system-4.jpg.asset.json";
import sys5 from "@/assets/system/system-5.jpg.asset.json";
import sys6 from "@/assets/system/system-6.jpg.asset.json";
import sys7 from "@/assets/system/system-7.jpg.asset.json";
import sys8 from "@/assets/system/system-8.jpg.asset.json";
import sys9 from "@/assets/system/system-9.jpg.asset.json";
import sys10 from "@/assets/system/system-10.jpg.asset.json";
import sys11 from "@/assets/system/system-11.jpg.asset.json";


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

// Portrait 01 — photos réelles du catalogue fabricant.
const systemYotaPhotos = [
  yota1.url,
  yota2.url,
  yota3.url,
  yota4.url,
  yota5.url,
  yota6.url,
  yota7.url,
  yota8.url,
  yota9.url,
];

import rk1 from "@/assets/rho-kappa/rho-kappa-1.jpg.asset.json";
import rk2 from "@/assets/rho-kappa/rho-kappa-2.jpg.asset.json";
import rk3 from "@/assets/rho-kappa/rho-kappa-3.jpg.asset.json";
import rk4 from "@/assets/rho-kappa/rho-kappa-4.jpg.asset.json";
import rk5 from "@/assets/rho-kappa/rho-kappa-5.jpg.asset.json";
import rk6 from "@/assets/rho-kappa/rho-kappa-6.jpg.asset.json";

// Portrait 02 — photos réelles du catalogue fabricant.
const systemPhotos = [
  sys1.url,
  sys2.url,
  sys4.url,
  sys5.url,
  sys6.url,
  sys7.url,
  sys8.url,
  sys9.url,
  sys10.url,
  sys11.url,
];

import rj1 from "@/assets/rho-jit/rho-jit-1.jpg.asset.json";
import rj2 from "@/assets/rho-jit/rho-jit-2.jpg.asset.json";
import rj3 from "@/assets/rho-jit/rho-jit-3.jpg.asset.json";
import rj4 from "@/assets/rho-jit/rho-jit-4.jpg.asset.json";
import rj5 from "@/assets/rho-jit/rho-jit-5.jpg.asset.json";
import rj6 from "@/assets/rho-jit/rho-jit-6.jpg.asset.json";
import rj7 from "@/assets/rho-jit/rho-jit-7.jpg.asset.json";

// Portrait 03 — photos réelles du catalogue fabricant.
const rhoKappaPhotos = [rk1.url, rk2.url, rk3.url, rk4.url, rk5.url, rk6.url];

import krj1 from "@/assets/kappa-rho-jit/kappa-rho-jit-1.jpg.asset.json";
import krj2 from "@/assets/kappa-rho-jit/kappa-rho-jit-2.jpg.asset.json";
import krj3 from "@/assets/kappa-rho-jit/kappa-rho-jit-3.jpg.asset.json";
import krj4 from "@/assets/kappa-rho-jit/kappa-rho-jit-4.jpg.asset.json";
import krj5 from "@/assets/kappa-rho-jit/kappa-rho-jit-5.jpg.asset.json";
import krj6 from "@/assets/kappa-rho-jit/kappa-rho-jit-6.jpg.asset.json";

// Portrait 04 — photos réelles du catalogue fabricant.
const rhoJitPhotos = [rj1.url, rj2.url, rj3.url, rj4.url, rj5.url, rj6.url, rj7.url];

import y6_1 from "@/assets/yota-06/yota06-1.jpg.asset.json";
import y6_2 from "@/assets/yota-06/yota06-2.jpg.asset.json";
import y6_3 from "@/assets/yota-06/yota06-3.jpg.asset.json";
import y6_4 from "@/assets/yota-06/yota06-4.jpg.asset.json";
import y6_5 from "@/assets/yota-06/yota06-5.jpg.asset.json";
import y6_6 from "@/assets/yota-06/yota06-6.jpg.asset.json";

// Portrait 05 — photos réelles du catalogue fabricant.
const kappaRhoJitPhotos = [krj1.url, krj2.url, krj3.url, krj4.url, krj5.url, krj6.url];

// Portrait 06 — photos réelles du catalogue fabricant.
const yotaPhotos = [y6_1.url, y6_2.url, y6_3.url, y6_4.url, y6_5.url, y6_6.url];

// Structure prête à recevoir les vraies photos : ajouter les imports d'assets
// dans `photos` et retirer `placeholders`.
const nomsModeles = [
  "Skyline",
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
];

const modelesFabricant: ModelGroup[] = [
  { modele: "System + Yota", photos: systemYotaPhotos },
  { modele: "System", photos: systemPhotos },
  { modele: "Rho + Kappa", photos: rhoKappaPhotos },
  { modele: "Rho Jit", photos: rhoJitPhotos },
  { modele: "Kappa + Rho Jit", photos: kappaRhoJitPhotos },
  { modele: "Yota", photos: yotaPhotos },
  ...nomsModeles.map((modele, i) => ({
    modele,
    photos: [],
    placeholders: 2 + (i % 3),
  })),
];




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

      <Section bordered>
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


    </>
  );
}
