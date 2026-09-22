import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Services";
import { cn } from "@/lib/utils";

type Project = {
  name: string;
  sector: string;
  year: string;
  problem: string;
  solution: string;
  impact: string;
  impactLabel: string;
  stack: string[];
  visual: "grid" | "wave" | "rings";
  wide?: boolean;
};

const projects: Project[] = [
  {
    name: "Atelier Lune",
    sector: "Céramiste indépendante",
    year: "2026",
    problem: "Un site vitrine lent, illisible sur mobile, qui faisait fuir 70 % des visiteurs avant la page boutique.",
    solution: "Refonte complète autour du produit : galerie aérée, navigation en un geste, images optimisées.",
    impact: "x2",
    impactLabel: "vitesse de chargement",
    stack: ["react", "tailwind", "vite", "shopify-api"],
    visual: "wave",
    wide: true,
  },
  {
    name: "Cabinet Ravel",
    sector: "Architecture d'intérieur",
    year: "2025",
    problem: "Une image haut de gamme trahie par un template WordPress générique et des textes noyés.",
    solution: "Direction artistique éditoriale, typographie surdimensionnée, études de cas en plein écran.",
    impact: "+140 %",
    impactLabel: "demandes de devis",
    stack: ["next.js", "typescript", "sanity"],
    visual: "grid",
  },
  {
    name: "Nord Café",
    sector: "Torréfacteur local",
    year: "2025",
    problem: "Des commandes prises par messages privés, des erreurs, du temps perdu chaque semaine.",
    solution: "Mini-boutique en ligne avec retrait en magasin et une interface pensée pour le pouce.",
    impact: "-6 h",
    impactLabel: "de gestion par semaine",
    stack: ["react", "stripe", "supabase"],
    visual: "rings",
  },
  {
    name: "Pleine Voix",
    sector: "Coach en prise de parole",
    year: "2024",
    problem: "Un parcours de réservation en 7 étapes qui décourageait les prospects les plus timides.",
    solution: "Page unique, ton chaleureux, réservation en deux clics et réassurance à chaque étape.",
    impact: "98",
    impactLabel: "score Lighthouse accessibilité",
    stack: ["astro", "tailwind", "cal.com"],
    visual: "wave",
    wide: true,
  },
];

function Visual({ kind }: { kind: Project["visual"] }) {
  if (kind === "grid") {
    return (
      <div className="grid size-full grid-cols-6 grid-rows-6 gap-1 p-6 opacity-70">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "rounded-sm border border-border transition-colors duration-700",
              (i * 7) % 5 === 0 && "bg-accent/60",
              (i * 3) % 11 === 0 && "bg-foreground/10",
            )}
          />
        ))}
      </div>
    );
  }
  if (kind === "rings") {
    return (
      <div className="relative flex size-full items-center justify-center">
        {[1, 2, 3, 4].map((r) => (
          <span
            key={r}
            className="absolute rounded-full border border-accent-strong/40 animate-breathe"
            style={{ width: `${r * 22}%`, height: `${r * 22}%`, animationDelay: `${r * 0.6}s` }}
          />
        ))}
        <span className="size-3 rounded-full bg-accent-strong" />
      </div>
    );
  }
  return (
    <svg viewBox="0 0 400 200" className="size-full" preserveAspectRatio="none" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${110 + i * 12} C 100 ${40 + i * 18}, 200 ${170 - i * 10}, 400 ${90 + i * 8}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className={i === 2 ? "text-accent-strong" : "text-border"}
        />
      ))}
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="02 — Projets"
          title="Des résultats, pas seulement de jolies captures."
          kicker="Chaque projet part d'un problème réel et se termine par un chiffre mesurable."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-10">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 2) * 120}
              className={cn(
                "card-float group relative flex flex-col overflow-hidden rounded-3xl",
                p.wide ? "md:col-span-3" : "md:col-span-2",
                i % 2 === 1 && "md:translate-y-12",
              )}
            >
              <div
                data-cursor
                className="relative h-52 overflow-hidden border-b border-border bg-secondary/60 md:h-64"
              >
                <Visual kind={p.visual} />
                <span className="absolute top-5 left-5 tag-mono">{p.year}</span>
                <span className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-card opacity-0 shadow-float transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="flex grow flex-col gap-8 p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{p.name}</h3>
                  <span className="text-right text-xs text-muted-foreground">{p.sector}</span>
                </div>

                <dl className="grid gap-6 text-sm leading-relaxed md:grid-cols-[auto_1fr] md:gap-x-8">
                  <dt className="font-mono text-xs text-muted-foreground uppercase">Problème</dt>
                  <dd className="text-foreground/80 max-md:-mt-4">{p.problem}</dd>
                  <dt className="font-mono text-xs text-muted-foreground uppercase">Solution</dt>
                  <dd className="text-foreground/80 max-md:-mt-4">{p.solution}</dd>
                </dl>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">Impact</p>
                    <p className="font-display text-4xl font-extrabold tracking-tighter text-accent-strong md:text-5xl">
                      {p.impact}
                    </p>
                    <p className="text-xs text-muted-foreground">{p.impactLabel}</p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <li key={t} className="tag-mono">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
