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
          className={`h-4 w-4 ${i < Math.round(value) ? "fill-tan text-tan" : "text-sand"}`}
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
          <div className="flex items-center gap-4 border border-sand px-6 py-4">
            <p className="font-serif text-5xl tabular-nums text-foreground">
              {GOOGLE_RATING!.toFixed(1).replace(".", ",")}
              <span className="font-sans text-base text-muted-foreground">/5</span>
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
            <figure className="flex h-full flex-col border border-sand bg-card p-8 md:p-10">
              <Stars value={a.rating} />
              <blockquote className="font-serif mt-6 flex-1 text-2xl italic leading-snug text-foreground md:text-3xl">
                « {a.text} »
              </blockquote>
              <figcaption className="mt-8 border-t border-sand pt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{a.name}</span> · {a.date} · Avis
                Google
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal>
        <div className="mt-10 bg-brown p-10 text-center text-cream md:p-14">
          <p className="font-serif text-4xl text-cream">Vous avez fait appel à Cuisines Milo ?</p>
          <p className="mx-auto mt-3 max-w-xl text-base text-sand">
            Votre avis aide les futurs clients à choisir, et il ne vous prend que deux minutes.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {GOOGLE_REVIEWS_URL ? (
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex min-h-12 items-center justify-center bg-cream px-8 py-4 text-brown transition-colors hover:bg-tan"
              >
                Laisser un avis sur Google
              </a>
            ) : null}
            <Link
              to="/avis"
              className="eyebrow inline-flex min-h-12 items-center justify-center border border-cream/70 px-8 py-4 text-cream transition-colors hover:bg-cream hover:text-brown"
            >
              Comment faire ?
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
          {GOOGLE_REVIEWS_URL ? (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex min-h-11 items-center border-b border-brown text-brown transition-colors hover:border-tan"
            >
              Voir notre fiche Google →
            </a>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
