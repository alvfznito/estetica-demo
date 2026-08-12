import Image from 'next/image'

const team = [
  {
    name: 'María García',
    title: 'Directora & esteticista senior',
    specialty:
      'Especialista en tratamientos faciales avanzados y depilación láser. Certificada por CIDESCO Internacional.',
    years: '12 años de experiencia',
    image: '/img/team-maria.jpg',
    alt: 'María García, directora del Centro Lumière',
  },
  {
    name: 'Laura Martínez',
    title: 'Esteticista & masajista',
    specialty:
      'Especialista en masajes terapéuticos, tratamientos corporales y drenaje linfático.',
    years: '8 años de experiencia',
    image: '/img/team-laura.jpg',
    alt: 'Laura Martínez, esteticista del Centro Lumière',
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 px-6 bg-crudo">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-manrope text-xs tracking-[0.35em] uppercase text-champagne mb-5">
            Quiénes somos
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-base">
            Nuestro equipo
          </h2>
          <div className="w-10 h-px bg-champagne mx-auto mt-7" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="relative w-44 h-44 rounded-full overflow-hidden mb-7 ring-1 ring-champagne/40">
                <Image src={m.image} alt={m.alt} fill sizes="180px" className="object-cover" />
              </div>
              <h3 className="font-cormorant text-2xl font-medium text-base mb-1">{m.name}</h3>
              <p className="font-manrope text-xs tracking-[0.15em] uppercase text-champagne mb-4">
                {m.title}
              </p>
              <p className="font-manrope text-sm text-muted leading-loose max-w-xs mb-3">
                {m.specialty}
              </p>
              <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-muted">
                {m.years}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
