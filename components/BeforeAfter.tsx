import Image from 'next/image'

const cases = [
  {
    title: 'Tratamiento facial premium',
    subtitle: 'Protocolo hidratación & luminosidad — 4 sesiones',
    before: { src: '/img/ba-facial-antes.jpg', alt: 'Antes del tratamiento facial' },
    after: { src: '/img/ba-facial-despues.jpg', alt: 'Después del tratamiento facial' },
  },
  {
    title: 'Depilación láser integral',
    subtitle: 'Eliminación definitiva del vello — 6 sesiones',
    before: { src: '/img/ba-laser-antes.jpg', alt: 'Antes de la depilación láser' },
    after: { src: '/img/ba-laser-despues.jpg', alt: 'Después de la depilación láser' },
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 px-6 bg-crudo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Resultados reales
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Antes &amp; Después
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
          <p className="font-manrope text-sm text-muted mt-6 max-w-md mx-auto leading-loose">
            Imágenes reales de clientas que han confiado en nuestros tratamientos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((c) => (
            <div key={c.title}>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image src={c.before.src} alt={c.before.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-base/75 py-2 text-center">
                    <span className="font-manrope text-[10px] tracking-[0.25em] uppercase text-white/90">
                      Antes
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image src={c.after.src} alt={c.after.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-champagne py-2 text-center">
                    <span className="font-manrope text-[10px] tracking-[0.25em] uppercase text-white">
                      Después
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="font-cormorant text-2xl font-medium text-base mb-1">{c.title}</h3>
              <p className="font-manrope text-sm text-muted">{c.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
