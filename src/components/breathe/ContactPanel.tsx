import { useEffect, useState, type FormEvent } from "react";
import { X, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { open: boolean; onClose: () => void };

const field =
  "w-full rounded-2xl border border-input bg-background/60 px-5 py-4 text-base outline-hidden transition-[border-color,box-shadow] duration-500 placeholder:text-muted-foreground/70 focus:border-accent-strong focus:shadow-glow";

export function ContactPanel({ open, onClose }: Props) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm transition-opacity duration-700",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className={cn(
          "glass fixed inset-y-0 right-0 z-[70] flex w-full max-w-xl flex-col overflow-y-auto rounded-l-none border-l p-8 transition-transform duration-700 ease-[var(--ease-breath)] sm:my-3 sm:mr-3 sm:h-auto sm:rounded-3xl sm:border md:p-12",
          open ? "translate-x-0" : "translate-x-[110%]",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">contact — réponse sous 24 h</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent-soft"
          >
            <X className="size-4" />
          </button>
        </div>

        {sent ? (
          <div className="flex grow flex-col items-start justify-center gap-6">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check className="size-6" />
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight">Merci, c'est reçu.</h2>
            <p className="text-lg text-muted-foreground">
              Je lis chaque message personnellement. Vous aurez une réponse humaine, pas un accusé automatique.
            </p>
            <button type="button" onClick={onClose} className="mt-4 text-sm underline underline-offset-4">
              Revenir au site
            </button>
          </div>
        ) : (
          <>
            <h2 id="contact-title" className="mt-12 font-display text-4xl leading-none font-bold tracking-tight md:text-5xl">
              Prenons une grande
              <br />
              <span className="text-accent-strong">inspiration</span> ensemble.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Racontez-moi votre projet en quelques mots. Pas besoin d'être précis ni technique : on affinera
              ensemble.
            </p>

            <form onSubmit={submit} className="mt-10 flex flex-col gap-4">
              <label className="sr-only" htmlFor="c-name">Votre prénom</label>
              <input id="c-name" name="name" required placeholder="Votre prénom" className={field} />
              <label className="sr-only" htmlFor="c-email">Votre e-mail</label>
              <input id="c-email" name="email" type="email" required placeholder="Votre e-mail" className={field} />
              <label className="sr-only" htmlFor="c-msg">Votre projet</label>
              <textarea
                id="c-msg"
                name="message"
                required
                rows={4}
                placeholder="Votre projet, en quelques mots…"
                className={cn(field, "resize-none")}
              />
              <fieldset className="mt-2">
                <legend className="mb-3 font-mono text-xs text-muted-foreground">budget indicatif</legend>
                <div className="flex flex-wrap gap-2">
                  {["< 2 k€", "2 – 5 k€", "5 – 10 k€", "je ne sais pas encore"].map((b) => (
                    <label key={b} className="cursor-pointer">
                      <input type="radio" name="budget" value={b} className="peer sr-only" />
                      <span className="tag-mono inline-block transition-colors peer-checked:border-accent-strong peer-checked:bg-accent-soft peer-checked:text-foreground">
                        {b}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-8 py-5 font-semibold text-background transition-transform duration-500 ease-[var(--ease-breath)] hover:scale-[1.02]"
              >
                Envoyer le message
                <Send className="size-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Aucune newsletter, aucun démarchage. Juste une réponse.
              </p>
            </form>
          </>
        )}
      </aside>
    </>
  );
}
