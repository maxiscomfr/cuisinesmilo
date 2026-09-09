import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import {
  getContactSubmissions,
  updateContactSubmission,
} from "@/lib/contact.functions";
import type { Database } from "@/integrations/supabase/types";

type Submission = Database["public"]["Tables"]["contact_submissions"]["Row"];

export const Route = createFileRoute("/_authenticated/admin/messages")({
  head: () => ({
    meta: [{ title: "Messages — Administration Cuisines Milo" }],
    links: [{ rel: "canonical", href: "https://cuisinesmilo.com/admin/messages" }],
  }),
  component: AdminMessagesPage,
  loader: async () => {
    const { submissions } = await getContactSubmissions();
    return { submissions };
  },
});

function AdminMessagesPage() {
  const { submissions: initialSubmissions } = Route.useLoaderData();
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions);
  const [savingId, setSavingId] = useState<string | null>(null);

  async function toggleReplied(submission: Submission) {
    setSavingId(submission.id);
    const newRepliedAt = submission.replied_at ? null : new Date().toISOString();
    await updateContactSubmission({ data: { id: submission.id, repliedAt: newRepliedAt } });
    setSubmissions((prev) =>
      prev.map((s) => (s.id === submission.id ? { ...s, replied_at: newRepliedAt } : s)),
    );
    setSavingId(null);
  }

  async function updateNotes(id: string, notes: string) {
    await updateContactSubmission({ data: { id, notes } });
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, notes } : s)));
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Messages reçus
        </h1>
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Retour au site
        </Link>
      </div>

      {submissions.length === 0 ? (
        <p className="mt-8 text-muted-foreground">Aucun message pour le moment.</p>
      ) : (
        <div className="mt-8 space-y-4">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className={`rounded-xl border-hairline border-border p-5 ${
                submission.replied_at ? "bg-muted/30" : "bg-background"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-foreground">{submission.name}</p>
                  <a
                    href={`mailto:${submission.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {submission.email}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Reçu le {new Date(submission.created_at).toLocaleString("fr-FR")}
                  </p>
                </div>
                <button
                  onClick={() => toggleReplied(submission)}
                  disabled={savingId === submission.id}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    submission.replied_at
                      ? "border-hairline border-border bg-background text-foreground hover:bg-accent"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {submission.replied_at ? "Marquer non répondu" : "Marquer répondu"}
                </button>
              </div>
              <div className="mt-4 rounded-md border-hairline border-border bg-background p-3 text-sm text-foreground">
                {submission.message}
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.18em] text-accent">
                  Notes internes
                </label>
                <textarea
                  defaultValue={submission.notes ?? ""}
                  onBlur={(e) => updateNotes(submission.id, e.target.value)}
                  rows={2}
                  className="mt-2 w-full rounded-md border-hairline border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
