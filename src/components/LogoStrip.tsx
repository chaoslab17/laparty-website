import { useTranslation } from 'react-i18next'

export default function LogoStrip() {
  const { t } = useTranslation()
  const certs = [
    {
      k: "HACCP",
      url: "https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines",
      mark: (
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.14em', fontSize: 22 }}>HACCP</span>
      ),
    },
    {
      k: "GMP",
      url: "https://www.fda.gov/drugs/pharmaceutical-quality-resources/current-good-manufacturing-practice-cgmp-regulations",
      mark: (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: 999, border: '1.5px solid currentColor', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600 }}>✓</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, letterSpacing: '0.05em' }}>GMP</span>
        </span>
      ),
    },
    {
      k: "Silliker",
      url: "https://www.merieuxnutrisciences.com/",
      mark: (
        <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontWeight: 600, fontSize: 24, letterSpacing: '-0.01em' }}>
          Silliker<span style={{ verticalAlign: 'super', fontSize: 11, marginLeft: 1 }}>®</span>
        </span>
      ),
    },
    {
      k: "SQF",
      url: "https://www.sqfi.com/",
      mark: (
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '0.02em' }}>SQF</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.18em', marginTop: 3, opacity: 0.7 }}>INSTITUTE</span>
        </span>
      ),
    },
    {
      k: "SGS",
      url: "https://www.sgs.com/",
      mark: (
        <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, gap: 4 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '0.18em' }}>SGS</span>
          <span style={{ display: 'block', width: 28, height: 2, background: 'currentColor', opacity: 0.6, borderRadius: 1 }} />
        </span>
      ),
    },
    {
      k: "ISO 9001",
      url: "https://www.iso.org/iso-9001-quality-management.html",
      mark: (
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: '0.06em' }}>ISO</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em', opacity: 0.85 }}>9001</span>
        </span>
      ),
    },
  ]


  return (
    <div className="logo-strip">
      <div className="container">
        <div className="logo-strip-label">{t("landing.audits")}</div>
        <div className="cert-row">
          {certs.map((c, i) => (
            <a key={c.k}
               href={c.url}
               target="_blank"
               rel="noopener noreferrer"
               className="cert-link fade-up"
               style={{ '--delay': `${i * 40}ms` }}
               aria-label={`${c.k} — opens in new tab`}>
              {c.mark}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
