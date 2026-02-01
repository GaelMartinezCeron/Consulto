"use server"

import { login, logout, getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function loginAction(email: string, password: string) {
  return await login(email, password)
}

export async function logoutAction() {
  await logout()
  redirect("/admin/login")
}

export async function getSessionAction() {
  return await getSession()
}
