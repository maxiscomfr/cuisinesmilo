import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import logoAsset from "../assets/logo-cuisines-milo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { supabase } from "@/integrations/supabase/client";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-medium text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Cette page n'a pas pu se charger
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Cuisines Milo" },
      { name: "google-site-verification", content: "lsJ5TtqhPR38t6PH3ilJeUttPThEKxwPSBaGsPTw6ng" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cuisines Milo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "64x64" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const realisationsItems = [
  { to: "/realisations/cuisines", label: "Cuisines" },
  { to: "/realisations/dressings", label: "Dressings" },
] as const;

const navItems = [
  { to: "/cuisines", label: "Cuisines" },
  { to: "/realisations", label: "Réalisations", children: realisationsItems },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-hairline border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="Cuisines Milo"
            className="h-8 w-auto object-contain sm:h-10"
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((n) =>
            "children" in n ? (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <button
                  type="button"
                  aria-expanded={dropdown}
                  aria-haspopup="true"
                  onClick={() => setDropdown(true)}
                  className="flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {n.label}
                  <span aria-hidden className="text-[10px]">
                    ▾
                  </span>
                </button>
                {dropdown && (
                  <div className="absolute left-0 top-full min-w-40 rounded-lg border-hairline border-border bg-background p-1">
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setDropdown(false)}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                        activeProps={{
                          className:
                            "block rounded-md px-3 py-2 text-sm font-medium text-foreground bg-muted",
                        }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm text-foreground font-medium" }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md border-hairline border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-hairline border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navItems.map((n) =>
              "children" in n ? (
                <div key={n.to} className="py-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">
                    {n.label}
                  </p>
                  {n.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="block py-2 pl-3 text-sm text-foreground/80"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-2 text-sm text-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-hairline border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-sm text-muted-foreground md:grid-cols-3">
        <div>
          <p className="text-foreground font-medium">Cuisines Milo</p>
          <p className="mt-2">Artisan cuisiniste — cuisines et dressings sur mesure.</p>
          <p className="mt-1">Zone d'intervention : Royan et Charente-Maritime.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
          <p className="mt-2">contact@cuisinesmilo.com</p>
          <p>Du lundi au samedi, sur rendez-vous</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Informations</p>
          <Link to="/mentions-legales" className="mt-2 block hover:text-foreground">
            Mentions légales
          </Link>
          <Link to="/contact" className="block hover:text-foreground">
            Demander un devis
          </Link>
        </div>
      </div>
      <div className="border-hairline border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cuisines Milo. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        router.invalidate();
        if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
      }
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, [queryClient, router]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
