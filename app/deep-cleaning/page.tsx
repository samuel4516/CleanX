import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Deep Cleaning in Munich | CleanX Reinigung",
  description:
    "Book deep cleaning in Munich for homes, rentals, and offices. Detailed, reliable service with clear scope and transparent pricing.",
};

export default function DeepCleaningPage() {
  return (
    <ServicePageTemplate
      content={{
        en: {
          title: "Deep Cleaning",
          subtitle:
            "Detailed deep cleaning service for kitchens, bathrooms, living spaces, and hard-to-reach areas.",
          intro:
            "Our deep cleaning service is built for spaces that need extra attention beyond regular upkeep. We focus on detail, hygiene, and a polished final result.",
          included: [
            "Detailed cleaning of key surfaces and contact points",
            "Kitchen and bathroom deep-care workflows",
            "Attention to corners, edges, and neglected zones",
            "Final quality check before completion",
          ],
          forWho: [
            "Busy households needing a full reset clean",
            "Property owners preparing units for occupancy",
            "Offices and studios requiring detailed hygiene care",
          ],
          whyChoose: [
            "Structured process with clear checklist-driven work",
            "Reliable quality and consistent finishing standards",
            "Fast scheduling and professional communication",
            "Transparent estimate and scope confirmation upfront",
          ],
        },
        de: {
          title: "Tiefenreinigung",
          subtitle:
            "Detaillierte Tiefenreinigung für Küche, Bad, Wohnbereiche und schwer erreichbare Zonen.",
          intro:
            "Unsere Tiefenreinigung ist für Räume gedacht, die mehr als die übliche Pflege brauchen. Wir arbeiten detailorientiert, hygienisch und mit einem sauberen Endergebnis.",
          included: [
            "Gründliche Reinigung zentraler Flächen und Kontaktpunkte",
            "Intensive Abläufe für Küche und Badezimmer",
            "Besonderer Fokus auf Ecken, Kanten und vernachlässigte Bereiche",
            "Abschließende Qualitätskontrolle vor Übergabe",
          ],
          forWho: [
            "Haushalte mit Bedarf an einem kompletten Reinigungs-Reset",
            "Eigentümer, die Einheiten für die Nutzung vorbereiten",
            "Büros und Studios mit erhöhtem Hygienebedarf",
          ],
          whyChoose: [
            "Strukturierter Ablauf mit klarer Checkliste",
            "Zuverlässige Qualität und konstante Endkontrolle",
            "Schnelle Terminvergabe und professionelle Kommunikation",
            "Transparente Angebote und klarer Leistungsumfang",
          ],
        },
      }}
    />
  );
}
