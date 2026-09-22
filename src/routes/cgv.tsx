import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, Section } from "@/components/breathe/LegalPage";

const title = "Conditions générales de vente — Breathe Studio";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: "Conditions générales de vente des prestations de design web et développement de Breathe Studio." },
      { property: "og:title", content: title },
      { property: "og:description", content: "Conditions générales de vente de Breathe Studio." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CGV,
});

function CGV() {
  return (
    <LegalPage title="Conditions générales de vente" updated="22 septembre 2026">
      <Section title="Objet">
        <p>
          Les présentes conditions régissent les prestations de design UI/UX et de développement web
          réalisées par Breathe Studio, entreprise individuelle, pour ses clients professionnels et
          particuliers.
        </p>
      </Section>
      <Section title="Devis et commande">
        <p>
          Toute prestation fait l'objet d'un devis détaillé gratuit, valable 30 jours. La commande est
          réputée ferme à réception du devis signé accompagné de l'acompte demandé.
        </p>
      </Section>
      <Section title="Prix et paiement">
        <p>
          Les prix sont exprimés en euros hors taxes (TVA non applicable, article 293 B du CGI). Un acompte
          de 30 % est demandé au démarrage, le solde à la livraison. Paiement par virement bancaire sous
          30 jours. Tout retard entraîne des pénalités au taux légal en vigueur ainsi qu'une indemnité
          forfaitaire de recouvrement de 40 €.
        </p>
      </Section>
      <Section title="Délais et livraison">
        <p>
          Les délais indiqués au devis sont donnés à titre estimatif et courent à compter de la réception
          des éléments nécessaires fournis par le client. Une recette de 15 jours est ouverte après
          livraison pour corriger d'éventuels dysfonctionnements.
        </p>
      </Section>
      <Section title="Propriété intellectuelle">
        <p>
          Les livrables sont cédés au client à compter du paiement intégral. Breathe Studio conserve le
          droit de présenter les réalisations dans son portfolio, sauf demande contraire écrite.
        </p>
      </Section>
      <Section title="Responsabilité et médiation">
        <p>
          Breathe Studio est tenue à une obligation de moyens. En cas de litige, une solution amiable sera
          recherchée en priorité ; le client consommateur peut saisir le médiateur de la consommation
          compétent. Le droit français s'applique.
        </p>
      </Section>
    </LegalPage>
  );
}
