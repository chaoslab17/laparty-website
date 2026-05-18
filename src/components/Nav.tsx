import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { I } from './icons'

interface NavProps {
  onOpenSearch: () => void
}

const LANGS = [
  { code: 'en',   label: 'English',  short: 'EN',  flag: '🇺🇸' },
  { code: 'zh-TW', label: '繁體中文', short: '繁中', flag: '🇹🇼' },
]

function LangPicker() {
  const { i18n } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  const current = LANGS.find(l => l.code === i18n.language) ?? LANGS[0]

  React.useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} className="lang-picker">
      <button className="lang-pill" title="Language" onClick={() => setOpen(o => !o)}>
        <I.Globe size={14} />
        {current.short} <I.Chevron size={12} />
      </button>
      {open && (
        <div className="lang-dropdown">
          {LANGS.map(l => (
            <button
              key={l.code}
              className={`lang-option ${l.code === i18n.language ? 'active' : ''}`}
              onClick={() => { i18n.changeLanguage(l.code); setOpen(false) }}
            >
              <span className="lang-option-flag">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav({ onOpenSearch }: NavProps) {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState<string | null>(null)
  const closeTimer = React.useRef<number | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onEnter = (key: string) => {
    if (closeTimer.current !== null) clearTimeout(closeTimer.current)
    setOpen(key)
  }
  const onLeave = () => {
    if (closeTimer.current !== null) clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpen(null), 120)
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container container-wide nav-inner">
        <Link className="brand" to="/">
          <img className="brand-mark" src="/logo.png" alt="La Party" />
          <div className="brand-text">
            <span className="b1">LA PARTY</span>
            <span className="b2">CORPORATION · EST. 1995</span>
          </div>
        </Link>

        <div className="nav-links">
          <div className={`has-mega ${open === 'products' ? 'open' : ''}`}
               onMouseEnter={() => onEnter('products')}
               onMouseLeave={onLeave}
               style={{ position: 'relative' }}>
            <a className="nav-link" href="/#products">
              {t('nav.industries')} <I.Chevron size={14} />
            </a>
            <ProductsMega />
          </div>

          <div className={`has-mega ${open === 'solutions' ? 'open' : ''}`}
               onMouseEnter={() => onEnter('solutions')}
               onMouseLeave={onLeave}
               style={{ position: 'relative' }}>
            <a className="nav-link" href="/#capabilities">
              {t('nav.capabilities')} <I.Chevron size={14} />
            </a>
            <SolutionsMega />
          </div>

          <a className="nav-link" href="/#operations">{t('nav.operations')}</a>
          <a className="nav-link" href="#">{t('nav.company')}</a>
        </div>

        <div className="nav-right">
          <button className="search-trigger" onClick={onOpenSearch}>
            <I.Search size={14} />
            <span>{t('nav.searchPlaceholder')}</span>
            <kbd>⌘K</kbd>
          </button>
          <LangPicker />
          <button className="btn btn-primary btn-sm">{t('nav.requestQuote')}</button>
        </div>
      </div>
    </nav>
  )
}

function ProductsMega() {
  const { t } = useTranslation()
  const icons = [<I.Cog />, <I.Layers />, <I.Shield />, <I.Truck />, <I.Box />, <I.Spark />]
  const items = t('nav.mega.products.items', { returnObjects: true }) as Array<{ title: string; sub: string }>
  return (
    <div className="mega">
      <div className="mega-grid">
        {items.map((x, i) => (
          <Link key={i} className="mega-item" to="/products">
            <div className="mega-icon">{icons[i]}</div>
            <div>
              <div className="mega-title">{x.title}</div>
              <div className="mega-sub">{x.sub}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mega-foot">
        <span>{t('nav.mega.products.footnote')}</span>
        <Link className="btn btn-ghost btn-sm" to="/products">
          {t('nav.mega.products.browseCatalog')} <I.ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

function SolutionsMega() {
  const { t } = useTranslation()
  const icons = [<I.Factory />, <I.Cog />, <I.Sparkles />, <I.Shield />, <I.Leaf />, <I.Truck />]
  const items = t('nav.mega.capabilities.items', { returnObjects: true }) as Array<{ title: string; sub: string }>
  return (
    <div className="mega">
      <div className="mega-grid">
        {items.map((x, i) => (
          <a key={i} className="mega-item" href="/#capabilities">
            <div className="mega-icon">{icons[i]}</div>
            <div>
              <div className="mega-title">{x.title}</div>
              <div className="mega-sub">{x.sub}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="mega-foot">
        <span>{t('nav.mega.capabilities.footnote')}</span>
        <a className="btn btn-ghost btn-sm" href="/#capabilities">
          {t('nav.mega.capabilities.talkToOps')} <I.ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}
