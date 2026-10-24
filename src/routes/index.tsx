import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/da/hero.webp";
import salon from "@/assets/da/salon.webp";
import pierre from "@/assets/da/pierre.webp";
import dressing from "@/assets/da/dressing.webp";
import ilotVertical from "@/assets/da/ilot-vertical.webp";
import detailChene from "@/assets/da/detail-chene.webp";
import detailCuivre from "@/assets/da/detail-cuivre.webp";
import plafond from "@/assets/da/plafond.webp";
import logoAsset from "@/assets/logo-cuisines-milo.png.asset.json";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { HomeGallery } from "@/components/site/HomeGallery";
import { AvisSection } from "@/components/site/AvisSection";
import { Reveal } from "@/components/site/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/site/motion/Stagger";
import { ParallaxImage } from "@/components/site/motion/ParallaxImage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuisiniste à Royan | Cuisines sur mesure – Cuisines Milo" },
      {
        name: "description",
        content:
          "Cuisiniste à Royan (17200) : cuisines et dressings sur mesure conçus et posés en Charente-Maritime. Showroom rue des Cerisiers, devis gratuit.",
      },
      { property: "og:title", content: "Cuisiniste à Royan | Cuisines sur mesure – Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Cuisiniste à Royan (17200) : cuisines et dressings sur mesure conçus et posés en Charente-Maritime. Showroom rue des Cerisiers, devis gratuit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "@id": "https://cuisinesmilo.com/#entreprise",
          name: "Cuisines Milo",
          description:
            "Cuisiniste à Royan : cuisines et dressings sur mesure, conçus, fabriqués et posés en Charente-Maritime.",
          url: "https://cuisinesmilo.com/",
          logo: `https://cuisinesmilo.com${logoAsset.url}`,
          image:
            "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg",
          telephone: "+33546384494",
          email: "contact@cuisinesmilo.com",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "38 rue des Cerisiers",
            addressLocality: "Royan",
            addressRegion: "Charente-Maritime",
            postalCode: "17200",
            addressCountry: "FR",
          },
          areaServed: [
            "Royan",
            "Vaux-sur-Mer",
            "Saint-Palais-sur-Mer",
            "Saint-Georges-de-Didonne",
            "Meschers-sur-Gironde",
            "Saujon",
            "La Tremblade",
            "Charente-Maritime",
          ].map((name) => ({ "@type": "Place", name })),
          knowsAbout: ["cuisine sur mesure", "cuisine équipée", "îlot central", "dressing sur mesure", "placard sur mesure"],
          brand: { "@type": "Brand", name: "Armony Cucine" },
          sameAs: [
            "https://share.google/kXkOk2kBJXgKlXBuW",
            "https://www.instagram.com/cuisinesmilo/",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const piliers = [
  {
    n: "01",
    title: "Un interlocuteur unique",
    text: "La même personne prend vos mesures, dessine votre plan, suit la fabrication et coordonne la pose.",
  },
  {
    n: "02",
    title: "Sur mesure, vraiment",
    text: "Chaque cuisine et chaque dressing est dessiné selon votre espace, vos habitudes et votre style de vie.",
  },
  {
    n: "03",
    title: "Design italien, pose locale",
    text: "Des cuisines Armony Cucine fabriquées en Italie, adaptées et installées par nos soins à Royan et en Charente-Maritime.",
  },
];

const etapes = [
  { n: "I", title: "Premier échange", text: "Au showroom ou par téléphone, pour comprendre votre projet." },
  { n: "II", title: "Visite et mesures", text: "Nous venons chez vous prendre des mesures précises." },
  { n: "III", title: "Plan et devis", text: "Plan détaillé, choix des matériaux, devis clair, gratuit et sans engagement." },
  { n: "IV", title: "Fabrication et pose", text: "Fabrication sur mesure, puis pose soignée par nos équipes." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <ParallaxImage className="absolute inset-0" kenBurns speed={0.1}>
          <img
            src={heroKitchen}
            alt="Cuisine italienne Armony, îlot en noyer et plan crème — Cuisines Milo, cuisiniste à Royan"
            fetchPriority="high"
            decoding="async"
            width={2000}
            height={1500}
            className="h-full w-full object-cover"
          />
        </ParallaxImage>
        <div aria-hidden className="absolute inset-0 bg-brown/45" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/75 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-10 md:pb-24">
          <Stagger stagger={0.12}>
            <StaggerItem y={16}>
              <p className="eyebrow text-sand">Cuisiniste à Royan · Charente-Maritime</p>
            </StaggerItem>
            <StaggerItem y={20}>
              <h1 className="font-serif mt-6 max-w-4xl text-5xl leading-[0.98] text-cream md:text-8xl">
                Cuisiniste à Royan : cuisines et dressings sur mesure
              </h1>
            </StaggerItem>
            <StaggerItem y={20}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
                Cuisines Milo conçoit et pose vos cuisines et dressings sur mesure partout en
                Charente-Maritime : matériaux nobles, finitions soignées, design italien.
              </p>
            </StaggerItem>
            <StaggerItem y={20}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="eyebrow inline-flex min-h-12 items-center justify-center bg-cream px-8 py-4 text-brown transition-colors duration-200 hover:bg-tan"
                >
                  Demander mon devis gratuit
                </Link>
                <Link
                  to="/rendez-vous"
                  className="eyebrow inline-flex min-h-12 items-center justify-center border border-cream/70 px-8 py-4 text-cream transition-colors duration-200 hover:bg-cream hover:text-brown"
                >
                  Prendre rendez-vous au showroom
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* PROMESSE */}
      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionLabel>Cuisines Milo · Royan</SectionLabel>
            <span className="rule-short mt-6" aria-hidden />
            <h2 className="font-serif mt-8 text-4xl leading-[1.02] text-foreground md:text-6xl">
              La cuisine est la pièce où la maison vit. Elle mérite mieux que du standard.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Notre showroom du 38 rue des Cerisiers vous accueille du lundi au samedi, sur rendez-vous,
              pour voir et toucher les façades, les plans de travail et les finitions avant de vous décider.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Choisir un cuisiniste local, c'est avoir un seul interlocuteur du début à la fin. Pas de
              sous-traitance anonyme, pas de mauvaise surprise le jour de l'installation.
            </p>
          </Reveal>
        </div>
        <Stagger className="mt-20 grid gap-10 border-t border-sand pt-12 md:grid-cols-3 md:gap-12" stagger={0.12}>
          {piliers.map((r) => (
            <StaggerItem key={r.n} className="h-full">
              <p className="font-serif text-5xl text-tan">{r.n}</p>
              <h3 className="font-serif mt-4 text-3xl text-foreground">{r.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{r.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ARMONY */}
      <section className="bg-brown text-cream">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[680px]">
            <img
              src={pierre}
              alt="Cuisine Armony en finitions brun profond et pierre, îlot central"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
            <Reveal>
              <p className="eyebrow text-tan">Armony Cucine</p>
              <h2 className="font-serif mt-5 text-4xl leading-[1.02] text-cream md:text-6xl">
                Le design italien, la pose d’un artisan de Royan
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-sand">
                Nos cuisines sont fabriquées en Italie par Armony Cucine, puis adaptées et posées par nos soins.
                Vous profitez de la qualité d’une fabrication italienne, avec le suivi d’un cuisiniste installé à Royan.
              </p>
              <Link
                to="/cuisines"
                className="eyebrow mt-10 inline-flex min-h-12 w-fit items-center border border-cream/70 px-8 py-4 text-cream transition-colors hover:bg-cream hover:text-brown"
              >
                Découvrir les 30 modèles
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MATIÈRES */}
      <Section>
        <Reveal>
          <SectionLabel>Matières et finitions</SectionLabel>
          <SectionTitle>Des matériaux qui vieillissent bien, même face à l’océan</SectionTitle>
        </Reveal>
        <Stagger className="mt-14 grid gap-4 md:grid-cols-12" stagger={0.1}>
          <StaggerItem className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={ilotVertical} alt="Îlot en bronze satiné" loading="lazy" decoding="async" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </StaggerItem>
          <StaggerItem className="md:col-span-4">
            <div className="flex h-full flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={detailChene} alt="Panneau en chêne et vase en céramique" loading="lazy" decoding="async" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="relative flex-1 overflow-hidden bg-brown p-8 text-cream">
                <p className="eyebrow text-tan">Nos engagements</p>
                <p className="font-serif mt-4 text-3xl leading-tight">Façades laquées ou bois, céramique, quartz, quincaillerie de qualité.</p>
              </div>
            </div>
          </StaggerItem>
          <StaggerItem className="md:col-span-3">
            <div className="relative h-full min-h-[320px] overflow-hidden">
              <img src={detailCuivre} alt="Détail d’un chant cuivré" loading="lazy" decoding="async" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </StaggerItem>
        </Stagger>
        <Reveal>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Façades laquées ou bois, plans de travail en céramique, quartz ou stratifié, quincaillerie de qualité et
            électroménager encastré : nous choisissons avec vous ce qui convient à votre maison, à vos habitudes et à votre budget.
          </p>
        </Reveal>
      </Section>

      {/* DRESSINGS */}
      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:px-10 md:py-28">
          <Reveal className="md:col-span-5">
            <SectionLabel>Dressings et placards</SectionLabel>
            <h2 className="font-serif mt-4 text-4xl leading-[1.02] text-foreground md:text-6xl">Le même soin, pour chaque centimètre</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Cuisines Milo conçoit aussi vos dressings, placards et rangements sur mesure : sous pente, sous escalier, en angle ou en enfilade.
            </p>
            <Link
              to="/realisations/dressings"
              className="eyebrow mt-10 inline-flex min-h-12 w-fit items-center border border-brown px-8 py-4 text-brown transition-colors hover:bg-brown hover:text-cream"
            >
              Voir les dressings
            </Link>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={dressing} alt="Dressing sur mesure en bois, penderies et tiroirs" loading="lazy" decoding="async" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESSUS */}
      <Section>
        <Reveal>
          <SectionLabel>Votre projet</SectionLabel>
          <SectionTitle>Du premier croquis à la pose</SectionTitle>
        </Reveal>
        <Stagger className="mt-14 grid gap-px bg-sand md:grid-cols-4" stagger={0.1}>
          {etapes.map((e) => (
            <StaggerItem key={e.n} className="h-full">
              <div className="h-full bg-cream p-8">
                <p className="font-serif text-5xl text-tan">{e.n}</p>
                <h3 className="font-serif mt-6 text-3xl text-foreground">{e.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* APERÇU RÉALISATIONS */}
      <HomeGallery />

      {/* AVIS */}
      <AvisSection />

      {/* RÉFÉRENCEMENT : zone d'intervention, budget */}
      <Section bordered>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <SectionLabel>Bon à savoir</SectionLabel>
            <h2 className="font-serif mt-4 text-4xl leading-[1.02] text-foreground md:text-5xl">Questions fréquentes</h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.1}>
            <div className="space-y-10 text-lg leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-serif text-3xl text-foreground">Où intervenons-nous ?</h3>
                <p className="mt-3">Nous posons des cuisines à Royan et dans tout le pays royannais : Vaux-sur-Mer, Saint-Palais-sur-Mer, Saint-Georges-de-Didonne, Meschers-sur-Gironde, Saujon, La Tremblade, Breuillet, Médis, Arvert, et plus largement en Charente-Maritime. Un projet un peu plus loin ? Appelez-nous, nous étudions chaque demande.</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-foreground">Combien coûte une cuisine sur mesure à Royan ?</h3>
                <p className="mt-3">Le prix dépend de la taille, des façades, du plan de travail et de l'électroménager choisis. Après la visite technique, nous vous remettons un devis détaillé poste par poste, pour savoir exactement ce que vous payez. L'étude et le devis sont gratuits.</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-foreground">Pour quels intérieurs ?</h3>
                <p className="mt-3">Maison de ville dans le centre de Royan, villa à Vaux-sur-Mer ou résidence secondaire à Saint-Palais-sur-Mer : cuisine ouverte avec îlot central, cuisine en L optimisée ou rénovation complète, chaque intérieur a ses contraintes et nous les adaptons à vos volumes.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA final */}
      <section className="relative isolate overflow-hidden bg-brown text-cream">
        <img src={plafond} alt="" aria-hidden loading="lazy" decoding="async" width={1600} height={1200} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
          <Reveal>
            <p className="eyebrow text-tan">Votre projet</p>
            <h2 className="font-serif mt-6 text-5xl leading-[1] text-cream md:text-7xl">
              Parlons de votre cuisine
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-sand">
              Décrivez-nous votre espace et vos envies : votre cuisiniste à Royan vous rappelle pour affiner
              votre devis sur mesure, gratuit et sans engagement.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="eyebrow inline-flex min-h-12 items-center justify-center bg-cream px-8 py-4 text-brown transition-colors hover:bg-tan"
              >
                Demander mon devis gratuit
              </Link>
              <a
                href="tel:+33546384494"
                className="eyebrow inline-flex min-h-12 items-center justify-center border border-cream/70 px-8 py-4 text-cream transition-colors hover:bg-cream hover:text-brown"
              >
                05 46 38 44 94
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
