"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type SiteLanguage = "en" | "de";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
};

const LANGUAGE_STORAGE_KEY = "site-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function parseStoredLanguage(value: string | null): SiteLanguage | null {
  if (value === "en" || value === "de") {
    return value;
  }
  return null;
}

function detectBrowserLanguage(): SiteLanguage {
  if (typeof navigator === "undefined") {
    return "de";
  }

  const preferredLanguage =
    Array.isArray(navigator.languages) && navigator.languages.length > 0
      ? navigator.languages[0]
      : navigator.language;
  const normalizedLanguage = (preferredLanguage || "").toLowerCase();

  if (normalizedLanguage.startsWith("de")) {
    return "de";
  }

  if (normalizedLanguage.startsWith("en")) {
    return "en";
  }

  return "de";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("de");

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      const storedResolved = parseStoredLanguage(storedLanguage);

      if (storedResolved) {
        setLanguage(storedResolved);
        return;
      }

      const detectedLanguage = detectBrowserLanguage();
      setLanguage(detectedLanguage);
    } catch {
      setLanguage("de");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage errors so rendering never breaks.
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}
