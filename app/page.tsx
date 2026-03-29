"use client";

import { useEffect } from "react";

const PAGE_MARKUP = `
    <header class="site-header" id="top">
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="CleanX Reinigung home">
          <span class="brand-mark">CX</span>
          <span class="brand-copy">
            <strong>CleanX Reinigung</strong>
            <small>Munich upholstery care</small>
          </span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-nav"
          aria-label="Open navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="site-nav" id="site-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#results">Results</a>
          <a href="#reviews">Reviews</a>
          <a href="#booking">Booking</a>
          <a href="#contact">Contact</a>
          <a class="nav-cta" href="#booking">Book Now</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero section">
        <div class="container hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">Trusted local cleaning service in Munich</span>
            <h1>Professional Upholstery &amp; Carpet Cleaning in Munich</h1>
            <p class="hero-text">
              We clean sofas, carpets, mattresses, dining chairs, and delicate
              upholstery with professional equipment, gentle products, and
              reliable service that fits around your schedule.
            </p>

            <div class="hero-actions">
              <a class="btn btn-primary" href="#booking">Get a Quote</a>
              <a class="btn btn-secondary" href="#contact">Book Now</a>
            </div>

            <ul class="hero-highlights" aria-label="Key service highlights">
              <li>Photo-based price estimate</li>
              <li>Private homes and small businesses</li>
              <li>Careful, fabric-safe cleaning methods</li>
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

              <h2>Photo estimate in just a few steps</h2>
              <p>
                Send one or more photos of the item you want cleaned and we’ll
                review the condition, stains, and fabric type before giving you
                a price estimate.
              </p>

              <div class="hero-metrics">
                <article>
                  <strong>Same-day</strong>
                  <span>reply for many requests</span>
                </article>
                <article>
                  <strong>Munich-wide</strong>
                  <span>local service coverage</span>
                </article>
                <article>
                  <strong>Safe care</strong>
                  <span>for upholstery and carpets</span>
                </article>
              </div>
            </div>

            <div class="hero-card hero-card-note">
              <p>
                Ideal for sofa refreshes, mattress deep cleaning, carpet care,
                stain treatment, and regular property maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section services" id="services">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Our services</span>
            <h2>Specialized cleaning for the surfaces you use every day</h2>
            <p>
              Practical, careful cleaning solutions for homes, rentals, offices,
              studios, and waiting areas across Munich.
            </p>
          </div>

          <div class="services-grid">
            <article class="service-card reveal">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4H4v-4Zm2-6h12v2H6V7Zm1 10v2m10-2v2"
                  />
                </svg>
              </div>
              <h3>Sofa cleaning</h3>
              <p>
                Deep cleaning for fabric sofas to lift dirt, odors, and daily
                buildup while protecting the material.
              </p>
            </article>

            <article class="service-card reveal">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 12a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v5H4v-5Zm14-3h2v8h-2M8 7V5m4 2V5"
                  />
                </svg>
              </div>
              <h3>Corner sofa cleaning</h3>
              <p>
                Thorough cleaning for large L-shaped and sectional sofas, with
                attention to seams, corners, and heavy-use areas.
              </p>
            </article>

            <article class="service-card reveal">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8H5V9Zm2-2V5h10v2"
                  />
                </svg>
              </div>
              <h3>Mattress cleaning</h3>
              <p>
                Hygienic mattress treatment that helps reduce dust, stains, and
                freshness issues in sleeping areas.
              </p>
            </article>

            <article class="service-card reveal">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 6h16v12H4V6Zm3 3h10m-8 3h6m-7 3h8"
                  />
                </svg>
              </div>
              <h3>Carpet cleaning</h3>
              <p>
                Refresh wall-to-wall carpets and rugs with targeted treatment for
                traffic marks, dust, and surface stains.
              </p>
            </article>

            <article class="service-card reveal">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M7 19V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10M5 19h14M9 7V5h6v2"
                  />
                </svg>
              </div>
              <h3>Upholstery cleaning</h3>
              <p>
                Careful cleaning for chairs, benches, headboards, and fabric
                furniture used in homes and commercial spaces.
              </p>
            </article>

            <article class="service-card reveal">
              <div class="service-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M12 3v7m0 0 3-3m-3 3-3-3m-2 8a5 5 0 0 0 10 0c0-2.5-2-3.5-5-6-3 2.5-5 3.5-5 6Z"
                  />
                </svg>
              </div>
              <h3>Stain removal</h3>
              <p>
                Focused treatment for drink spills, food stains, and marked areas
                with methods selected for the specific fabric.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="section why-us" id="why-us">
        <div class="container why-grid">
          <div class="section-heading reveal">
            <span class="eyebrow">Why choose us</span>
            <h2>Built around trust, care, and a smooth booking experience</h2>
            <p>
              Local customers usually want two things: confidence in the result
              and a quick way to get started. We designed the service around
              both.
            </p>
          </div>

          <div class="reasons-card reveal">
            <ul class="reasons-list">
              <li>Professional equipment for deep and effective cleaning</li>
              <li>Safe and gentle cleaning products for daily-use fabrics</li>
              <li>Local service throughout Munich with reliable scheduling</li>
              <li>Reliable and careful work in homes and small businesses</li>
              <li>Price estimate by photo before booking is confirmed</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section gallery-section" id="results">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Before &amp; after</span>
            <h2>Cleaning results customers can see right away</h2>
            <p>
              Example placeholder visuals for common upholstery and carpet jobs,
              presented in a responsive grid.
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
              <h3>Fabric sofa refresh</h3>
              <p>Lifted surface dullness and refreshed the seating area.</p>
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
              <h3>Living room carpet cleaning</h3>
              <p>Reduced visible traffic marks and improved overall tone.</p>
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
              <h3>Mattress deep clean</h3>
              <p>Freshened the fabric surface with targeted care.</p>
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
              <h3>Dining chair upholstery</h3>
              <p>Improved appearance on high-touch seating upholstery.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section testimonials" id="reviews">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Customer reviews</span>
            <h2>Kind words from local clients in and around Munich</h2>
            <p>
              Trust matters when someone is coming into your home or workspace.
              These review cards are styled to feel credible and reassuring.
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
                <span>Sofa cleaning</span>
              </div>
            </article>

            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “Booking was easy, the photo estimate was helpful, and the
                result on our office chairs was exactly what we hoped for.”
              </p>
              <div class="testimonial-meta">
                <strong>Markus Hoffmann</strong>
                <span>Upholstery cleaning</span>
              </div>
            </article>

            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “Fast communication, on-time arrival, and a very visible
                improvement on a large corner sofa with old stains.”
              </p>
              <div class="testimonial-meta">
                <strong>Sophie Keller</strong>
                <span>Corner sofa cleaning</span>
              </div>
            </article>

            <article class="testimonial-card reveal">
              <div class="stars" aria-label="5 star rating">★★★★★</div>
              <p>
                “I liked how professional and calm the whole process felt. The
                mattress cleaning was thorough and the room smelled fresh.”
              </p>
              <div class="testimonial-meta">
                <strong>Daniel Schmid</strong>
                <span>Mattress cleaning</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section booking-section" id="booking">
        <div class="container booking-grid">
          <div class="booking-copy reveal">
            <span class="eyebrow">Booking &amp; quote request</span>
            <h2>Send your details and photos for a fast estimate</h2>
            <p>
              Upload one or more photos so we can review the size, material, and
              condition. Price estimates are given after reviewing the photos.
            </p>

            <div class="info-card">
              <h3>What helps us quote faster?</h3>
              <ul>
                <li>Clear photos of the full item</li>
                <li>Close-up images of stains or marked areas</li>
                <li>Your preferred date and any access notes</li>
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
                  <option value="Sofa cleaning">Sofa cleaning</option>
                  <option value="Corner sofa cleaning">
                    Corner sofa cleaning
                  </option>
                  <option value="Mattress cleaning">Mattress cleaning</option>
                  <option value="Carpet cleaning">Carpet cleaning</option>
                  <option value="Upholstery cleaning">
                    Upholstery cleaning
                  </option>
                  <option value="Stain removal">Stain removal</option>
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
                placeholder="Tell us what needs cleaning, the size, any stains, and your location in Munich."
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
              Local upholstery and carpet cleaning service for Munich homes,
              rentals, studios, and small business spaces.
            </p>
          </div>

          <div class="contact-card reveal">
            <h3>Reach us</h3>
            <ul class="contact-list">
              <li><strong>Location:</strong> Munich, Germany</li>
              <li><strong>Phone / WhatsApp:</strong> +49 000 000000</li>
              <li><strong>Email:</strong> info@cleanx-reinigung.de</li>
            </ul>
          </div>

          <div class="contact-card reveal">
            <h3>Working hours</h3>
            <ul class="contact-list">
              <li><strong>Monday – Friday:</strong> 09:00 – 19:00</li>
              <li><strong>Saturday:</strong> 10:00 – 17:00</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h3>CleanX Reinigung</h3>
          <p>
            Premium-feeling local cleaning service focused on careful work,
            quick estimates, and a smooth booking experience in Munich.
          </p>
        </div>

        <div>
          <h3>Quick links</h3>
          <ul class="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#results">Before &amp; After</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#booking">Get a Quote</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact info</h3>
          <ul class="footer-links">
            <li>Munich, Germany</li>
            <li>+49 000 000000</li>
            <li>info@cleanx-reinigung.de</li>
          </ul>
        </div>
      </div>

      <div class="container footer-bottom">
        <p>&copy; 2026 CleanX Reinigung. All rights reserved.</p>
      </div>
    </footer>

`;

