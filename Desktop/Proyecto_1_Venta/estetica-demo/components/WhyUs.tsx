const reasons = [
  {
    symbol: '✦',
    title: 'Profesionales Certificadas',
    description:
      'Todo nuestro equipo posee certificación oficial y formación continua en las técnicas y tecnologías más avanzadas del sector.',
  },
  {
    symbol: '◎',
    title: 'Productos de Alta Gama',
    description:
      'Trabajamos exclusivamente con marcas premium: Dermalogica, Sothys y Comfort Zone para garantizar resultados visibles y duraderos.',
  },
  {
    symbol: '❋',
    title: 'Resultados Garantizados',
    description:
      'Cada tratamiento se diseña de forma personalizada para tu tipo de piel y objetivos. Tu satisfacción es nuestra mejor carta de presentación.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-28 px-6 bg-rosa/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-dorado mb-5">
            Nuestra diferencia
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-negro">
            ¿Por qué elegir Lumière?
          </h2>
          <div className="w-10 h-px bg-dorado mx-auto mt-7" />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center px-4">
              <div className="font-cormorant text-5xl text-dorado mb-7 select-none">
                {reason.symbol}
              </div>
              <h3 className="font-cormorant text-2xl font-medium text-negro mb-4">
                {reason.title}
              </h3>
              <p className="font-dm text-sm text-negro/60 leading-loose">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white px-10 py-6 shadow-sm border border-nude/40 text-center">
            <p className="font-cormorant text-2xl font-light text-negro">
              Primera consulta{' '}
              <em className="not-italic text-dorado font-medium">completamente gratuita</em>
            </p>
            <p className="font-dm text-xs tracking-wide text-negro/45 mt-2 uppercase">
              Sin compromiso · Asesoramiento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
