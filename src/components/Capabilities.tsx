import { useTranslation } from 'react-i18next'
import { I } from './icons'

interface CapItem { title: string; desc: string; bullets: string[] }

const CAP_ICONS = [<I.Factory />, <I.Cog />, <I.Sparkles />, <I.Shield />, <I.Leaf />, <I.Truck />]

export default function Capabilities() {
  const { t } = useTranslation()
  const caps = t('capabilities.items', { returnObjects: true }) as CapItem[]

  return (
    <section id="capabilities" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container container-wide">
        <div className="eyebrow fade-up"><span className="dot"></span>{t('capabilities.eyebrow')}</div>
        <h2 className="h-section fade-up" style={{ marginTop: 12, maxWidth: 760 }}>
          {t('capabilities.heading')}
        </h2>
        <p className="t-lead fade-up" style={{ marginTop: 14 }}>
          {t('capabilities.lead')}
        </p>

        <div className="cap-grid">
          {caps.map((c, i) => (
            <div key={i} className="card card-hover cap fade-up" style={{ '--delay': `${i * 40}ms` }}>
              <div className="cap-icon">{CAP_ICONS[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>
                {c.bullets.map((x, j) => (
                  <li key={j}>
                    <I.Check size={14} />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
