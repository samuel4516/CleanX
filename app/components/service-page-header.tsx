"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

const HEADER_TRANSLATIONS = {
  en: {
    services: "Services",
    results: "Before & After",
    reviews: "Reviews",
    quote: "Get a Quote",
    mobileQuote: "Quote",
    book: "Book Service",
    languageAria: "Switch to German",
    brandTagline: "Munich home services",
  },
  de: {
    services: "Leistungen",
    results: "Vorher & Nachher",
    reviews: "Bewertungen",
    quote: "Angebot anfragen",
    mobileQuote: "Angebot",
    book: "Service buchen",
    languageAria: "Zur englischen Version wechseln",
    brandTagline: "Münchner Hausservice",
  },
} as const;

export default function ServicePageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const isGerman = language === "de";
  const labels = HEADER_TRANSLATIONS[language] ?? HEADER_TRANSLATIONS.en;

  const handleLanguageToggle = () => {
    setLanguage(isGerman ? "en" : "de");
  };

  const toHomeSection = (hash: string) => {
    if (pathname === "/") return hash;
    return `/${hash}`;
  };

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="CleanX Reinigung home">
          <span className="brand-mark">CX</span>
          <span className="brand-copy">
            <strong>CleanX Reinigung</strong>
            <small>{labels.brandTagline}</small>
          </span>
        </Link>

        <div className="header-actions-mobile">
          <Link
            className="mobile-quote-cta"
            href={toHomeSection("#quote-form")}
            onClick={closeMenu}
          >
            {labels.mobileQuote}
          </Link>

          <button
            className="lang-toggle-mobile"
            type="button"
            aria-label={labels.languageAria}
            onClick={handleLanguageToggle}
          >
            {isGerman ? "EN" : "DE"}
          </button>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-controls="site-nav"
            aria-label="Open navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          className={`site-nav ${menuOpen ? "is-open" : ""}`}
          id="site-nav"
          aria-label="Primary"
        >
          <Link href={toHomeSection("#services")} onClick={closeMenu}>
            {labels.services}
          </Link>
          <Link href={toHomeSection("#results")} onClick={closeMenu}>
            {labels.results}
          </Link>
          <Link href={toHomeSection("#reviews")} onClick={closeMenu}>
            {labels.reviews}
          </Link>
          <Link href={toHomeSection("#quote-form")} onClick={closeMenu}>
            {labels.quote}
          </Link>
          <Link className="nav-cta" href={toHomeSection("#quote-form")} onClick={closeMenu}>
            {labels.book}
          </Link>
          <button
            className="lang-toggle"
            type="button"
            aria-label={labels.languageAria}
            onClick={handleLanguageToggle}
          >
            {isGerman ? "EN" : "DE"}
          </button>
        </nav>
      </div>
    </header>
  );
}