export default function Home() {
  useEffect(() => {
    const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
    const siteNav = document.querySelector<HTMLElement>(".site-nav");
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.site-nav a[href^="#"]')
    );
    const bookingForm = document.getElementById("booking-form") as HTMLFormElement | null;
    const photosInput = document.getElementById("photos") as HTMLInputElement | null;
    const uploadFeedback = document.getElementById("upload-feedback");
    const successMessage = document.getElementById("form-success");
    const preferredDateInput = document.getElementById("preferred-date") as HTMLInputElement | null;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (preferredDateInput) {
      const localToday = new Date();
      localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
      preferredDateInput.min = localToday.toISOString().split("T")[0];
    }

    const handleNavToggle = () => {
      if (!siteNav || !navToggle) return;
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    };

    navToggle?.addEventListener("click", handleNavToggle);

    const navLinkHandlers = new Map<HTMLAnchorElement, EventListener>();

    navLinks.forEach((link) => {
      const handler: EventListener = (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector<HTMLElement>(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        if (siteNav?.classList.contains("is-open")) {
          siteNav.classList.remove("is-open");
          navToggle?.setAttribute("aria-expanded", "false");
          document.body.classList.remove("nav-open");
        }
      };

      link.addEventListener("click", handler);
      navLinkHandlers.set(link, handler);
    });

    const handlePhotoChange = () => {
      if (!photosInput || !uploadFeedback) return;
      const files = Array.from(photosInput.files || []);

      if (!files.length) {
        uploadFeedback.textContent = "No files selected yet";
        return;
      }

      const fileLabel = files.map((file) => file.name).join(", ");
      uploadFeedback.textContent =
        files.length === 1
          ? `1 photo selected: ${fileLabel}`
          : `${files.length} photos selected: ${fileLabel}`;
    };

    photosInput?.addEventListener("change", handlePhotoChange);

    const validators: Record<string, (value: string) => string> = {
      "full-name": (value) =>
        value.trim().length >= 2 ? "" : "Please enter your full name.",
      phone: (value) =>
        /^[+\d\s().-]{7,}$/.test(value.trim())
          ? ""
          : "Please enter a valid phone number.",
      email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
          ? ""
          : "Please enter a valid email address.",
      "service-type": (value) => (value ? "" : "Please choose a service type."),
      "preferred-date": (value) => (value ? "" : "Please choose a preferred date."),
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

      const name =
        (document.getElementById("full-name") as HTMLInputElement | null)?.value.trim() ||
        "there";

      successMessage.textContent =
        `Thanks ${name}, your request is ready to send. We'll review the photos and reply with an estimate.`;

      bookingForm.reset();

      if (uploadFeedback) {
        uploadFeedback.textContent = "No files selected yet";
      }

      Object.keys(validators).forEach((fieldId) => {
        setError(fieldId, "");
      });
    };

    bookingForm?.addEventListener("submit", handleSubmit);

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
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
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      navToggle?.removeEventListener("click", handleNavToggle);
      photosInput?.removeEventListener("change", handlePhotoChange);
      bookingForm?.removeEventListener("submit", handleSubmit);
      document.body.classList.remove("nav-open");

      navLinkHandlers.forEach((handler, link) => {
        link.removeEventListener("click", handler);
      });

      fieldListeners.forEach(({ field, onInput, onBlur }) => {
        field.removeEventListener("input", onInput);
        field.removeEventListener("blur", onBlur);
      });

      observer?.disconnect();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: PAGE_MARKUP }} />;
}
