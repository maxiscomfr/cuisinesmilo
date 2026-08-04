import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type ModelGroup = {
  modele: string;
  /** Vraies photos du catalogue fabricant. Vide = placeholders. */
  photos: string[];
  /** Nombre de placeholders à afficher tant que `photos` est vide. */
  placeholders?: number;
};

function PlaceholderVisual({
  label = "Photo catalogue fabricant Armony Cucine",
  index,
  total,
}: {
  label?: string;
  index?: number;
  total?: number;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-muted p-6 text-center">
      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {index && total ? (
        <span className="text-[10px] tracking-[0.18em] text-muted-foreground/70">
          Visuel {index} / {total}
        </span>
      ) : null}
    </div>
  );
}

export function ModelGallery({
  groups,
  label,
}: {
  groups: ModelGroup[];
  label?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const active = openIndex === null ? null : groups[openIndex];
  const count = active
    ? active.photos.length || active.placeholders || 1
    : 0;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setPhotoIndex((i) => (i - 1 + count) % count),
    [count],
  );
  const next = useCallback(() => setPhotoIndex((i) => (i + 1) % count), [count]);

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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => {
          const total = g.photos.length || g.placeholders || 1;
          return (
            <button
              key={g.modele}
              type="button"
              onClick={() => {
                setOpenIndex(i);
                setPhotoIndex(0);
              }}
              className="group overflow-hidden rounded-xl border-hairline border-border bg-card text-left transition-colors hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Ouvrir la galerie du modèle ${g.modele}`}
            >
              <div className="aspect-[4/3] w-full">
                {g.photos[0] ? (
                  <img
                    src={g.photos[0]}
                    alt={`Modèle ${g.modele} — catalogue fabricant`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PlaceholderVisual label={label} />
                )}
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm font-medium text-foreground">{g.modele}</p>
                <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                  {total} photo{total > 1 ? "s" : ""}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie ${active.modele}`}
          className="fixed inset-0 z-50 flex flex-col bg-foreground/95 p-4 md:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-between text-background">
            <div>
              <p className="text-sm font-medium">{active.modele}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] opacity-70">
                Catalogue fabricant
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer la galerie"
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
              aria-label="Photo précédente"
              className="shrink-0 rounded-md border-hairline border-background/40 p-2 text-background hover:bg-background/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-xl bg-card">
              {active.photos[photoIndex] ? (
                <img
                  src={active.photos[photoIndex]}
                  alt={`${active.modele} — photo ${photoIndex + 1} sur ${count}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <PlaceholderVisual
                  label={label}
                  index={photoIndex + 1}
                  total={count}
                />
              )}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Photo suivante"
              className="shrink-0 rounded-md border-hairline border-background/40 p-2 text-background hover:bg-background/10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <p className="text-center text-sm tabular-nums text-background">
            {photoIndex + 1}/{count}
          </p>
        </div>
      ) : null}
    </>
  );
}
