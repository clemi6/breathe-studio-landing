import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/breathe/LegalPage";

const title = "Politique de confidentialité — Breathe Studio";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: "Politique de confidentialité et traitement des données personnelles (RGPD) du site Breathe Studio." },
      { property: "og:title", content: title },
      { property: "og:description", content: "Politique de confidentialité (RGPD) du site Breathe Studio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updated="22 septembre 2026">
      <Section title="Données collectées">
        <p>
          Breathe Studio collecte uniquement les données que vous transmettez volontairement via le
          formulaire de contact : prénom, adresse e-mail, description de votre projet et budget indicatif.
        </p>
      </Section>
      <Section title="Finalité et base légale">
        <p>
          Ces données servent exclusivement à répondre à votre demande (article 6.1.b du RGPD — mesures
          précontractuelles). Elles ne sont ni vendues, ni louées, ni utilisées à des fins de prospection
          ou de newsletter.
        </p>
      </Section>
      <Section title="Durée de conservation">
        <p>
          Vos messages sont conservés le temps du traitement de votre demande, puis supprimés au plus tard
          12 mois après notre dernier échange si aucune collaboration ne s'ensuit.
        </p>
      </Section>
      <Section title="Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de
          rectification, d'effacement, de portabilité, de limitation et d'opposition sur vos données.
          Écrivez à <a href="mailto:bonjour@breathe.studio" className="underline underline-offset-4">bonjour@breathe.studio</a> pour
          les exercer. Vous pouvez également saisir la CNIL (cnil.fr) en cas de litige.
        </p>
      </Section>
      <Section title="Cookies">
        <p>
          Le site n'utilise que des cookies strictement nécessaires (mémorisation du thème clair/sombre et
          de vos choix de consentement, stockés localement dans votre navigateur). Aucun cookie de
          mesure d'audience ou tiers n'est déposé sans votre consentement explicite via le bandeau prévu
          à cet effet.
        </p>
      </Section>
      <Section title="Sécurité">
        <p>
          Les échanges avec ce site sont chiffrés (HTTPS). L'accès aux données est limité au seul
          responsable de traitement.
        </p>
      </Section>
    </LegalPage>
  );
}
