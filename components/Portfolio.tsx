'use client'

import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { useReveal } from './useReveal'

const projects = [
  {
    id: 1,
    title: 'ReservAbog — Generador de Contratos',
    category: 'Web App',
    description: 'Sistema que analiza múltiples PDFs simultáneamente, extrae campos únicos y genera formularios dinámicos para producir contratos personalizados al instante. Sin base de datos — procesamiento en tiempo real con cache.',
    tech: ['Python', 'Laravel', 'PyMuPDF', 'Cache'],
    video: '/videos/Pdfs.mp4',
    poster: '/images/PDFS.png',
    live: '#',
    github: null,
    featured: true, // Este va primero y ocupa doble ancho — es el más técnico e impactante
  },
  {
    id: 2,
    title: 'HawaiCLub — Club de descanso eventos',
    category: 'Landing Page',
    description: 'Sitio web para club  de eventos con diseño inmersivo, galería de experiencias pasadas y formulario de cotización integrado.',
    tech: ['Next.js', 'Tailwind CSS', 'Figma'],
    video: '/videos/HawaiCLub.mp4',
    poster: '',
    live: '#',
    github: null,
    featured: true, // Este que ocupe el ancho doble por ser el más visual
  },
  {
    id: 3,
    title: 'SmileHause — Odontología Infantil',
    category: 'Landing Page',
    description: 'Landing page para clínica odontológica infantil. Diseño amigable y accesible orientado a generar confianza en padres y agendar citas.',
    tech: ['React', 'Tailwind CSS', 'Figma'],
    video: '/videos/smileHouse.mp4',
    poster: '',
    live: '#',
    github: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Naturalped — Alimento para Mascotas',
    category: 'Landing Page',
    description: 'Sitio de marca para empresa de alimentos premium para mascotas. Enfocado en conversión con secciones de producto, beneficios y tienda.',
    tech: ['Next.js', 'Tailwind CSS', 'Figma'],
    video: '/videos/Naturalped.mp4',
    poster: '',
    live: '#',
    github: null,
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)
  const cardRef = useReveal(index * 0.1)

  const handleMouseEnter = () => {
    setHovered(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      ref={cardRef}
      className={`reveal project-card group relative overflow-hidden rounded-sm cursor-none ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video / Thumbnail */}
      <div className="relative overflow-hidden bg-card aspect-video">
        <video
          ref={videoRef}
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hovered ? 'opacity-80' : 'opacity-50'
          }`}
          style={{
            background: 'linear-gradient(to top, #0A0A0F 0%, transparent 60%)',
          }}
        />

        {/* Play indicator */}
        <div className={`absolute top-4 right-4 flex items-center gap-1.5 transition-all duration-300 ${hovered ? 'opacity-0' : 'opacity-60'}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-display text-gold tracking-widest">HOVER</span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-display tracking-widest text-text-dim px-3 py-1 bg-base/60 backdrop-blur-sm border border-white/10 rounded-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 bg-card border border-white/5">
        <h3 className="font-display font-semibold text-xl text-text mb-2 group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-dim text-sm font-body leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-display text-muted border border-white/8 px-2 py-0.5 rounded-sm">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 ml-4 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                title="Ver código"
              >
                <Github size={16} />
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-gold transition-colors"
              title="Ver proyecto"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs font-display font-medium tracking-[0.25em] text-gold uppercase">Proyectos</span>
          </div>
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-text leading-tight">
            Lo que construyo.
          </h2>
          <p className="text-text-dim font-body text-lg mt-4 max-w-xl">
            Cada proyecto es un problema diferente. Aquí algunos que me enorgullecen especialmente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-text-dim text-sm font-body">
            ¿Quieres ver más?{' '}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-gold hover:underline cursor-pointer"
            >
              Escríbeme
            </a>{' '}
            y te comparto mi portafolio completo.
          </p>
        </div>
      </div>
    </section>
  )
}
