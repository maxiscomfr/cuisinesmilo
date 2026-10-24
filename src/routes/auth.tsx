import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Connexion — Cuisines Milo" },
      {
        name: "description",
        content: "Connexion à l'espace administrateur de Cuisines Milo.",
      },
    ],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/auth" }],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    navigate({ to: "/admin/messages" });
  }

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
      <div className="w-full max-w-sm border border-sand bg-card p-8 md:p-8">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Retour au site
        </Link>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Espace administrateur
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Connectez-vous pour consulter les messages reçus.
        </p>

        {error && (
          <div className="mt-4 border border-sand border-destructive bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div>
            <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-accent">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full border border-sand border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs uppercase tracking-[0.18em] text-accent">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full border border-sand border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 eyebrow inline-flex min-h-12 items-center justify-center bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-walnut disabled:opacity-60"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
