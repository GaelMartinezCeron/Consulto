"use client"

import { useService } from "@/components/ui/service-context"

const TESTIMONIOS = [
  { name: "Carlos", text: "Mi web ahora vende", service: "web" },
  { name: "Ana", text: "El diseño es increíble", service: "ux" },
  { name: "Luis", text: "Soporte rápido y seguro", service: "mantenimiento" },
]

export function TestimonialsSection() {
  const { activeService } = useService()

  const filtered = activeService
    ? TESTIMONIOS.filter(t => t.service === activeService)
    : TESTIMONIOS

  return (
    <section id="testimonios" className="bg-muted/30 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Testimonios
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {filtered.map((t, i) => (
          <div key={i} className="rounded-xl bg-card p-6 shadow">
            <p className="italic">“{t.text}”</p>
            <span className="mt-4 block font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
