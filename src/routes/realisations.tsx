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
      { property: "og:description", content: "Cuisines et dressings récemment posés." },
    ],
    links: [
        { rel: "canonical", href: "https://cuisinesmilo.com/realisations/cuisines" },
      ],
  }),
  component: () => <Outlet />,
});
