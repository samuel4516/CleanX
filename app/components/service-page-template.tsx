"use client";

import Link from "next/link";
import ServicePageHeader from "./service-page-header";
import { useLanguage, type SiteLanguage } from "./language-provider";

type ServicePageContent = {
  title: string;
  subtitle: string;
  intro: string;
  included: string[];
  forWho: string[];
  whyChoose: string[];
};

type ServicePageTemplateProps = {
  content: Record<SiteLanguage, ServicePageContent>;
};

const TEMPLATE_LABELS = {
  en: {
    quote: "Get a Quote",
    serviceOverview: "Service overview",
    fastResponse: "Fast response",
    fastResponseDesc: "clear communication and planning",
    munichWide: "Munich-wide",
    munichWideDesc: "local and reliable service coverage",
    transparent: "Transparent",
    transparentDesc: "scope and estimate before start",
    included: "What is included",
    forWho: "Who it is for",
    whyService: "Why this service",
    whyServiceHeading: "Why clients in Munich book this service with CleanX",
    readyToBook: "Ready to book",
    ctaCopy:
      "Send your request with photos when needed and we will reply quickly with a transparent estimate and the next available appointment.",
  },
  de: {
    quote: "Angebot anfragen",
    serviceOverview: "Leistungsübersicht",
    fastResponse: "Schnelle Rückmeldung",
    fastResponseDesc: "klare Kommunikation und Planung",
    munichWide: "Ganz München",
    munichWideDesc: "lokale und zuverlässige Einsatzgebiete",
    transparent: "Transparent",
    transparentDesc: "Umfang und Angebot vor dem Start",
    included: "Was ist enthalten",
    forWho: "Für wen geeignet",
    whyService: "Warum diese Leistung",
    whyServiceHeading:
      "Warum Kundinnen und Kunden in München diese Leistung bei CleanX buchen",
    readyToBook: "Bereit,",
    ctaCopy:
      "Senden Sie Ihre Anfrage bei Bedarf mit Fotos und wir antworten schnell mit einem transparenten Angebot und dem nächsten verfügbaren Termin.",
  },
} as const;

export default function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const { language } = useLanguage();

  const pageContent = content[language] ?? content.en;
  const labels = TEMPLATE_LABELS[language] ?? TEMPLATE_LABELS.en;

  return (
    <>
      <ServicePageHeader />
      <main className="service-page">
        <section className="section service-page-hero">
          <div className="container service-page-grid">
            <div className="service-page-copy">
              <h1>{pageContent.title}</h1>
              <p>{pageContent.subtitle}</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/#quote-form">
                  {labels.quote}
                </Link>
              </div>
            </div>

            <div className="hero-card hero-card-main">
              <h2>{labels.serviceOverview}</h2>
              <p>{pageContent.intro}</p>
              <div className="hero-metrics">
                <article>
                  <strong>{labels.fastResponse}</strong>
                  <span>{labels.fastResponseDesc}</span>
                </article>
                <article>
                  <strong>{labels.munichWide}</strong>
                  <span>{labels.munichWideDesc}</span>
                </article>
                <article>
                  <strong>{labels.transparent}</strong>
                  <span>{labels.transparentDesc}</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container service-detail-grid">
            <article className="reasons-card">
              <h2>{labels.included}</h2>
              <ul className="reasons-list">
                {pageContent.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="reasons-card">
              <h2>{labels.forWho}</h2>
              <ul className="reasons-list">
                {pageContent.forWho.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">{labels.whyService}</span>
              <h2>{labels.whyServiceHeading}</h2>
            </div>
            <div className="reasons-card">
              <ul className="reasons-list">
                {pageContent.whyChoose.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="service-cta-card">
              <h2>
                {labels.readyToBook} {pageContent.title}?
              </h2>
              <p>{labels.ctaCopy}</p>
              <Link className="btn btn-primary" href="/#quote-form">
                {labels.quote}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
