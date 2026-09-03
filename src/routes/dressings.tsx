import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dressings")({
  loader: () => {
    throw redirect({ to: "/realisations/dressings" });
  },
});
