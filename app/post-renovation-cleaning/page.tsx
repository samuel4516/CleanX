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
      content={{
        en: {
          title: "Post-Renovation Cleaning",
          subtitle:
            "Detailed cleanup service after renovation, painting, or repair projects.",
          intro:
            "Renovation work often leaves fine dust and residue across surfaces. We clean and reset your space so it is ready for daily use or final handover.",
          included: [
            "Removal of renovation dust from key surfaces",
            "Cleaning of floors, corners, edges, and fixtures",
            "Window and visible surface residue treatment",
            "Final finish pass for move-in readiness",
          ],
          forWho: [
            "Homeowners after renovation or painting projects",
            "Contractor handover preparation",
            "Landlords preparing recently updated units",
          ],
          whyChoose: [
            "Attention to detail on fine dust and residue",
            "Structured process for post-work environments",
            "Reliable planning with clear communication",
            "Professional finish that saves time and stress",
          ],
        },
        de: {
          title: "Reinigung nach Renovierung",
          subtitle:
            "Detaillierte Endreinigung nach Renovierungs-, Maler- oder Reparaturarbeiten.",
          intro:
            "Renovierungsarbeiten hinterlassen oft feinen Staub und Rückstände auf vielen Flächen. Wir setzen Ihre Räume professionell zurück, damit sie wieder sofort nutzbar sind.",
          included: [
            "Entfernung von Renovierungsstaub auf wichtigen Oberflächen",
            "Reinigung von Böden, Ecken, Kanten und festen Elementen",
            "Behandlung sichtbarer Rückstände an Fenstern und Flächen",
            "Abschließender Finish-Durchgang für bezugsfertige Räume",
          ],
          forWho: [
            "Eigentümer nach Renovierungs- oder Malerprojekten",
            "Handwerker und Auftraggeber vor Übergabe",
            "Vermieter mit frisch modernisierten Einheiten",
          ],
          whyChoose: [
            "Hohe Detailgenauigkeit bei Feinstaub und Rückständen",
            "Strukturierter Ablauf für Post-Bau-Situationen",
            "Verlässliche Planung mit klarer Kommunikation",
            "Professionelles Ergebnis, das Zeit und Aufwand reduziert",
          ],
        },
      }}
    />
  );
}
