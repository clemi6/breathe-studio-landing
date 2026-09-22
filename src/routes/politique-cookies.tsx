import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/breathe/LegalPage";
import { contactDetails } from "@/lib/contact";

const title = "Politique de gestion des cookies — Breathe Studio";

export const Route = createFileRoute("/politique-cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: "Politique de gestion des cookies du site Breathe Studio." },
      { property: "og:title", content: title },
      { property: "og:description", content: "Découvrez les cookies utilisés par Breathe Studio et vos choix de consentement." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PolitiqueCookies,
});

function PolitiqueCookies() {
  return (
    <LegalPage title="Politique de gestion des cookies" updated="22 septembre 2026">
      <Section title="Qu'est-ce qu'un cookie ?">
        <p>
          Un cookie est un petit fichier enregistré sur votre appareil lors de la consultation d'un site.
          Il permet notamment de conserver une préférence ou de mesurer l'utilisation d'un service.
        </p>
      </Section>
      <Section title="Les cookies utilisés sur ce site">
        <p>
          Breathe Studio utilise uniquement des mécanismes strictement nécessaires au fonctionnement du
          site : mémorisation du thème clair ou sombre et conservation de votre choix de consentement.
          Ces éléments sont stockés localement dans votre navigateur et ne servent pas à vous identifier.
        </p>
      </Section>
      <Section title="Mesure d'audience et contenus tiers">
        <p>
          Aucun cookie de mesure d'audience, publicitaire ou de contenu tiers n'est déposé par défaut.
          Si de nouveaux services nécessitant votre consentement sont ajoutés, ils ne seront activés
          qu'après votre accord explicite dans le bandeau de consentement.
        </p>
      </Section>
      <Section title="Gérer vos préférences">
        <p>
          Vous pouvez supprimer les données locales depuis les réglages de votre navigateur. Le refus des
          cookies non essentiels n'empêche pas l'accès au site. Pour toute question sur vos données,
          écrivez à <a href={`mailto:${contactDetails.email}`} className="underline underline-offset-4">{contactDetails.email}</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
