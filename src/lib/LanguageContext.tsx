import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

/** A bilingual value: every piece of translatable copy is one of these. */
export type Bi<T> = { en: T; fr: T };

const STORAGE_KEY = "lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {
    // localStorage can throw in private-browsing/blocked-storage contexts
  }
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Resolve a bilingual value against the current language. */
  pick: <T>(bi: Bi<T>) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore — language just won't persist across visits
    }
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
  }

  function pick<T>(bi: Bi<T>): T {
    return bi[lang];
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, pick }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
