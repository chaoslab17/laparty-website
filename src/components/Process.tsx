import { useTranslation } from 'react-i18next'
import { I } from './icons'

interface StepItem    { title: string; desc: string; milestone: string }
interface FeatureItem { title: string; sub: string }

const FEATURE_ICONS = [<I.Activity size={20} />, <I.Doc size={20} />, <I.Phone size={20} />]

export default function Process() {
  const { t } = useTranslation()
  const steps    = t('process.steps',    { returnObjects: true }) as StepItem[]
  const features = t('process.features', { returnObjects: true }) as FeatureItem[]

  return (
    <section id="process" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container container-wide">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 680 }}>
            <div className="eyebrow fade-up"><span className="dot"></span>{t('process.eyebrow')}</div>
            <h2 className="h-section fade-up" style={{ marginTop: 12 }}>
              {t('process.heading')}
            </h2>
            <p className="t-lead fade-up" style={{ marginTop: 14 }}>
              {t('process.lead')}
            </p>
          </div>
          <button className="btn btn-secondary fade-up">
            <I.Calendar size={16} />
            {t('process.scheduleBtn')}
          </button>
        </div>

        <div className="process">
          {steps.map((s, i) => (
            <div key={i} className="step fade-up" style={{ '--delay': `${i * 80}ms` }}>
              <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
              <div className="t-mono">{s.milestone}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 56 }}>
          {features.map((x, i) => (
            <div key={i} className="card fade-up" style={{ padding: 22, '--delay': `${i * 60}ms` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {FEATURE_ICONS[i]}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{x.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 2 }}>{x.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
