import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/avis")({
  loader: () => {
    throw redirect({ to: "/a-propos" });
  },
});
