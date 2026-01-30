"use client"

import React from "react"

import { useState } from "react"
import { submitConsulta, type ConsultaFormData } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2, Mail, Phone, MapPin } from "lucide-react"

const tiposConsulta = [
  { value: "desarrollo-web", label: "Desarrollo Web" },
  { value: "desarrollo-software", label: "Desarrollo de Software" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "ciberseguridad", label: "Ciberseguridad" },
  { value: "otro", label: "Otro" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data: ConsultaFormData = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      empresa: formData.get("empresa") as string,
      tipo_consulta: formData.get("tipo_consulta") as string,
      mensaje: formData.get("mensaje") as string,
    }

    const result = await submitConsulta(data)

    setIsSubmitting(false)

    if (result.success) {
      setIsSuccess(true)
      form.reset()
    } else {
      setError(result.message)
    }
  }

  if (isSuccess) {
    return (
      <section id="contacto" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Card className="mx-auto max-w-2xl border-secondary/30 bg-secondary/10">
            <CardContent className="flex flex-col items-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground">Consulta Enviada</h3>
              <p className="mt-2 text-muted-foreground">
                Hemos recibido tu solicitud. Revisa tu correo para la confirmacion.
                Nos pondremos en contacto contigo pronto.
              </p>
              <Button
                className="mt-6"
                onClick={() => setIsSuccess(false)}
              >
                Enviar otra consulta
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solicita una Consulta
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Completa el formulario y nuestro equipo se pondra en contacto contigo
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">contacto@webaconsul.com</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base text-foreground">Telefono</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">+52 55 1234 5678</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base text-foreground">Ubicacion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">Ciudad de Mexico, Mexico</CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-foreground">Formulario de Contacto</CardTitle>
              <CardDescription className="text-muted-foreground">
                Todos los campos son requeridos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-foreground">Nombre completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Juan Perez"
                      required
                      className="bg-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Correo electronico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="juan@empresa.com"
                      required
                      className="bg-input"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-foreground">Telefono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+52 55 1234 5678"
                      required
                      className="bg-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-foreground">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Mi Empresa S.A."
                      required
                      className="bg-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipo_consulta" className="text-foreground">Tipo de consulta</Label>
                  <Select name="tipo_consulta" required>
                    <SelectTrigger className="bg-input">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {tiposConsulta.map((tipo) => (
                        <SelectItem key={tipo.value} value={tipo.value}>
                          {tipo.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-foreground">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Describe brevemente tu proyecto o necesidad..."
                    rows={4}
                    required
                    className="bg-input"
                  />
                </div>

                {error && (
                  <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Consulta"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
