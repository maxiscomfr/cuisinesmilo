import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

import y7_1 from "@/assets/yota-07/yota07-1.jpg.asset.json";
import y7_2 from "@/assets/yota-07/yota07-2.jpg.asset.json";
import y7_4 from "@/assets/yota-07/yota07-4.jpg.asset.json";
import y7_5 from "@/assets/yota-07/yota07-5.jpg.asset.json";
import y7_6 from "@/assets/yota-07/yota07-6.jpg.asset.json";
import y7_7 from "@/assets/yota-07/yota07-7.jpg.asset.json";

// Portrait 06 — photos réelles du catalogue fabricant.
const yotaPhotos = [y6_1.url, y6_2.url, y6_3.url, y6_4.url, y6_5.url, y6_6.url];

import rr1 from "@/assets/rho-riga/rho-riga-1.jpg.asset.json";
import rr2 from "@/assets/rho-riga/rho-riga-2.jpg.asset.json";
import rr3 from "@/assets/rho-riga/rho-riga-3.jpg.asset.json";
import rr4 from "@/assets/rho-riga/rho-riga-4.jpg.asset.json";
import rr5 from "@/assets/rho-riga/rho-riga-5.jpg.asset.json";
import rr6 from "@/assets/rho-riga/rho-riga-6.jpg.asset.json";
import rr7 from "@/assets/rho-riga/rho-riga-7.jpg.asset.json";

// Portrait 07 — photos réelles du catalogue fabricant.
const yota2Photos = [y7_1.url, y7_2.url, y7_4.url, y7_5.url, y7_6.url, y7_7.url];

import rrj1 from "@/assets/rho-rho-jit/rho-rho-jit-1.jpg.asset.json";
import rrj2 from "@/assets/rho-rho-jit/rho-rho-jit-2.jpg.asset.json";
import rrj3 from "@/assets/rho-rho-jit/rho-rho-jit-3.jpg.asset.json";
import rrj4 from "@/assets/rho-rho-jit/rho-rho-jit-4.jpg.asset.json";
import rrj5 from "@/assets/rho-rho-jit/rho-rho-jit-5.jpg.asset.json";

// Portrait 08 — photos réelles du catalogue fabricant.
const rhoRigaPhotos = [rr1.url, rr2.url, rr3.url, rr4.url, rr5.url, rr6.url, rr7.url];

import k1 from "@/assets/kappa/kappa-1.jpg.asset.json";
import k2 from "@/assets/kappa/kappa-2.jpg.asset.json";
import k3 from "@/assets/kappa/kappa-3.jpg.asset.json";
import k4 from "@/assets/kappa/kappa-4.jpg.asset.json";

// Portrait 10 — photos réelles du catalogue fabricant.
const kappaPhotos = [k1.url, k2.url, k3.url, k4.url];

import t1 from "@/assets/tau/tau-1.jpg.asset.json";
import t2 from "@/assets/tau/tau-2.jpg.asset.json";
import t3 from "@/assets/tau/tau-3.jpg.asset.json";
import t4 from "@/assets/tau/tau-4.jpg.asset.json";
import t5 from "@/assets/tau/tau-5.jpg.asset.json";
import tv1 from "@/assets/tau/tau-v1.jpg.asset.json";
import tv2 from "@/assets/tau/tau-v2.jpg.asset.json";
import tv3 from "@/assets/tau/tau-v3.jpg.asset.json";
import tv4 from "@/assets/tau/tau-v4.jpg.asset.json";

// Portrait 11 — photos réelles du catalogue fabricant.
const tauPhotos = [t1.url, t2.url, t3.url, t4.url, t5.url, tv1.url, tv2.url, tv3.url, tv4.url];

// Portrait 09 — photos réelles du catalogue fabricant.
const rhoRhoJitPhotos = [rrj1.url, rrj2.url, rrj3.url, rrj4.url, rrj5.url];

