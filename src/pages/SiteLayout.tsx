import { Link } from "react-router-dom";
import type { ReactNode } from "react";

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
  return (
    <div className="page-shell">
      <header className="page-topbar">
        <Link to="/" className="page-brand">
          <span className="page-brand-mark" aria-hidden="true" />
          <span>Kinomori</span>
        </Link>
        <nav className="page-nav" aria-label="Navegación">
          <Link to="/">El viaje</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/workshops">Workshops</Link>
        </nav>
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
        <span>Cocina asiática, té y taller</span>
        <Link to="/">Volver al viaje</Link>
      </footer>
    </div>
  );
}
