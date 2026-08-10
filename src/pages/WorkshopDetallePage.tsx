import { Link, useParams } from "react-router-dom";
import { workshops } from "../data";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";

/* ------------------------------------------------------------------ */
/*  /workshops/:slug — ficha individual de un taller                   */
/* ------------------------------------------------------------------ */

export function WorkshopDetallePage() {
  const { slug } = useParams();
  const { t } = useI18n();
  const workshop = workshops.find((w) => w.slug === slug);

  if (!workshop) {
    return (
      <SiteLayout title={t("ui.workshopNotFoundTitle")}>
        <p className="page-intro">
          {t("ui.workshopNotFoundBody")}{" "}
          <Link to="/workshops" className="page-link">
            {t("ui.seeAllWorkshops")}
          </Link>
        </p>
      </SiteLayout>
    );
  }

  const otros = workshops.filter((w) => w.slug !== workshop.slug).slice(0, 3);

  return (
    <SiteLayout
      title={t(workshop.name)}
      kicker={`${t(`ui.levels.${workshop.level}`)} · ${workshop.duration} · ${workshop.price} ${workshop.currency}`}
    >
      <article className="detail">
        <div className="detail-media">
          <img src={workshop.image} alt={t(workshop.name)} />
        </div>

        <div className="detail-content">
          <p className="detail-short">{t(workshop.short)}</p>

          {workshop.description.map((paragraph) => (
            <p key={paragraph} className="detail-text">
              {t(paragraph)}
            </p>
          ))}

          {workshop.upcoming && (
            <div className="detail-price">
              <span className="detail-price-amount">{t(workshop.upcoming)}</span>
              <span className="detail-price-note">
                {workshop.price} {workshop.currency} {t("ui.perPerson")}
              </span>
            </div>
          )}

          <h3 className="detail-includes-title">{t("ui.whatIncludes")}</h3>
          <ul className="detail-includes">
            {workshop.includes.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>

          <p className="detail-book">
            {t("ui.joinUs")}{" "}
            <a className="page-link" href="mailto:hola@kinomori.example">
              {t("ui.writeUs")}
            </a>
          </p>
        </div>
      </article>

      <section className="detail-others">
        <h2 className="detail-others-title">{t("ui.otherWorkshops")}</h2>
        <div className="card-grid card-grid--mini">
          {otros.map((other) => (
            <Link
              key={other.slug}
              to={`/workshops/${other.slug}`}
              className="card"
            >
              <div className="card-media">
                <img src={other.image} alt={t(other.name)} loading="lazy" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{t(other.name)}</h3>
                <div className="card-foot">
                  <span className="card-price">
                    {other.price} {other.currency}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
