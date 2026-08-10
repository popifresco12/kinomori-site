import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { KinomoriWorld } from "./KinomoriWorld";
import { ProductosPage } from "./pages/ProductosPage";
import { ProductoDetallePage } from "./pages/ProductoDetallePage";
import { MenuPage } from "./pages/MenuPage";
import { TePage } from "./pages/TePage";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { WorkshopDetallePage } from "./pages/WorkshopDetallePage";
import "./journey.css";
import "./pages.css";

/** Sube al tope al cambiar de página (el scrollytelling fija el scroll). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<KinomoriWorld />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/te" element={<TePage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/productos/:slug" element={<ProductoDetallePage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/workshops/:slug" element={<WorkshopDetallePage />} />
        <Route path="*" element={<KinomoriWorld />} />
      </Routes>
    </>
  );
}
