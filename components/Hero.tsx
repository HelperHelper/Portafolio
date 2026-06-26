'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20

      const glow = container.querySelector('.hero-glow') as HTMLElement
      if (glow) {
        glow.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="hero-glow absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 ease-out">
        <div className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #C8A96E 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 reveal visible" style={{ transitionDelay: '0.1s' }}>
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-display font-medium tracking-[0.25em] text-gold uppercase">
              Disponible para nuevas oportunidades
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold leading-[1.05] mb-8 reveal visible" style={{ transitionDelay: '0.2s' }}>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-text">
              Diseño &amp;
            </span>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-shimmer">
              Desarrollo
            </span>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-text">
              Digital.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-text-dim text-lg md:text-xl font-body font-light max-w-xl leading-relaxed mb-12 reveal visible" style={{ transitionDelay: '0.35s' }}>
            Convierto ideas en experiencias web que destacan.
            Trabajo con startups, marcas y personas que quieren
            <span className="text-text"> resultados reales</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 reveal visible" style={{ transitionDelay: '0.5s' }}>
            <button
              onClick={() => document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-gold text-base font-display font-semibold text-sm px-7 py-3.5 hover:bg-gold/90 transition-all duration-300 rounded-sm"
            >
              Ver proyectos
              <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 border border-white/10 text-text-dim hover:text-text hover:border-white/30 font-display font-medium text-sm px-7 py-3.5 transition-all duration-300 rounded-sm"
            >
              Conversemos
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/5 reveal visible" style={{ transitionDelay: '0.65s' }}>
            {[
              { value: '3+', label: 'Años de experiencia' },
              { value: '20+', label: 'Proyectos entregados' },
              { value: '100%', label: 'Clientes satisfechos' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl md:text-4xl text-gold">{stat.value}</p>
                <p className="text-xs text-text-dim font-body mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-display tracking-widest text-text-dim uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
