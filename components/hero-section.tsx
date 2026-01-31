import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const benefits = [
  "Consultoria personalizada",
  "Expertos certificados",
  "Soporte 24/7",
  "Resultados garantizados",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(0.55_0.15_220/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.15_220/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Transformamos tu negocio con{" "}
            <span className="text-primary">soluciones digitales</span>
          </h1>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            En Web@ Consul ofrecemos consultoria especializada para llevar tu empresa al siguiente nivel. 
            Nuestro equipo de expertos te acompana en cada paso de tu transformacion digital.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 rounded-full bg-accent/50 px-4 py-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="#contacto">
                Solicitar Consulta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
