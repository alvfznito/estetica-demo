const reviews = [
  {
    name: 'Ana S.',
    treatment: 'Tratamiento Facial',
    text: 'Un lugar increíble. El ambiente es precioso y los resultados del tratamiento facial superaron todas mis expectativas. María es una profesional excepcional. Ya soy clienta fija.',
    rating: 5,
    date: 'Hace 2 semanas',
  },
  {
    name: 'Carmen R.',
    treatment: 'Depilación Láser',
    text: 'Llevo 6 sesiones de depilación láser y los resultados son espectaculares. El proceso es totalmente indoloro y el trato inmejorable. Totalmente recomendado.',
    rating: 5,
    date: 'Hace 1 mes',
  },
  {
    name: 'Sofía M.',
    treatment: 'Masaje Relajante',
    text: 'El masaje más relajante que he tenido en mi vida. Laura tiene unas manos mágicas. Salí completamente renovada. Ya he reservado para el mes que viene.',
    rating: 5,
    date: 'Hace 3 semanas',
  },
]

export default function Reviews() {
  return (
    <section id="resenas" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-dorado mb-5">
            Lo que dicen de nosotras
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-negro">
            Nuestras Clientas
          </h2>
          <div className="w-10 h-px bg-dorado mx-auto mt-7" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-nude/50 p-9 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-dorado text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-[1.2rem] font-light text-negro leading-relaxed italic flex-1 mb-7">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-nude/50 pt-5">
                <p className="font-dm text-sm font-medium text-negro">{review.name}</p>
                <p className="font-dm text-xs text-dorado tracking-wide mt-0.5">
                  {review.treatment}
                </p>
                <p className="font-dm text-[10px] text-negro/35 mt-1.5 uppercase tracking-wide">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-14 text-center">
          <p className="font-cormorant text-2xl font-light text-negro">
            Más de 200 clientas satisfechas ·{' '}
            <em className="not-italic text-dorado">Valoración media 4.9 / 5</em>
          </p>
        </div>
      </div>
    </section>
  )
}
