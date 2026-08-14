export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error fetchPriority is valid on <video>
        fetchPriority="high"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/hero-loop.webm" type="video/webm" />
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(46,38,32,0.5)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-manrope text-xs tracking-[0.4em] uppercase text-champagne-light mb-8">
          Estética y bienestar · Valdepeñas
        </p>
        <h1 className="font-cormorant font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] mb-6">
          Estética
          <br />
          <em className="not-italic italic text-champagne-light">Sonia</em>
        </h1>
        <div className="w-16 h-px bg-champagne-light mx-auto my-6" />
        <p className="font-manrope text-sm md:text-base text-white/85 mb-10 max-w-lg mx-auto leading-loose tracking-wide">
          Tratamientos faciales, corporales y productos naturales.
          <br className="hidden sm:block" />
          Citas confirmadas por WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cita"
            className="font-manrope text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 bg-champagne text-white hover:bg-champagne/85 transition-all duration-300 rounded-sm"
          >
            Pedir cita
          </a>
          <a
            href="#tratamientos"
            className="font-manrope text-xs font-semibold tracking-[0.25em] uppercase px-10 py-4 border border-white/70 text-white hover:border-champagne-light hover:text-champagne-light transition-all duration-300 rounded-sm"
          >
            Ver tratamientos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60">
        <span className="font-manrope text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
