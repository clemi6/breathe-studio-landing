import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
};

/** Bouton magnétique : glisse doucement vers le curseur. */
export function Magnetic({ children, className, strength = 0.35, onClick, href, type = "button" }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const cls = cn(
    "inline-flex items-center justify-center gap-3 rounded-full transition-[transform,box-shadow,background-color] duration-500 ease-[var(--ease-breath)] will-change-transform",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={move}
        onMouseLeave={leave}
        onClick={onClick}
        className={cls}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={onClick}
      className={cls}
    >
      {children}
    </button>
  );
}
