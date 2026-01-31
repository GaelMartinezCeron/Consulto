"use client"

import { createContext, useContext, useState } from "react"

type ServiceType = "web" | "ux" | "mantenimiento" | null

const ServiceContext = createContext<{
  activeService: ServiceType
  setActiveService: (s: ServiceType) => void
}>({
  activeService: null,
  setActiveService: () => {},
})

export function ServiceProvider({ children }: { children: React.ReactNode }) {
  const [activeService, setActiveService] = useState<ServiceType>(null)

  return (
    <ServiceContext.Provider value={{ activeService, setActiveService }}>
      {children}
    </ServiceContext.Provider>
  )
}

export const useService = () => useContext(ServiceContext)
