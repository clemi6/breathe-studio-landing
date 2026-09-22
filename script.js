/* ---------- Theme ---------- */
function initPageLoader() {
  const loader = document.querySelector("[data-page-loader]");
  if (!loader) return;

  const finish = () => {
    window.setTimeout(() => loader.classList.add("is-done"), 650);
  };

  if (document.readyState === "complete") finish();
  else window.addEventListener("load", finish, { once: true });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || event.defaultPrevented || link.target === "_blank") return;
    if (link.origin !== window.location.origin || link.pathname === window.location.pathname && link.hash) return;
    if (link.href.startsWith("mailto:") || link.href.startsWith("tel:")) return;

    event.preventDefault();
    loader.classList.remove("is-done");
    window.setTimeout(() => {
      window.location.href = link.href;
    }, 420);
  });

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) finish();
  });
}

/* ---------- Theme ---------- */
function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const sun = btn?.querySelector(".icon-sun");
  const moon = btn?.querySelector(".icon-moon");

  const sync = () => {
    const dark = root.classList.contains("dark");
    if (sun) sun.hidden = dark;
    if (moon) moon.hidden = !dark;
    if (btn) {
      btn.setAttribute(
        "aria-label",
        dark ? "Activer le mode clair" : "Activer le mode sombre",
      );
    }
  };

  sync();

  btn?.addEventListener("click", () => {
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("breathe-theme", next);
    sync();
  });
}

/* ---------- Reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  els.forEach((el) => io.observe(el));

  // Sync check for above-the-fold before js-ready hides non-visible reveals
  els.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
      el.classList.add("is-visible");
      io.unobserve(el);
    }
  });
}

/* ---------- Custom cursor ---------- */
function initCustomCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  dot.hidden = false;
  ring.hidden = false;
  document.body.classList.add("has-custom-cursor");

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let rx = x;
  let ry = y;

  const move = (e) => {
    x = e.clientX;
    y = e.clientY;
    const target = e.target?.closest?.(
      "a, button, [data-cursor], input, textarea, label",
    );
    const hovering = !!target;
    dot.classList.toggle("is-hover", hovering);
    ring.classList.toggle("is-hover", hovering);
  };

  const tick = () => {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };

  window.addEventListener("mousemove", move, { passive: true });
  requestAnimationFrame(tick);
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
  document.querySelectorAll(".magnetic").forEach((el) => {
    const strength = Number(el.dataset.magneticStrength ?? 0.35);

    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

/* ---------- Project grid visual ---------- */
function initProjectGrids() {
  document.querySelectorAll(".visual-grid").forEach((grid) => {
    for (let i = 0; i < 36; i++) {
      const cell = document.createElement("span");
      if ((i * 7) % 5 === 0) cell.classList.add("fill-a");
      if ((i * 3) % 11 === 0) cell.classList.add("fill-b");
      grid.appendChild(cell);
    }
  });
}

/* ---------- Contact panel ---------- */
function initContact() {
  const panel = document.getElementById("contact-panel");
  const backdrop = document.getElementById("contact-backdrop");
  const formView = document.getElementById("contact-form-view");
  const sentView = document.getElementById("contact-sent-view");
  const form = document.getElementById("contact-form");
  if (!panel || !backdrop) return;

  const open = () => {
    panel.classList.add("is-open");
    backdrop.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-open-contact]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });

  document.getElementById("contact-close")?.addEventListener("click", close);
  document.getElementById("contact-back")?.addEventListener("click", close);
  backdrop.addEventListener("click", close);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("is-open")) close();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (formView) formView.hidden = true;
    if (sentView) sentView.hidden = false;
  });
}

initPageLoader();
initTheme();
initReveal();
document.documentElement.classList.add("js-ready");
initCustomCursor();
initMagnetic();
initProjectGrids();
initContact();


