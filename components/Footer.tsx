export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-sm text-shimmer">Julián Arango Jaramillo</p>
        <p className="text-xs text-muted font-body">
          © {year} · Hecho con cuidado · Todos los derechos reservados
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-display text-muted hover:text-gold transition-colors tracking-widest uppercase"
        >
          ↑ Volver arriba
        </button>
      </div>
    </footer>
  )
}
