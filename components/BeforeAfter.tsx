import Image from 'next/image'

const cases = [
  {
    title: 'Tratamiento Facial Premium',
    subtitle: 'Protocolo hidratación & luminosidad — 4 sesiones',
    before: {
      src: 'https://images.unsplash.com/photo-1730288951113-9cc087c14b83?auto=format&fit=crop&w=600&q=80',
      alt: 'Antes del tratamiento facial',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1581182815808-b6eb627a8798?auto=format&fit=crop&w=600&q=80',
      alt: 'Después del tratamiento facial',
    },
  },
  {
    title: 'Depilación Láser Integral',
    subtitle: 'Eliminación definitiva del vello — 6 sesiones',
    before: {
      src: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?auto=format&fit=crop&w=600&q=80',
      alt: 'Antes de la depilación láser',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1551184451-76b762941ad6?auto=format&fit=crop&w=600&q=80',
      alt: 'Después de la depilación láser',
    },
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-dorado mb-5">
            Resultados reales
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-negro">
            Antes &amp; Después
          </h2>
          <div className="w-10 h-px bg-dorado mx-auto mt-7" />
          <p className="font-dm text-sm text-negro/50 mt-7 max-w-md mx-auto leading-loose">
            Imágenes reales de clientas que han confiado en nuestros tratamientos.
          </p>
        </div>

        {/* Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {cases.map((c, i) => (
            <div key={i}>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Before */}
                <div className="relative">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={c.before.src}
                      alt={c.before.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-negro/55 py-2.5 text-center">
                      <span className="font-dm text-[10px] tracking-[0.25em] uppercase text-white/90">
                        Antes
                      </span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={c.after.src}
                      alt={c.after.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-dorado/80 py-2.5 text-center">
                      <span className="font-dm text-[10px] tracking-[0.25em] uppercase text-white">
                        Después
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="font-cormorant text-2xl font-medium text-negro mb-1.5">
                {c.title}
              </h3>
              <p className="font-dm text-sm text-negro/50">{c.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
