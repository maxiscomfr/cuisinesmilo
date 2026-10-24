import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import logoMarron from "../assets/da/logo-marron.svg";
import logoCreme from "../assets/da/logo-creme.svg";
import monoCreme from "../assets/da/m-creme.svg";
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
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500&display=swap",
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
  { to: "/rendez-vous", label: "Rendez-vous" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const reduce = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkTone = overHero
    ? "text-cream/85 hover:text-cream"
    : "text-brown/80 hover:text-brown";

  return (
    <header
      className={`${pathname === "/" ? "fixed inset-x-0" : "sticky"} top-0 z-40 transition-colors duration-300 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-sand bg-cream/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Cuisines Milo, accueil">
          <img
            src={overHero ? logoCreme : logoMarron}
            alt="Cuisines Milo"
            width={1841}
            height={177}
            className="h-6 w-auto object-contain sm:h-7"
          />
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigation principale">
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
                  onClick={() => setDropdown((v) => !v)}
                  className={`eyebrow flex items-center gap-2 transition-colors duration-200 ${linkTone}`}
                >
                  {n.label}
                  <span
                    aria-hidden
                    className="block h-1.5 w-1.5 rotate-45 border-b border-r border-current transition-transform duration-200"
                    style={{ transform: dropdown ? "rotate(225deg)" : "rotate(45deg)" }}
                  />
                </button>
                <AnimatePresence>
                  {dropdown ? (
                    <motion.div
                      key="dropdown"
                      initial={reduce ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-0 top-full min-w-48 border border-sand bg-cream pt-0"
                    >
                      {n.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setDropdown(false)}
                          className="eyebrow block px-5 py-4 text-brown/80 transition-colors hover:bg-cream-deep hover:text-brown"
                          activeProps={{
                            className:
                              "eyebrow block bg-cream-deep px-5 py-4 text-brown",
                          }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ) : n.to === "/rendez-vous" ? (
              <Link
                key={n.to}
                to={n.to}
                className={`eyebrow border px-5 py-3 transition-colors duration-200 ${
                  overHero
                    ? "border-cream/70 text-cream hover:bg-cream hover:text-brown"
                    : "border-brown text-brown hover:bg-brown hover:text-cream"
                }`}
              >
                {n.label}
              </Link>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className={`eyebrow transition-colors duration-200 ${linkTone}`}
                activeProps={{ className: `eyebrow ${overHero ? "text-cream" : "text-brown"} underline decoration-tan decoration-2 underline-offset-8` }}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          className={`inline-flex h-11 w-11 items-center justify-center md:hidden ${overHero ? "text-cream" : "text-brown"}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-px w-6 bg-current transition-transform duration-200 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform duration-200 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu-mobile"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-sand bg-cream md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4" aria-label="Navigation mobile">
              {navItems.map((n) =>
                "children" in n ? (
                  <div key={n.to} className="py-3">
                    <p className="eyebrow text-walnut">{n.label}</p>
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="font-serif block py-3 pl-4 text-2xl text-brown"
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
                    className="font-serif border-t border-sand py-4 text-3xl text-brown"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </Link>
                ),
              )}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const linkCls = "block w-fit py-1.5 text-cream/80 transition-colors hover:text-cream";
  return (
    <footer className="bg-brown pb-20 text-cream md:pb-0">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoCreme} alt="Cuisines Milo" width={1841} height={177} className="h-7 w-auto" />
            <p className="font-serif mt-8 max-w-sm text-3xl leading-tight text-cream">
              Des cuisines et des dressings faits pour la vie qu’on y mène.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand">
              Cuisiniste à Royan. Cuisines italiennes Armony Cucine, conçues, adaptées et posées en Charente-Maritime.
            </p>
          </div>
          <div className="text-sm md:col-span-4">
            <p className="eyebrow text-tan">Showroom</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=38+rue+des+Cerisiers%2C+17200+Royan"
              target="_blank"
              rel="noreferrer"
              className={`${linkCls} mt-3`}
            >
              38 rue des Cerisiers
              <br />
              17200 Royan
            </a>
            <p className="py-1.5 text-sand">Du lundi au samedi, sur rendez-vous</p>
            <a href="tel:+33546384494" className={linkCls}>+33 5 46 38 44 94</a>
            <a href="tel:+33786229949" className={linkCls}>+33 7 86 22 99 49</a>
            <a href="mailto:contact@cuisinesmilo.com" className={linkCls}>contact@cuisinesmilo.com</a>
          </div>
          <div className="text-sm md:col-span-3">
            <p className="eyebrow text-tan">Explorer</p>
            <Link to="/cuisines" className={`${linkCls} mt-3`}>Cuisines</Link>
            <Link to="/realisations" className={linkCls}>Réalisations</Link>
            <Link to="/a-propos" className={linkCls}>À propos</Link>
            <Link to="/rendez-vous" className={linkCls}>Rendez-vous showroom</Link>
            <Link to="/contact" className={linkCls}>Demander un devis</Link>
            <Link to="/avis" className={linkCls}>Laisser un avis</Link>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-walnut py-6 text-xs text-sand md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Cuisines Milo. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="transition-colors hover:text-cream">Mentions légales</Link>
            <img src={monoCreme} alt="" aria-hidden width={64} height={64} className="h-6 w-auto opacity-80" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileActionBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/rendez-vous" || pathname === "/contact") return null;
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-cream/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-3">
        <a
          href="tel:+33546384494"
          className="eyebrow inline-flex min-h-11 items-center justify-center border border-brown text-brown"
        >
          Appeler
        </a>
        <Link
          to="/rendez-vous"
          className="eyebrow inline-flex min-h-11 items-center justify-center bg-brown text-cream"
        >
          Rendez-vous
        </Link>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const reduce = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
