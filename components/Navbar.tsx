'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Productos', href: '#productos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horarios', href: '#horarios' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled ? 'bg-crudo/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#inicio"
          className={`font-cormorant text-2xl font-semibold tracking-[0.2em] transition-colors duration-300 ${
            scrolled ? 'text-base hover:text-champagne' : 'text-white hover:text-champagne-light'
          }`}
        >
          Lumière
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-manrope text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-base/70 hover:text-champagne' : 'text-white/80 hover:text-champagne-light'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#cita"
          className="hidden md:block font-manrope text-xs font-semibold tracking-[0.2em] uppercase px-6 py-2.5 bg-champagne text-white hover:bg-champagne/85 transition-all duration-300 rounded-sm"
        >
          Pedir cita
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex flex-col gap-[6px] p-2 ${
            scrolled ? 'text-base' : 'text-white'
          }`}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-[1px] bg-current transition-all origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[1px] bg-current transition-all ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[1px] bg-current transition-all origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-crudo border-t border-champagne/25 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-manrope text-xs tracking-[0.2em] uppercase text-base/70 hover:text-champagne transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cita"
            onClick={() => setIsOpen(false)}
            className="font-manrope text-xs font-semibold tracking-[0.2em] uppercase px-6 py-3 bg-champagne text-white text-center rounded-sm mt-2"
          >
            Pedir cita
          </a>
        </div>
      </div>
    </nav>
  )
}
