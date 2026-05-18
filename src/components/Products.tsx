import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { I } from './icons'
import ProductArt from './ProductArt'
import PRODUCTS from '../data/products'
import { productSlug } from '../utils/productSlug'

const CAT_KEYS = ['All', 'Industrial', 'Food Service', 'Healthcare', 'Mailers', 'Security'] as const
type CatKey = typeof CAT_KEYS[number]

export default function Products() {
  const { t } = useTranslation()
  const [active, setActive] = React.useState<CatKey>('All')
  const [showAll, setShowAll] = React.useState(false)

  const inCat = active === 'All' ? PRODUCTS : PRODUCTS.filter(x => x.cat === active)
  const visible = (active === 'All' && !showAll) ? inCat.slice(0, 9) : inCat
  const hasMore = active === 'All' && !showAll && PRODUCTS.length > 9

  React.useEffect(() => { setShowAll(false) }, [active])

  return (
    <section id="products" className="section">
      <div className="container container-wide">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow fade-up"><span className="dot"></span>{t('products.eyebrow')}</div>
            <h2 className="h-section fade-up" style={{ marginTop: 12 }}>
              {t('products.heading', { count: PRODUCTS.length })}
            </h2>
            <p className="t-lead fade-up" style={{ marginTop: 14 }}>
              {t('products.lead')}
            </p>
          </div>
          <div className="product-tabs fade-up">
            {CAT_KEYS.map(c => {
              const count = c === 'All' ? PRODUCTS.length : PRODUCTS.filter(x => x.cat === c).length
              return (
                <button key={c} className={`product-tab ${active === c ? 'active' : ''}`}
                        onClick={() => setActive(c)}>
                  {t(`products.cats.${c}`)} <span className="product-tab-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="product-grid">
          {visible.map((p, i) => (
            <Link key={p.name} to={`/products/${productSlug(p.name)}`}
                  className="card card-hover product-card fade-up"
                  style={{ '--delay': `${(i % 9) * 40}ms`, textDecoration: 'none' }}>
              <ProductArt kind={p.kind} />
              <div className="product-body">
                <div className="product-meta">
                  <span className="tag tag-neutral">{p.cat}</span>
                  {p.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="product-title">{p.name}</div>
                <p className="product-desc">{p.desc}</p>
                {p.bullets && p.bullets.length > 0 && (
                  <ul className="product-bullets">
                    {p.bullets.map((b, j) => (
                      <li key={j}><I.Check size={12} /><span>{b}</span></li>
                    ))}
                  </ul>
                )}
                <div className="product-foot">
                  <span className="product-link">{t('products.viewDetails')}</span>
                  <I.ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          {hasMore ? (
            <button className="btn btn-secondary btn-lg fade-up" onClick={() => setShowAll(true)}>
              {t('products.showAll', { count: PRODUCTS.length })} <I.ArrowRight size={16} />
            </button>
          ) : (
            <div className="t-meta fade-up">
              {active === 'All'
                ? t('products.showing', { visible: visible.length, total: PRODUCTS.length })
                : t('products.showingInCat', { visible: visible.length, total: inCat.length, cat: t(`products.cats.${active}`) })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
