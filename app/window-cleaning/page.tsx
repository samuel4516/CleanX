import type { Metadata } from "next";
import ServicePageTemplate from "../components/service-page-template";

export const metadata: Metadata = {
  title: "Window Cleaning in Munich | CleanX Reinigung",
  description:
    "Streak-free window cleaning in Munich for apartments, homes, and offices with reliable scheduling and careful finishing.",
};

export default function WindowCleaningPage() {
  return (
    <ServicePageTemplate
      title="Window Cleaning"
      subtitle="Professional interior and accessible exterior window cleaning for a brighter, cleaner space."
      intro="Window cleaning improves both appearance and daylight quality. We deliver careful, streak-free results with efficient and reliable appointments."
      included={[
        "Glass cleaning for interior windows and frames",
        "Accessible exterior glass cleaning where applicable",
        "Detail finishing for edges and marks",
        "Final visual check for clean and balanced results",
      ]}
      forWho={[
        "Apartments and houses with regular window maintenance needs",
        "Offices and retail spaces that need presentable glass surfaces",
        "Tenants preparing for inspections or handovers",
      ]}
      whyChoose={[
        "Consistent streak-free cleaning standards",
        "Punctual, professional service delivery",
        "Clear communication around scope and access",
        "Flexible bookings in Munich",
      ]}
    />
  );
}
