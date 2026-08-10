import { Link } from "react-router-dom";
import { workshops } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /workshops — listado de talleres                                   */
/* ------------------------------------------------------------------ */

export function WorkshopsPage() {
  const { t } = useI18n();

  return (
    <SiteLayout title={t("nav.workshops")} kicker={t("ui.workshopsKicker")}>
      <p className="page-intro">{t("ui.workshopsIntro")}</p>

      <div className="card-grid">
        {workshops.map((workshop) => (
          <Link
            key={workshop.slug}
            to={`/workshops/${workshop.slug}`}
            className="card"
          >
            <div className="card-media">
              <img src={workshop.image} alt={t(workshop.name)} loading="lazy" />
              <span className="card-cat">
                {t(`ui.levels.${workshop.level}`)} · {workshop.duration}
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-name">{t(workshop.name)}</h2>
              <p className="card-short">{t(workshop.short)}</p>
              <div className="card-foot">
                <span className="card-price">
                  {workshop.price} {workshop.currency}
                </span>
                <span className="card-cta">{t("ui.moreInfo")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SiteLayout>
  );
}
