import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Consent = { necessary: true; analytics: boolean; marketing: boolean };
const KEY = "breathe-consent";

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getConsent()) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (c: Consent) => {
    localStorage.setItem(KEY, JSON.stringify(c));
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className={cn(
        "glass fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-3xl border p-6 shadow-float-lg transition-all duration-700 ease-[var(--ease-breath)] md:p-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
            <Cookie className="size-5" />
          </span>
          <h2 className="font-display text-lg font-bold tracking-tight">Un cookie pour la route ?</h2>
        </div>
        <button
          type="button"
          aria-label="Fermer sans accepter"
          onClick={() => save({ necessary: true, analytics: false, marketing: false })}
          className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent-soft hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Ce site n'utilise que le strict nécessaire pour fonctionner. Les mesures d'audience et contenus
        tiers ne partent qu'avec votre accord. Vous pouvez changer d'avis à tout moment depuis le pied de
        page.{" "}
        <Link to="/politique-de-confidentialite" className="underline underline-offset-4">
          En savoir plus
        </Link>
      </p>

      {customize && (
        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-border bg-background/60 p-4 text-sm">
          <label className="flex items-center justify-between gap-4">
            <span>
              <span className="font-semibold text-foreground">Essentiels</span>
              <span className="block text-xs text-muted-foreground">Sécurité, préférences d'affichage. Toujours actifs.</span>
            </span>
            <input type="checkbox" checked disabled className="size-4 accent-accent-strong" />
          </label>
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <span>
              <span className="font-semibold text-foreground">Mesure d'audience</span>
              <span className="block text-xs text-muted-foreground">Statistiques anonymes de visite.</span>
            </span>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="size-4 accent-accent-strong"
            />
          </label>
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <span>
              <span className="font-semibold text-foreground">Contenus tiers</span>
              <span className="block text-xs text-muted-foreground">Vidéos ou cartes intégrées, le cas échéant.</span>
            </span>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="size-4 accent-accent-strong"
            />
          </label>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => save({ necessary: true, analytics: true, marketing: true })}
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-500 ease-[var(--ease-breath)] hover:scale-[1.03]"
        >
          Tout accepter
        </button>
        <button
          type="button"
          onClick={() => (customize ? save({ necessary: true, analytics, marketing }) : save({ necessary: true, analytics: false, marketing: false }))}
          className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent-soft"
        >
          {customize ? "Enregistrer mes choix" : "Tout refuser"}
        </button>
        {!customize && (
          <button
            type="button"
            onClick={() => setCustomize(true)}
            className="px-4 py-3 text-sm text-muted-foreground underline underline-offset-4"
          >
            Personnaliser
          </button>
        )}
      </div>
    </div>
  );
}
