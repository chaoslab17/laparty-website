import { Trans, useTranslation } from 'react-i18next'
import { I } from './icons'

interface StatItem { label: string; sub: string; trend: string }

const STAT_VALUES = [
  { v: "12",   u: "k t"  },
  { v: "30",   u: "+"    },
  { v: "99.4", u: "%"    },
  { v: "31",   u: "yrs"  },
]

export default function Stats() {
  const { t } = useTranslation()
  const items = t('stats.items', { returnObjects: true }) as StatItem[]

  return (
    <section id="operations" className="section">
      <div className="container container-wide">
        <div className="eyebrow fade-up"><span className="dot"></span>{t('stats.eyebrow')}</div>
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 32, marginTop: 14, flexWrap: 'wrap' }}>
          <h2 className="h-section fade-up" style={{ maxWidth: 760 }}>
            {t('stats.heading')}
          </h2>
          <p className="t-meta fade-up" style={{ maxWidth: 320 }}>
            <Trans i18nKey="stats.meta" components={{ highlight: <span style={{ color: 'var(--ink-2)', fontWeight: 500 }} /> }} />
          </p>
        </div>

        <div className="stat-grid fade-up" style={{ marginTop: 40 }}>
          {items.map((s, i) => (
            <div key={i} className="stat">
              <div className="stat-value">
                {STAT_VALUES[i].v}<span className="unit">{STAT_VALUES[i].u}</span>
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
              <div className="stat-trend">
                <I.TrendUp size={12} /> {s.trend}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
