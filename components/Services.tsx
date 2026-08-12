import { treatments } from '@/lib/data'

export default function Services() {
  return (
    <section id="tratamientos" className="py-28 px-6 bg-beige">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Lo que ofrecemos
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Nuestros tratamientos
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
          <p className="font-manrope text-sm text-muted mt-6 max-w-lg mx-auto leading-loose">
            Rituales personalizados en un espacio pensado para el descanso — con productos naturales
            de nuestra propia línea Valdepeñas Organic.
          </p>
        </div>

        {/* Grid 5/7 con vídeo + tratamientos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Vídeo (izquierda) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-soft">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/facial-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
              >
                <source src="/facial-loop.webm" type="video/webm" />
                <source src="/facial-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Grid tratamientos (derecha) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {treatments.map((t) => (
                <div key={t.name} className="border-b border-champagne/25 pb-6">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-cormorant text-2xl font-medium text-base leading-tight">
                      {t.name}
                    </h3>
                    <span className="font-cormorant italic text-2xl font-medium text-champagne shrink-0">
                      {t.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center lg:text-left">
              <a
                href="#cita"
                className="inline-block font-manrope text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 bg-champagne text-white hover:bg-champagne/85 transition-all duration-300 rounded-sm"
              >
                Reservar mi cita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
