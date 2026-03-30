import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Post-Renovation Cleaning in Munich | CleanX Reinigung",
  description:
    "Post-renovation cleaning in Munich to remove dust, residue, and construction leftovers before final use or handover.",
};

export default function PostRenovationCleaningPage() {
  return (
    <ServicePageTemplate
      title="Post-Renovation Cleaning"
      subtitle="Detailed cleanup service after renovation, painting, or repair projects."
      intro="Renovation work often leaves fine dust and residue across surfaces. We clean and reset your space so it is ready for daily use or final handover."
      included={[
        "Removal of renovation dust from key surfaces",
        "Cleaning of floors, corners, edges, and fixtures",
        "Window and visible surface residue treatment",
        "Final finish pass for move-in readiness",
      ]}
      forWho={[
        "Homeowners after renovation or painting projects",
        "Contractor handover preparation",
        "Landlords preparing recently updated units",
      ]}
      whyChoose={[
        "Attention to detail on fine dust and residue",
        "Structured process for post-work environments",
        "Reliable planning with clear communication",
        "Professional finish that saves time and stress",
      ]}
    />
  );
}
