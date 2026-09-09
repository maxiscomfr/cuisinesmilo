import { createFileRoute, Link, redirect } from "@tanstack/react-router";
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

    throw redirect({ to: "/admin/messages" });
  }

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl border-hairline border-border p-6 md:p-8">
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
          <div className="mt-4 rounded-md border-hairline border-destructive bg-destructive/10 p-3 text-sm text-destructive">
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
              className="mt-2 w-full rounded-md border-hairline border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
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
              className="mt-2 w-full rounded-md border-hairline border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
