"use client"

import { motion } from "framer-motion"
import { useService } from "@/components/ui/service-context"

interface Proyecto {
  id: number
  nombre: string
  cliente: string
  descripcion: string
  resultado: string
  service: "web" | "software" | "marketing" | "security"
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Landing de Ventas Inmobiliaria",
    cliente: "Grupo Hábitat",
    descripcion:
      "Landing page optimizada para conversión y captación de leads.",
    resultado: "+65% de contactos en 30 días",
    service: "web",
  },
  {
    id: 2,
    nombre: "Sistema de Gestión Interna",
    cliente: "Logística MX",
    descripcion:
      "Software interno para automatizar procesos operativos.",
    resultado: "-40% tiempo operativo",
    service: "software",
  },
  {
    id: 3,
    nombre: "E-commerce Moda Urbana",
    cliente: "Moda Urbana MX",
    descripcion:
      "Tienda en línea rápida, responsive y optimizada para SEO.",
    resultado: "+40% ventas el primer mes",
    service: "web",
  },
  {
    id: 4,
    nombre: "Campaña de Leads",
    cliente: "Consultoría Fiscal",
    descripcion:
      "Estrategia digital enfocada en generación de clientes.",
    resultado: "3x leads mensuales",
    service: "marketing",
  },
]

export function ProjectsSection() {
  const { activeService } = useService()

  const filteredProjects = activeService
    ? proyectos.filter((p) => p.service === activeService)
    : proyectos

  const serviceTitle: Record<string, string> = {
    web: "Desarrollo Web",
    software: "Desarrollo de Software",
    marketing: "Marketing Digital",
    security: "Ciberseguridad",
  }

  return (
    <section id="proyectos" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {activeService
              ? `Casos reales de ${serviceTitle[activeService]}`
              : "Nuestros Proyectos"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Resultados reales para negocios reales
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card p-8 shadow"
            >
              <h3 className="text-xl font-semibold">
                {proyecto.nombre}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {proyecto.cliente}
              </p>

              <p className="mt-4">{proyecto.descripcion}</p>

              <span className="mt-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                {proyecto.resultado}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA WHATSAPP */}
        <div className="mt-20 text-center">
          <h3 className="mb-4 text-2xl font-bold">
            ¿Quieres resultados como estos?
          </h3>

          <a
            href={`https://wa.me/525510306346?text=${encodeURIComponent(
              `Hola, quiero una cotización de ${
                activeService ? serviceTitle[activeService] : "servicios digitales"
              }.`
            )}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            Cotizar por WhatsApp 🚀
          </a>
        </div>
      </div>
    </section>
  )
}
