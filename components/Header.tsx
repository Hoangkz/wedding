"use client"

import { useFeatures } from "@/context/feature.context"
import { ArrowLeft, ArrowRight, Heart, Menu, X } from "lucide-react"
import Link from "next/link"
import { useParams, usePathname, useRouter } from "next/navigation"
import React, { useCallback, useEffect, useState } from "react"
import DesktopNav from "./DesktopNav"

const Header: React.FC = () => {
  const { navItems } = useFeatures();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState("/#")
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const baseIdPath = params.id ? `/${params.id}` : ""
  const baseHref = baseIdPath || "/"

  const isHashPage = pathname === "/" || pathname.match(/^\/[^/]+$/)

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)

    const targetHref = href.startsWith("/#") ? baseIdPath + href : href
    setActive(targetHref)
    router.push(targetHref)
  }

  const getClientHashPath = useCallback(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      return hash ? `/${hash}` : "/#"
    }
    return "/#"
  }, [])

  useEffect(() => {
    setIsMounted(true)
    const initialActive = getClientHashPath()
    setActive(initialActive)

    const handleHashChange = () => {
      setActive(getClientHashPath())
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [getClientHashPath])

  const getActiveIndex = useCallback(() => {
    if (!isMounted || !isHashPage) return -1

    const currentPath = getClientHashPath()

    const index = navItems.findIndex((item) => item.href === currentPath)

    if (
      index === -1 &&
      (currentPath === "/#" || (typeof window !== "undefined" && window.scrollY < 100))
    ) {
      return 0
    }
    return index >= 0 ? index : -1
  }, [isMounted, isHashPage, getClientHashPath])

  const handleNavigation = (direction: "prev" | "next") => {
    if (!isHashPage) return

    const currentIndex = getActiveIndex()
    if (currentIndex === -1) return

    const totalItems = navItems.length
    let newIndex = currentIndex

    if (direction === "next") {
      newIndex = Math.min(currentIndex + 1, totalItems - 1)
    } else if (direction === "prev") {
      newIndex = Math.max(currentIndex - 1, 0)
    }

    if (newIndex !== currentIndex) {
      let newHref = navItems[newIndex].href

      if (newHref.startsWith("/#")) {
        newHref = baseIdPath + newHref
      } else if (newHref === "/") {
        newHref = baseHref
      }

      router.push(newHref)
    }
  }

  const currentIndex = getActiveIndex()
  const isFirst = currentIndex === 0
  const isLast = currentIndex === navItems.length - 1

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[999] bg-white shadow-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => router.push(baseHref)}
                className="flex items-center text-[30px] font-bold text-[#e32b42] focus:outline-none"
              >
                <span className="text-[#03c0cc]">V</span>
                <Heart className="w-5 h-5 mx-1.5" style={{ color: "#e32b42" }} />H
              </button>
            </div>

            <nav className="hidden md:block">
              <DesktopNav baseIdPath={baseIdPath} />
            </nav>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-[#e32b42] focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" aria-hidden="true" />
                ) : (
                  <Menu className="h-7 w-7" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <nav
          className={`md:hidden absolute top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => {
              if (!item.isOptional) {
                return
              }
              return <li key={item.name} className="w-full">
                <Link
                  href={item.href.startsWith("/#") ? baseIdPath + item.href : item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${item.href === active
                    ? "text-[#e32b42] font-bold bg-pink-50"
                    : "text-gray-900 hover:bg-gray-100 hover:text-[#e32b42]"
                    }`}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.name}
                </Link>
              </li>
            })}
          </ul>
        </nav>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 md:hidden z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </header>

      {isHashPage && (
        <div className="fixed bottom-5 right-5 z-[100] flex space-x-5">
          <button
            onClick={() => handleNavigation("prev")}
            disabled={isFirst}
            className={`
                            cursor-pointer
                            flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4
                            ${isFirst
                ? "bg-red-300 text-white cursor-not-allowed opacity-70"
                : "bg-[#e32b42] text-white hover:bg-red-700 focus:ring-red-400"
              }
                        `}
            aria-label="Previous Section"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleNavigation("next")}
            disabled={isLast}
            className={`
                            cursor-pointer
                            flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4
                            ${isLast
                ? "bg-red-300 text-white cursor-not-allowed opacity-70"
                : "bg-[#e32b42] text-white hover:bg-red-700 focus:ring-red-400"
              }
                        `}
            aria-label="Next Section"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}

export default Header
