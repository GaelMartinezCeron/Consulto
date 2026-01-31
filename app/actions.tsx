"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export type ConsultaFormData = {
  nombre: string
  email: string
  telefono: string
  empresa: string
  tipo_consulta: string
  mensaje: string
}

export type ActionResult = {
  success: boolean
  message: string
  error?: string
}

export async function submitConsulta(formData: ConsultaFormData): Promise<ActionResult> {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("consultas").insert({
      nombre: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      empresa: formData.empresa,
      tipo_consulta: formData.tipo_consulta,
      mensaje: formData.mensaje,
      estado: "pendiente",
    })

    if (error) {
      console.error("Error inserting consulta:", error)
      return {
        success: false,
        message: "Error al enviar la consulta",
        error: error.message,
      }
    }

    // Send email notification
    await sendEmailNotification(formData)

    revalidatePath("/admin", "page")

    return {
      success: true,
      message: "Consulta enviada exitosamente. Revisa tu correo para la confirmacion.",
    }
  } catch (error) {
    console.error("Error in submitConsulta:", error)
    return {
      success: false,
      message: "Error inesperado al procesar la consulta",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

async function sendEmailNotification(formData: ConsultaFormData) {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.error("RESEND_API_KEY not configured")
    return
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #10b981); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        h1 { margin: 0; font-size: 24px; }
        h2 { color: #3b82f6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Web@ Consul</h1>
          <p>Consultoria Digital Profesional</p>
        </div>
        <div class="content">
          <h2>Hola ${formData.nombre},</h2>
          <p>Hemos recibido tu solicitud de consulta y queremos confirmarte que esta siendo procesada por nuestro equipo.</p>
          
          <div class="details">
            <h3>Detalles de tu consulta:</h3>
            <p><strong>Tipo de consulta:</strong> ${formData.tipo_consulta}</p>
            <p><strong>Empresa:</strong> ${formData.empresa}</p>
            <p><strong>Telefono:</strong> ${formData.telefono}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${formData.mensaje}</p>
          </div>
          
          <p>Nuestro equipo de expertos se pondra en contacto contigo en las proximas <strong>24-48 horas habiles</strong> para atender tu solicitud.</p>
          
          <p>Si tienes alguna pregunta urgente, no dudes en contactarnos.</p>
          
          <div class="footer">
            <p>Gracias por confiar en <strong>Web@ Consul</strong></p>
            <p>Este es un correo automatico, por favor no respondas directamente.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Web@ Consul <onboarding@resend.dev>",
        to: [formData.email],
        subject: "Confirmacion de consulta - Web@ Consul",
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Error sending email:", errorData)
    }
  } catch (error) {
    console.error("Error in sendEmailNotification:", error)
  }
}

export async function getConsultas() {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("consultas")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching consultas:", error)
      return { data: null, error: error.message }
    }

    return { data, error: null }
  } catch (error) {
    console.error("Error in getConsultas:", error)
    return { data: null, error: "Error fetching consultas" }
  }
}

export async function updateConsultaStatus(id: string, estado: string): Promise<ActionResult> {
  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from("consultas")
      .update({ estado })
      .eq("id", id)

    if (error) {
      console.error("Error updating consulta:", error)
      return {
        success: false,
        message: "Error al actualizar el estado",
        error: error.message,
      }
    }

    revalidatePath("/admin", "page")

    return {
      success: true,
      message: "Estado actualizado correctamente",
    }
  } catch (error) {
    console.error("Error in updateConsultaStatus:", error)
    return {
      success: false,
      message: "Error inesperado",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
