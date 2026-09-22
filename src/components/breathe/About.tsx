import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function About({ onContact }: { onContact: () => void }) {
  return (
    <section id="a-propos" className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-10 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="mesh-blob -left-40 top-1/3 size-128 bg-accent-soft animate-drift-1 dark:bg-accent/15" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">04 — À propos</p>
          <h2 className="mt-6 font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.05em] text-balance">
            Un regard humain
            <br />
            <span className="text-accent-strong">derrière chaque écran.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="md:col-span-5 md:pb-2">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Je suis la personne derrière Breathe Studio. J'accompagne les indépendants et les petites équipes
            qui veulent un site singulier, clair et agréable à faire évoluer.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="tag-mono inline-flex items-center gap-2"><Sparkles className="size-3" /> design sur-mesure</span>
            <span className="tag-mono inline-flex items-center gap-2"><MapPin className="size-3" /> France · à distance</span>
          </div>
          <button
            type="button"
            onClick={onContact}
            className="mt-10 inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-semibold transition-colors hover:border-accent-strong hover:text-accent-strong"
          >
            Faire connaissance
            <ArrowUpRight className="size-4" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}