// Structure prête à recevoir les vraies photos : ajouter les imports d'assets
// dans `photos` et retirer `placeholders`.
import y3_1 from "@/assets/yota3/yota3-1.jpg.asset.json";
import y3_2 from "@/assets/yota3/yota3-2.jpg.asset.json";
import y3_3 from "@/assets/yota3/yota3-3.jpg.asset.json";
import y3_4 from "@/assets/yota3/yota3-4.jpg.asset.json";
import y3_5 from "@/assets/yota3/yota3-5.jpg.asset.json";
import y3_6 from "@/assets/yota3/yota3-6.jpg.asset.json";
import y3_7 from "@/assets/yota3/yota3-7.jpg.asset.json";
import y3_8 from "@/assets/yota3/yota3-8.jpg.asset.json";
import y3_9 from "@/assets/yota3/yota3-9.jpg.asset.json";
import y3_10 from "@/assets/yota3/yota3-10.jpg.asset.json";

const yota3Photos = [y3_1.url, y3_2.url, y3_3.url, y3_4.url, y3_5.url, y3_6.url, y3_7.url, y3_8.url, y3_9.url, y3_10.url];

import y4_1 from "@/assets/yota4/yota4-1.jpg.asset.json";
import y4_2 from "@/assets/yota4/yota4-2.jpg.asset.json";
import y4_3 from "@/assets/yota4/yota4-3.jpg.asset.json";
import y4_4 from "@/assets/yota4/yota4-4.jpg.asset.json";
import y4_5 from "@/assets/yota4/yota4-5.jpg.asset.json";
import y4_6 from "@/assets/yota4/yota4-6.jpg.asset.json";

const yota4Photos = [y4_1.url, y4_2.url, y4_3.url, y4_4.url, y4_5.url, y4_6.url];

import kr14_1 from "@/assets/kappa-rho/kappa-rho-1.jpg.asset.json";
import kr14_2 from "@/assets/kappa-rho/kappa-rho-2.jpg.asset.json";
import kr14_3 from "@/assets/kappa-rho/kappa-rho-3.jpg.asset.json";
import kr14_4 from "@/assets/kappa-rho/kappa-rho-4.jpg.asset.json";
import kr14_5 from "@/assets/kappa-rho/kappa-rho-5.jpg.asset.json";
import kr14_6 from "@/assets/kappa-rho/kappa-rho-6.jpg.asset.json";
import kr14_7 from "@/assets/kappa-rho/kappa-rho-7.jpg.asset.json";

const kappaRho14Photos = [kr14_1.url, kr14_2.url, kr14_3.url, kr14_4.url, kr14_5.url, kr14_6.url, kr14_7.url];

import ry15_1 from "@/assets/rho-yota/rho-yota-1.jpg.asset.json";
import ry15_2 from "@/assets/rho-yota/rho-yota-2.jpg.asset.json";
import ry15_3 from "@/assets/rho-yota/rho-yota-3.jpg.asset.json";
import ry15_4 from "@/assets/rho-yota/rho-yota-4.jpg.asset.json";

const rhoYotaPhotos = [ry15_1.url, ry15_2.url, ry15_3.url, ry15_4.url];

import kr16_1 from "@/assets/kappa-rho-2/1.jpg.asset.json";
import kr16_2 from "@/assets/kappa-rho-2/2.jpg.asset.json";
import kr16_3 from "@/assets/kappa-rho-2/3.jpg.asset.json";
import kr16_4 from "@/assets/kappa-rho-2/4.jpg.asset.json";
import kr16_5 from "@/assets/kappa-rho-2/5.jpg.asset.json";

const kappaRho2Photos = [kr16_1.url, kr16_2.url, kr16_3.url, kr16_4.url, kr16_5.url];

import k17_1 from "@/assets/kappa-17/1.jpg.asset.json";
import k17_2 from "@/assets/kappa-17/2.jpg.asset.json";
import k17_3 from "@/assets/kappa-17/3.jpg.asset.json";
import k17_4 from "@/assets/kappa-17/4.jpg.asset.json";
import k17_5 from "@/assets/kappa-17/5.jpg.asset.json";
import k17_6 from "@/assets/kappa-17/6.jpg.asset.json";
import k17_7 from "@/assets/kappa-17/7.jpg.asset.json";
import k17_8 from "@/assets/kappa-17/8.jpg.asset.json";

