import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import BeforeAfter from '@/components/BeforeAfter'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <BeforeAfter />
      <Team />
      <Reviews />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
