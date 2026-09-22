import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { contactDetails } from "@/lib/contact";

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
            <div className="flex flex-col gap-2 font-mono text-xs text-muted-foreground md:items-end">
              <a href={`mailto:${contactDetails.email}`} className="underline-offset-4 hover:underline">
                {contactDetails.email}
              </a>
              {contactDetails.phoneHref ? (
                <a href={`tel:${contactDetails.phoneHref}`} className="underline-offset-4 hover:underline">
                  {contactDetails.phone}
                </a>
              ) : (
                <span>{contactDetails.phone}</span>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
          <div className="font-mono text-xs leading-relaxed text-muted-foreground md:col-span-5">
            <span className="block">
              breathe<span className="text-accent-strong">.</span>studio — design web &amp; développement sur-mesure
            </span>
            <span className="mt-4 block">{contactDetails.name} · {contactDetails.role}</span>
            <span className="mt-1 block">{contactDetails.address}</span>
            <span className="mt-2 block">© 2026 · fait à la main, sans template</span>
          </div>
          <nav aria-label="Informations légales" className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs md:col-span-7 md:grid-cols-4">
            <Link to="/mentions-legales" className="text-muted-foreground transition-colors hover:text-foreground">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="text-muted-foreground transition-colors hover:text-foreground">
              Confidentialité / RGPD
            </Link>
            <Link to="/politique-cookies" className="text-muted-foreground transition-colors hover:text-foreground">
              Gestion des cookies
            </Link>
            <Link to="/cgv" className="text-muted-foreground transition-colors hover:text-foreground">
              CGV
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
