"use client"

import { useFeatures } from "@/context/feature.context"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

interface DesktopNavProps {
  baseIdPath: string
}

const DesktopNav: React.FC<DesktopNavProps> = ({ baseIdPath }) => {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const { navItems } = useFeatures();
  const isHashPage = pathname === "/" || pathname.match(/^\/[^/]+$/)

  useEffect(() => {
    setIsMounted(true)
    if (!isHashPage || typeof window === "undefined") return

    const initialHash = window.location.hash
    setCurrentHash(initialHash)

    const handleScroll = () => {
      let activeHash = ""
      let minDistance = Infinity
      const threshold = window.innerHeight * 0.33

      navItems.slice(1).forEach((item) => {
        const id = item.href.substring(2)
        const element = document.getElementById(id)

        if (element) {
          const rect = element.getBoundingClientRect()

          if (rect.top <= threshold && rect.bottom >= 0) {
            const distance = Math.abs(rect.top - threshold)
            if (distance < minDistance) {
              minDistance = distance
              activeHash = "#" + id
            }
          }
        }
      })

      if (!activeHash && window.scrollY < 100) {
        activeHash = ""
      }

      if (activeHash !== currentHash) {
        setCurrentHash(activeHash)
      }
    }

    const handleHashChange = () => {
      setTimeout(() => setCurrentHash(window.location.hash), 50)
    }

    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHashPage, currentHash])

  const isActive = (href: string) => {
    if (!isMounted) return false

    if (href === "/") {
      return isHashPage && (currentHash === "" || currentHash === "#")
    }

    if (href.startsWith("/#")) {
      const hash = href.substring(1)
      return isHashPage && currentHash === hash
    }

    return pathname === href
  }

  return (
    <ul className="hidden md:flex space-x-2 lg:space-x-4">
      {navItems.map((item) => {
        if (!item.isOptional) {
          return
        }
        const active = isActive(item.href)
        const activeClasses = "text-[#f0394d] font-bold"
        const defaultClasses = "text-gray-700 hover:text-[#f0394d]"

        const fullHref = item.href.startsWith("/#")
          ? baseIdPath + item.href
          : item.href === "/"
            ? baseIdPath || "/"
            : item.href

        return (
          <li key={item.name} className="relative group">
            <Link
              href={fullHref}
              className={`flex flex-col items-center p-2 text-xs lg:text-sm font-medium transition-colors relative ${active ? activeClasses : defaultClasses
                }`}
            >{item.Icon &&
              <item.Icon
                className={`w-5 h-5 lg:w-6 lg:h-6 mb-1 ${active ? "text-[#f0394d]" : "text-gray-500 group-hover:text-[#f0394d]"} transition-colors`}
              />
              }
              <span>{item.name}</span>
            </Link>

            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#f0394d] transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            ></span>
          </li>
        )
      })}
    </ul>
  )
}

export default DesktopNav
