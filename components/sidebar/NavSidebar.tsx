"use client"

import { type LucideIcon } from "lucide-react"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"



export function NavSidebar({
    data,
}: {
    data: {
        name: string
        url: string
        icon: LucideIcon
    }[]
}) {
    const pathname = usePathname()
    const { open, isMobile } = useSidebar()


    return (
        <SidebarGroup>
            <SidebarMenu
                className={cn(
                    !open ? "space-y-3 py-4" : "space-y-1 py-0"
                )}
            >
                {data.map((item) => {
                    const isActive = pathname === item.url
                    return (
                        <SidebarMenuItem key={item.url}>
                            <Link
                                href={item.url}
                                className={cn(
                                    "group flex w-full items-center gap-3 rounded-xl font-medium transition-all duration-200",
                                    isActive
                                        ? `text-red-700 border-3 border-red-400 `
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                            >
                                <SidebarMenuButton
                                    tooltip={item.name}
                                    className={`rounded-xl ${isActive ? "text-red-600" : "text-gray-500 "}
                                        hover:bg-red-50  hover:text-red-400 cursor-pointer 
                                        ${!(open || isMobile) ? "justify-center " : "flex w-full items-center gap-3"}
                                    `}>
                                    <item.icon />
                                    {(open || isMobile) && (
                                        <span className="truncate">
                                            {item.name}
                                        </span>
                                    )}
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup >
    )
}