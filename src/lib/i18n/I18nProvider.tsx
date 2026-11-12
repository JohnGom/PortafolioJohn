import {
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { translations, type Language } from "./translations";
import { I18nContext, type I18nContextType } from "./i18n-context";

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === "en" || stored === "es") return stored;
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("es") ? "es" : "en";
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "es" ? "en" : "es");
  }, [language, setLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
