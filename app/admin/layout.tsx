"use client"

import AppLayout from "@/components/sidebar/AppLayout"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AdminUser, AdminUserContext, navAdmin } from "@/context/admin.context"
import { appWeddingClient } from "@/lib/ApiClient"
import { BookOpenCheck, CalendarCheck, FileImage, Mails, Package, SquareChartGantt, User } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser>(null)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    appWeddingClient
      .me()
      .then((res) => {
        setUser(res.data.user)
        setShowModal(false)
      })
      .catch(() => {

        document.cookie = "token=; path=/; max-age=0"
        setShowModal(true)
      })
  }, [])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)
    const userName = formData.get("userName") as string
    const password = formData.get("password") as string

    try {
      const response = await appWeddingClient.login(userName, password)
      const { token, user: loggedUser }: any = response?.data

      document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24}`

      setUser(loggedUser)
      setShowModal(false)

      toast.success("Đăng nhập thành công!")
    } catch (data: any) {
      setError(data?.response?.data?.error || "Đăng nhập thất bại!")
      toast.error(data?.response?.data?.error || "Đăng nhập thất bại!")
    }
  }
  const navAdminDashBoard: navAdmin[] = [
    { name: "Thông tin cá nhân", url: "/admin", icon: User },
    { name: "Quản lý tài khoản", url: "/admin/users", icon: Package },
    { name: "Quản lý thư mời", url: "/admin/customers", icon: Mails },
    { name: "Quản lý lời chúc", url: "/admin/wishes", icon: BookOpenCheck },
    { name: "Quản lý tập tin", url: "/admin/media", icon: FileImage },
    { name: "Quản lý dòng thời gian", url: "/admin/timeline", icon: SquareChartGantt },
    { name: "Quản lý lịch trình", url: "/admin/schedule", icon: CalendarCheck },
  ]
  return (
    <SidebarProvider>
      <AdminUserContext.Provider value={{ user, navAdminDashBoard }}>
        {showModal ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[360px] max-w-full animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="userName"
                  placeholder="Tên đăng nhập"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="cursor-pointer bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Login
                </button>
                {error && <p className="text-red-500 mt-1 text-sm text-center">{error}</p>}
              </form>
              <p className="mt-4 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Wedding Admin
              </p>
            </div>
          </div>
        ) : (
          <AppLayout>{children}</AppLayout>
        )}
      </AdminUserContext.Provider>
    </SidebarProvider>
  )
}
