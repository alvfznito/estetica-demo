import { faqs } from '@/lib/data'

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 bg-crudo">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Antes de reservar
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Preguntas frecuentes
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group bg-white border border-muted/20 shadow-soft px-6 py-4 rounded-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-cormorant font-medium text-base text-lg">
                {f.q}
                <span className="text-champagne text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="font-manrope text-muted text-[15px] leading-relaxed mt-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
