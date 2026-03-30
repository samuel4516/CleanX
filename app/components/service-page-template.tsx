import Link from "next/link";
import ServicePageHeader from "./service-page-header";

type ServicePageTemplateProps = {
  title: string;
  subtitle: string;
  intro: string;
  included: string[];
  forWho: string[];
  whyChoose: string[];
};

export default function ServicePageTemplate({
  title,
  subtitle,
  intro,
  included,
  forWho,
  whyChoose,
}: ServicePageTemplateProps) {
  return (
    <>
      <ServicePageHeader />
      <main className="service-page">
      <section className="section service-page-hero">
        <div className="container service-page-grid">
          <div className="service-page-copy">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/#booking">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="hero-card hero-card-main">
            <h2>Service overview</h2>
            <p>{intro}</p>
            <div className="hero-metrics">
              <article>
                <strong>Fast response</strong>
                <span>clear communication and planning</span>
              </article>
              <article>
                <strong>Munich-wide</strong>
                <span>local and reliable service coverage</span>
              </article>
              <article>
                <strong>Transparent</strong>
                <span>scope and estimate before start</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <article className="reasons-card">
            <h2>What is included</h2>
            <ul className="reasons-list">
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="reasons-card">
            <h2>Who it is for</h2>
            <ul className="reasons-list">
              {forWho.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why this service</span>
            <h2>Why clients in Munich book this service with CleanX</h2>
          </div>
          <div className="reasons-card">
            <ul className="reasons-list">
              {whyChoose.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-cta-card">
            <h2>Ready to book {title.toLowerCase()}?</h2>
            <p>
              Send your request with photos when needed and we will reply quickly
              with a transparent estimate and the next available appointment.
            </p>
            <Link className="btn btn-primary" href="/#booking">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
