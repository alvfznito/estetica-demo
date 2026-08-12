const reviews = [
  {
    name: 'Marta G.',
    treatment: 'Tratamiento facial · Valdepeñas',
    text: 'Un centro precioso. El ambiente es acogedor y los resultados del facial superaron todas mis expectativas. María es una profesional excepcional. Ya soy clienta fija.',
    rating: 5,
    date: 'Marzo 2026',
  },
  {
    name: 'Elena M.',
    treatment: 'Depilación láser · Manzanares',
    text: 'Llevo 6 sesiones y los resultados son espectaculares. El proceso es totalmente indoloro y el trato inmejorable. Totalmente recomendado.',
    rating: 5,
    date: 'Febrero 2026',
  },
  {
    name: 'Carmen R.',
    treatment: 'Masaje relajante · La Solana',
    text: 'El masaje más relajante que he tenido en mi vida. Laura tiene unas manos mágicas. Salí completamente renovada. Ya he reservado para el mes que viene.',
    rating: 5,
    date: 'Enero 2026',
  },
]

export default function Reviews() {
  return (
    <section id="resenas" className="py-24 px-6 bg-beige">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Lo que dicen de nosotras
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Opiniones verificadas
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white shadow-soft border border-champagne/20 p-8 flex flex-col rounded-sm"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i} className="text-champagne text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-cormorant text-[1.15rem] font-light text-base leading-relaxed italic flex-1 mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-champagne/25 pt-4">
                <p className="font-manrope text-sm font-semibold text-base">{r.name}</p>
                <p className="font-manrope text-xs text-champagne tracking-wide mt-0.5">
                  {r.treatment}
                </p>
                <p className="font-manrope text-[10px] text-muted mt-1.5 uppercase tracking-wide">
                  {r.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-cormorant text-2xl font-light text-base">
            +184 clientas satisfechas ·{' '}
            <em className="not-italic italic text-champagne">Valoración media 4,9 / 5</em>
          </p>
        </div>
      </div>
    </section>
  )
}
