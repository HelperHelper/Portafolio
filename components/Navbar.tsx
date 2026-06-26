'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'nav-blur bg-base/80 border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          className="font-display font-700 text-lg tracking-tight"
        >
          <span className="text-shimmer font-bold">Julián Arango Jaramillo</span>
          <span className="text-muted">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm text-text-dim hover:text-text transition-colors duration-200 font-body tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav('#contacto')}
          className="hidden md:block text-sm font-display font-medium px-5 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-base transition-all duration-300 rounded-sm"
        >
          Hablemos
        </button>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-surface/95 nav-blur border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-base text-text-dim hover:text-gold transition-colors font-display"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contacto')}
            className="mt-2 text-sm font-display font-medium px-5 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-base transition-all duration-300 rounded-sm w-fit"
          >
            Hablemos
          </button>
        </div>
      </div>
    </header>
  )
}
