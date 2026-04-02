import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Painting & Small Repairs in Munich | CleanX Reinigung",
  description:
    "Book painting touch-ups and small repairs in Munich for apartments, rentals, and offices with careful execution and clear estimates.",
};

export default function PaintingRepairsPage() {
  return (
    <ServicePageTemplate
      content={{
        en: {
          title: "Painting & Small Repairs",
          subtitle:
            "Practical touch-up painting and small repair support for homes, rentals, and workspaces.",
          intro:
            "This service covers minor wall refresh work and small practical fixes that improve the overall look and readiness of your property.",
          included: [
            "Small wall touch-ups and surface refresh work",
            "Minor patching and basic visual repairs",
            "Preparation and clean finishing of treated areas",
            "Simple quality check and result review",
          ],
          forWho: [
            "Tenants preparing for handover",
            "Property owners maintaining rental units",
            "Businesses refreshing customer-facing spaces",
          ],
          whyChoose: [
            "Practical, efficient fixes without overcomplication",
            "Clear scope and realistic estimate",
            "Careful execution with clean final appearance",
            "Easy coordination with other cleaning services",
          ],
        },
        de: {
          title: "Malerarbeiten & Kleinreparaturen",
          subtitle:
            "Praktische Ausbesserungen und kleine Reparaturen für Wohnungen, Mietobjekte und Arbeitsbereiche.",
          intro:
            "Diese Leistung umfasst kleinere Wandauffrischungen und praktische Reparaturen, die Optik und Funktion Ihrer Immobilie verbessern.",
          included: [
            "Kleine Ausbesserungen an Wänden und Oberflächen",
            "Leichte Spachtelarbeiten und einfache Sichtreparaturen",
            "Vorbereitung und sauberes Finish der bearbeiteten Flächen",
            "Kurze Qualitätsprüfung mit Ergebnisabstimmung",
          ],
          forWho: [
            "Mieter vor Übergabe der Wohnung",
            "Eigentümer zur laufenden Instandhaltung von Mietobjekten",
            "Unternehmen mit Bedarf an gepflegten Kundenbereichen",
          ],
          whyChoose: [
            "Praktische, effiziente Lösungen ohne unnötigen Aufwand",
            "Klarer Leistungsumfang und realistische Angebote",
            "Sorgfältige Ausführung mit sauberem Endbild",
            "Einfach mit Reinigungsleistungen kombinierbar",
          ],
        },
      }}
    />
  );
}
