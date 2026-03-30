import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Upholstery Cleaning in Munich | CleanX Reinigung",
  description:
    "Professional upholstery, sofa, and mattress cleaning in Munich with transparent estimates and careful fabric-safe methods.",
};

export default function UpholsteryCleaningPage() {
  return (
    <ServicePageTemplate
      title="Upholstery Cleaning"
      subtitle="Professional upholstery cleaning for sofas, armchairs, mattresses, and fabric seating in Munich."
      intro="This service focuses on fabric-safe deep cleaning for everyday furniture. We remove buildup, refresh surfaces, and improve overall appearance while protecting the material."
      included={[
        "Inspection of fabric type and condition before treatment",
        "Targeted stain and high-traffic area treatment",
        "Deep extraction cleaning for dirt and odor reduction",
        "Careful finishing for a refreshed overall look",
      ]}
      forWho={[
        "Households with sofas and upholstered seating",
        "Rental properties preparing for new tenants",
        "Small offices and waiting areas with fabric chairs",
      ]}
      whyChoose={[
        "Careful handling of different upholstery materials",
        "Clear estimate before work starts",
        "Reliable appointments in Munich neighborhoods",
        "Visible before-and-after quality results",
      ]}
    />
  );
}
