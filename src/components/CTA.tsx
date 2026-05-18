import React from "react";
import { useTranslation } from "react-i18next";
import { I } from "./icons";

export default function CTA() {
  const { t } = useTranslation();
  const [sent, setSent] = React.useState(false);
  const submit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const industries = t("cta.form.industries", {
    returnObjects: true,
  }) as string[];
  const volumes = t("cta.form.volumes", { returnObjects: true }) as string[];
  const markets = t("cta.form.markets", { returnObjects: true }) as string[];

  return (
    <section id="cta" className="section">
      <div className="container container-wide">
        <div className="cta-wrap fade-up">
          <div className="cta-grid">
            <div>
              <h2
                style={{
                  marginTop: 18,
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
              >
                {t("cta.heading")}
              </h2>
              <p style={{ marginTop: 14 }}>{t("cta.lead")}</p>
              <div className="cta-actions">
                <button className="btn btn-lg btn-on-blue">
                  {t("cta.requestQuote")}
                  <I.ArrowRight size={16} />
                </button>
                <button className="btn btn-lg btn-on-blue-ghost">
                  <I.Phone size={16} />
                  {t("cta.bookCall")}
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginTop: 32,
                  fontSize: 12.5,
                  color: "rgba(255,255,255,.7)",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 15,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {t("cta.stat48h")}
                  </div>
                  <div>{t("cta.rfqSla")}</div>
                </div>
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 15,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {t("cta.stat14d")}
                  </div>
                  <div>{t("cta.sampleTurnaround")}</div>
                </div>
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 15,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {t("cta.stat20k")}
                  </div>
                  <div>{t("cta.typicalMoq")}</div>
                </div>
              </div>
            </div>

            <form className="cta-form" onSubmit={submit}>
              {!sent ? (
                <>
                  <div className="row grid-2">
                    <div>
                      <label>{t("cta.form.firstName")}</label>
                      <input
                        type="text"
                        placeholder={t("cta.form.firstNamePlaceholder")}
                        required
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label>{t("cta.form.company")}</label>
                      <input
                        type="text"
                        placeholder={t("cta.form.companyPlaceholder")}
                        required
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label>{t("cta.form.email")}</label>
                    <input
                      type="email"
                      placeholder={t("cta.form.emailPlaceholder")}
                      required
                      defaultValue=""
                    />
                  </div>
                  <div className="row">
                    <label>{t("cta.form.industry")}</label>
                    <select defaultValue="">
                      <option value="" disabled>
                        {t("cta.form.industryPlaceholder")}
                      </option>
                      {industries.map((v, i) => (
                        <option key={i}>{v}</option>
                      ))}
                    </select>
                  </div>
                  <div className="row grid-2">
                    <div>
                      <label>{t("cta.form.annualVolume")}</label>
                      <select defaultValue="">
                        <option value="" disabled>
                          {t("cta.form.volumePlaceholder")}
                        </option>
                        {volumes.map((v, i) => (
                          <option key={i}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label>{t("cta.form.targetMarket")}</label>
                      <select defaultValue="">
                        <option value="" disabled>
                          {t("cta.form.marketPlaceholder")}
                        </option>
                        {markets.map((v, i) => (
                          <option key={i}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button type="submit">{t("cta.form.submit")}</button>
                  <div className="legal">{t("cta.form.legal")}</div>
                </>
              ) : (
                <div style={{ padding: "32px 8px", textAlign: "center" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 999,
                      background: "rgba(255,255,255,.15)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <I.Check size={24} />
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 600,
                      marginTop: 14,
                    }}
                  >
                    {t("cta.success.title")}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,.75)",
                      fontSize: 13,
                      marginTop: 8,
                      maxWidth: 300,
                      marginLeft: "auto",
                      marginRight: "auto",
                      lineHeight: 1.5,
                    }}
                  >
                    {t("cta.success.message")}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
