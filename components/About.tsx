'use client'

import { useReveal } from './useReveal'
import { Code2, Layers, Rocket, Users } from 'lucide-react'

const skills = [
  { 
    group: 'Lenguajes', 
    items: ['JavaScript', 'TypeScript', 'Python', 'php'] 
  },
  { 
    group: 'Frontend', 
    items: ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS'] 
  },
  { 
    group: 'Backend', 
    items: ['Node.js', 'REST APIs', 'Microservices', 'laravel'] 
  },
  { 
    group: 'Bases de datos', 
    items: ['MySQL', 'MongoDB', 'Oracle'] 
  },
  { 
    group: 'DevOps & Cloud', 
    items: ['Amazon EC2', 'Git', 'Vercel'] 
  },
  { 
    group: 'Diseño & AI', 
    items: ['Figma', 'UI/UX', 'Design Systems', 'Claude AI', 'Make', 'ChatGPT', 'MidJourney','copilot','stable diffusion'] 
  },
]

const values = [
  { icon: Code2, title: 'Código limpio', desc: 'Escribo código que otros pueden leer, escalar y mantener.' },
  { icon: Layers, title: 'Diseño primero', desc: 'La experiencia visual es tan importante como la funcionalidad.' },
  { icon: Rocket, title: 'Entrega puntual', desc: 'Los plazos son compromisos, no sugerencias.' },
  { icon: Users, title: 'Comunicación real', desc: 'Te mantengo informado en cada etapa del proyecto.' },
]

export default function About() {
  const headingRef = useReveal(0)
  const textRef = useReveal(0.1)
  const skillsRef = useReveal(0.2)
  const valuesRef = useReveal(0.3)

  return (
    <section id="sobre-mi" className="py-28 px-6 bg-surface relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Bio */}
          <div>
            <div className="flex items-center gap-3 mb-5" ref={headingRef}>
              <span className="w-8 h-px bg-gold reveal" />
              <span className="text-xs font-display font-medium tracking-[0.25em] text-gold uppercase reveal">Sobre mí</span>
            </div>

            <div ref={headingRef}>
              <h2 className="reveal font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-text leading-tight mb-6">
                Más que código —<br />
                <span className="text-shimmer">soluciones.</span>
              </h2>
            </div>

            <div ref={textRef} className="reveal space-y-4">
              <p className="text-text-dim font-body leading-relaxed text-base">
                Hola, soy <span className="text-text font-medium">Julián Arango Jaramillo</span> — desarrollador y diseñador freelancer basado en Envigado. Llevo más de 3 años construyendo productos digitales que combinan código sólido con diseño que convierte.
              </p>
              <p className="text-text-dim font-body leading-relaxed text-base">
                Abierto tanto a proyectos independientes como a roles dentro de equipos de producto.
              </p>
              <p className="text-text-dim font-body leading-relaxed text-base">
                Cuando no estoy construyendo cosas para clientes, estoy aprendiendo algo nuevo o contribuyendo a proyectos open source.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 border border-gold/20 rounded-sm bg-gold/5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-display text-gold tracking-wide">Disponible para proyectos — {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="text-xs font-display font-medium tracking-widest text-gold/70 uppercase mb-3">
                    {group.group}
                  </p>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-dim font-body">
                        <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values + photo area */}
          <div>
            {/* Stats visuales en lugar de foto */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { value: '3+', label: 'Años de experiencia', icon: '⚡' },
                { value: '20+', label: 'Proyectos entregados', icon: '🚀' },
                { value: '100%', label: 'Clientes satisfechos', icon: '★' },
                { value: '∞', label: 'Café consumido', icon: '☕' },
              ].map((stat) => (
                <div key={stat.label} className="p-5 bg-card border border-white/5 rounded-sm hover:border-gold/20 transition-colors duration-300">
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <p className="font-display font-bold text-3xl text-gold">{stat.value}</p>
                  <p className="text-xs text-text-dim font-body mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div ref={valuesRef} className="reveal grid grid-cols-2 gap-3">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-4 bg-card border border-white/5 rounded-sm hover:border-gold/20 transition-colors duration-300 group"
                >
                  <Icon size={18} className="text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display font-semibold text-sm text-text mb-1">{title}</h4>
                  <p className="text-xs text-text-dim font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
