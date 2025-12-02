import { LucideProps } from "lucide-react"
import { createContext, ForwardRefExoticComponent, RefAttributes, useContext } from "react"

export interface User {
  id: string
  userName: string
  password: string
  shortName?: string
  name?: string
  dob?: string
  phone?: string
  qrCodeUrl?: string
  avatar?: string
  address?: string
  mapUrl?: string
  father?: string
  mother?: string
  bio?: string
  note?: string
  title?: string
  bank?: string
  type?: string | null
  account?: string
  weddingDate?: string
  weddingTime?: string
  lunarDate?: string
  createdAt: string
  updatedAt: string
}

export type AdminUser = Omit<User, "password"> | null

export interface navAdmin {
  name: string
  url: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}
export const AdminUserContext = createContext<{ user?: AdminUser; navAdminDashBoard: navAdmin[] }>({
  user: undefined,
  navAdminDashBoard: [],
})

export const useAdminContext = () => useContext(AdminUserContext)
