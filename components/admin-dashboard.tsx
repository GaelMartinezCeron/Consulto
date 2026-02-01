"use client"

import { useState } from "react"
import { updateConsultaStatus } from "@/app/actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Users, Clock, CheckCircle, XCircle, Eye, Loader2 } from "lucide-react"

type Consulta = {
<<<<<<< HEAD
  id: number
=======
<<<<<<< HEAD
  id: number
=======
  id: string
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
  nombre: string
  email: string
  telefono: string
  empresa: string
  tipo_consulta: string
  mensaje: string
  estado: string
  created_at: string
}

type AdminDashboardProps = {
  consultas: Consulta[]
}

const estadoColors: Record<string, string> = {
  pendiente: "bg-yellow-100 text-yellow-800 border-yellow-200",
  en_proceso: "bg-blue-100 text-blue-800 border-blue-200",
  completada: "bg-green-100 text-green-800 border-green-200",
  cancelada: "bg-red-100 text-red-800 border-red-200",
}

const estadoLabels: Record<string, string> = {
  pendiente: "Pendiente",
  en_proceso: "En Proceso",
  completada: "Completada",
  cancelada: "Cancelada",
}

const tipoConsultaLabels: Record<string, string> = {
  "desarrollo-web": "Desarrollo Web",
  "desarrollo-software": "Desarrollo de Software",
  "marketing-digital": "Marketing Digital",
  "ciberseguridad": "Ciberseguridad",
  "otro": "Otro",
}

export function AdminDashboard({ consultas }: AdminDashboardProps) {
<<<<<<< HEAD
  const [updatingId, setUpdatingId] = useState<number | null>(null)
=======
<<<<<<< HEAD
  const [updatingId, setUpdatingId] = useState<number | null>(null)
=======
  const [updatingId, setUpdatingId] = useState<string | null>(null)
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e

  const stats = {
    total: consultas.length,
    pendientes: consultas.filter((c) => c.estado === "pendiente").length,
    completadas: consultas.filter((c) => c.estado === "completada").length,
    canceladas: consultas.filter((c) => c.estado === "cancelada").length,
  }

<<<<<<< HEAD
  async function handleStatusChange(id: number, newStatus: string) {
=======
<<<<<<< HEAD
  async function handleStatusChange(id: number, newStatus: string) {
=======
  async function handleStatusChange(id: string, newStatus: string) {
>>>>>>> fbb3e8ab0480e7bf221395b7c6e2b2897829683d
>>>>>>> 23344f9d05c9dfc6dcfbf1ffff2214653721c96e
    setUpdatingId(id)
    await updateConsultaStatus(id, newStatus)
    setUpdatingId(null)
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Consultas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.total}</div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.pendientes}</div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completadas</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.completadas}</div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Canceladas</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.canceladas}</div>
          </CardContent>
        </Card>
      </div>

      {/* Consultas Table */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Listado de Consultas</CardTitle>
          <CardDescription className="text-muted-foreground">
            Todas las consultas recibidas de clientes potenciales
          </CardDescription>
        </CardHeader>
        <CardContent>
          {consultas.length === 0 ? (
            <div className="py-12 text-center">
              <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">No hay consultas</h3>
              <p className="mt-2 text-muted-foreground">
                Aun no se han recibido consultas de clientes.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground">Cliente</TableHead>
                    <TableHead className="text-foreground">Empresa</TableHead>
                    <TableHead className="text-foreground">Tipo</TableHead>
                    <TableHead className="text-foreground">Fecha</TableHead>
                    <TableHead className="text-foreground">Estado</TableHead>
                    <TableHead className="text-right text-foreground">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {consultas.map((consulta) => (
                    <TableRow key={consulta.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium text-foreground">{consulta.nombre}</div>
                          <div className="text-sm text-muted-foreground">{consulta.email}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-foreground">{consulta.empresa}</TableCell>
                      <TableCell className="text-foreground">
                        {tipoConsultaLabels[consulta.tipo_consulta] || consulta.tipo_consulta}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(consulta.created_at)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={estadoColors[consulta.estado] || "bg-muted text-muted-foreground"}
                        >
                          {estadoLabels[consulta.estado] || consulta.estado}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">Ver detalles</span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-lg">
                              <DialogHeader>
                                <DialogTitle className="text-foreground">Detalles de la Consulta</DialogTitle>
                                <DialogDescription className="text-muted-foreground">
                                  Informacion completa del cliente
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Nombre</p>
                                    <p className="text-foreground">{consulta.nombre}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p className="text-foreground">{consulta.email}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Telefono</p>
                                    <p className="text-foreground">{consulta.telefono}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground">Empresa</p>
                                    <p className="text-foreground">{consulta.empresa}</p>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Tipo de Consulta</p>
                                  <p className="text-foreground">
                                    {tipoConsultaLabels[consulta.tipo_consulta] || consulta.tipo_consulta}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Mensaje</p>
                                  <p className="whitespace-pre-wrap text-foreground">{consulta.mensaje}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground">Fecha de Solicitud</p>
                                  <p className="text-foreground">{formatDate(consulta.created_at)}</p>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Select
                            value={consulta.estado}
                            onValueChange={(value) => handleStatusChange(consulta.id, value)}
                            disabled={updatingId === consulta.id}
                          >
                            <SelectTrigger className="w-32">
                              {updatingId === consulta.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <SelectValue />
                              )}
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pendiente">Pendiente</SelectItem>
                              <SelectItem value="en_proceso">En Proceso</SelectItem>
                              <SelectItem value="completada">Completada</SelectItem>
                              <SelectItem value="cancelada">Cancelada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
