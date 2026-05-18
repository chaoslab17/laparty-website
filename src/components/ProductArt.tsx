interface ProductArtProps {
  kind: string
  color?: string
}

export default function ProductArt({ kind, color = "#0052CC" }: ProductArtProps) {
  const filmStroke = "#172B4D"
  return (
    <div className="product-art">
      <svg width="100%" height="100%" style={{position:'absolute', inset:0, opacity:0.55}} aria-hidden="true">
        <defs>
          <pattern id={`grid-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#C1C7D0" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${kind})`}/>
      </svg>

      <svg viewBox="0 0 320 200" width="100%" height="100%" style={{position:'absolute', inset:0}}>
        <defs>
          <linearGradient id={`film-${kind}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#E5EAF2" stopOpacity="0.85"/>
          </linearGradient>
        </defs>

        {kind === 'flat' && (
          <g transform="translate(90, 24)">
            <rect x="0" y="0" width="140" height="150" rx="3" fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.18"/>
            <circle cx="70" cy="12" r="4.5" fill="#F4F5F7" stroke={filmStroke} strokeOpacity="0.25"/>
            <line x1="4" y1="146" x2="136" y2="146" stroke={filmStroke} strokeOpacity="0.18" strokeDasharray="2 3"/>
            <line x1="4" y1="20" x2="136" y2="20" stroke={filmStroke} strokeOpacity="0.12"/>
            <path d="M18 26 L18 138" stroke="#FFFFFF" strokeWidth="6" opacity="0.55"/>
            <text x="70" y="84" fontSize="9" fontFamily="Geist Mono, monospace" textAnchor="middle" fill={filmStroke} opacity="0.35">FLAT POLY</text>
          </g>
        )}

        {kind === 'tshirt' && (
          <g transform="translate(80, 14)">
            <path d="M0 22 Q0 0 30 0 L60 0 Q70 0 75 14 Q80 22 85 14 Q90 0 100 0 L130 0 Q160 0 160 22 L150 38 L150 168 Q150 174 144 174 L16 174 Q10 174 10 168 L10 38 Z"
                  fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.2"/>
            <path d="M65 8 Q80 26 95 8" fill="none" stroke={filmStroke} strokeOpacity="0.25"/>
            <path d="M16 26 Q16 18 28 16 L48 14 Q56 14 56 22 L56 30" fill="none" stroke={filmStroke} strokeOpacity="0.18"/>
            <path d="M144 26 Q144 18 132 16 L112 14 Q104 14 104 22 L104 30" fill="none" stroke={filmStroke} strokeOpacity="0.18"/>
            <path d="M28 44 L28 160" stroke="#FFFFFF" strokeWidth="6" opacity="0.55"/>
            <line x1="14" y1="170" x2="146" y2="170" stroke={filmStroke} strokeOpacity="0.18" strokeDasharray="2 3"/>
          </g>
        )}

        {kind === 'mailer' && (
          <g transform="translate(60, 30)">
            <rect x="0" y="22" width="200" height="130" rx="3" fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.18"/>
            <rect x="0" y="0" width="200" height="22" rx="3" fill={color} opacity="0.12"/>
            <rect x="0" y="0" width="200" height="22" rx="3" fill="none" stroke={color} strokeOpacity="0.4" strokeDasharray="3 3"/>
            <text x="100" y="14" fontSize="8" fontFamily="Geist Mono, monospace" textAnchor="middle" fill={color} opacity="0.6">PEEL · SEAL · SHIP</text>
            <rect x="14" y="38" width="100" height="28" rx="2" fill="#FFFFFF" stroke={filmStroke} strokeOpacity="0.18"/>
            <line x1="18" y1="46" x2="100" y2="46" stroke={filmStroke} strokeOpacity="0.5"/>
            <line x1="18" y1="52" x2="80"  y2="52" stroke={filmStroke} strokeOpacity="0.3"/>
            <line x1="18" y1="58" x2="92"  y2="58" stroke={filmStroke} strokeOpacity="0.3"/>
            <g transform="translate(140, 38)">
              {Array.from({length: 14}).map((_, i) => (
                <rect key={i} x={i * 3} y="0" width={i % 3 === 0 ? 2 : 1} height="28" fill={filmStroke} opacity="0.6"/>
              ))}
            </g>
            <line x1="0" y1="148" x2="200" y2="148" stroke={filmStroke} strokeOpacity="0.18" strokeDasharray="2 3"/>
          </g>
        )}

        {kind === 'specimen' && (
          <g transform="translate(90, 18)">
            <rect x="0" y="0" width="140" height="170" rx="3" fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.18"/>
            <rect x="6" y="6" width="128" height="6" rx="1" fill="#FFFFFF" stroke={filmStroke} strokeOpacity="0.2"/>
            <line x1="10" y1="9" x2="130" y2="9" stroke={filmStroke} strokeOpacity="0.35" strokeDasharray="2 2"/>
            <circle cx="28" cy="38" r="14" fill="#FFEDEB" stroke="#DE350B" strokeWidth="1.4"/>
            <g transform="translate(28, 38)" fill="#DE350B">
              <circle r="3"/>
              <circle cx="0"  cy="-8" r="3.5" fill="none" stroke="#DE350B" strokeWidth="1.4"/>
              <circle cx="7"  cy="4"  r="3.5" fill="none" stroke="#DE350B" strokeWidth="1.4"/>
              <circle cx="-7" cy="4"  r="3.5" fill="none" stroke="#DE350B" strokeWidth="1.4"/>
            </g>
            <text x="48" y="34" fontSize="7" fontFamily="Inter" fontWeight="600" fill={filmStroke} opacity="0.8">SPECIMEN</text>
            <text x="48" y="44" fontSize="6" fontFamily="Geist Mono, monospace" fill={filmStroke} opacity="0.5">CATEGORY B · UN3373</text>
            <rect x="10" y="68" width="120" height="46" fill="#FFFFFF" stroke={filmStroke} strokeOpacity="0.2"/>
            <line x1="16" y1="78"  x2="124" y2="78"  stroke={filmStroke} strokeOpacity="0.18"/>
            <line x1="16" y1="86"  x2="124" y2="86"  stroke={filmStroke} strokeOpacity="0.18"/>
            <line x1="16" y1="94"  x2="100" y2="94"  stroke={filmStroke} strokeOpacity="0.18"/>
            <line x1="16" y1="102" x2="124" y2="102" stroke={filmStroke} strokeOpacity="0.18"/>
            <rect x="20" y="124" width="100" height="32" fill="#DEEBFF" stroke={color} strokeOpacity="0.3" strokeDasharray="3 2"/>
            <text x="70" y="144" fontSize="7" fontFamily="Geist Mono, monospace" textAnchor="middle" fill={color} opacity="0.7">ABSORBENT PAD</text>
          </g>
        )}

        {kind === 'zipper' && (
          <g transform="translate(90, 26)">
            <rect x="0" y="14" width="140" height="140" rx="3" fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.18"/>
            <rect x="0" y="0" width="140" height="14" rx="2" fill="#F4F5F7" stroke={filmStroke} strokeOpacity="0.25"/>
            {Array.from({length: 28}).map((_, i) => (
              <rect key={i} x={3 + i * 4.8} y="4" width="2" height="6" fill={filmStroke} opacity="0.4"/>
            ))}
            <rect x="60" y="-2" width="20" height="18" rx="3" fill={color}/>
            <rect x="64" y="2"  width="12" height="10" rx="2" fill="rgba(255,255,255,0.4)"/>
            <line x1="4" y1="150" x2="136" y2="150" stroke={filmStroke} strokeOpacity="0.18" strokeDasharray="2 3"/>
            <path d="M18 34 L18 144" stroke="#FFFFFF" strokeWidth="6" opacity="0.55"/>
          </g>
        )}

        {kind === 'security' && (
          <g transform="translate(80, 16)">
            <rect x="0" y="22" width="160" height="150" rx="3" fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.2"/>
            <rect x="0" y="0" width="160" height="22" rx="3" fill="#172B4D"/>
            <rect x="0" y="0" width="160" height="22" rx="3" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" strokeDasharray="2 2"/>
            <text x="80" y="14" fontSize="8" fontFamily="Geist Mono, monospace" textAnchor="middle" fill="#FFFFFF" letterSpacing="2">TAMPER · EVIDENT</text>
            <rect x="14" y="34" width="80" height="20" fill="#FFFFFF" stroke={filmStroke} strokeOpacity="0.2"/>
            <text x="20" y="48" fontSize="9" fontFamily="Geist Mono, monospace" fill={filmStroke}>SN 00482917</text>
            <rect x="100" y="34" width="46" height="20" fill="#FFFFFF" stroke={filmStroke} strokeOpacity="0.2"/>
            <g transform="translate(106, 38)">
              {Array.from({length: 12}).map((_, i) => (
                <rect key={i} x={i * 3} y="0" width={i % 2 ? 1.5 : 1} height="12" fill={filmStroke} opacity="0.7"/>
              ))}
            </g>
            <rect x="18" y="70" width="124" height="86" fill="none" stroke={filmStroke} strokeOpacity="0.12" strokeDasharray="3 3"/>
            <text x="80" y="118" fontSize="9" fontFamily="Inter" fontWeight="600" textAnchor="middle" fill={filmStroke} opacity="0.45">SECURE TRANSPORT</text>
          </g>
        )}

        {kind === 'gusseted' && (
          <g transform="translate(80, 18)">
            <rect x="20" y="0" width="120" height="164" rx="2" fill={`url(#film-${kind})`} stroke={filmStroke} strokeOpacity="0.2"/>
            <path d="M20 0 L4 18 L4 144 L20 164"   fill="#FFFFFF" fillOpacity="0.55" stroke={filmStroke} strokeOpacity="0.18"/>
            <path d="M140 0 L156 18 L156 144 L140 164" fill="#FFFFFF" fillOpacity="0.55" stroke={filmStroke} strokeOpacity="0.18"/>
            <line x1="20"  y1="0"   x2="20"  y2="164" stroke={filmStroke} strokeOpacity="0.18" strokeDasharray="2 3"/>
            <line x1="140" y1="0"   x2="140" y2="164" stroke={filmStroke} strokeOpacity="0.18" strokeDasharray="2 3"/>
            <rect x="70" y="14" width="20" height="6" rx="3" fill="#F4F5F7" stroke={filmStroke} strokeOpacity="0.3"/>
            <text x="80" y="92" fontSize="9" fontFamily="Geist Mono, monospace" textAnchor="middle" fill={filmStroke} opacity="0.35">GUSSETED</text>
          </g>
        )}

        {kind === 'antistatic' && (
          <g transform="translate(90, 22)">
            <rect x="0" y="0" width="140" height="156" rx="3" fill="#FDE5EC" stroke="#C2185B" strokeOpacity="0.25"/>
            <circle cx="70" cy="14" r="4.5" fill="#FFFFFF" stroke="#C2185B" strokeOpacity="0.4"/>
            <g transform="translate(70, 72)">
              <circle r="22" fill="none" stroke="#C2185B" strokeOpacity="0.5" strokeWidth="1.4"/>
              <path d="M0 -14 L-10 6 L-3 6 L-6 14 L8 -4 L1 -4 L4 -14 Z" fill="#C2185B" opacity="0.7"/>
            </g>
            <text x="70" y="112" fontSize="8" fontFamily="Geist Mono, monospace" textAnchor="middle" fill="#C2185B" letterSpacing="1.5">ESD SAFE</text>
            <text x="70" y="124" fontSize="6" fontFamily="Geist Mono, monospace" textAnchor="middle" fill="#C2185B" opacity="0.6">ASTM D257 · &lt;10¹² Ω</text>
          </g>
        )}
      </svg>
    </div>
  )
}
