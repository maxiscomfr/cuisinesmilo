import type { Realisation } from "@/lib/site-data";

export function RealisationsGrid({
  items,
  columns = 3,
}: {
  items: Realisation[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
      {items.map((r) => (
        <figure
          key={r.id}
          className="overflow-hidden rounded-xl border-hairline border-border bg-card"
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
            <img
              src={r.image}
              alt={r.title}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="flex items-center justify-between px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">{r.title}</p>
              <p className="text-xs text-muted-foreground">{r.location}</p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
              {r.category}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
