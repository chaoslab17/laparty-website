import { useTranslation } from "react-i18next";
import { I } from "./icons";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container container-wide">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow fade-up in">
              <span className="dot"></span>
              <span>{t("hero.eyebrow")}</span>
            </div>
            <h1
              className="h-display fade-up in"
              style={{ marginTop: 22, "--delay": "80ms" }}
            >
              {t("hero.h1")}
            </h1>
            <p
              className="t-lead fade-up in"
              style={{ marginTop: 22, "--delay": "140ms" }}
            >
              {t("hero.lead")}
            </p>
            <div
              className="hero-actions fade-up in"
              style={{ "--delay": "220ms" }}
            >
              <button className="btn btn-primary btn-lg">
                {t("hero.cta1")}
                <I.ArrowRight size={16} />
              </button>
              <button className="btn btn-secondary btn-lg">
                <I.Doc size={16} />
                {t("hero.cta2")}
              </button>
            </div>

            <div
              className="hero-trust fade-up in"
              style={{ "--delay": "320ms" }}
            >
              <div className="hero-trust-label">{t("hero.trust.label")}</div>
              <div className="trust-row">
                <div className="trust-mark">
                  <span className="badge">ISO</span> {t("hero.trust.iso")}
                </div>
                <div className="trust-mark">
                  <span className="badge">FDA</span> {t("hero.trust.fda")}
                </div>
                <div className="trust-mark">
                  <span className="badge">ASTM</span> {t("hero.trust.astm")}
                </div>
                <div className="trust-mark">
                  <span className="badge">SGS</span> {t("hero.trust.sgs")}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right fade-up in" style={{ "--delay": "180ms" }}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const { t } = useTranslation();

  return (
    <div className="hero-visual">
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.55 }}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#DFE1E6"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="hero-glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#DEEBFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#DEEBFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
        <rect width="100%" height="100%" fill="url(#hero-glow)" />
      </svg>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 540 580"
        style={{ position: "absolute", inset: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0052CC" stopOpacity="0" />
            <stop offset="50%" stopColor="#0052CC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0052CC" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 100 120 Q 270 90 440 180"
          stroke="url(#line)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 4"
        />
        <path
          d="M 80 320 Q 260 380 460 340"
          stroke="url(#line)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 4"
        />
        <path
          d="M 120 480 Q 280 420 440 480"
          stroke="url(#line)"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="3 4"
        />
        <path
          d="M 100 120 L 100 320 L 120 480"
          stroke="#DFE1E6"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 440 180 L 460 340 L 440 480"
          stroke="#DFE1E6"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Extrusion live card */}
      <div
        className="dash-card"
        style={{ left: 28, top: 36, width: 280, padding: "18px 20px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#36B37E",
                boxShadow: "0 0 0 3px rgba(54,179,126,.18)",
              }}
            ></div>
            <span
              style={{
                fontSize: 12,
                color: "#42526E",
                fontWeight: 600,
                letterSpacing: ".04em",
                textTransform: "uppercase",
              }}
            >
              {t("hero.dashboard.extrusionLive")}
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.02em",
              color: "#6B778C",
            }}
          >
            12:42
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#172B4D",
            }}
          >
            1,184
            <span
              style={{
                fontSize: 18,
                color: "#42526E",
                fontWeight: 500,
                marginLeft: 4,
              }}
            >
              tons
            </span>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#42526E", marginTop: 2 }}>
          {t("hero.dashboard.tonsLabel")}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 6,
            fontSize: 12,
            color: "#006644",
            fontWeight: 600,
          }}
        >
          <I.TrendUp size={12} /> {t("hero.dashboard.trend")}
        </div>
        <svg
          viewBox="0 0 240 56"
          width="100%"
          height="56"
          style={{ marginTop: 14 }}
        >
          <defs>
            <linearGradient id="area" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0052CC" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0052CC" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 42 L24 38 L48 40 L72 30 L96 32 L120 22 L144 26 L168 18 L192 14 L216 16 L240 8"
            fill="none"
            stroke="#0052CC"
            strokeWidth="2"
          />
          <path
            d="M0 42 L24 38 L48 40 L72 30 L96 32 L120 22 L144 26 L168 18 L192 14 L216 16 L240 8 L240 56 L0 56 Z"
            fill="url(#area)"
          />
          {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240].map((x, i) => {
            const ys = [42, 38, 40, 30, 32, 22, 26, 18, 14, 16, 8];
            return <circle key={i} cx={x} cy={ys[i]} r="1.5" fill="#0052CC" />;
          })}
        </svg>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginTop: 14,
            paddingTop: 14,
            borderTop: "1px solid #DFE1E6",
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: "#6B778C", fontWeight: 500 }}>
              {t("hero.dashboard.extrusionLines")}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#172B4D",
                marginTop: 2,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              18 / 20
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "#6B778C", fontWeight: 500 }}>
              {t("hero.dashboard.avgLeadTime")}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#172B4D",
                marginTop: 2,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {t("hero.dashboard.avgLeadTimeValue")}
            </div>
          </div>
        </div>
      </div>

      {/* Shipment card */}
      <div className="dash-card" style={{ right: 24, top: 96, width: 240 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 7,
                background: "#DEEBFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0052CC",
              }}
            >
              <I.Truck size={14} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600 }}>
              Container LP-2840
            </span>
          </div>
          <span
            className="tag tag-success"
            style={{ height: 20, fontSize: 11, padding: "0 8px" }}
          >
            {t("hero.dashboard.inTransit")}
          </span>
        </div>
        <div style={{ marginTop: 14 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              color: "#6B778C",
              marginBottom: 6,
            }}
          >
            <span>{t("hero.dashboard.from")}</span>
            <span>{t("hero.dashboard.to")}</span>
          </div>
          <div
            style={{
              height: 4,
              background: "#EBECF0",
              borderRadius: 999,
              position: "relative",
              overflow: "visible",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: "62%",
                background: "#0052CC",
                borderRadius: 999,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: "62%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#fff",
                border: "2px solid #0052CC",
                boxShadow: "0 2px 4px rgba(0,82,204,.3)",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              fontSize: 11,
              color: "#42526E",
            }}
          >
            <span>{t("hero.dashboard.eta")}</span>
            <span style={{ fontWeight: 600, color: "#172B4D" }}>62%</span>
          </div>
        </div>
      </div>

      {/* SKU card */}
      <div className="dash-card" style={{ left: 56, bottom: 96, width: 220 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 48,
              borderRadius: "2px 6px 6px 2px",
              background: "linear-gradient(180deg,#F4F8FE,#DFE6F2)",
              border: "1px solid #DFE1E6",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 3,
                background: "#0052CC",
                borderRadius: "2px 0 0 2px",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: 8,
                right: 6,
                top: 14,
                height: 1.5,
                background: "#172B4D",
                opacity: 0.15,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: 8,
                right: 6,
                top: 20,
                height: 1.5,
                background: "#172B4D",
                opacity: 0.15,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                left: 8,
                right: 10,
                top: 26,
                height: 1.5,
                background: "#172B4D",
                opacity: 0.15,
              }}
            ></div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#6B778C", fontWeight: 500 }}>
              SKU LP-SP-7104
            </div>
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 600,
                color: "#172B4D",
                marginTop: 2,
              }}
            >
              {t("hero.dashboard.skuName")}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
            paddingTop: 12,
            borderTop: "1px solid #DFE1E6",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                color: "#6B778C",
                textTransform: "uppercase",
                letterSpacing: ".04em",
                fontWeight: 500,
              }}
            >
              {t("hero.dashboard.moq")}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              25,000
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                color: "#6B778C",
                textTransform: "uppercase",
                letterSpacing: ".04em",
                fontWeight: 500,
              }}
            >
              {t("hero.dashboard.lead")}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              21d
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 10,
                color: "#6B778C",
                textTransform: "uppercase",
                letterSpacing: ".04em",
                fontWeight: 500,
              }}
            >
              {t("hero.dashboard.score")}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#006644" }}>
              A+
            </div>
          </div>
        </div>
      </div>

      {/* QC card */}
      <div className="dash-card" style={{ right: 36, bottom: 72, width: 220 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 999,
              background: "#E3FCEF",
              color: "#006644",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <I.Check size={12} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600 }}>
            {t("hero.dashboard.qcPass")}
          </span>
        </div>
        {(
          [
            {
              lk: "hero.dashboard.filmGauge",
              vk: "hero.dashboard.filmGaugeValue",
            },
            {
              lk: "hero.dashboard.sealStrength",
              vk: "hero.dashboard.sealValue",
            },
            {
              lk: "hero.dashboard.migrationTest",
              vk: "hero.dashboard.migrationValue",
            },
          ] as const
        ).map((x, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 0",
              borderTop: i ? "1px dashed #EBECF0" : 0,
              fontSize: 12,
            }}
          >
            <span style={{ color: "#42526E" }}>{t(x.lk)}</span>
            <span style={{ color: "#172B4D", fontWeight: 500 }}>{t(x.vk)}</span>
          </div>
        ))}
      </div>

      {/* Status pill */}
      <div
        style={{
          position: "absolute",
          top: 32,
          right: 32,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          height: 28,
          padding: "0 10px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(8px)",
          border: "1px solid #DFE1E6",
          borderRadius: 999,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "#172B4D",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "#36B37E",
          }}
        ></span>
        {t("hero.dashboard.status")}
      </div>
    </div>
  );
}
