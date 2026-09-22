import { Ear, Feather, Rocket, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./Services";

const steps = [
  {
    icon: Ear,
    n: "01",
    title: "Découverte",
    text: "On commence par vous écouter. Pas de jargon, pas de cahier des charges de 40 pages : une conversation pour comprendre votre métier, vos clients et ce qui vous empêche de dormir.",
    fear: "« Je n'y connais rien en technique. » — Tant mieux, c'est mon travail.",
  },
  {
    icon: Feather,
    n: "02",
    title: "Création",
    text: "Vous voyez le design avant la moindre ligne de code. On ajuste ensemble, calmement, jusqu'à ce que ça vous ressemble. Puis je développe, proprement.",
    fear: "« Et si je n'aime pas ? » — On itère, sans surcoût caché.",
  },
  {
    icon: Rocket,
    n: "03",
    title: "Lancement",
    text: "Mise en ligne accompagnée : nom de domaine, hébergement, vérifications de vitesse et d'accessibilité. Vous n'avez rien à configurer vous-même.",
    fear: "« Ça va casser le jour J ? » — Tout est testé, et je reste là.",
  },
  {
    icon: HeartHandshake,
    n: "04",
    title: "Suivi",
    text: "Un site vit. Je reste disponible pour les petites évolutions, les questions et les mises à jour. Vous gardez un interlocuteur, pas un ticket.",
    fear: "« Je serai seul après ? » — Non. C'est le principe.",
  },
];

export function Process() {
  return (
    <section id="approche" className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-10 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="mesh-blob top-1/3 right-[-20%] h-[50vmax] w-[50vmax] bg-accent-soft animate-drift-2 dark:bg-accent/15" />
      </div>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03 — Approche"
          title="Un accompagnement qui rassure, à chaque étape."
          kicker="Vous n'avez pas besoin de comprendre le code. Vous avez besoin de quelqu'un qui le comprend pour vous."
        />

        <ol className="grid gap-6 md:grid-cols-12 md:gap-8">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 100}
              className={
                "glass relative flex flex-col gap-6 rounded-3xl p-8 md:p-10 " +
                (i % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-16")
              }
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-foreground dark:text-accent-strong">
                  <s.icon className="size-5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">étape {s.n}</span>
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{s.text}</p>
              <p className="mt-auto border-l-2 border-accent pl-4 text-sm italic text-foreground/80">{s.fear}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
