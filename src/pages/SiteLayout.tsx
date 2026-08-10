import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useI18n } from "../i18n/I18nContext";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

/* ------------------------------------------------------------------ */
/*  Layout simple para páginas de contenido (productos / workshops)    */
/* ------------------------------------------------------------------ */

export function SiteLayout({
  children,
  title,
  kicker,
}: {
  children: ReactNode;
  title: string;
  kicker?: string;
}) {
  const { t } = useI18n();

  return (
    <div className="page-shell">
      <header className="page-topbar">
        <Link to="/" className="page-brand">
          <span className="page-brand-mark" aria-hidden="true" />
          <span>Kinomori</span>
        </Link>
        <nav className="page-nav" aria-label={t("nav.journey")}>
          <Link to="/">{t("nav.journey")}</Link>
          <Link to="/menu">{t("nav.menu")}</Link>
          <Link to="/te">{t("nav.tea")}</Link>
          <Link to="/productos">{t("nav.shop")}</Link>
          <Link to="/workshops">{t("nav.workshops")}</Link>
        </nav>
        <LanguageSwitcher compact />
      </header>

      <main className="page-main">
        <div className="page-heading">
          {kicker && <div className="page-kicker">{kicker}</div>}
          <h1 className="page-title">{title}</h1>
        </div>
        {children}
      </main>

      <footer className="page-footer">
        <span>Kinomori · Tamraght, Marruecos</span>
        <span>{t("footer.tagline")}</span>
        <Link to="/">{t("back")}</Link>
      </footer>
    </div>
  );
}
