import { getConsultas } from "@/app/actions"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminHeader } from "@/components/admin-header"
<<<<<<< HEAD
=======
=======
import { AdminDashboard } from "@/components/admin-dashboard"
import { Navbar } from "@/components/navbar"
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
import { Footer } from "@/components/footer"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  // Verificar autenticacion
  const session = await getSession()
  
  if (!session) {
    redirect("/admin/login")
  }

<<<<<<< HEAD
=======
=======
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  const { data: consultas, error } = await getConsultas()

  return (
    <div className="flex min-h-screen flex-col">
<<<<<<< HEAD
      <AdminHeader admin={session} />
=======
<<<<<<< HEAD
      <AdminHeader admin={session} />
=======
      <Navbar />
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
      <main className="flex-1 bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Panel Administrativo</h1>
            <p className="mt-2 text-muted-foreground">
<<<<<<< HEAD
              Bienvenido, {session.nombre}. Gestiona las consultas de clientes.
=======
<<<<<<< HEAD
              Bienvenido, {session.nombre}. Gestiona las consultas de clientes.
=======
              Gestiona las consultas de clientes
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
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
