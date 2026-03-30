import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Furniture Assembly in Munich | CleanX Reinigung",
  description:
    "Professional furniture assembly in Munich for homes and offices, including flat-pack items, shelving, and practical setups.",
};

export default function FurnitureAssemblyPage() {
  return (
    <ServicePageTemplate
      title="Furniture Assembly"
      subtitle="Reliable assembly service for flat-pack furniture, shelves, and practical room setups."
      intro="We help you assemble furniture correctly and efficiently, so your space is ready to use without delays, missing steps, or unstable setups."
      included={[
        "Assembly of flat-pack furniture and storage units",
        "Setup of desks, shelves, and home-office elements",
        "Basic alignment and stability checks",
        "Clean and orderly completion of the work area",
      ]}
      forWho={[
        "Households setting up new furniture",
        "Rental properties needing quick setup",
        "Small offices and studios arranging workspaces",
      ]}
      whyChoose={[
        "Efficient assembly with careful handling",
        "Reliable appointments and clear communication",
        "Professional finishing with practical checks",
        "Easy add-on to cleaning and move services",
      ]}
    />
  );
}
