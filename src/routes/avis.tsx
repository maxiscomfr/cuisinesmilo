import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/site/Section";
import { avisList } from "@/lib/site-data";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Avis clients — Cuisines Milo" },
      {
        name: "description",
        content:
          "Les avis de nos clients en Charente-Maritime après la pose de leur cuisine ou dressing sur mesure.",
      },
      { property: "og:title", content: "Avis clients — Cuisines Milo" },
      { property: "og:description", content: "Retours d'expérience clients." },
    ],
  }),
  component: AvisPage,
});

function Stars({ n }: { n: number }) {
  return (
    <div aria-label={`${n} sur 5`} className="text-accent">
      {"★".repeat(n)}
      <span className="text-border">{"★".repeat(5 - n)}</span>
    </div>
  );
}

function AvisPage() {
  return (
    <Section>
      <SectionLabel>Avis clients</SectionLabel>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        Ce que disent nos clients
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Nos clients partagent leur expérience après la pose de leur cuisine ou
        de leur dressing.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {avisList.map((a) => (
          <article key={a.id} className="rounded-xl border-hairline border-border p-6">
            <Stars n={a.rating} />
            <p className="mt-4 text-foreground">« {a.text} »</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {a.name} — {a.location} · {a.date}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