const kappa17Photos = [k17_1.url, k17_2.url, k17_3.url, k17_4.url, k17_5.url, k17_6.url, k17_7.url, k17_8.url];

import r18_1 from "@/assets/rho-18/1.jpg.asset.json";
import r18_2 from "@/assets/rho-18/2.jpg.asset.json";
import r18_3 from "@/assets/rho-18/3.jpg.asset.json";
import r18_4 from "@/assets/rho-18/4.jpg.asset.json";
import r18_5 from "@/assets/rho-18/5.jpg.asset.json";
import r18_6 from "@/assets/rho-18/6.jpg.asset.json";

const rho18Photos = [r18_1.url, r18_2.url, r18_3.url, r18_4.url, r18_5.url, r18_6.url];

import er19_1 from "@/assets/equa-rho-19/1.jpg.asset.json";
import er19_2 from "@/assets/equa-rho-19/2.jpg.asset.json";
import er19_3 from "@/assets/equa-rho-19/3.jpg.asset.json";
import er19_4 from "@/assets/equa-rho-19/4.jpg.asset.json";
import er19_5 from "@/assets/equa-rho-19/5.jpg.asset.json";
import er19_6 from "@/assets/equa-rho-19/6.jpg.asset.json";

const equaRho19Photos = [er19_1.url, er19_2.url, er19_3.url, er19_4.url, er19_5.url, er19_6.url];

import ek20_1 from "@/assets/equa-kappa-20/1.jpg.asset.json";
import ek20_2 from "@/assets/equa-kappa-20/2.jpg.asset.json";
import ek20_3 from "@/assets/equa-kappa-20/3.jpg.asset.json";
import ek20_4 from "@/assets/equa-kappa-20/4.jpg.asset.json";
import ek20_5 from "@/assets/equa-kappa-20/5.jpg.asset.json";
import ek20_6 from "@/assets/equa-kappa-20/6.jpg.asset.json";

const equaKappa20Photos = [ek20_1.url, ek20_2.url, ek20_3.url, ek20_4.url, ek20_5.url, ek20_6.url];

import q21_1 from "@/assets/quadro-21/1.jpg.asset.json";
import q21_2 from "@/assets/quadro-21/2.jpg.asset.json";
import q21_3 from "@/assets/quadro-21/3.jpg.asset.json";
import q21_4 from "@/assets/quadro-21/4.jpg.asset.json";
import q21_5 from "@/assets/quadro-21/5.jpg.asset.json";

const quadro21Photos = [q21_1.url, q21_2.url, q21_3.url, q21_4.url, q21_5.url];

import qsy22_1 from "@/assets/quadro-skyline-yota-22/1.jpg.asset.json";
import qsy22_2 from "@/assets/quadro-skyline-yota-22/2.jpg.asset.json";
import qsy22_3 from "@/assets/quadro-skyline-yota-22/3.jpg.asset.json";
import qsy22_4 from "@/assets/quadro-skyline-yota-22/4.jpg.asset.json";
import qsy22_5 from "@/assets/quadro-skyline-yota-22/5.jpg.asset.json";
import qsy22_6 from "@/assets/quadro-skyline-yota-22/6.jpg.asset.json";
import qsy22_7 from "@/assets/quadro-skyline-yota-22/7.jpg.asset.json";
import qsy22_8 from "@/assets/quadro-skyline-yota-22/8.jpg.asset.json";
import qsy22_9 from "@/assets/quadro-skyline-yota-22/9.jpg.asset.json";

const quadroSkylineYota22Photos = [
  qsy22_1.url, qsy22_2.url, qsy22_3.url, qsy22_4.url, qsy22_5.url,
  qsy22_6.url, qsy22_7.url, qsy22_8.url, qsy22_9.url,
];

