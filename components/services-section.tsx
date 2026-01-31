"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Code, BarChart3, Shield, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useService } from "@/components/ui/service-context"

const services = [
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Páginas web modernas, rápidas y optimizadas para convertir visitas en clientes.",
    icon: Globe,
  },
  {
    id: "software",
    title: "Desarrollo de Software",
    description:
      "Sistemas a medida que automatizan procesos y escalan tu negocio.",
    icon: Code,
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    description:
      "Estrategias enfocadas en resultados y generación de clientes.",
    icon: BarChart3,
  },
  {
    id: "security",
    title: "Ciberseguridad",
    description:
      "Protección avanzada para tu infraestructura digital.",
    icon: Shield,
  },
]

export function ServicesSection() {
  const router = useRouter()
  const { setActiveService } = useService()

  const handleSelectService = (serviceId: any) => {
    setActiveService(serviceId)
    router.push("/#proyectos")
  }

  return (
    <section id="servicios" className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Soluciones digitales pensadas para vender y escalar
          </p>
        </div>

        {/* GRID */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                onClick={() => handleSelectService(service.id)}
                className="group cursor-pointer transition-all hover:border-primary hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>

                  <CardTitle className="mt-4 flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {service.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
