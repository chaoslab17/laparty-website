import { useFadeUp } from '../hooks/useFadeUp'
import Hero from '../components/Hero'
import LogoStrip from '../components/LogoStrip'
import Stats from '../components/Stats'
import Products from '../components/Products'
import Capabilities from '../components/Capabilities'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  useFadeUp()
  return (
    <>
      <Hero />
      <LogoStrip />
      <Stats />
      <Products />
      <Capabilities />
      <CTA />
      <Footer />
    </>
  )
}
