import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "@/components/site/Section";
import { Stagger, StaggerItem } from "@/components/site/motion/Stagger";
import { Reveal } from "@/components/site/motion/Reveal";
import { avisList } from "@/lib/site-data";
import { GOOGLE_RATING, GOOGLE_REVIEWS_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/reviews-config";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${value} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${i < Math.round(value) ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function AvisSection() {
  const avis = avisList.slice(0, 6);
  const hasGoogle = GOOGLE_RATING !== null;

  return (
    <Section bordered>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <SectionLabel>Ils nous ont fait confiance</SectionLabel>
          <SectionTitle>Ce que disent nos clients</SectionTitle>
        </div>
        {hasGoogle ? (
          <div className="flex items-center gap-3 rounded-xl border-hairline border-border px-4 py-3">
            <p className="text-3xl font-semibold tabular-nums text-foreground">
              {GOOGLE_RATING!.toFixed(1).replace(".", ",")}
              <span className="text-base font-normal text-muted-foreground">/5</span>
            </p>
            <div>
              <Stars value={GOOGLE_RATING!} />
              <p className="mt-1 text-xs text-muted-foreground">
                {GOOGLE_REVIEWS_COUNT ? `${GOOGLE_REVIEWS_COUNT} avis ` : "Avis "}
                Google
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2" stagger={0.1}>
        {avis.map((a) => (
          <StaggerItem key={a.id} className="h-full">
            <figure className="flex h-full flex-col rounded-xl border-hairline border-border p-6">
              <Stars value={a.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground md:text-base">
                « {a.text} »
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{a.name}</span> — {a.location} ·{" "}
                {a.date}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          {GOOGLE_REVIEWS_URL ? (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="story-link inline-flex min-h-11 items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Voir notre fiche Google →
            </a>
          ) : null}
          <Link
            to="/avis"
            className="story-link inline-flex min-h-11 items-center text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            Vous êtes client ? Laissez-nous un avis →
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
