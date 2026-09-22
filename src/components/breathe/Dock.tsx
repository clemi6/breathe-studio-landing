import { Moon, Sun, MessageCircle } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projets", label: "Projets" },
  { href: "#approche", label: "Approche" },
  { href: "#a-propos", label: "À propos" },
];

export function Dock({ onContact }: { onContact: () => void }) {
  const { theme, toggle } = useTheme();

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 md:bottom-7"
    >
      <div className="glass flex items-center gap-1 rounded-full p-1.5 pl-4">
        <a href="#top" className="mr-2 hidden font-display text-sm font-bold tracking-tight sm:block">
          breathe<span className="text-accent-strong">.</span>
        </a>
        <span className="mr-2 hidden h-4 w-px bg-border sm:block" />
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-accent-soft hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
        <button
          type="button"
          onClick={onContact}
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform duration-500 ease-[var(--ease-breath)] hover:scale-105"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Contact</span>
        </button>
        <button
          type="button"
          onClick={toggle}
          aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
          className="relative ml-1 flex h-9 w-16 items-center rounded-full border border-border bg-secondary p-1 transition-colors duration-500"
        >
          <span
            className="flex size-7 items-center justify-center rounded-full bg-card shadow-float transition-transform duration-500 ease-[var(--ease-breath)]"
            style={{ transform: theme === "dark" ? "translateX(28px)" : "translateX(0)" }}
          >
            {theme === "dark" ? (
              <Moon className="size-3.5 text-accent-strong" />
            ) : (
              <Sun className="size-3.5 text-accent-strong" />
            )}
          </span>
        </button>
      </div>
    </nav>
  );
}
