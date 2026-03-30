"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicePageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <small>Munich home services</small>
          </span>
        </Link>

        <div className="header-actions-mobile">
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
          <Link href="/#services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/#results" onClick={closeMenu}>
            Before &amp; After
          </Link>
          <Link href="/#reviews" onClick={closeMenu}>
            Reviews
          </Link>
          <Link href="/#booking" onClick={closeMenu}>
            Get a Quote
          </Link>
          <Link className="nav-cta" href="/#booking" onClick={closeMenu}>
            Book Service
          </Link>
        </nav>
      </div>
    </header>
  );
}
