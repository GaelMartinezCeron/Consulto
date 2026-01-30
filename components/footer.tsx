import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-xl font-bold text-primary">
              Web<span className="text-secondary">@</span> Consul
            </Link>
            <p className="text-sm text-muted-foreground">
              Consultoria digital para tu negocio
            </p>
          </div>
          
          <div className="flex gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm text-muted-foreground hover:text-foreground">
              Servicios
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
            <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
              Admin
            </Link>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Web@ Consul. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
