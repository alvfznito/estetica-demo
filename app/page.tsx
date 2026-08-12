import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import WhyUs from '@/components/WhyUs'
import Services from '@/components/Services'
import Productos from '@/components/Productos'
import BeforeAfter from '@/components/BeforeAfter'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import ComoLlegar from '@/components/ComoLlegar'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyCTA from '@/components/StickyCTA'
import Schemas from '@/components/Schemas'

export default function Home() {
  return (
    <main>
      <Schemas />
      <Navbar />
      <Hero />
      <TrustBar />
      <WhyUs />
      <Services />
      <Productos />
      <BeforeAfter />
      <Team />
      <Reviews />
      <CTA />
      <ComoLlegar />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </main>
  )
}
