import { useFadeUp } from '../hooks/useFadeUp'
import Products from '../components/Products'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function ProductsPage() {
  useFadeUp()
  return (
    <>
      <Products />
      <CTA />
      <Footer />
    </>
  )
}
