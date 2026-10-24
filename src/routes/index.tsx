import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchenAsset from "@/assets/hero-cuisine.jpg.asset.json";
import logoAsset from "@/assets/logo-cuisines-milo.png.asset.json";

const heroKitchen = heroKitchenAsset.url;
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
        }),
      },
    ],
  }),
  component: Home,
});

const reassurances = [
  {
    label: "POURQUOI NOUS ?",
    title: "Cuisiniste local à Royan",
    text: "Choisir un cuisiniste à Royan, c'est l'assurance d'un accompagnement personnalisé, d'un interlocuteur unique et d'une cuisine esthétique, pratique et durable.",
  },
  {
    label: "SUR MESURE.",
    title: "Cuisines et dressings sur mesure",
    text: "Chez Cuisines Milo, chaque cuisine et chaque dressing sur mesure est dessiné selon votre espace, vos habitudes et votre style de vie.",
  },
  {
    label: "NOS RÉALISATIONS",
    title: "Du croquis à la pose en Charente-Maritime",
    text: "Découvrez des exemples de cuisines et de dressings installés récemment à Royan et dans les communes voisines de Charente-Maritime (17).",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-hairline border-b border-border">
        <ParallaxImage className="absolute inset-0" kenBurns speed={0.12}>
          <img
            src={heroKitchen}
            alt="Cuisine sur mesure en bois à Royan — Cuisines Milo, cuisiniste"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
        </ParallaxImage>
        <div
          aria-hidden
          className="absolute inset-0 bg-primary/55"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
          <Stagger stagger={0.12}>
            <StaggerItem y={16}>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground/90">
                Cuisiniste à Royan · Charente-Maritime
              </p>
            </StaggerItem>
            <StaggerItem y={20}>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-primary-foreground md:text-5xl">
                Cuisiniste à Royan : cuisines et dressings sur mesure
              </h1>
            </StaggerItem>
            <StaggerItem y={20}>
              <p className="mt-5 max-w-lg text-base text-primary-foreground/90">
                Cuisines Milo, artisan cuisiniste à Royan, conçoit et pose vos
                cuisines et dressings sur mesure partout en Charente-Maritime :
                matériaux nobles et finitions soignées.
              </p>
            </StaggerItem>
            <StaggerItem y={20}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/60 transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90"
                >
                  Demander mon devis gratuit
                </Link>
                <Link
                  to="/realisations/cuisines"
                  className="inline-flex items-center justify-center rounded-md border-hairline border-primary-foreground/60 px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/40"
                >
                  Voir les réalisations
                </Link>
                <Link
                  to="/rendez-vous"
                  className="inline-flex items-center justify-center rounded-md border-hairline border-primary-foreground/60 px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/40"
                >
                  Prendre rendez-vous au showroom
                </Link>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* RÉASSURANCES */}
      <Section>
        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.12}>
          {reassurances.map((r) => (
            <StaggerItem key={r.label} className="h-full">
              <div
                className="h-full rounded-xl border-hairline border-border p-6"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  {r.label}
                </p>
                <h3 className="mt-3 text-lg font-medium text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section bordered>
        <div className="max-w-3xl text-muted-foreground">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Votre cuisiniste à Royan, du premier croquis à la pose</h2>
          <p className="mt-5">Cuisines Milo dessine et installe des cuisines sur mesure à Royan et dans les communes voisines. Notre showroom du 38 rue des Cerisiers vous accueille du lundi au samedi, sur rendez-vous, pour voir et toucher les façades, les plans de travail et les finitions avant de vous décider.</p>
          <p className="mt-4">Choisir un cuisiniste local, c'est avoir un seul interlocuteur du début à la fin : la même personne prend vos mesures, dessine votre plan, suit la fabrication et coordonne la pose. Pas de sous-traitance anonyme, pas de mauvaise surprise le jour de l'installation.</p>

          <h3 className="mt-9 text-xl font-semibold text-foreground">Une cuisine sur mesure à Royan, pensée pour votre maison</h3>
          <p className="mt-4">Maison de ville dans le centre de Royan, villa à Vaux-sur-Mer ou résidence secondaire à Saint-Palais-sur-Mer : chaque intérieur a ses contraintes. Nous adaptons chaque cuisine à vos volumes, à vos habitudes et à votre budget, qu'il s'agisse d'une cuisine ouverte avec îlot central, d'une cuisine en L optimisée ou d'une rénovation complète.</p>
          <p className="mt-4">Nous choisissons avec vous des matériaux qui vieillissent bien, y compris près de l'océan : façades laquées ou bois, plans de travail en céramique, quartz ou stratifié, quincaillerie de qualité et électroménager encastré.</p>

          <h3 className="mt-9 text-xl font-semibold text-foreground">Des cuisines italiennes Armony Cucine</h3>
          <p className="mt-4">Nos cuisines sont fabriquées en Italie par Armony Cucine, puis adaptées et posées par nos soins. Vous profitez du design et de la qualité d'une fabrication italienne, avec le suivi d'un artisan cuisiniste installé à Royan. Découvrez les 30 modèles de notre catalogue sur la page <Link to="/cuisines" className="font-medium text-foreground underline underline-offset-4">Cuisines sur mesure</Link>.</p>

          <h3 className="mt-9 text-xl font-semibold text-foreground">Dressings et placards sur mesure</h3>
          <p className="mt-4">Cuisines Milo conçoit aussi vos <Link to="/realisations/dressings" className="font-medium text-foreground underline underline-offset-4">dressings, placards et rangements sur mesure</Link> : sous pente, sous escalier, en angle ou en enfilade. Le même soin que pour une cuisine, pour gagner chaque centimètre.</p>

          <h3 className="mt-9 text-xl font-semibold text-foreground">Comment se passe votre projet</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-6">
            <li>Premier échange, au showroom ou par téléphone, pour comprendre votre projet.</li>
            <li>Visite chez vous et prise de mesures précises.</li>
            <li>Plan détaillé, choix des matériaux et devis clair, gratuit et sans engagement.</li>
            <li>Fabrication sur mesure, puis pose soignée par nos équipes.</li>
          </ol>

          <h3 className="mt-9 text-xl font-semibold text-foreground">Où intervenons-nous ?</h3>
          <p className="mt-4">Nous posons des cuisines à Royan et dans tout le pays royannais : Vaux-sur-Mer, Saint-Palais-sur-Mer, Saint-Georges-de-Didonne, Meschers-sur-Gironde, Saujon, La Tremblade, Breuillet, Médis, Arvert, et plus largement en Charente-Maritime. Un projet un peu plus loin ? Appelez-nous, nous étudions chaque demande.</p>

          <h3 className="mt-9 text-xl font-semibold text-foreground">Combien coûte une cuisine sur mesure à Royan ?</h3>
          <p className="mt-4">Le prix d'une cuisine sur mesure dépend de sa taille, des façades, du plan de travail et de l'électroménager choisis. Après la visite technique, nous vous remettons un devis détaillé poste par poste, pour savoir exactement ce que vous payez. L'étude et le devis sont gratuits.</p>
          <p className="mt-4">Vous avez un projet de cuisine à Royan ? Appelez le <a href="tel:+33546384494" className="font-medium text-foreground underline underline-offset-4">05 46 38 44 94</a> ou <Link to="/contact" className="font-medium text-foreground underline underline-offset-4">demandez votre devis en ligne</Link>.</p>
        </div>
      </Section>

      {/* APERÇU RÉALISATIONS */}
      <HomeGallery />

      {/* AVIS */}
      <AvisSection />

      {/* CTA final */}
      <Section bordered>
        <Reveal>
          <div className="rounded-xl border-hairline border-border p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Parlons de votre projet de cuisine ou de dressing
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Décrivez-nous votre espace et vos envies : votre cuisiniste à Royan
              vous rappelle pour affiner votre devis sur mesure, partout en
              Charente-Maritime.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90"
              >
                Demander mon devis gratuit
              </Link>
              <Link
                to="/rendez-vous"
                className="inline-flex items-center justify-center rounded-md border-hairline border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent"
              >
                Prendre rendez-vous au showroom
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
