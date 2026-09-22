import { Code2, PenTool, Gauge, Accessibility, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

function SectionHeader({ index, title, kicker }: { index: string; title: string; kicker: string }) {
  return (
    <Reveal className="mb-16 grid grid-cols-12 gap-6 md:mb-24">
      <span className="col-span-12 font-mono text-xs text-muted-foreground md:col-span-2">{index}</span>
      <h2 className="col-span-12 font-display text-4xl leading-[1] font-bold tracking-[-0.03em] text-balance md:col-span-7 md:text-6xl">
        {title}
      </h2>
      <p className="col-span-12 self-end text-muted-foreground md:col-span-3">{kicker}</p>
    </Reveal>
  );
}

export { SectionHeader };

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="01 — Services"
          title="Deux métiers, une seule respiration."
          kicker="Le design pense l'expérience. Le code la rend légère, rapide, durable."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8 lg:gap-10">
          {/* Design */}
          <Reveal className="card-float group relative col-span-1 overflow-hidden rounded-3xl p-8 md:col-span-4 md:p-12">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 size-80 rounded-full bg-accent/40 blur-3xl transition-transform duration-1000 ease-[var(--ease-breath)] group-hover:scale-125"
            />
            <div className="relative flex h-full flex-col justify-between gap-16">
              <div className="flex items-start justify-between">
                <span className="tag-mono">design.ui/ux</span>
                <PenTool className="size-6 text-accent-strong" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                  Design UI/UX
                </h3>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Des interfaces qui laissent de la place au regard. Chaque écran est pensé pour
                  guider sans crier : hiérarchie claire, typographie soignée, parcours sans friction.
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {["Direction artistique", "Wireframes", "Prototypes Figma", "Design system"].map((t) => (
                    <li key={t} className="tag-mono">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Perf */}
          <Reveal delay={120} className="card-float col-span-1 flex flex-col justify-between rounded-3xl p-8 md:col-span-2">
            <Gauge className="size-6 text-accent-strong" />
            <div className="mt-16">
              <p className="font-display text-6xl font-bold tracking-tighter md:text-7xl">
                &lt;1<span className="text-accent-strong">s</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Temps de chargement visé sur chaque projet. Un site rapide, c'est un visiteur qui reste.
              </p>
            </div>
          </Reveal>

          {/* Accessibilité */}
          <Reveal delay={80} className="card-float col-span-1 flex flex-col justify-between rounded-3xl p-8 md:col-span-2">
            <Accessibility className="size-6 text-accent-strong" />
            <div className="mt-16">
              <h3 className="font-display text-2xl font-bold tracking-tight">Accessible par défaut</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Contrastes, clavier, lecteurs d'écran : un site qui respire pour tout le monde.
              </p>
            </div>
          </Reveal>

          {/* Dev */}
          <Reveal delay={160} className="card-float group relative col-span-1 overflow-hidden rounded-3xl p-8 md:col-span-4 md:p-12">
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 size-80 rounded-full bg-accent-strong/25 blur-3xl transition-transform duration-1000 ease-[var(--ease-breath)] group-hover:scale-125"
            />
            <div className="relative flex h-full flex-col justify-between gap-16">
              <div className="flex items-start justify-between">
                <span className="tag-mono">dev.front-end</span>
                <Code2 className="size-6 text-accent-strong" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                  Développement front-end
                </h3>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Du code propre, modulaire et millimétré. Pas de thème bricolé : une base solide,
                  performante et facile à faire évoluer.
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind", "Animations", "SEO technique"].map((t) => (
                    <li key={t} className="tag-mono">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Bandeau */}
          <Reveal delay={200} className="col-span-1 flex items-center gap-4 rounded-3xl border border-dashed border-border px-8 py-6 md:col-span-6">
            <Sparkles className="size-5 shrink-0 text-accent-strong" />
            <p className="text-sm text-muted-foreground md:text-base">
              Un seul interlocuteur du premier croquis à la mise en ligne. Vous parlez à la personne qui
              conçoit <em>et</em> qui code.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
