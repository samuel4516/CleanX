"use client";

import { useEffect } from "react";
import ServicePageHeader from "./components/service-page-header";
import { useLanguage, type SiteLanguage } from "./components/language-provider";

const ENGLISH_MARKUP = `
    <main class="home-main">
      <section class="hero section">
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">Premium local team in Munich</span>
            <h1>Cleaning &amp; Home Services in Munich</h1>
            <p class="hero-text">
              Book trusted cleaning and practical home services with one reliable
              team. We offer fast booking, transparent estimates, careful work,
              and quality results for homes and small businesses across Munich.
            </p>

            <div class="hero-actions">
              <a class="btn btn-primary" href="#quote-form">Get a Quote</a>
              <a class="btn btn-secondary" href="#quote-form">Book Now</a>
            </div>

            <ul class="hero-highlights" aria-label="Key service highlights">
              <li>Fast response and flexible appointments</li>
              <li>Transparent estimates before work starts</li>
              <li>Reliable local service for homes and rentals</li>
            </ul>
          </div>

          <div class="hero-panel reveal">
            <div class="hero-card hero-card-main">
              <div class="hero-card-top">
                <span class="status-pill">Fast response</span>
                <span class="rating-pill" aria-label="Rated 4.9 out of 5 stars">
                  ★ 4.9 local rating
                </span>
              </div>

              <h2>Clear estimates in just a few steps</h2>
              <p>
                Tell us what you need, upload one or more photos when helpful,
                and receive a clear estimate before booking. We keep communication
                simple, quick, and professional.
              </p>

              <div class="hero-metrics">
                <article>
                  <strong>Same-day</strong>
                  <span>response for many requests</span>
                </article>
                <article>
                  <strong>Munich-wide</strong>
                  <span>coverage across neighborhoods</span>
                </article>
                <article>
                  <strong>Multi-service</strong>
                  <span>cleaning and practical home help</span>
                </article>
              </div>
            </div>

            <div class="hero-card hero-card-note">
              <p>
                From upholstery and deep cleaning to move-out cleans, windows,
                post-renovation jobs, small repairs, and furniture assembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section services" id="services">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Our services</span>
            <h2>One trusted team for cleaning and home services in Munich</h2>
            <p>
              Choose the service you need and get a clear quote before booking.
              Every service card below leads to a dedicated page with details.
            </p>
          </div>

          <div class="services-grid">
            <a class="service-card service-link reveal" href="/upholstery-cleaning">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4H4v-4Zm2-6h12v2H6V7Zm1 10v2m10-2v2"
                  />
                </svg>
              </div>
              <h3>Upholstery Cleaning</h3>
              <p>
                Sofa, chair, and mattress care with fabric-safe products and
                deep extraction methods.
              </p>
            </a>

            <a class="service-card service-link reveal" href="/deep-cleaning">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 12a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5H4v-5Zm14-3h2v8h-2M8 7V5m4 2V5"
                  />
                </svg>
              </div>
              <h3>Deep Cleaning</h3>
              <p>
                Intensive home cleaning for kitchens, bathrooms, floors, and
                neglected areas that need full attention.
              </p>
            </a>

            <a class="service-card service-link reveal" href="/window-cleaning">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8H5V9Zm2-2V5h10v2"
                  />
                </svg>
              </div>
              <h3>Window Cleaning</h3>
              <p>
                Interior and accessible exterior window cleaning for brighter
                rooms and streak-free glass surfaces.
              </p>
            </a>

            <a class="service-card service-link reveal" href="/move-out-cleaning">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 6h16v12H4V6Zm3 3h10m-8 3h6m-7 3h8"
                  />
                </svg>
              </div>
              <h3>Move-Out Cleaning</h3>
              <p>
                End-of-tenancy cleaning focused on handover readiness for
                renters, landlords, and property managers.
              </p>
            </a>

            <a class="service-card service-link reveal" href="/post-renovation-cleaning">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M7 19V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10M5 19h14M9 7V5h6v2"
                  />
                </svg>
              </div>
              <h3>Post-Renovation Cleaning</h3>
              <p>
                Dust and residue removal after renovation, painting, or repair
                work so your space is ready to use.
              </p>
            </a>

            <a class="service-card service-link reveal" href="/painting-repairs">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M12 3v7m0 0 3-3m-3 3-3-3m-2 8a5 5 0 0 0 10 0c0-2.5-2-3.5-5-6-3 2.5-5 3.5-5 6Z"
                  />
                </svg>
              </div>
              <h3>Painting &amp; Small Repairs</h3>
              <p>
                Small wall touch-ups, patching, and practical fixes to improve
                the look and function of your space.
              </p>
            </a>

            <a class="service-card service-link reveal" href="/furniture-assembly">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M5 7h14v4H5zM6 11h12v8H6zM9 7V5m6 2V5m-6 12v2m6-2v2" />
                </svg>
              </div>
              <h3>Furniture Assembly</h3>
              <p>
                Professional assembly for flat-pack furniture, shelves, and
                home-office setups with careful handling.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section class="section why-us" id="why-us">
        <div class="container why-grid">
          <div class="section-heading reveal">
            <span class="eyebrow">Why choose us</span>
            <h2>Built for reliable service, clear communication, and clean results</h2>
            <p>
              We combine cleaning expertise with practical home-service support,
              so you can solve multiple tasks with one trusted local team.
            </p>
          </div>

          <div class="reasons-card reveal">
            <ul class="reasons-list">
              <li>Fast response and straightforward booking process</li>
              <li>Clear estimates with transparent scope of work</li>
              <li>Reliable local service throughout Munich</li>
              <li>Careful work standards for homes and commercial spaces</li>
              <li>Flexible appointments based on your schedule</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section gallery-section" id="results">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Before &amp; after</span>
            <h2>Visible improvements across cleaning and home-service jobs</h2>
            <p>
              Example placeholder visuals showing the kind of detail and finish
              clients expect from our team in Munich.
            </p>
          </div>

          <div class="gallery-grid">
            <article class="gallery-card reveal">
              <div class="gallery-pair">
                <figure class="gallery-image before sofa-shot">
                  <span>Before</span>
                </figure>
                <figure class="gallery-image after sofa-shot">
                  <span>After</span>
                </figure>
              </div>
              <h3>Upholstery refresh</h3>
              <p>Improved appearance and freshness on daily-use seating.</p>
            </article>

            <article class="gallery-card reveal">
              <div class="gallery-pair">
                <figure class="gallery-image before carpet-shot">
                  <span>Before</span>
                </figure>
                <figure class="gallery-image after carpet-shot">
                  <span>After</span>
                </figure>
              </div>
              <h3>Deep cleaning result</h3>
              <p>Reduced buildup and restored a cleaner overall finish.</p>
            </article>

            <article class="gallery-card reveal">
              <div class="gallery-pair">
                <figure class="gallery-image before mattress-shot">
                  <span>Before</span>
                </figure>
                <figure class="gallery-image after mattress-shot">
                  <span>After</span>
                </figure>
              </div>
              <h3>Post-renovation cleanup</h3>
              <p>Removed dust residue and prepared the space for handover.</p>
            </article>

            <article class="gallery-card reveal">
              <div class="gallery-pair">
                <figure class="gallery-image before chair-shot">
                  <span>Before</span>
                </figure>
                <figure class="gallery-image after chair-shot">
                  <span>After</span>
                </figure>
              </div>
              <h3>Window service finish</h3>
              <p>Cleaner glass and brighter interior light after treatment.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section testimonials" id="reviews">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Customer reviews</span>
            <h2>Trusted by households, tenants, and local businesses in Munich</h2>
            <p>
              Clients choose us for reliable planning, careful execution, and
              clear communication from quote to completion.
            </p>
          </div>

          <div class="testimonials-grid">
            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “Our beige sofa looked tired after years of daily use. CleanX
                made it look fresher and handled the fabric very carefully.”
              </p>
              <div class="testimonial-meta">
                <strong>Anna Weber</strong>
                <span>Upholstery cleaning</span>
              </div>
            </article>

            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “We booked deep cleaning and window service for our office.
                Communication was fast and the final result was excellent.”
              </p>
              <div class="testimonial-meta">
                <strong>Markus Hoffmann</strong>
                <span>Deep cleaning + windows</span>
              </div>
            </article>

            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “We needed move-out cleaning on short notice. The team was
                punctual, careful, and the handover went smoothly.”
              </p>
              <div class="testimonial-meta">
                <strong>Sophie Keller</strong>
                <span>Move-out cleaning</span>
              </div>
            </article>

            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “After renovation, we booked post-construction cleaning and a
                few small repairs. Everything looked ready to use the same day.”
              </p>
              <div class="testimonial-meta">
                <strong>Daniel Schmid</strong>
                <span>Post-renovation + repairs</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section booking-section" id="quote-form">
        <div class="container booking-grid">
          <div class="booking-copy reveal">
            <span class="eyebrow">Booking &amp; quote request</span>
            <h2>Send your details and photos for a fast estimate</h2>
            <p>
              Select the service you need, add any details, and upload photos
              where helpful. We use this to send a clear, transparent estimate.
            </p>

            <div class="info-card">
              <h3>What helps us quote faster?</h3>
              <ul>
                <li>Photos of the full room, item, or work area</li>
                <li>Close-up images of problem spots or damaged areas</li>
                <li>Your preferred date and key access information</li>
              </ul>
            </div>
          </div>

          <form class="booking-form reveal" id="booking-form" novalidate>
            <div class="form-row">
              <label for="full-name">Full name</label>
              <input id="full-name" name="fullName" type="text" required />
              <small class="field-error" id="error-full-name"></small>
            </div>

            <div class="form-grid">
              <div class="form-row">
                <label for="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" required />
                <small class="field-error" id="error-phone"></small>
              </div>

              <div class="form-row">
                <label for="email">Email</label>
                <input id="email" name="email" type="email" required />
                <small class="field-error" id="error-email"></small>
              </div>
            </div>

            <div class="form-grid">
              <div class="form-row">
                <label for="service-type">Service type</label>
                <select id="service-type" name="serviceType" required>
                  <option value="">Select a service</option>
                  <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Window Cleaning">Window Cleaning</option>
                  <option value="Move-Out Cleaning">Move-Out Cleaning</option>
                  <option value="Post-Renovation Cleaning">
                    Post-Renovation Cleaning
                  </option>
                  <option value="Painting &amp; Small Repairs">
                    Painting &amp; Small Repairs
                  </option>
                  <option value="Furniture Assembly">Furniture Assembly</option>
                </select>
                <small class="field-error" id="error-service-type"></small>
              </div>

              <div class="form-row">
                <label for="preferred-date">Preferred date</label>
                <input
                  id="preferred-date"
                  name="preferredDate"
                  type="date"
                  required
                />
                <small class="field-error" id="error-preferred-date"></small>
              </div>
            </div>

            <div class="form-row">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us what service you need, your location in Munich, and any details we should know."
              ></textarea>
            </div>

            <div class="form-row">
              <label for="photos">Upload photos</label>
              <label class="upload-field" for="photos">
                <span class="upload-icon" aria-hidden="true">＋</span>
                <span class="upload-copy">
                  <strong>Add one or more photos</strong>
                  <small>
                    Price estimates are given after we review the uploaded
                    photos.
                  </small>
                </span>
              </label>
              <input
                id="photos"
                name="photos"
                type="file"
                accept="image/*"
                multiple
              />
              <div class="upload-feedback" id="upload-feedback">
                No files selected yet
              </div>
            </div>

            <button class="btn btn-primary btn-submit" type="submit">
              Request Booking
            </button>
            <p class="form-success" id="form-success" aria-live="polite"></p>
          </form>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="container contact-grid">
          <div class="contact-card reveal">
            <span class="eyebrow">Contact</span>
            <h2>CleanX Reinigung</h2>
            <p>
              Local cleaning and home-services company for Munich apartments,
              houses, rentals, offices, and commercial spaces.
            </p>
          </div>

          <div class="contact-card reveal">
            <h3>Reach us</h3>
            <ul class="contact-list">
              <li><strong>Location:</strong> Munich, Germany</li>
              <li><strong>Phone / WhatsApp:</strong> +49 160 95029314</li>
              <li><strong>Email:</strong> cleanx.munchen@gmail.com</li>
            </ul>
          </div>

          <div class="contact-card reveal">
            <h3>Working hours</h3>
            <ul class="contact-list">
              <li><strong>Monday – Friday:</strong> 09:00 – 20:00</li>
              <li><strong>Saturday:</strong> 10:00 – 18:00</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
`;

