"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"
import { logoutAction } from "@/app/admin/actions"
import type { Admin } from "@/lib/auth"

interface AdminHeaderProps {
  admin: Admin
}

export function AdminHeader({ admin }: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">
            <span className="text-primary">Web@</span>
            <span className="text-secondary"> Consul</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{admin.email}</span>
          </div>
          
          <form action={logoutAction}>
            <Button variant="outline" size="sm" type="submit">
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesion
            </Button>
          </form>
        </div>
      </div>
    </header>
  )
}
