import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="grain min-h-screen px-5 pt-16 pb-32 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground underline-offset-4 hover:underline"
        >
          <ArrowLeft className="size-3" /> Retour au site
        </Link>
        <h1 className="mt-10 font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 font-mono text-xs text-muted-foreground">Dernière mise à jour : {updated}</p>
        <div className="legal mt-12 flex flex-col gap-10 text-base leading-relaxed text-muted-foreground">
          {children}
        </div>
        <p className="mt-16 border-t border-border pt-8 font-mono text-xs text-muted-foreground">
          breathe<span className="text-accent-strong">.</span>studio — une question ?{" "}
          <a href="mailto:bonjour@breathe.studio" className="underline underline-offset-4">
            bonjour@breathe.studio
          </a>
        </p>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      {children}
    </section>
  );
}
