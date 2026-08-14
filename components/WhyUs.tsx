const reasons = [
  {
    symbol: '✦',
    title: 'Profesionales certificadas',
    description:
      'Nuestro equipo posee certificación oficial y formación continua en las técnicas y tecnologías más avanzadas del sector.',
  },
  {
    symbol: '◎',
    title: 'Producto natural propio',
    description:
      'Trabajamos con nuestra línea Valdepeñas Organic Skincare: fórmulas naturales, sin parabenos, elaboradas localmente.',
  },
  {
    symbol: '❋',
    title: 'Resultados personalizados',
    description:
      'Cada tratamiento se diseña para tu tipo de piel y objetivos. Tu satisfacción es nuestra mejor carta de presentación.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Nuestra diferencia
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            ¿Por qué Estética Sonia?
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {reasons.map((r) => (
            <div key={r.title} className="text-center px-4">
              <div className="font-cormorant text-5xl text-salvia mb-6 select-none">{r.symbol}</div>
              <h3 className="font-cormorant text-2xl font-medium text-base mb-3">{r.title}</h3>
              <p className="font-manrope text-sm text-muted leading-loose">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-white px-10 py-6 shadow-soft border border-champagne/25 text-center rounded-sm">
            <p className="font-cormorant text-2xl font-light text-base">
              Primera consulta{' '}
              <em className="not-italic text-champagne font-medium italic">gratuita</em>
            </p>
            <p className="font-manrope text-xs tracking-wide text-muted mt-2 uppercase">
              Sin compromiso · Asesoramiento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
