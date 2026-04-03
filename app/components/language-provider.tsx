"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SiteLanguage = "en" | "de";

type LanguageContextValue = {
  language: SiteLanguage;
  isGerman: boolean;
  isHydrated: boolean;
  setLanguage: (language: SiteLanguage) => void;
  toggleLanguage: () => void;
};

const LANGUAGE_STORAGE_KEY = "cleanx_language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function normalizeLanguage(value: string | null): SiteLanguage {
  return value === "de" ? "de" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      const nextLanguage = normalizeLanguage(storedLanguage);
      setLanguage(nextLanguage);

      if (storedLanguage && storedLanguage !== nextLanguage) {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
      }
    } catch {
      setLanguage("en");
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    if (!isHydrated) return;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage errors so rendering never breaks.
    }
  }, [language, isHydrated]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isGerman: language === "de",
      isHydrated,
      setLanguage,
      toggleLanguage: () => {
        setLanguage((previous) => (previous === "de" ? "en" : "de"));
      },
    }),
    [isHydrated, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}
