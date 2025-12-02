
"use client"

import { createContext, ReactNode, useContext, useState } from "react"

interface SidebarContextType {
  isCollapsed: boolean
  toggleCollapse: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebarContext() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {

  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  const value = { isCollapsed, toggleCollapse }

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
