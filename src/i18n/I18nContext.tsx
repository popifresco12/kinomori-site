import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  translations,
  DEFAULT_LANG,
  LANG_STORAGE_KEY,
  type Lang,
} from "./translations";

/* ------------------------------------------------------------------ */
/*  Contexto i18n: idioma activo + acceso a traducciones               */
/* ------------------------------------------------------------------ */

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
  /** Traducción con fallback: si el idioma actual no tiene la clave, usa inglés. */
};

const I18nContext = createContext<I18nContextValue | null>(null);

function resolve(dict: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = dict;
  for (const part of parts) {
    if (cur && typeof cur === "object" && part in (cur as object)) {
      cur = (cur as Record<string, unknown>)[part];
    } else {
      return "";
    }
  }
  return typeof cur === "string" ? cur : "";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && saved in translations) return saved as Lang;
    return DEFAULT_LANG;
  });

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (path: string) => {
    const direct = resolve(translations[lang], path);
    if (direct) return direct;
    const fallback = resolve(translations[DEFAULT_LANG], path);
    return fallback || path;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
