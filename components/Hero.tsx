import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
        alt="Centro Belleza Lumière — ambiente spa de lujo"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-negro/50 via-negro/25 to-negro/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-dm text-xs tracking-[0.4em] uppercase text-white/70 mb-8">
          Centro Belleza · Tu ciudad
        </p>
        <h1 className="font-cormorant font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] mb-6">
          Descubre Tu<br />
          <em className="not-italic text-rosa">Belleza Auténtica</em>
        </h1>
        <p className="font-dm text-sm md:text-base text-white/70 mb-12 max-w-lg mx-auto leading-loose tracking-wide">
          Primera consulta gratuita · Tratamientos premium · Resultados reales
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="font-dm text-xs tracking-[0.25em] uppercase px-10 py-4 bg-dorado text-white hover:bg-dorado/85 transition-all duration-300"
          >
            Reserva tu cita
          </a>
          <a
            href="#servicios"
            className="font-dm text-xs tracking-[0.25em] uppercase px-10 py-4 border border-white/70 text-white hover:bg-white/10 transition-all duration-300"
          >
            Ver tratamientos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50">
        <span className="font-dm text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
