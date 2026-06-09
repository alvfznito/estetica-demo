import Image from 'next/image'

const team = [
  {
    name: 'María García',
    title: 'Directora & Esteticista Senior',
    specialty: 'Especialista en tratamientos faciales avanzados y depilación láser. Certificada por la CIDESCO Internacional.',
    years: '12 años de experiencia',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Laura Martínez',
    title: 'Esteticista & Masajista',
    specialty: 'Especialista en masajes terapéuticos, tratamientos corporales y técnicas de drenaje linfático.',
    years: '8 años de experiencia',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-28 px-6 bg-nude/15">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-dm text-xs tracking-[0.35em] uppercase text-dorado mb-5">
            Quiénes somos
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-negro">
            Nuestro Equipo
          </h2>
          <div className="w-10 h-px bg-dorado mx-auto mt-7" />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Portrait */}
              <div className="relative w-44 h-44 rounded-full overflow-hidden mb-7 ring-1 ring-nude">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="font-cormorant text-2xl font-medium text-negro mb-1">
                {member.name}
              </h3>
              <p className="font-dm text-xs tracking-[0.15em] uppercase text-dorado mb-4">
                {member.title}
              </p>
              <p className="font-dm text-sm text-negro/55 leading-loose max-w-xs mb-3">
                {member.specialty}
              </p>
              <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-negro/35">
                {member.years}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
