// context/sidebar-context.tsx
"use client"

import { createContext, useContext, useState, ReactNode } from "react"

// 1. Định nghĩa Context Type
interface SidebarContextType {
  isCollapsed: boolean
  toggleCollapse: () => void
}

// 2. Tạo Context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

// 3. Custom Hook để sử dụng Context
export function useSidebarContext() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebarContext must be used within a SidebarProvider")
  }
  return context
}

// 4. Provider Component
interface SidebarProviderProps {
  children: ReactNode
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  // Ban đầu sidebar có thể mở (false) hoặc thu gọn (true)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev)
  }

  const value = { isCollapsed, toggleCollapse }

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