import oqr23_1 from "@/assets/omicron-quadro-riga-23/1.jpg.asset.json";
import oqr23_2 from "@/assets/omicron-quadro-riga-23/2.jpg.asset.json";
import oqr23_3 from "@/assets/omicron-quadro-riga-23/3.jpg.asset.json";
import oqr23_4 from "@/assets/omicron-quadro-riga-23/4.jpg.asset.json";
import oqr23_5 from "@/assets/omicron-quadro-riga-23/5.jpg.asset.json";
import oqr23_6 from "@/assets/omicron-quadro-riga-23/6.jpg.asset.json";
import oqr23_7 from "@/assets/omicron-quadro-riga-23/7.jpg.asset.json";

const omicronQuadroRiga23Photos = [
  oqr23_1.url, oqr23_2.url, oqr23_3.url, oqr23_4.url, oqr23_5.url, oqr23_6.url, oqr23_7.url,
];

import dy24_1 from "@/assets/diamond-yota-24/1.jpg.asset.json";
import dy24_2 from "@/assets/diamond-yota-24/2.jpg.asset.json";
import dy24_3 from "@/assets/diamond-yota-24/3.jpg.asset.json";
import dy24_4 from "@/assets/diamond-yota-24/4.jpg.asset.json";
import dy24_5 from "@/assets/diamond-yota-24/5.jpg.asset.json";
import dy24_6 from "@/assets/diamond-yota-24/6.jpg.asset.json";
import dy24_7 from "@/assets/diamond-yota-24/7.jpg.asset.json";
import dy24_8 from "@/assets/diamond-yota-24/8.jpg.asset.json";

const diamondYota24Photos = [
  dy24_1.url, dy24_2.url, dy24_3.url, dy24_4.url, dy24_5.url, dy24_6.url, dy24_7.url, dy24_8.url,
];

import om25_1 from "@/assets/omicron-25/1.jpg.asset.json";
import om25_2 from "@/assets/omicron-25/2.jpg.asset.json";
import om25_3 from "@/assets/omicron-25/3.jpg.asset.json";
import om25_4 from "@/assets/omicron-25/4.jpg.asset.json";
import om25_5 from "@/assets/omicron-25/5.jpg.asset.json";

const omicron25Photos = [om25_1.url, om25_2.url, om25_3.url, om25_4.url, om25_5.url];

import dr26_1 from "@/assets/diamond-riga-26/1.jpg.asset.json";
import dr26_2 from "@/assets/diamond-riga-26/2.jpg.asset.json";
import dr26_3 from "@/assets/diamond-riga-26/3.jpg.asset.json";
import dr26_4 from "@/assets/diamond-riga-26/4.jpg.asset.json";
import dr26_5 from "@/assets/diamond-riga-26/5.jpg.asset.json";
import dr26_6 from "@/assets/diamond-riga-26/6.jpg.asset.json";

const diamondRiga26Photos = [dr26_1.url, dr26_2.url, dr26_3.url, dr26_4.url, dr26_5.url, dr26_6.url];

import syr27_1 from "@/assets/skyline-yota-riga-27/1.jpg.asset.json";
import syr27_2 from "@/assets/skyline-yota-riga-27/2.jpg.asset.json";
import syr27_3 from "@/assets/skyline-yota-riga-27/3.jpg.asset.json";
import syr27_4 from "@/assets/skyline-yota-riga-27/4.jpg.asset.json";
import syr27_5 from "@/assets/skyline-yota-riga-27/5.jpg.asset.json";
import syr27_6 from "@/assets/skyline-yota-riga-27/6.jpg.asset.json";

const skylineYotaRiga27Photos = [syr27_1.url, syr27_2.url, syr27_3.url, syr27_4.url, syr27_5.url, syr27_6.url];

import sy28_1 from "@/assets/skyline-yota-28/1.jpg.asset.json";
import sy28_2 from "@/assets/skyline-yota-28/2.jpg.asset.json";
import sy28_3 from "@/assets/skyline-yota-28/3.jpg.asset.json";
import sy28_4 from "@/assets/skyline-yota-28/4.jpg.asset.json";
import sy28_5 from "@/assets/skyline-yota-28/5.jpg.asset.json";
import sy28_6 from "@/assets/skyline-yota-28/6.jpg.asset.json";
import sy28_7 from "@/assets/skyline-yota-28/7.jpg.asset.json";

