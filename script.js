const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const bookingForm = document.getElementById("booking-form");
const photosInput = document.getElementById("photos");
const uploadFeedback = document.getElementById("upload-feedback");
const successMessage = document.getElementById("form-success");
const preferredDateInput = document.getElementById("preferred-date");
const revealItems = document.querySelectorAll(".reveal");

if (preferredDateInput) {
  const localToday = new Date();
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
  preferredDateInput.min = localToday.toISOString().split("T")[0];
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (siteNav?.classList.contains("is-open")) {
      siteNav.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
});

if (photosInput && uploadFeedback) {
  photosInput.addEventListener("change", () => {
    const files = Array.from(photosInput.files || []);

    if (!files.length) {
      uploadFeedback.textContent = "No files selected yet";
      return;
    }

    const fileLabel = files.map((file) => file.name).join(", ");
    uploadFeedback.textContent =
      files.length === 1 ? `1 photo selected: ${fileLabel}` : `${files.length} photos selected: ${fileLabel}`;
  });
}

if (bookingForm) {
  const validators = {
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
    "service-type": (value) =>
      value ? "" : "Please choose a service type.",
    "preferred-date": (value) =>
      value ? "" : "Please choose a preferred date.",
  };

  const setError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorField = document.getElementById(`error-${fieldId}`);
    if (!field || !errorField) return;

    errorField.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
  };

  Object.keys(validators).forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!field) return;

    field.addEventListener("input", () => {
      setError(fieldId, validators[fieldId](field.value));
    });

    field.addEventListener("blur", () => {
      setError(fieldId, validators[fieldId](field.value));
    });
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.textContent = "";

    let hasErrors = false;

    Object.keys(validators).forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (!field) return;

      const message = validators[fieldId](field.value);
      setError(fieldId, message);

      if (message) {
        hasErrors = true;
      }
    });

    if (hasErrors) return;

    const name = document.getElementById("full-name")?.value.trim() || "there";
    successMessage.textContent = `Thanks ${name}, your request is ready to send. We’ll review the photos and reply with an estimate.`;
    bookingForm.reset();
    uploadFeedback.textContent = "No files selected yet";

    Object.keys(validators).forEach((fieldId) => {
      setError(fieldId, "");
    });
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
