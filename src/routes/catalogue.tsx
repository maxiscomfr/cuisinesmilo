import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/catalogue")({
  beforeLoad: () => {
    throw redirect({ to: "/cuisines", replace: true });
  },
});
