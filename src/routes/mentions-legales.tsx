import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/site/Section";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Cuisines Milo" },
      { name: "description", content: "Mentions légales du site Cuisines Milo." },
      { property: "og:title", content: "Mentions légales — Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Informations légales du site Cuisines Milo : éditeur, hébergement, propriété intellectuelle et traitement des données personnelles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://cuisinesmilo.com/mentions-legales" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [
        {
          rel: "canonical",
          href: "https://cuisinesmilo.com/mentions-legales",
        },
      ],
  }),
  component: MentionsPage,
});

function MentionsPage() {
  return (
    <Section>
      <SectionLabel>Informations légales</SectionLabel>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Mentions légales
      </h1>

      <div className="mt-10 space-y-8 text-sm text-muted-foreground">
        <div>
          <h2 className="text-base font-medium text-foreground">Éditeur du site</h2>
          <p className="mt-2">MAXIScom</p>
          <p>Zone d'activité : France</p>
          <p>Email : contact@cuisinesmilo.com</p>
        </div>

        <div>
          <h2 className="text-base font-medium text-foreground">Hébergement</h2>
          <p className="mt-2">
            Ce site est hébergé sur une infrastructure Cloud sécurisée.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-foreground">Propriété intellectuelle</h2>
          <p className="mt-2">
            L'ensemble des contenus présents sur ce site (textes, images,
            visuels de réalisations) est protégé par le droit d'auteur. Toute
            reproduction est interdite sans autorisation préalable.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-foreground">Données personnelles</h2>
          <p className="mt-2">
            Les données transmises via les formulaires de contact sont utilisées
            uniquement pour répondre à votre demande. Vous disposez d'un droit
            d'accès, de rectification et de suppression, en écrivant à
             contact@cuisinesmilo.com.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-foreground"></h2>
          <p className="mt-2"></p>
        </div>
      </div>
    </Section>
  );
}
