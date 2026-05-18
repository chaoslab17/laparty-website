import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { I } from '../components/icons'
import ProductArt from '../components/ProductArt'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import PRODUCTS, { type Product } from '../data/products'
import { productSlug } from '../utils/productSlug'
import { useFadeUp } from '../hooks/useFadeUp'

interface SpecRow { k: string; v: string }

function getSpecMatrix(p: Product): SpecRow[] {
  const matByKind: Record<string, string> = {
    flat:       'LDPE / LLDPE / HDPE',
    tshirt:     'HDPE / LDPE blend',
    mailer:     'Co-extruded LDPE',
    specimen:   'Multi-layer LDPE',
    zipper:     'LDPE + PP zipper rail',
    security:   'Multi-layer LDPE',
    gusseted:   'LDPE / HDPE',
    antistatic: 'Pink-tinted LDPE',
  }
  const gaugeByKind: Record<string, string> = {
    flat:       '1.0 – 4.0 mil',
    tshirt:     '12 – 18 μm',
    mailer:     '2.0 – 3.5 mil',
    specimen:   '2.0 – 2.5 mil',
    zipper:     '2.0 – 4.0 mil',
    security:   '2.5 – 3.0 mil',
    gusseted:   '1.5 – 4.0 mil',
    antistatic: '2.0 – 4.0 mil',
  }
  const closureByKind: Record<string, string> = {
    flat:       'Open top · custom heat-seal available',
    tshirt:     'T-shirt handle, die-cut neck',
    mailer:     'Permanent peel-and-seal strip',
    specimen:   'Press-to-close zipper + document pocket',
    zipper:     'Slider or press-to-close',
    security:   'Tamper-evident permanent seal',
    gusseted:   'Open top with side gussets',
    antistatic: 'Open top · zipper option',
  }
  return [
    { k: 'Product family', v: p.cat },
    { k: 'Material',       v: matByKind[p.kind]     ?? 'Polyethylene' },
    { k: 'Gauge range',    v: gaugeByKind[p.kind]   ?? '1.5 – 3.0 mil' },
    { k: 'Closure',        v: closureByKind[p.kind] ?? 'Open top' },
    { k: 'Print',          v: 'Up to 8-color flexographic · Pantone match' },
    { k: 'Sizes',          v: 'Custom · stock sizes available on request' },
    { k: 'MOQ',            v: 'From 10,000 pcs · pilot from 5,000' },
    { k: 'Lead time',      v: 'Typical 14–28 days from approved sample' },
    { k: 'Manufacturing',  v: 'Tainan HQ · Binh Duong, Vietnam' },
    { k: 'Compliance',     v: 'ISO 9001 · HACCP · GMP · SQF · SGS audited' },
  ]
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const product = PRODUCTS.find(p => productSlug(p.name) === slug)
  useFadeUp()

  const processSteps = t('productDetail.processSteps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  if (!product) {
    return (
      <>
        <div className="container" style={{ padding: '120px 28px', textAlign: 'center' }}>
          <div className="eyebrow"><span className="dot"></span>{t('productDetail.notFound')}</div>
          <h1 className="h-section" style={{ marginTop: 14 }}>{t('productDetail.notFoundH1')}</h1>
          <p className="t-lead" style={{ margin: '14px auto 28px' }}>
            {t('productDetail.notFoundLead', { count: PRODUCTS.length })}
          </p>
          <Link className="btn btn-primary btn-lg" to="/products">
            {t('productDetail.browseCatalog')} <I.ArrowRight size={16} />
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const related = PRODUCTS.filter(p => p.cat === product.cat && p.name !== product.name).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="container container-wide" style={{ padding: '24px 28px 0' }}>
        <div className="breadcrumb">
          <Link to="/">{t('productDetail.breadcrumbHome')}</Link>
          <I.Chevron size={12} style={{ transform: 'rotate(-90deg)' }} />
          <Link to="/products">{t('productDetail.breadcrumbProducts')}</Link>
          <I.Chevron size={12} style={{ transform: 'rotate(-90deg)' }} />
          <Link to="/products">{product.cat}</Link>
          <I.Chevron size={12} style={{ transform: 'rotate(-90deg)' }} />
          <span className="current">{product.name}</span>
        </div>
      </div>

      {/* Detail hero */}
      <section className="section" style={{ paddingTop: 32, paddingBottom: 64 }}>
        <div className="container container-wide">
          <div className="detail-grid">
            <div className="detail-art card fade-up in">
              <ProductArt kind={product.kind} />
              <div className="detail-art-meta">
                <span className="t-mono">{t('productDetail.artKind')} · {product.kind}</span>
                <span className="t-mono">{t('productDetail.artFamily')} · {product.cat}</span>
              </div>
            </div>

            <div className="detail-info">
              <div className="detail-tags fade-up in">
                <span className="tag tag-neutral">{product.cat}</span>
                {product.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
              </div>
              <h1 className="h-display fade-up in" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 14, '--delay': '60ms' }}>
                {product.name}
              </h1>
              <p className="t-lead fade-up in" style={{ marginTop: 16, '--delay': '120ms' }}>
                {product.desc}
              </p>

              {product.bullets.length > 0 && (
                <div className="detail-bullets fade-up in" style={{ '--delay': '180ms' }}>
                  <div className="eyebrow"><span className="dot"></span>{t('productDetail.keyFeatures')}</div>
                  <ul>
                    {product.bullets.map((b, i) => (
                      <li key={i}>
                        <span className="check"><I.Check size={12} /></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="detail-actions fade-up in" style={{ '--delay': '240ms' }}>
                <a className="btn btn-primary btn-lg" href="#cta">
                  {t('productDetail.requestQuote')} <I.ArrowRight size={16} />
                </a>
                <Link className="btn btn-secondary btn-lg" to="/products">
                  <I.Box size={16} />
                  {t('productDetail.browseCatalog')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="container container-wide">
          <div className="detail-specs-grid">
            <div className="detail-specs-col">
              <div className="eyebrow"><span className="dot"></span>{t('productDetail.specsEyebrow')}</div>
              <h2 className="h-section" style={{ marginTop: 12, fontSize: 'clamp(24px, 2.4vw, 32px)' }}>
                {t('productDetail.specsHeading')}
              </h2>
              <p className="t-lead" style={{ marginTop: 14, maxWidth: 480 }}>
                {t('productDetail.specsLead', { name: product.name.toLowerCase() })}
              </p>
            </div>
            <div className="detail-specs-list">
              {getSpecMatrix(product).map((row, i) => (
                <div key={i} className="spec-row">
                  <div className="spec-k">{t(`productDetail.specKeys.${row.k}`, row.k)}</div>
                  <div className="spec-v">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process mini */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container container-wide">
          <div className="eyebrow fade-up"><span className="dot"></span>{t('productDetail.processEyebrow')}</div>
          <h2 className="h-section fade-up" style={{ marginTop: 12, maxWidth: 680 }}>
            {t('productDetail.processHeading')}
          </h2>
          <div className="process-mini">
            {processSteps.map((s, i) => (
              <div key={i} className="process-mini-step fade-up" style={{ '--delay': `${i * 60}ms` }}>
                <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0, paddingBottom: 96 }}>
          <div className="container container-wide">
            <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 24 }}>
              <div>
                <div className="eyebrow"><span className="dot"></span>{t('productDetail.relatedEyebrow', { cat: product.cat })}</div>
                <h2 className="h-section" style={{ marginTop: 12, fontSize: 'clamp(24px, 2.4vw, 32px)' }}>
                  {t('productDetail.relatedHeading')}
                </h2>
              </div>
              <Link className="btn btn-ghost" to="/products">
                {t('productDetail.relatedSeeAll', { cat: product.cat })} <I.ArrowRight size={14} />
              </Link>
            </div>
            <div className="product-grid">
              {related.map((p, i) => (
                <Link key={p.name} to={`/products/${productSlug(p.name)}`}
                      className="card card-hover product-card fade-up"
                      style={{ '--delay': `${i * 60}ms`, textDecoration: 'none' }}>
                  <ProductArt kind={p.kind} />
                  <div className="product-body">
                    <div className="product-meta">
                      <span className="tag tag-neutral">{p.cat}</span>
                      {p.tags.slice(0, 1).map((tag, j) => <span key={j} className="tag">{tag}</span>)}
                    </div>
                    <div className="product-title">{p.name}</div>
                    <p className="product-desc">{p.desc}</p>
                    <div className="product-foot">
                      <span className="product-link">{t('products.viewDetails')}</span>
                      <I.ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </>
  )
}
