import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Realisation } from "@/lib/site-data";

export function RealisationsGrid({
  items,
  columns = 3,
  framed = true,
}: {
  items: Realisation[];
  columns?: 2 | 3 | 4;
  framed?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
        {items.map((r, i) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group overflow-hidden rounded-xl border-hairline border-border bg-card text-left transition-colors hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Voir la réalisation ${r.title}`}
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <img
                src={r.image}
                alt={r.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse réalisations"
          className="fixed inset-0 z-50 flex flex-col bg-foreground/95 p-4 md:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-end text-background">
            <button
              type="button"
              onClick={close}
              aria-label="Fermer la visionneuse"
              className="rounded-md border-hairline border-background/40 p-2 hover:bg-background/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center gap-3 py-4 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              aria-label="Réalisation précédente"
              className="shrink-0 rounded-md border-hairline border-background/40 p-2 text-background hover:bg-background/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-xl bg-card">
              <img
                src={items[openIndex].image}
                alt={items[openIndex].title}
                className="h-full w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Réalisation suivante"
              className="shrink-0 rounded-md border-hairline border-background/40 p-2 text-background hover:bg-background/10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <p className="text-center text-sm tabular-nums text-background">
            {openIndex + 1}/{items.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
