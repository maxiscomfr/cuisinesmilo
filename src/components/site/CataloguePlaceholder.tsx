export function CataloguePlaceholder({
  label = "Photo catalogue fabricant Armony Cucine",
  caption,
  ratio = "aspect-[4/3]",
}: {
  label?: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border-hairline border-border bg-card">
      <div
        className={`${ratio} flex w-full items-center justify-center bg-muted p-6 text-center`}
      >
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      </div>
      {caption ? (
        <figcaption className="flex items-center justify-between px-4 py-3">
          <p className="text-sm font-medium text-foreground">{caption}</p>
          <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
            Catalogue fabricant
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CataloguePlaceholderGrid({
  items,
  label,
}: {
  items: string[];
  label?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <CataloguePlaceholder key={c} caption={c} label={label} />
      ))}
    </div>
  );
}
