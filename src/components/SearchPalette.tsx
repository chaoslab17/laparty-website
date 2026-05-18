import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { I } from './icons'
import PRODUCTS from '../data/products'
import { productSlug } from '../utils/productSlug'

interface SearchPaletteProps {
  open: boolean
  onClose: () => void
}

export default function SearchPalette({ open, onClose }: SearchPaletteProps) {
  const { t } = useTranslation()
  const [q, setQ] = React.useState('')
  const [active, setActive] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const productItems = PRODUCTS.map(p => ({
    g: t('search.groups.Products'),
    i: ({ Industrial: <I.Box size={16}/>, 'Food Service': <I.Layers size={16}/>, Healthcare: <I.Shield size={16}/>, Mailers: <I.Truck size={16}/>, Security: <I.Box size={16}/> } as Record<string, React.ReactElement>)[p.cat] || <I.Box size={16}/>,
    t: p.name,
    s: `${p.cat} · ${p.desc.slice(0, 60)}${p.desc.length > 60 ? '…' : ''}`,
    url: `/products/${productSlug(p.name)}`,
    internal: true,
  }))

  const all = [
    ...productItems,
    { g: t('search.groups.Capabilities'), i: <I.Factory size={16} />, t: t('search.items.filmExtrusion'),  s: t('search.items.filmExtrusionSub'),  url: undefined, internal: false },
    { g: t('search.groups.Capabilities'), i: <I.Sparkles size={16}/>, t: t('search.items.flexoPrinting'),  s: t('search.items.flexoPrintingSub'),  url: undefined, internal: false },
    { g: t('search.groups.Capabilities'), i: <I.Leaf size={16}    />, t: t('search.items.sustainable'),     s: t('search.items.sustainableSub'),    url: undefined, internal: false },
    { g: t('search.groups.Company'),      i: <I.Building size={16}/>, t: t('search.items.about'),           s: t('search.items.aboutSub'),          url: undefined, internal: false },
    { g: t('search.groups.Company'),      i: <I.Pin size={16}     />, t: t('search.items.contact'),         s: t('search.items.contactSub'),        url: undefined, internal: false },
  ]

  const filtered = q.trim()
    ? all.filter(x => (x.t + x.s + x.g).toLowerCase().includes(q.toLowerCase()))
    : all

  const groups = React.useMemo(() => {
    const m: Record<string, typeof filtered> = {}
    filtered.forEach(x => { (m[x.g] ??= []).push(x) })
    return m
  }, [filtered])

  React.useEffect(() => {
    if (open) {
      setQ('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 30)
    }
  }, [open])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape')    { onClose() }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(filtered.length - 1, a + 1)) }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(0, a - 1)) }
      if (e.key === 'Enter') {
        const item = filtered[active]
        if (item?.url) {
          if (item.internal) navigate(item.url)
          else window.open(item.url, '_blank', 'noopener')
        }
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, active, onClose, navigate])

  let idx = -1
  return (
    <div className={`cmdk-back ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="cmdk" onClick={e => e.stopPropagation()}>
        <div className="cmdk-input-wrap">
          <I.Search size={18} color="#6B778C" />
          <input ref={inputRef} className="cmdk-input"
                 value={q} onChange={e => { setQ(e.target.value); setActive(0) }}
                 placeholder={t('search.placeholder')} />
          <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 11, padding: '2px 8px', background: '#F4F5F7', border: '1px solid #DFE1E6', borderRadius: 6, color: '#6B778C' }}>ESC</kbd>
        </div>
        <div className="cmdk-list">
          {Object.entries(groups).map(([g, items]) => (
            <div key={g}>
              <div className="cmdk-group-label">{g}</div>
              {items.map((x) => {
                idx++
                const isActive = idx === active
                return (
                  <div key={x.t} className={`cmdk-item ${isActive ? 'active' : ''}`}
                       onMouseEnter={() => setActive(idx)}
                       onClick={() => {
                         if (x.url) {
                           if (x.internal) navigate(x.url)
                           else window.open(x.url, '_blank', 'noopener')
                         }
                         onClose()
                       }}
                       style={{ cursor: x.url ? 'pointer' : 'default' }}>
                    <div className="ico">{x.i}</div>
                    <div>
                      <div className="title">{x.t}</div>
                      <div className="sub">{x.s}</div>
                    </div>
                    <I.ArrowRight size={14} color="#6B778C" />
                  </div>
                )
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: 32, textAlign: 'center', color: '#6B778C', fontSize: 13 }}>
              {t('search.noResults', { q })}
            </div>
          )}
        </div>
        <div className="cmdk-foot">
          <span>{t('search.hints')}</span>
          <span>{t('search.shortcuts')}</span>
        </div>
      </div>
    </div>
  )
}
