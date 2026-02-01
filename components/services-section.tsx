import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Code, BarChart3, Shield } from "lucide-react"

const services = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados para buscadores que impulsan tu presencia digital.",
    icon: Globe,
  },
  {
    title: "Desarrollo de Software",
    description: "Soluciones de software a medida que automatizan procesos y mejoran la eficiencia de tu negocio.",
    icon: Code,
  },
  {
    title: "Marketing Digital",
    description: "Estrategias de marketing que aumentan tu visibilidad y generan leads cualificados para tu empresa.",
    icon: BarChart3,
  },
  {
    title: "Ciberseguridad",
    description: "Protegemos tu infraestructura digital con las mejores practicas y tecnologias de seguridad.",
    icon: Shield,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ofrecemos soluciones integrales para todas las necesidades digitales de tu empresa
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="mt-4 text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
