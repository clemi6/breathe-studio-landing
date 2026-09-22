import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/breathe/LegalPage";

const title = "Mentions légales — Breathe Studio";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: "Mentions légales du site Breathe Studio : éditeur, hébergeur, propriété intellectuelle." },
      { property: "og:title", content: title },
      { property: "og:description", content: "Mentions légales du site Breathe Studio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="22 septembre 2026">
      <Section title="Éditeur du site">
        <p>
          Breathe Studio — Entreprise individuelle (auto-entrepreneur) spécialisée en design web et
          développement sur-mesure.
        </p>
        <ul className="list-disc pl-5 marker:text-accent-strong">
          <li>Responsable de la publication : [Votre nom et prénom]</li>
          <li>Adresse : [Adresse postale]</li>
          <li>E-mail : <a href="mailto:bonjour@breathe.studio" className="underline underline-offset-4">bonjour@breathe.studio</a></li>
          <li>Téléphone : [Numéro de téléphone]</li>
          <li>SIRET : [Numéro SIRET]</li>
          <li>TVA non applicable, article 293 B du CGI</li>
        </ul>
      </Section>
      <Section title="Hébergement">
        <p>
          Ce site est hébergé par Lovable / Cloudflare, dont les serveurs sont répartis au sein de
          l'Union européenne et dans le monde. Coordonnées détaillées disponibles sur simple demande.
        </p>
      </Section>
      <Section title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus du site (textes, visuels, code, identité graphique) est la propriété
          exclusive de Breathe Studio, sauf mention contraire. Toute reproduction ou réutilisation, même
          partielle, est interdite sans autorisation écrite préalable.
        </p>
      </Section>
      <Section title="Crédits">
        <p>Design et développement : Breathe Studio. Typographies : Syne, Manrope et JetBrains Mono (licences libres).</p>
      </Section>
    </LegalPage>
  );
}
