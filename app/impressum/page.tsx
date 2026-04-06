import type { Metadata } from "next";
import ServicePageHeader from "../components/service-page-header";

export const metadata: Metadata = {
  title: "Impressum | CleanX Reinigung",
  description: "Impressum von CleanX Reinigung.",
};

export default function ImpressumPage() {
  return (
    <>
      <ServicePageHeader />
      <main className="privacy-page section">
        <div className="container privacy-container">
          <article className="privacy-card">
            <h1>Impressum</h1>

            <section>
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>CleanX Reinigung</p>
              <p>Samuel Shestel</p>
              <p>Bittlmairstraße 7</p>
              <p>85051 Ingolstadt, Deutschland</p>
            </section>

            <section>
              <h2>Kontakt</h2>
              <p>Telefon: +49 160 95029314</p>
              <p>E-Mail: cleanx.munchen@gmail.com</p>
            </section>

            <section>
              <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Samuel Shestel</p>
              <p>Bittlmairstraße 7</p>
              <p>85051 Ingolstadt, Deutschland</p>
            </section>

            <section>
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich...
              </p>
            </section>

            <section>
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält ggf. Links zu externen Websites Dritter...
              </p>
            </section>

            <section>
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