const skylineYota28Photos = [sy28_1.url, sy28_2.url, sy28_3.url, sy28_4.url, sy28_5.url, sy28_6.url, sy28_7.url];

import etro29_1 from "@/assets/etro-29/1.jpg.asset.json";
import etro29_2 from "@/assets/etro-29/2.jpg.asset.json";
import etro29_3 from "@/assets/etro-29/3.jpg.asset.json";
import etro29_4 from "@/assets/etro-29/4.jpg.asset.json";
import etro29_5 from "@/assets/etro-29/5.jpg.asset.json";

const etro29Photos = [etro29_1.url, etro29_2.url, etro29_3.url, etro29_4.url, etro29_5.url];

import etro30_1 from "@/assets/etro-30/1.jpg.asset.json";
import etro30_2 from "@/assets/etro-30/2.jpg.asset.json";
import etro30_3 from "@/assets/etro-30/3.jpg.asset.json";
import etro30_4 from "@/assets/etro-30/4.jpg.asset.json";

const etro30Photos = [etro30_1.url, etro30_2.url, etro30_3.url, etro30_4.url];

const nomsModeles: string[] = [];




const modelesFabricant: ModelGroup[] = [
  { modele: "System + Yota", photos: systemYotaPhotos },
  { modele: "System", photos: systemPhotos },
  { modele: "Rho + Kappa", photos: rhoKappaPhotos },
  { modele: "Rho Jit", photos: rhoJitPhotos },
  { modele: "Kappa + Rho Jit", photos: kappaRhoJitPhotos },
  { modele: "Yota", photos: yotaPhotos },
  { modele: "Yota 2", photos: yota2Photos },
  { modele: "Rho + Riga", photos: rhoRigaPhotos },
  { modele: "Rho + Rho Jit", photos: rhoRhoJitPhotos },
  { modele: "Kappa", photos: kappaPhotos },
  { modele: "Tau", photos: tauPhotos },
  { modele: "Yota 3", photos: yota3Photos },
  { modele: "Yota 4", photos: yota4Photos },
  { modele: "Kappa + Rho", photos: kappaRho14Photos },
  { modele: "Rho + Yota", photos: rhoYotaPhotos },
  { modele: "Kappa + Rho 2", photos: kappaRho2Photos },
  { modele: "Kappa 2", photos: kappa17Photos },
  { modele: "Rho", photos: rho18Photos },
  { modele: "Equa + Rho", photos: equaRho19Photos },
  { modele: "Equa + Kappa", photos: equaKappa20Photos },
  { modele: "Quadro", photos: quadro21Photos },
  { modele: "Quadro + Skyline + Yota", photos: quadroSkylineYota22Photos },
  { modele: "Omicron + Quadro + Riga", photos: omicronQuadroRiga23Photos },
  { modele: "Diamond + Yota", photos: diamondYota24Photos },
  { modele: "Omicron", photos: omicron25Photos },
  { modele: "Diamond + Riga", photos: diamondRiga26Photos },
  { modele: "Skyline + Yota + Riga", photos: skylineYotaRiga27Photos },
  { modele: "Skyline + Yota", photos: skylineYota28Photos },
  { modele: "Etro", photos: etro29Photos },
  { modele: "Etro 2", photos: etro30Photos },






  ...nomsModeles.map((modele, i) => ({
    modele,
    photos: [],
    placeholders: 2 + (i % 3),
  })),
];

const modelesTries = [...modelesFabricant].sort((a, b) =>
  a.modele.localeCompare(b.modele, "fr", { sensitivity: "base" }),
);

function CuisinesPage() {
  const [modeleSelectionne, setModeleSelectionne] = useState<string>("Tous");
  const groupesAffiches =
    modeleSelectionne === "Tous"
      ? modelesTries
      : modelesTries.filter((g) => g.modele === modeleSelectionne);

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
