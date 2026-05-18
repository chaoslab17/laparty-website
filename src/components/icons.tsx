import type { SVGProps, ReactNode } from 'react'

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'stroke'> & {
  size?: number
  stroke?: number
  children?: ReactNode
}

const Icon = ({ children, size = 18, stroke = 1.6, ...rest }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
)

export const I: Record<string, (p: IconProps) => React.ReactElement> = {
  Chevron:     (p) => <Icon {...p}><path d="M6 9l6 6 6-6"/></Icon>,
  ChevronRight:(p) => <Icon {...p}><path d="M9 6l6 6-6 6"/></Icon>,
  ArrowRight:  (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>,
  ArrowUp:     (p) => <Icon {...p}><path d="M12 19V5M5 12l7-7 7 7"/></Icon>,
  Search:      (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></Icon>,
  Globe:       (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></Icon>,
  Check:       (p) => <Icon {...p}><path d="M5 12l5 5L20 7"/></Icon>,
  Plus:        (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  Close:       (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>,
  Menu:        (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>,
  Box:         (p) => <Icon {...p}><path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v9"/></Icon>,
  Layers:      (p) => <Icon {...p}><path d="M12 2l10 6-10 6L2 8l10-6z"/><path d="M2 16l10 6 10-6M2 12l10 6 10-6"/></Icon>,
  Truck:       (p) => <Icon {...p}><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></Icon>,
  Factory:     (p) => <Icon {...p}><path d="M3 21V9l6 4V9l6 4V5l6 4v12H3z"/><path d="M9 17h2M13 17h2M17 17h2M5 17h2"/></Icon>,
  Cog:         (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></Icon>,
  Sparkles:    (p) => <Icon {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.5 5.5l4 4M14.5 14.5l4 4M5.5 18.5l4-4M14.5 9.5l4-4"/></Icon>,
  Shield:      (p) => <Icon {...p}><path d="M12 3l8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></Icon>,
  Leaf:        (p) => <Icon {...p}><path d="M21 3c-4 0-12 2-14 12-1 5 1 6 3 6 8 0 12-6 12-14 0-2-1-4-1-4z"/><path d="M9 17c2-6 6-10 12-14"/></Icon>,
  Spark:       (p) => <Icon {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></Icon>,
  Building:    (p) => <Icon {...p}><path d="M4 22V4h16v18M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2"/></Icon>,
  Phone:       (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z"/></Icon>,
  Mail:        (p) => <Icon {...p}><path d="M4 4h16v16H4z"/><path d="M4 7l8 6 8-6"/></Icon>,
  Cube:        (p) => <Icon {...p}><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z"/><path d="M3.3 7L12 12l8.7-5M12 22V12"/></Icon>,
  Activity:    (p) => <Icon {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></Icon>,
  Doc:         (p) => <Icon {...p}><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M9 14h6M9 18h4"/></Icon>,
  Network:     (p) => <Icon {...p}><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-7 7M12 11l7 7"/></Icon>,
  Code:        (p) => <Icon {...p}><path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></Icon>,
  TrendUp:     (p) => <Icon {...p}><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></Icon>,
  Pin:         (p) => <Icon {...p}><path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></Icon>,
  Calendar:    (p) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></Icon>,
}

export default I
