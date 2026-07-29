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
      className={`mx-auto max-w-6xl px-5 py-16 md:py-20 ${
        bordered ? "border-hairline border-t border-border" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-accent">{children}</p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
      {children}
    </h2>
  );
}