const GERMAN_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["Munich upholstery care", "Polsterpflege in München"],
  ["Services", "Leistungen"],
  ["Why Us", "Warum wir"],
  ["Results", "Ergebnisse"],
  ["Reviews", "Bewertungen"],
  ["Booking", "Buchung"],
  ["Contact info", "Kontaktinfo"],
  ["Contact", "Kontakt"],
  ["Book Now", "Jetzt buchen"],
  ["Get a Quote", "Angebot anfragen"],
  ["Trusted local cleaning service in Munich", "Verlässlicher lokaler Reinigungsservice in München"],
  ["Professional Upholstery &amp; Carpet Cleaning in Munich", "Professionelle Polster- &amp; Teppichreinigung in München"],
  [
    "We clean sofas, carpets, mattresses, dining chairs, and delicate\n              upholstery with professional equipment, gentle products, and\n              reliable service that fits around your schedule.",
    "Wir reinigen Sofas, Teppiche, Matratzen, Esszimmerstühle und empfindliche\n              Polster mit professioneller Ausrüstung, schonenden Mitteln und\n              zuverlässigem Service, der in Ihren Alltag passt.",
  ],
  ["Photo-based price estimate", "Preisangebot per Foto"],
  ["Private homes and small businesses", "Privathaushalte und kleine Unternehmen"],
  ["Careful, fabric-safe cleaning methods", "Sorgfältige, materialschonende Reinigungsmethoden"],
  ["Fast response", "Schnelle Antwort"],
  ["★ 4.9 local rating", "★ 4,9 lokale Bewertung"],
  ["Photo estimate in just a few steps", "Preisangebot per Foto in wenigen Schritten"],
  [
    "Send one or more photos of the item you want cleaned and we’ll\n                review the condition, stains, and fabric type before giving you\n                a price estimate.",
    "Senden Sie ein oder mehrere Fotos des zu reinigenden Objekts. Wir prüfen\n                Zustand, Flecken und Materialart, bevor wir ein Preisangebot erstellen.",
  ],
  ["Same-day", "Am selben Tag"],
  ["reply for many requests", "Antwort bei vielen Anfragen"],
  ["Munich-wide", "Ganz München"],
  ["local service coverage", "lokale Serviceabdeckung"],
  ["Safe care", "Schonende Reinigung"],
  ["for upholstery and carpets", "für Polster und Teppiche"],
  [
    "Ideal for sofa refreshes, mattress deep cleaning, carpet care,\n                stain treatment, and regular property maintenance.",
    "Ideal für Sofa-Auffrischungen, Matratzen-Tiefenreinigung, Teppichpflege,\n                Fleckenbehandlung und regelmäßige Objektpflege.",
  ],
  ["Our services", "Unsere Leistungen"],
  ["Specialized cleaning for the surfaces you use every day", "Spezialisierte Reinigung für Flächen, die Sie täglich nutzen"],
  [
    "Practical, careful cleaning solutions for homes, rentals, offices,\n              studios, and waiting areas across Munich.",
    "Praktische und sorgfältige Reinigungslösungen für Wohnungen, Mietobjekte,\n              Büros, Studios und Wartebereiche in ganz München.",
  ],
  ["Sofa cleaning", "Sofareinigung"],
  ["Corner sofa cleaning", "Ecksofa-Reinigung"],
  ["Mattress cleaning", "Matratzenreinigung"],
  ["Carpet cleaning", "Teppichreinigung"],
  ["Upholstery cleaning", "Polsterreinigung"],
  ["Stain removal", "Fleckenentfernung"],
  ["Why choose us", "Warum wir"],
  ["Built around trust, care, and a smooth booking experience", "Auf Vertrauen, Sorgfalt und einfache Buchung ausgelegt"],
  [
    "Local customers usually want two things: confidence in the result\n              and a quick way to get started. We designed the service around\n              both.",
    "Lokale Kundinnen und Kunden wollen meist zwei Dinge: Vertrauen ins Ergebnis\n              und einen schnellen Start. Unser Service ist genau darauf ausgelegt.",
  ],
  ["Professional equipment for deep and effective cleaning", "Professionelle Geräte für gründliche und effektive Reinigung"],
  ["Safe and gentle cleaning products for daily-use fabrics", "Sichere und schonende Reinigungsmittel für Alltagsstoffe"],
  ["Local service throughout Munich with reliable scheduling", "Lokaler Service in ganz München mit verlässlicher Terminplanung"],
  ["Reliable and careful work in homes and small businesses", "Zuverlässige und sorgfältige Arbeit in Wohnungen und kleinen Betrieben"],
  ["Price estimate by photo before booking is confirmed", "Preisangebot per Foto vor der Buchungsbestätigung"],
  ["Before &amp; after", "Vorher &amp; Nachher"],
  ["Cleaning results customers can see right away", "Reinigungsergebnisse, die man sofort sieht"],
  [
    "Example placeholder visuals for common upholstery and carpet jobs,\n              presented in a responsive grid.",
    "Beispielhafte Platzhalter für typische Polster- und Teppichaufträge,\n              dargestellt in einem responsiven Raster.",
  ],
  ["Before", "Vorher"],
  ["After", "Nachher"],
  ["Customer reviews", "Kundenbewertungen"],
  ["Kind words from local clients in and around Munich", "Positive Rückmeldungen von Kundinnen und Kunden aus München"],
  [
    "Trust matters when someone is coming into your home or workspace.\n              These review cards are styled to feel credible and reassuring.",
    "Vertrauen ist wichtig, wenn jemand in Ihre Wohnung oder Ihr Unternehmen kommt.\n              Diese Bewertungen sind bewusst klar und vertrauenswürdig dargestellt.",
  ],
  ["Booking &amp; quote request", "Buchung &amp; Angebotsanfrage"],
  ["Send your details and photos for a fast estimate", "Senden Sie Ihre Angaben und Fotos für ein schnelles Angebot"],
  [
    "Upload one or more photos so we can review the size, material, and\n              condition. Price estimates are given after reviewing the photos.",
    "Laden Sie ein oder mehrere Fotos hoch, damit wir Größe, Material und\n              Zustand prüfen können. Preisangebote erstellen wir nach Sichtung der Fotos.",
  ],
  ["What helps us quote faster?", "Was hilft uns bei einer schnellen Angebotsabgabe?"],
  ["Clear photos of the full item", "Klare Fotos des gesamten Objekts"],
  ["Close-up images of stains or marked areas", "Nahaufnahmen von Flecken oder markierten Bereichen"],
  ["Your preferred date and any access notes", "Ihr Wunschtermin und Hinweise zum Zugang"],
  ["Full name", "Vollständiger Name"],
  ["Phone number", "Telefonnummer"],
  ["Email", "E-Mail"],
  ["Service type", "Art der Leistung"],
  ["Select a service", "Leistung auswählen"],
  ["Preferred date", "Wunschtermin"],
  ["Message", "Nachricht"],
  ["Upload photos", "Fotos hochladen"],
  ["Add one or more photos", "Ein oder mehrere Fotos hinzufügen"],
  ["Price estimates are given after we review the uploaded\n                    photos.", "Preisangebote erstellen wir nach Sichtung der\n                    hochgeladenen Fotos."],
  ["No files selected yet", "Noch keine Dateien ausgewählt"],
  ["Request Booking", "Buchung anfragen"],
  ["Reach us", "So erreichen Sie uns"],
  ["Location:", "Standort:"],
  ["Phone / WhatsApp:", "Telefon / WhatsApp:"],
  ["Working hours", "Öffnungszeiten"],
  ["Monday – Friday:", "Montag – Freitag:"],
  ["Saturday:", "Samstag:"],
  ["Sunday:", "Sonntag:"],
  ["Closed", "Geschlossen"],
  [
    "Local upholstery and carpet cleaning service for Munich homes,\n              rentals, studios, and small business spaces.",
    "Lokaler Service für Polster- und Teppichreinigung in Münchner Wohnungen,\n              Mietobjekten, Studios und kleinen Geschäftsräumen.",
  ],
  [
    "Premium-feeling local cleaning service focused on careful work,\n            quick estimates, and a smooth booking experience in Munich.",
    "Lokaler Reinigungsservice mit Premium-Anspruch, Fokus auf sorgfältiger Arbeit,\n            schnellen Angeboten und einer einfachen Buchung in München.",
  ],
  ["Quick links", "Schnellzugriff"],
  ["Get a Quote", "Angebot anfragen"],
  ["All rights reserved.", "Alle Rechte vorbehalten."],
  ["Munich home services", "Münchner Hausservice"],
  ["Before &amp; After", "Vorher &amp; Nachher"],
  ["Book Service", "Service buchen"],
  ["Premium local team in Munich", "Premium-Lokalteam in München"],
  ["Cleaning &amp; Home Services in Munich", "Reinigungs- &amp; Hausservices in München"],
  ["Fast response and flexible appointments", "Schnelle Rückmeldung und flexible Termine"],
  ["Transparent estimates before work starts", "Transparente Angebote vor Arbeitsbeginn"],
  ["Reliable local service for homes and rentals", "Zuverlässiger lokaler Service für Wohnungen und Mietobjekte"],
  ["Clear estimates in just a few steps", "Klare Angebote in wenigen Schritten"],
  ["response for many requests", "Rückmeldung bei vielen Anfragen"],
  ["coverage across neighborhoods", "Abdeckung in vielen Stadtteilen"],
  ["Multi-service", "Multi-Service"],
  ["cleaning and practical home help", "Reinigung und praktische Haushaltshilfe"],
  ["Our services", "Unsere Leistungen"],
  ["One trusted team for cleaning and home services in Munich", "Ein verlässliches Team für Reinigungs- und Hausservices in München"],
  ["Upholstery Cleaning", "Polsterreinigung"],
  ["Deep Cleaning", "Tiefenreinigung"],
  ["Window Cleaning", "Fensterreinigung"],
  ["Move-Out Cleaning", "Auszugsreinigung"],
  ["Post-Renovation Cleaning", "Reinigung nach Renovierung"],
  ["Painting &amp; Small Repairs", "Malerarbeiten &amp; Kleinreparaturen"],
  ["Furniture Assembly", "Möbelmontage"],
  ["Why choose us", "Warum wir"],
  ["Built for reliable service, clear communication, and clean results", "Ausgelegt auf verlässlichen Service, klare Kommunikation und saubere Ergebnisse"],
  ["Fast response and straightforward booking process", "Schnelle Rückmeldung und unkomplizierte Buchung"],
  ["Clear estimates with transparent scope of work", "Klare Angebote mit transparentem Leistungsumfang"],
  ["Reliable local service throughout Munich", "Zuverlässiger lokaler Service in ganz München"],
  ["Careful work standards for homes and commercial spaces", "Sorgfältige Arbeitsstandards für Wohn- und Gewerberäume"],
  ["Flexible appointments based on your schedule", "Flexible Termine passend zu Ihrem Zeitplan"],
  ["Visible improvements across cleaning and home-service jobs", "Sichtbare Verbesserungen bei Reinigungs- und Hausservice-Aufträgen"],
  ["Trusted by households, tenants, and local businesses in Munich", "Vertrauenswürdig für Haushalte, Mieter und lokale Unternehmen in München"],
  ["Select a service", "Leistung auswählen"],
  ["Contact", "Kontakt"],
];

