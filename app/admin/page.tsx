import { getConsultas } from "@/app/actions"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminHeader } from "@/components/admin-header"
import { Footer } from "@/components/footer"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  // Verificar autenticacion
  const session = await getSession()
  
  if (!session) {
    redirect("/admin/login")
  }

  const { data: consultas, error } = await getConsultas()

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader admin={session} />
      <main className="flex-1 bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Panel Administrativo</h1>
            <p className="mt-2 text-muted-foreground">
              Bienvenido, {session.nombre}. Gestiona las consultas de clientes.
            </p>
          </div>

          {error ? (
            <div className="rounded-lg bg-destructive/10 p-4 text-destructive">
              Error al cargar las consultas: {error}
            </div>
          ) : (
            <AdminDashboard consultas={consultas || []} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
