import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { I } from "./icons";

export default function Footer() {
  const { t } = useTranslation();

  const industriesList = t("footer.cols.industriesList", {
    returnObjects: true,
  }) as string[];
  const capsList = t("footer.cols.capabilitiesList", {
    returnObjects: true,
  }) as string[];
  const companyList = t("footer.cols.companyList", {
    returnObjects: true,
  }) as string[];

  const cols = [
    { h: t("footer.cols.industries"), l: industriesList },
    { h: t("footer.cols.capabilities"), l: capsList },
    { h: t("footer.cols.company"), l: companyList },
  ];

  return (
    <footer className="footer">
      <div className="container container-wide">
        <div className="foot-grid">
          <div className="foot">
            <Link className="brand" to="/" style={{ marginBottom: 18 }}>
              <img className="brand-mark" src="/logo.png" alt="La Party" />
              <div className="brand-text">
                <span className="b1">LA PARTY</span>
                <span className="b2">CORPORATION · EST. 1995</span>
              </div>
            </Link>
            <p
              style={{
                fontSize: 13.5,
                color: "var(--ink-2)",
                maxWidth: 300,
                marginTop: 8,
              }}
            >
              {t("footer.description")}
            </p>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {["ISO 9001", "FDA", "UN3373", "ASTM D257", "REACH"].map((b) => (
                <span
                  key={b}
                  style={{
                    fontSize: 11,
                    padding: "4px 8px",
                    border: "1px solid var(--border)",
                    borderRadius: 6,
                    color: "var(--ink-2)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 12,
                color: "var(--ink-3)",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "var(--ink-2)", fontWeight: 600 }}>
                {t("footer.hq")}
              </strong>
              <br />
              {t("footer.hqLine1")}
              <br />
              {t("footer.hqLine2")}
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                color: "var(--ink-3)",
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: "var(--ink-2)", fontWeight: 600 }}>
                {t("footer.vn")}
              </strong>
              <br />
              {t("footer.vnLine1")}
              <br />
              {t("footer.vnLine2")}
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i} className="foot">
              <h5>{c.h}</h5>
              <ul>
                {c.l.map((x, j) => (
                  <li key={j}>
                    <a href="#">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <div>{t("footer.copyright")}</div>
          <div className="foot-legal-links">
            <a href="#">{t("footer.privacy")}</a>
            <a href="#">{t("footer.terms")}</a>
            <a href="#">{t("footer.cookies")}</a>
          </div>
          <div className="foot-locale">
            <I.Globe size={12} />
            {t("footer.localeLabel")}
            <I.Chevron size={12} />
          </div>
        </div>
      </div>
    </footer>
  );
}
