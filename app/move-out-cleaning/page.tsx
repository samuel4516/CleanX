import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Move-Out Cleaning in Munich | CleanX Reinigung",
  description:
    "End-of-tenancy and move-out cleaning in Munich with reliable handover-focused results and clear estimates.",
};

export default function MoveOutCleaningPage() {
  return (
    <ServicePageTemplate
      title="Move-Out Cleaning"
      subtitle="Handover-focused cleaning service designed for move-outs and end-of-tenancy requirements."
      intro="This service is tailored to help tenants and landlords prepare properties for inspection, handover, or new occupancy with a professional finish."
      included={[
        "Detailed cleaning of key rooms and handover-critical areas",
        "Kitchen, bathroom, and floor-focused cleaning pass",
        "Surface, edge, and spot detailing where needed",
        "Final walk-through style quality check",
      ]}
      forWho={[
        "Tenants moving out of apartments or houses",
        "Landlords and property managers preparing units",
        "Relocation clients with short timelines",
      ]}
      whyChoose={[
        "Reliable scheduling for fixed move-out dates",
        "Clear scope aligned with handover expectations",
        "Careful and efficient execution",
        "Professional support under time pressure",
      ]}
    />
  );
}