const GERMAN_MARKUP = GERMAN_REPLACEMENTS.reduce((markup, [englishText, germanText]) => {
  return markup.replaceAll(englishText, germanText);
}, ENGLISH_MARKUP);

const HOME_MARKUP: Record<SiteLanguage, string> = {
  en: ENGLISH_MARKUP,
  de: GERMAN_MARKUP,
};

const FORM_TEXT: Record<
  SiteLanguage,
  {
    noFiles: string;
    onePhoto: string;
    manyPhotos: string;
    fullNameError: string;
    phoneError: string;
    emailError: string;
    serviceError: string;
    dateError: string;
  }
> = {
  en: {
    noFiles: "No files selected yet",
    onePhoto: "1 photo selected:",
    manyPhotos: "photos selected:",
    fullNameError: "Please enter your full name.",
    phoneError: "Please enter a valid phone number.",
    emailError: "Please enter a valid email address.",
    serviceError: "Please choose a service type.",
    dateError: "Please choose a preferred date.",
  },
  de: {
    noFiles: "Noch keine Dateien ausgewählt",
    onePhoto: "1 Foto ausgewählt:",
    manyPhotos: "Fotos ausgewählt:",
    fullNameError: "Bitte geben Sie Ihren vollständigen Namen ein.",
    phoneError: "Bitte geben Sie eine gültige Telefonnummer ein.",
    emailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    serviceError: "Bitte wählen Sie eine Leistung aus.",
    dateError: "Bitte wählen Sie einen Wunschtermin aus.",
  },
};

