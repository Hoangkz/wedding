"use client"

import * as React from "react"
import {
    BookOpenCheck,
    Flame,
    Mails,
    Package,
    User,
} from "lucide-react"

import { NavSidebar } from "@/components/sidebar/NavSidebar"
import { NavUser } from "@/components/sidebar/NavUser"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { HeaderSidebar } from "./sidebar/HeaderSideBar"
import { useAdminContext } from "@/hooks/admin.context"

const user = {
    name: "Hoang",
    email: "hoang@gmail.com",
    avatar: "",
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { navAdminDashBoard } = useAdminContext();
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <HeaderSidebar data={{ logo: Flame, name: "Admin", plan: "Hệ thống quản trị" }} />
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
