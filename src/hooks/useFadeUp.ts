import { useEffect } from 'react'

export function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up:not(.in)')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}
