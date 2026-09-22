import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

export function Footer({ onContact }: { onContact: () => void }) {
  return (
    <footer className="px-5 pt-24 pb-36 md:px-10 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid grid-cols-12 gap-10">
          <h2 className="col-span-12 font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-balance md:col-span-8">
            Et si votre site
            <br />
            <span className="text-accent-strong">respirait</span> enfin ?
          </h2>
          <div className="col-span-12 flex flex-col items-start justify-end gap-6 md:col-span-4 md:items-end">
            <Magnetic
              onClick={onContact}
              className="bg-foreground px-8 py-5 text-base font-semibold text-background shadow-float-lg hover:shadow-glow"
            >
              Écrire à Breathe Studio
              <ArrowUpRight className="size-5" />
            </Magnetic>
            <a
              href="mailto:bonjour@breathe.studio"
              className="font-mono text-xs text-muted-foreground underline-offset-4 hover:underline"
            >
              bonjour@breathe.studio
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-4 border-t border-border pt-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>
            breathe<span className="text-accent-strong">.</span>studio — design web &amp; développement sur-mesure
          </span>
          <span>© 2026 · fait à la main, sans template</span>
        </div>
      </div>
    </footer>
  );
}
