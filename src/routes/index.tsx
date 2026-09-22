import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { ThemeProvider } from "@/components/breathe/ThemeProvider";
import { CustomCursor } from "@/components/breathe/CustomCursor";
import { Dock } from "@/components/breathe/Dock";
import { Hero } from "@/components/breathe/Hero";
import { Services } from "@/components/breathe/Services";
import { Projects } from "@/components/breathe/Projects";
import { Process } from "@/components/breathe/Process";
import { About } from "@/components/breathe/About";
import { ContactPanel } from "@/components/breathe/ContactPanel";
import { Footer } from "@/components/breathe/Footer";

const title = "Breathe Studio — Des sites web qui respirent";
const description =
  "Design UI/UX humain et développement front-end sur-mesure. Breathe Studio conçoit des sites aérés, rapides et accessibles pour les indépendants et les marques.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  const open = useCallback(() => setContactOpen(true), []);
  const close = useCallback(() => setContactOpen(false), []);

  return (
    <ThemeProvider>
      <div className="relative grain min-h-screen">
        <CustomCursor />
        <Dock onContact={open} />
        <main>
          <Hero onContact={open} />
          <Services />
          <Projects />
          <Process />
          <About onContact={open} />
        </main>
        <Footer onContact={open} />
        <ContactPanel open={contactOpen} onClose={close} />
      </div>
    </ThemeProvider>
  );
}
