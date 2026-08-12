import { faqs } from '@/lib/data'

const beautySalonSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Centro Lumière',
  description:
    'Centro de estética y bienestar en Valdepeñas. Tratamientos faciales, corporales y productos naturales. Citas confirmadas por WhatsApp.',
  url: 'https://centrolumiere.vercel.app',
  image: 'https://centrolumiere.vercel.app/hero-poster.jpg',
  telephone: '+34926310002',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Real 12',
    addressLocality: 'Valdepeñas',
    postalCode: '13300',
    addressRegion: 'Ciudad Real',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7594,
    longitude: -3.3862,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '184',
  },
  areaServed: ['Valdepeñas', 'Ciudad Real', 'Manzanares', 'La Solana'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Schemas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
