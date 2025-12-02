"use client"

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export function HeaderSidebar({
  data,
}: {
  data: {
    name: string
    logo: React.ElementType
    plan: string
  }
}) {
  const { isMobile } = useSidebar()
  return (
    <SidebarMenu>
      {isMobile && (
        <div style={{ position: "absolute", top: 0, right: 10, zIndex: 10 }}>
          <SidebarTrigger className="-ml-1 cursor-pointer" />
        </div>
      )}
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="cursor-pointer text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <data.logo className="cursor-pointer h-8 w-8 text-red-600" />
              </div>
              <div className="cursor-pointer grid flex-1 text-left text-sm leading-tight">
                <span className="cursor-pointer truncate text-xl font-bold">{data.name}</span>
                <span className="cursor-pointer truncate text-xs">{data.plan}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