const SUBMIT_SUCCESS_TEXT = "Thank you! Your request has been sent.";
const SUBMIT_ERROR_TEXT = "Something went wrong. Please try again.";
const RESET_UPLOAD_FEEDBACK_TEXT = "No files selected yet";

export default function Home() {
  const { language } = useLanguage();

  const pageMarkup = HOME_MARKUP[language] ?? HOME_MARKUP.en;

  useEffect(() => {
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]')
    );
    const bookingForm = document.getElementById("booking-form") as HTMLFormElement | null;
    const photosInput = document.getElementById("photos") as HTMLInputElement | null;
    const uploadFeedback = document.getElementById("upload-feedback");
    const successMessage = document.getElementById("form-success");
    const preferredDateInput = document.getElementById("preferred-date") as HTMLInputElement | null;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const text = FORM_TEXT[language] ?? FORM_TEXT.en;

    if (preferredDateInput) {
      const localToday = new Date();
      localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
      preferredDateInput.min = localToday.toISOString().split("T")[0];
    }

    const navLinkHandlers = new Map<HTMLAnchorElement, EventListener>();

    navLinks.forEach((link) => {
      const handler: EventListener = (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector<HTMLElement>(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      link.addEventListener("click", handler);
      navLinkHandlers.set(link, handler);
    });

    const handlePhotoChange = () => {
      if (!photosInput || !uploadFeedback) return;
      const files = Array.from(photosInput.files || []);

      if (!files.length) {
        uploadFeedback.textContent = text.noFiles;
        return;
      }

      const fileLabel = files.map((file) => file.name).join(", ");
      uploadFeedback.textContent =
        files.length === 1
          ? `${text.onePhoto} ${fileLabel}`
          : `${files.length} ${text.manyPhotos} ${fileLabel}`;
    };

    photosInput?.addEventListener("change", handlePhotoChange);

    const validators: Record<string, (value: string) => string> = {
      "full-name": (value) =>
        value.trim().length >= 2 ? "" : text.fullNameError,
      phone: (value) =>
        /^[+\d\s().-]{7,}$/.test(value.trim())
          ? ""
          : text.phoneError,
      email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
          ? ""
          : text.emailError,
      "service-type": (value) => (value ? "" : text.serviceError),
      "preferred-date": (value) => (value ? "" : text.dateError),
    };

    const setError = (fieldId: string, message: string) => {
      const field = document.getElementById(fieldId) as
        | HTMLInputElement
        | HTMLSelectElement
        | null;
      const errorField = document.getElementById(`error-${fieldId}`);
      if (!field || !errorField) return;

      errorField.textContent = message;
      field.setAttribute("aria-invalid", message ? "true" : "false");
    };

    const fieldListeners: Array<{
      field: HTMLInputElement | HTMLSelectElement;
      onInput: EventListener;
      onBlur: EventListener;
    }> = [];

    Object.keys(validators).forEach((fieldId) => {
      const field = document.getElementById(fieldId) as
        | HTMLInputElement
        | HTMLSelectElement
        | null;
      if (!field) return;

      const onInput: EventListener = () => {
        setError(fieldId, validators[fieldId](field.value));
      };

      const onBlur: EventListener = () => {
        setError(fieldId, validators[fieldId](field.value));
      };

      field.addEventListener("input", onInput);
      field.addEventListener("blur", onBlur);
      fieldListeners.push({ field, onInput, onBlur });
    });

    const handleSubmit: EventListener = (event) => {
      event.preventDefault();
      if (!successMessage) return;

      successMessage.textContent = "";
      successMessage.classList.remove("is-success", "is-error");
      let hasErrors = false;

      Object.keys(validators).forEach((fieldId) => {
        const field = document.getElementById(fieldId) as
          | HTMLInputElement
          | HTMLSelectElement
          | null;
        if (!field) return;

        const message = validators[fieldId](field.value);
        setError(fieldId, message);

        if (message) {
          hasErrors = true;
        }
      });

      if (hasErrors || !bookingForm) return;

      const formData = new FormData(bookingForm);

      void (async () => {
        try {
          const response = await fetch("/api/send", {
            method: "POST",
            body: formData,
          });

          const result = await response.json().catch(() => null);
          if (!response.ok || !result?.ok) {
            throw new Error("Form submission failed");
          }

          successMessage.textContent = SUBMIT_SUCCESS_TEXT;
          successMessage.classList.remove("is-error");
          successMessage.classList.add("is-success");
          bookingForm.reset();

          if (uploadFeedback) {
            uploadFeedback.textContent = RESET_UPLOAD_FEEDBACK_TEXT;
          }

          Object.keys(validators).forEach((fieldId) => {
            setError(fieldId, "");
          });
        } catch {
          successMessage.textContent = SUBMIT_ERROR_TEXT;
          successMessage.classList.remove("is-success");
          successMessage.classList.add("is-error");
        }
      })();
    };

    bookingForm?.addEventListener("submit", handleSubmit);

    let observer: IntersectionObserver | null = null;
    const revealFallbackTimer = window.setTimeout(() => {
      const hasVisibleItems = revealItems.some((item) =>
        item.classList.contains("is-visible")
      );
      if (!hasVisibleItems) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }
    }, 900);

    if ("IntersectionObserver" in window) {
      try {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.18 }
        );

        revealItems.forEach((item) => observer?.observe(item));
      } catch {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      window.clearTimeout(revealFallbackTimer);
      photosInput?.removeEventListener("change", handlePhotoChange);
      bookingForm?.removeEventListener("submit", handleSubmit);

      navLinkHandlers.forEach((handler, link) => {
        link.removeEventListener("click", handler);
      });

      fieldListeners.forEach(({ field, onInput, onBlur }) => {
        field.removeEventListener("input", onInput);
        field.removeEventListener("blur", onBlur);
      });

      observer?.disconnect();
    };
  }, [language]);

  return (
    <>
      <ServicePageHeader />
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
    </>
  );
}
