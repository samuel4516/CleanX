import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | CleanX Reinigung",
  description: "Datenschutzerklärung von CleanX Reinigung.",
};

export default function DatenschutzPage() {
  return (
    <main className="privacy-page section">
      <div className="container privacy-container">
        <article className="privacy-card">
          <h1>Datenschutzerklärung</h1>

          <section>
            <h2>1. Verantwortlicher</h2>
            <p>Samuel Shestel CleanX Reinigung</p>
            <p>Bittlmairstraße 7, 85051 Ingolstadt</p>
            <p>cleanx.munchen@gmail.com</p>
            <p>+49 160 95029314</p>
          </section>

          <section>
            <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
              Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TMG).
            </p>
          </section>

          <section>
            <h2>
              3. Erhebung und Speicherung personenbezogener Daten beim Besuch der
              Website
            </h2>
            <p>
              Beim Aufrufen dieser Website werden durch den Hostinganbieter
              automatisch Informationen erfasst. Dies sind:
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Diese Daten dienen ausschließlich der Sicherstellung eines
              störungsfreien Betriebs der Website.
            </p>
          </section>

          <section>
            <h2>4. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA gehostet.
            </p>
            <p>
              Vercel speichert Logfiles (z. B. IP-Adressen), um den sicheren
              Betrieb der Website zu gewährleisten.
            </p>
            <p>Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p>Weitere Informationen:</p>
            <p>
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2>5. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen senden, werden
              folgende Daten verarbeitet:
            </p>
            <ul>
              <li>Name</li>
              <li>Telefonnummer</li>
              <li>E-Mail-Adresse</li>
              <li>Art der Leistung</li>
              <li>Wunschtermin</li>
              <li>Nachricht</li>
            </ul>
            <p>Diese Daten werden zur Bearbeitung Ihrer Anfrage verwendet.</p>
            <p>
              Zusätzlich können Sie Fotos hochladen. Diese können
              personenbezogene Daten enthalten (z. B. Informationen über
              Wohnräume oder Gegenstände). Die Verarbeitung erfolgt
              ausschließlich zur Erstellung eines Angebots.
            </p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
          </section>

          <section>
            <h2>6. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine
              Textdateien, die auf Ihrem Endgerät gespeichert werden.
            </p>
            <p>
              Cookies richten keinen Schaden an und dienen dazu, unser Angebot
              nutzerfreundlicher zu machen.
            </p>
          </section>

          <section>
            <h2>7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an
              &quot;https://&quot;.
            </p>
          </section>

          <section>
            <h2>8. Speicherdauer</h2>
            <p>
              Ihre Daten werden nur so lange gespeichert, wie dies zur
              Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2>9. Rechte der betroffenen Personen</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung</li>
              <li>Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
            </ul>
          </section>

          <section>
            <h2>10. Widerruf Ihrer Einwilligung</h2>
            <p>
              Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
            </p>
          </section>

          <section>
            <h2>11. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
