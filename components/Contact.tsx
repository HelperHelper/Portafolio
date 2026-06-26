'use client'

import { useState } from 'react'
import { Send, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react'

const EMAIL = 'arangojulian93@gmail.com' // ← Cambia esto

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/HelperHelper' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/juli%C3%A1naranjaramillo/' },
  // { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/tuusuario' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    // Reemplaza el setTimeout con tu endpoint de Formspree:
    // const res = await fetch('https://formspree.io/f/TU_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    // if (res.ok) setStatus('sent')
    // else setStatus('error')
    const res = await fetch('https://formspree.io/f/xykqwpqq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setStatus('sent')
    else setStatus('error')
  }

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClass = `w-full bg-card border border-white/10 rounded-sm px-4 py-3 text-text text-sm font-body placeholder-muted focus:outline-none focus:border-gold/50 transition-colors duration-200`

  return (
    <section id="contacto" className="py-28 px-6 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,110,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-16">

          {/* Left info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-display font-medium tracking-[0.25em] text-gold uppercase">Contacto</span>
            </div>

            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-text leading-tight mb-6">
              ¿Tienes un<br />
              proyecto en<br />
              <span className="text-shimmer">mente?</span>
            </h2>

            <p className="text-text-dim font-body leading-relaxed text-sm mb-8">
              Respondo en menos de 24 horas. Si tienes una idea —por más abstracta que sea— cuéntamela.
            </p>

            {/* Email copy */}
            <div className="mb-8">
              <p className="text-xs font-display tracking-widest text-muted uppercase mb-3">Email directo</p>
              <button onClick={copyEmail} className="flex items-center gap-3 group">
                <span className="text-text font-body text-sm group-hover:text-gold transition-colors">{EMAIL}</span>
                <span className="text-muted group-hover:text-gold transition-colors">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </span>
              </button>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-display tracking-widest text-muted uppercase mb-4">Encuéntrame en</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-dim hover:text-gold transition-colors group"
                  >
                    <Icon size={15} />
                    <span className="text-sm font-body">{label}</span>
                    <span className="w-0 h-px bg-gold group-hover:w-6 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {status === 'sent' ? (
              <div className="h-full flex items-center justify-center text-center py-16 border border-gold/20 rounded-sm bg-card">
                <div>
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                    <Check size={22} className="text-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-text mb-2">¡Mensaje enviado!</h3>
                  <p className="text-text-dim text-sm font-body">Te responderé en menos de 24 horas.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-xs text-gold hover:underline font-display">
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-display text-text-dim tracking-wider uppercase block mb-2">Nombre</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs font-display text-text-dim tracking-wider uppercase block mb-2">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display text-text-dim tracking-wider uppercase block mb-2">Tipo de proyecto</label>
                  <select name="project" value={form.project} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="web">Sitio web / Landing page</option>
                    <option value="webapp">Aplicación web</option>
                    <option value="design">Diseño UI/UX</option>
                    <option value="branding">Identidad de marca</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-display text-text-dim tracking-wider uppercase block mb-2">Cuéntame sobre tu proyecto</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿Qué tienes en mente? Entre más detalle, mejor puedo ayudarte."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending' || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-base font-display font-semibold text-sm py-3.5 hover:bg-gold/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 rounded-sm"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-base/30 border-t-base rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Enviar mensaje
                    </>
                  )}
                </button>

                <p className="text-xs text-muted font-body text-center">
                  También puedes escribirme directamente a{' '}
                  <a href={`mailto:${EMAIL}`} className="text-gold hover:underline">{EMAIL}</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}