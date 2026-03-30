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
      title="Painting & Small Repairs"
      subtitle="Practical touch-up painting and small repair support for homes, rentals, and workspaces."
      intro="This service covers minor wall refresh work and small practical fixes that improve the overall look and readiness of your property."
      included={[
        "Small wall touch-ups and surface refresh work",
        "Minor patching and basic visual repairs",
        "Preparation and clean finishing of treated areas",
        "Simple quality check and result review",
      ]}
      forWho={[
        "Tenants preparing for handover",
        "Property owners maintaining rental units",
        "Businesses refreshing customer-facing spaces",
      ]}
      whyChoose={[
        "Practical, efficient fixes without overcomplication",
        "Clear scope and realistic estimate",
        "Careful execution with clean final appearance",
        "Easy coordination with other cleaning services",
      ]}
    />
  );
}
