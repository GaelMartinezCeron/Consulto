"use server"

import { cookies } from "next/headers"
import { query } from "./db"
import bcrypt from "bcryptjs"

export type Admin = {
  id: number
  nombre: string
  email: string
}

// Credenciales de demostración para probar sin base de datos
const DEMO_ADMIN = {
  id: 1,
  nombre: "Administrador Demo",
  email: "admin@webconsul.com",
  password: "admin123"
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export async function login(email: string, password: string): Promise<{ success: boolean; error?: string; admin?: Admin }> {
  try {
    // Primero intentar con credenciales de demostración
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      const sessionData = {
        id: DEMO_ADMIN.id,
        nombre: DEMO_ADMIN.nombre,
        email: DEMO_ADMIN.email,
        exp: Date.now() + 1000 * 60 * 60 * 24,
      }

      const cookieStore = await cookies()
      cookieStore.set("admin_session", JSON.stringify(sessionData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
        path: "/",
      })

      return {
        success: true,
        admin: {
          id: DEMO_ADMIN.id,
          nombre: DEMO_ADMIN.nombre,
          email: DEMO_ADMIN.email,
        },
      }
    }

    // Si no son credenciales demo, intentar con la base de datos
    const results = await query(
      "SELECT id, nombre, email, password FROM administradores WHERE email = ?",
      [email]
    ) as Array<{ id: number; nombre: string; email: string; password: string }>

    if (results.length === 0) {
      return { success: false, error: "Credenciales incorrectas" }
    }

    const admin = results[0]
    const isValid = await verifyPassword(password, admin.password)

    if (!isValid) {
      return { success: false, error: "Credenciales incorrectas" }
    }

    const sessionData = {
      id: admin.id,
      nombre: admin.nombre,
      email: admin.email,
      exp: Date.now() + 1000 * 60 * 60 * 24,
    }

    const cookieStore = await cookies()
    cookieStore.set("admin_session", JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    })

    return {
      success: true,
      admin: {
        id: admin.id,
        nombre: admin.nombre,
        email: admin.email,
      },
    }
  } catch (error) {
    console.error("Error en login:", error)
    
    // Si hay error de conexión, intentar con demo
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      const sessionData = {
        id: DEMO_ADMIN.id,
        nombre: DEMO_ADMIN.nombre,
        email: DEMO_ADMIN.email,
        exp: Date.now() + 1000 * 60 * 60 * 24,
      }

      const cookieStore = await cookies()
      cookieStore.set("admin_session", JSON.stringify(sessionData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
        path: "/",
      })

      return {
        success: true,
        admin: {
          id: DEMO_ADMIN.id,
          nombre: DEMO_ADMIN.nombre,
          email: DEMO_ADMIN.email,
        },
      }
    }
    
    return { success: false, error: "Error al iniciar sesion. Verifica tu conexion a la base de datos." }
  }
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
}

export async function getSession(): Promise<Admin | null> {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get("admin_session")

    if (!sessionCookie) {
      return null
    }

    const sessionData = JSON.parse(sessionCookie.value)

    if (sessionData.exp < Date.now()) {
      await logout()
      return null
    }

    return {
      id: sessionData.id,
      nombre: sessionData.nombre,
      email: sessionData.email,
    }
  } catch {
    return null
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession()
  return session !== null
}

export async function createAdmin(nombre: string, email: string, password: string): Promise<{ success: boolean; error?: string }> {
  try {
    const hashedPassword = await hashPassword(password)
    
    await query(
      "INSERT INTO administradores (nombre, email, password) VALUES (?, ?, ?)",
      [nombre, email, hashedPassword]
    )

    return { success: true }
  } catch (error) {
    console.error("Error creating admin:", error)
    return { success: false, error: "Error al crear administrador" }
  }
}
