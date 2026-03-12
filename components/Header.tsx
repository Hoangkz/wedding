"use client"

import { useFeatures } from "@/context/feature.context"
import { ArrowLeft, ArrowRight, Heart, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import DesktopNav from "./DesktopNav"

const Header: React.FC = () => {
  const { navItems } = useFeatures()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState("/#")
  const [isMounted, setIsMounted] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const isHashPage = pathname === "/"

  const getGetCurrentPath = useCallback(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      // Nếu không có hash, trả về /# để khớp với item.href đầu tiên
      return hash ? `/${hash}` : "/#"
    }
    return "/#"
  }, [])

  useEffect(() => {
    setIsMounted(true)
    const updateActive = () => setActive(getGetCurrentPath())

    updateActive()
    window.addEventListener("hashchange", updateActive)
    return () => window.removeEventListener("hashchange", updateActive)
  }, [getGetCurrentPath, pathname])

  const currentIndex = useMemo(() => {
    if (!isMounted || !isHashPage) return -1
    const index = navItems.findIndex((item) => item.href === active)

    // Fallback cho trang chủ
    if (index === -1 && (active === "/#" || (typeof window !== "undefined" && window.scrollY < 100))) {
      return 0
    }
    return index
  }, [active, navItems, isMounted, isHashPage])

  // --- LOGIC CUỘN MƯỢT TỐI ƯU ---
  const scrollToSection = useCallback((targetHref: string) => {
    // Chuyển đổi "/#about" -> "about", "/#" -> "home"
    let elementId = targetHref.replace("/#", "").trim()
    if (!elementId) elementId = "home"

    const element = document.getElementById(elementId)

    if (element) {
      const yOffset = -80 // Bù chiều cao Header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset + yOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    } else if (elementId === "home") {
      // Trường hợp khẩn cấp nếu không tìm thấy id="home", cuộn lên đỉnh
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  const handleNavigation = (direction: "prev" | "next") => {
    if (!isHashPage || currentIndex === -1) return

    let newIndex = currentIndex
    if (direction === "next") {
      newIndex = Math.min(currentIndex + 1, navItems.length - 1)
    } else {
      newIndex = Math.max(currentIndex - 1, 0)
    }

    if (newIndex !== currentIndex) {
      const targetHref = navItems[newIndex].href

      if (targetHref.startsWith("/#")) {
        // Cập nhật URL trước với { scroll: false } để tránh nhảy trang
        router.push(targetHref, { scroll: false })
        // Thực hiện cuộn mượt sau khi URL đã thay đổi
        setTimeout(() => scrollToSection(targetHref), 10)
      } else {
        router.push(targetHref)
      }

      setActive(targetHref)
    }
  }

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    setActive(href)
    if (href.startsWith("/#") && isHashPage) {
      scrollToSection(href)
    }
  }

  const isFirst = currentIndex <= 0
  const isLast = currentIndex === navItems.length - 1 || currentIndex === -1

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[999] bg-white shadow-lg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => {
                  router.push("/")
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  setActive("/#")
                }}
                className="flex items-center text-[30px] font-bold text-[#03c0cc] focus:outline-none"
              >
                <span className="text-[#e32b42]">L</span>
                <Heart className="w-5 h-5 mx-1.5" style={{ color: "#e32b42" }} />H
              </button>
            </div>

            <nav className="hidden md:block">
              {/* Giữ nguyên baseIdPath theo yêu cầu của bạn */}
              <DesktopNav baseIdPath={""} />
            </nav>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-[#e32b42] focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
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
              if (!item.isOptional) return null
              return (
                <li key={item.name} className="w-full">
                  <Link
                    href={item.href}
                    scroll={false}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${item.href === active
                      ? "text-[#e32b42] font-bold bg-pink-50"
                      : "text-gray-900 hover:bg-gray-100 hover:text-[#e32b42]"
                      }`}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
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
            className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 ${isFirst ? "bg-red-300 text-white cursor-not-allowed opacity-70" : "bg-[#e32b42] text-white hover:bg-red-700 focus:ring-red-400"
              }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleNavigation("next")}
            disabled={isLast}
            className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 ${isLast ? "bg-red-300 text-white cursor-not-allowed opacity-70" : "bg-[#e32b42] text-white hover:bg-red-700 focus:ring-red-400"
              }`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}

export default Header