"use client"

import { Flame } from "lucide-react"
import * as React from "react"

import { NavSidebar } from "@/components/sidebar/NavSidebar"
import { NavUser } from "@/components/sidebar/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from "@/components/ui/sidebar"
import { useAdminContext } from "@/context/admin.context"

import Link from "next/link"
import { HeaderSidebar } from "./sidebar/HeaderSideBar"

const user = {
  name: "Hoang",
  email: "hoang@gmail.com",
  avatar: "",
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { navAdminDashBoard } = useAdminContext()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader >
        <Link href="/" passHref >
          <HeaderSidebar data={{ logo: Flame, name: "Admin", plan: "Hệ thống quản trị" }} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavSidebar data={navAdminDashBoard} />

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
