import StatCounter from './StatCounter'

export default function TrustBar() {
  return (
    <section className="bg-crudo border-y border-champagne/25">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-champagne/25">
        <div className="py-10 text-center flex flex-col items-center">
          <StatCounter value="10" />
          <div className="text-muted text-xs font-manrope uppercase tracking-[0.25em] mt-2">
            años de experiencia
          </div>
        </div>
        <div className="py-10 text-center flex flex-col items-center">
          <StatCounter value="3500" prefix="+" />
          <div className="text-muted text-xs font-manrope uppercase tracking-[0.25em] mt-2">
            tratamientos realizados
          </div>
        </div>
        <div className="py-10 text-center flex flex-col items-center">
          <StatCounter value="4,9" decimals={1} suffix="★" />
          <div className="text-muted text-xs font-manrope uppercase tracking-[0.25em] mt-2">
            valoración Google
          </div>
        </div>
        <div className="py-10 text-center flex flex-col items-center">
          <StatCounter value="184" />
          <div className="text-muted text-xs font-manrope uppercase tracking-[0.25em] mt-2">
            opiniones verificadas
          </div>
        </div>
      </div>
    </section>
  )
}
