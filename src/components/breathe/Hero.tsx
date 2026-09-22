import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <header
      id="top"
      className="relative overflow-hidden px-5 pt-20 pb-24 md:px-10 md:pt-10 md:pb-36"
    >
      {/* Gradient mesh organique */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="mesh-blob top-[-10%] left-[-5%] h-[55vmax] w-[55vmax] bg-accent/60 animate-drift-1" />
        <div className="mesh-blob top-[20%] right-[-15%] h-[50vmax] w-[50vmax] bg-accent-soft animate-drift-2 dark:bg-accent/30" />
        <div className="mesh-blob bottom-[-30%] left-[25%] h-[45vmax] w-[45vmax] bg-accent-strong/30 animate-drift-3" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/40 to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-y-14 md:gap-x-10">
        <Reveal
          as="h1"
          delay={120}
          className="col-span-12 font-display text-[clamp(2.5rem,7.6vw,7.5rem)] leading-[0.92] font-extrabold tracking-[-0.04em] md:col-start-1 md:col-span-12"
        >
          <span className="block">Des sites web</span>
          <span className="block">
            qui <span className="italic font-medium text-accent-strong">respirent</span>.
          </span>
          <span className="block pl-[6vw] md:pl-[12vw]">Design humain,</span>
          <span className="block pl-[12vw] text-muted-foreground md:pl-[20vw]">
            code millimétré.
          </span>
        </Reveal>

        <Reveal
          delay={260}
          className="col-span-12 flex flex-col gap-8 md:col-start-2 md:col-span-5 md:flex-row md:items-end md:gap-12"
        >
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Breathe Studio conçoit des interfaces aérées et développe des sites sur-mesure pour les
            indépendants et les marques qui veulent se sentir compris, pas seulement livrés.
          </p>
        </Reveal>

        <Reveal
          delay={380}
          className="col-span-12 flex flex-wrap items-center gap-5 md:col-start-8 md:col-span-5 md:justify-end"
        >
          <Magnetic
            onClick={onContact}
            cursorTarget="contact"
            className="bg-foreground px-8 py-5 text-base font-semibold text-background shadow-float-lg hover:shadow-glow"
          >
            Parlons de votre projet
            <ArrowUpRight className="size-5" />
          </Magnetic>
          <Magnetic
            href="#projets"
            strength={0.2}
            cursorTarget="projects"
            className="glass px-6 py-5 text-base font-medium text-foreground"
          >
            Voir les projets
            <ArrowDownRight className="size-5 text-accent-strong" />
          </Magnetic>
        </Reveal>
      </div>

      {/* Bandeau défilant */}
      <div className="mt-24 overflow-hidden border-y border-border py-4 md:mt-36 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 font-mono text-xs tracking-[0.2em] whitespace-nowrap text-muted-foreground uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>Design UI/UX</span>
              <span className="text-accent-strong">✳</span>
              <span>Développement front-end</span>
              <span className="text-accent-strong">✳</span>
              <span>Accessibilité</span>
              <span className="text-accent-strong">✳</span>
              <span>Performance</span>
              <span className="text-accent-strong">✳</span>
              <span>Accompagnement humain</span>
              <span className="text-accent-strong">✳</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
