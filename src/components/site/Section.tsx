import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  bordered = false,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 ${
        bordered ? "border-t border-sand" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-accent">{children}</p>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif mt-4 max-w-3xl text-4xl leading-[1.02] text-foreground md:text-6xl">
      {children}
    </h2>
  );
}
