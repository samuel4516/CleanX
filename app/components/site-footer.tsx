"use client";

import Link from "next/link";
import { useLanguage } from "./language-provider";

const FOOTER_TRANSLATIONS = {
  en: {
    description:
      "Premium-feeling local cleaning service focused on careful work, quick estimates, and a smooth booking experience in Munich.",
    quickLinks: "Quick links",
    services: "Services",
    beforeAfter: "Before & After",
    reviews: "Reviews",
    quote: "Get a Quote",
    contactInfo: "Contact info",
    rights: "All rights reserved.",
  },
  de: {
    description:
      "Lokaler Reinigungs- und Hausservice mit Premium-Anspruch, Fokus auf sorgfältiger Arbeit, schnellen Angeboten und einfacher Buchung in München.",
    quickLinks: "Schnellzugriff",
    services: "Leistungen",
    beforeAfter: "Vorher & Nachher",
    reviews: "Bewertungen",
    quote: "Angebot anfragen",
    contactInfo: "Kontaktinfo",
    rights: "Alle Rechte vorbehalten.",
  },
} as const;

export default function SiteFooter() {
  const { language } = useLanguage();
  const labels = FOOTER_TRANSLATIONS[language] ?? FOOTER_TRANSLATIONS.de;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>CleanX Reinigung</h3>
          <p>{labels.description}</p>
        </div>

        <div>
          <h3>{labels.quickLinks}</h3>
          <ul className="footer-links">
            <li>
              <Link href="/#services">{labels.services}</Link>
            </li>
            <li>
              <Link href="/#results">{labels.beforeAfter}</Link>
            </li>
            <li>
              <Link href="/#reviews">{labels.reviews}</Link>
            </li>
            <li>
              <Link href="/#booking-form">{labels.quote}</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>{labels.contactInfo}</h3>
          <ul className="footer-links">
            <li>Munich, Germany</li>
            <li>+49 160 95029314</li>
            <li>cleanx.munchen@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; 2026 CleanX Reinigung. {labels.rights}
        </p>
      </div>
    </footer>
  );
}
