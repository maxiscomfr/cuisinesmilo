import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/realisations/")({
  loader: () => {
    throw redirect({ to: "/realisations/cuisines" });
  },
});
