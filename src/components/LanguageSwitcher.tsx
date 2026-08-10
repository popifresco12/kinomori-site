import { useI18n } from "../i18n/I18nContext";
import { LANGS, type Lang } from "../i18n/translations";

/* ------------------------------------------------------------------ */
/*  Selector de idioma: EN · FR · ES · 中 · 日                          */
/* ------------------------------------------------------------------ */

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();

  return (
    <div className={`lang-switcher${compact ? " lang-switcher--compact" : ""}`} role="group" aria-label="Idioma / Language">
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          className={`lang-btn${lang === l.code ? " is-active" : ""}`}
          onClick={() => setLang(l.code as Lang)}
          aria-pressed={lang === l.code}
          title={l.label}
        >
          {l.flag} {l.label}
        </button>
      ))}
    </div>
  );
}
