import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Cuisines Milo" },
      {
        name: "description",
        content:
          "Galerie des réalisations de Cuisines Milo : cuisines et dressings sur mesure en Charente-Maritime.",
      },
      { property: "og:title", content: "Réalisations — Cuisines Milo" },
      {
        property: "og:description",
        content:
          "Découvrez les cuisines et dressings sur mesure récemment conçus et posés par Cuisines Milo en Charente-Maritime, secteur Royan.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://cuisinesmilo.com/realisations" },
      { property: "og:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://cuisinesmilo.com/__l5e/assets-v1/3d2ee279-c1a2-477b-a9ab-1057d5e4e2db/og-cuisines-milo.jpg" },
    ],
    links: [
        { rel: "canonical", href: "https://cuisinesmilo.com/realisations" },
      ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Réalisations — Cuisines Milo",
          description:
            "Galerie des réalisations de Cuisines Milo : cuisines et dressings sur mesure conçus et posés en Charente-Maritime, secteur Royan.",
          url: "https://cuisinesmilo.com/realisations/cuisines",
          author: {
            "@type": "LocalBusiness",
            name: "Cuisines Milo",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Royan",
              addressRegion: "Charente-Maritime",
              addressCountry: "FR",
            },
          },
        }),
      },
    ],
  }),
  component: () => <Outlet />,
});
