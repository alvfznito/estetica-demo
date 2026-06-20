'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-cormorant text-2xl font-semibold tracking-[0.2em] text-negro hover:text-dorado transition-colors duration-300"
        >
          Lumière
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm text-xs tracking-[0.15em] uppercase text-negro/60 hover:text-dorado transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden md:block font-dm text-xs tracking-[0.2em] uppercase px-7 py-3 border border-dorado text-dorado hover:bg-dorado hover:text-white transition-all duration-300"
        >
          Reservar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[6px] p-2"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-[1px] bg-negro transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-negro transition-all duration-300 ${
              isOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-negro transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-nude/40 px-6 py-8 flex flex-col gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-dm text-xs tracking-[0.2em] uppercase text-negro/60 hover:text-dorado transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="font-dm text-xs tracking-[0.2em] uppercase px-6 py-3 border border-dorado text-dorado text-center mt-2"
          >
            Reservar cita
          </a>
        </div>
      </div>
    </nav>
  )
}
