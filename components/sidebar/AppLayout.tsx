"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAdminContext } from "@/context/admin.context"
import { usePathname } from "next/navigation"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { navAdminDashBoard } = useAdminContext()
  const nav = navAdminDashBoard.find((e) => e.url === pathname)

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <AppSidebar />

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <header
          className="sticky top-0 z-10 w-full 
                                   border-b border-gray-100 shadow-sm
                                   flex h-16 shrink-0 items-center 
                                   gap-2 transition-[width,height] ease-linear 
                                   group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white/95 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4 bg-gray-200"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <h1 className="text-xl font-semibold text-gray-900 ">
                    {nav?.name || "Dashboard"}
                  </h1>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden h-full">{children}</div>
      </div>
    </div>
  )
}
