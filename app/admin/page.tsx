"use client"

import { useAdminContext } from "@/hooks/admin.context"
import { appWeddingClient } from "@/lib/ApiClient"
import { toBase64 } from "@/lib/utils"
import dayjs from "dayjs"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Select } from "./users/page"

const CUSTOMER_TYPES = [
  { value: "Groom", label: "Chú rể" },
  { value: "Bride", label: "Cô dâu" },
  { value: "Undetermined", label: "Người dùng" },
]

export default function DashboardPage() {
  const { user } = useAdminContext()
  const formatDate = (date: string | null | undefined): string => {
    if (!date) return ""
    return dayjs(date).isValid() ? dayjs(date).format("YYYY-MM-DD") : ""
  }

  const [formData, setFormData] = useState<any>({
    id: user?.id || "",
    userName: user?.userName || "",
    shortName: user?.shortName || "",
    name: user?.name || "",
    phone: user?.phone || "",
    address: user?.address || "",
    mapUrl: user?.mapUrl || "",
    father: user?.father || "",
    mother: user?.mother || "",
    title: user?.title || "",
    bank: user?.bank || "",
    account: user?.account || "",
    bio: user?.bio || "",
    note: user?.note || "",
    dob: formatDate(user?.dob),
    weddingDate: formatDate(user?.weddingDate),
    weddingTime: user?.weddingTime || "",
    qrCodeUrl: user?.qrCodeUrl || "",
    qrCodeFile: null,
    type: user?.type || "Undetermined",
  })

  useEffect(() => {
    if (user && user.id) {
      setFormData({
        id: user?.id || "",
        userName: user?.userName || "",
        shortName: user?.shortName || "",
        name: user?.name || "",
        phone: user?.phone || "",
        address: user?.address || "",
        mapUrl: user?.mapUrl || "",
        father: user?.father || "",
        mother: user?.mother || "",
        title: user?.title || "",
        bank: user?.bank || "",
        account: user?.account || "",
        bio: user?.bio || "",
        note: user?.note || "",
        dob: formatDate(user?.dob),
        weddingDate: formatDate(user?.weddingDate),
        weddingTime: user?.weddingTime || "",
        qrCodeUrl: user?.qrCodeUrl || "",
        qrCodeFile: null,
        type: user?.type || "Undetermined",
      })
    }
  }, [user])

  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, qrCodeFile: e.target.files?.[0] || null })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const dataToSend = { ...formData }

    if (formData.qrCodeFile) {
      try {
        const base64String = await toBase64(formData.qrCodeFile)
        dataToSend.qrCodeUrl = base64String
      } catch {
        toast.error("Chuyển đổi file QR Code thất bại!")
        return
      }
    }

    delete dataToSend.qrCodeFile

    try {
      await appWeddingClient.updateUser(user.id, dataToSend)
      toast.success("Cập nhật thông tin thành công!")
    } catch {
      toast.error("Cập nhật thông tin thất bại!")
    }
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      toast.error("Vui lòng điền đủ các trường mật khẩu.")
      return
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Mật khẩu mới không khớp!")
      return
    }
    if (!user) return

    try {
      await appWeddingClient.changePassword(user.id, passwordData)
      toast.success("Đổi mật khẩu thành công!")
      setShowPasswordModal(false)
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    } catch (err: any) {
      toast.error(err?.response?.data?.error || "Đổi mật khẩu thất bại.")
    }
  }
  return (
    <div className="p-2 h-full">
      <div className="bg-white rounded-xl shadow-xl space-y-6 flex flex-col h-full min-h-0">
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="p-6 flex-1 space-y-8 overflow-y-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">
                Thông tin Cơ bản
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <Input
                  type="text"
                  name="userName"
                  label="Username (Tên đăng nhập)"
                  value={formData.userName}
                  disabled
                  className="bg-gray-100 text-gray-500 cursor-not-allowed"
                />

                <Input
                  type="text"
                  name="shortName"
                  label="Tên gọi tắt"
                  value={formData.shortName || ""}
                  onChange={handleChange}
                />

                <Input
                  type="text"
                  name="name"
                  label="Tên đầy đủ"
                  value={formData.name || ""}
                  onChange={handleChange}
                />

                <Input
                  type="date"
                  name="dob"
                  label="Ngày sinh"
                  value={formData.dob || ""}
                  onChange={handleChange}
                />

                <Input
                  type="text"
                  name="phone"
                  label="Số điện thoại"
                  value={formData.phone || ""}
                  onChange={handleChange}
                />
                <Select
                  label="Loại tài khoản"
                  name="type"
                  value={formData.type || ""}
                  onChange={(e) => {
                    const value = e.target.value
                    handleChange({ target: { value: value, name: "type" } } as any)
                  }}
                  options={CUSTOMER_TYPES.map((t) => ({ value: t.value, label: t.label }))}
                />
                <Input
                  type="text"
                  name="title"
                  label="Tiêu đề trang (ví dụ: Tình yêu của A & B)"
                  value={formData.title || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Thông tin Gia đình & Giới thiệu */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">
                Thông tin Gia đình
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <Input
                  type="text"
                  name="father"
                  label="Tên Cha"
                  value={formData.father || ""}
                  onChange={handleChange}
                />

                <Input
                  type="text"
                  name="mother"
                  label="Tên Mẹ"
                  value={formData.mother || ""}
                  onChange={handleChange}
                />
                <div className="hidden lg:block"></div>

                <TextArea
                  name="bio"
                  label="Tiểu sử/Giới thiệu (Tùy chọn)"
                  value={formData.bio || ""}
                  onChange={handleChange}
                  className="lg:col-span-2"
                />

                <TextArea
                  name="note"
                  label="Ghi chú (Note - Tùy chọn)"
                  value={formData.note || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Thông tin Địa điểm & Thời gian */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">
                Địa điểm & Thời gian Cưới
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <Input
                  type="date"
                  name="weddingDate"
                  label="Ngày cưới"
                  value={formData.weddingDate || ""}
                  onChange={handleChange}
                />

                <Input
                  type="time"
                  name="weddingTime"
                  label="Giờ làm lễ"
                  value={formData.weddingTime || ""}
                  onChange={handleChange}
                />

                <div className="hidden lg:block"></div>

                <Input
                  type="text"
                  name="address"
                  label="Địa chỉ tổ chức"
                  value={formData.address || ""}
                  onChange={handleChange}
                  className="lg:col-span-2"
                />

                <Input
                  type="text"
                  name="mapUrl"
                  label="URL Google Map (Link nhúng)"
                  value={formData.mapUrl || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Thông tin Ngân hàng & QR Code */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">
                Thông tin Ngân hàng & QR Code
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                <Input
                  type="text"
                  name="bank"
                  label="Tên Ngân hàng"
                  value={formData.bank || ""}
                  onChange={handleChange}
                />

                <Input
                  type="text"
                  name="account"
                  label="Số tài khoản"
                  value={formData.account || ""}
                  onChange={handleChange}
                />

                {/* QR Code Upload Section */}
                <div className="flex flex-col space-y-2 lg:col-span-3 border p-3 rounded-lg bg-gray-50">
                  <label className="font-semibold text-gray-700 text-sm flex items-center">
                    QR Code Chuyển khoản (Ảnh)
                  </label>
                  <div className="flex items-center space-x-4">
                    {(formData.qrCodeFile || formData.qrCodeUrl) && (
                      <Image
                        width={64}
                        height={64}
                        src={
                          formData.qrCodeFile
                            ? URL.createObjectURL(formData.qrCodeFile)
                            : formData.qrCodeUrl
                        }
                        alt="QR Code Preview"
                        className="w-16 h-16 object-contain border-2 border-green-400 rounded-lg shadow-md bg-white p-1"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-600 file:mr-4 
                                            file:py-2 file:px-4 file:rounded-full file:border-0 
                                            file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 
                                            hover:file:bg-blue-200 transition-colors cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Tải lên ảnh QR Code ngân hàng của bạn. Dung lượng tối đa: 1MB.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white flex-shrink-0 flex p-6 justify-between items-center border-t border-gray-100">
            <button
              type="submit"
              className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-xl 
                            hover:bg-blue-700 transition-all duration-300 
                            shadow-lg shadow-blue-300/50 flex items-center"
            >
              Cập nhật thông tin
            </button>

            <button
              type="button"
              className="cursor-pointer bg-red-500 text-white px-3 py-2 rounded-xl 
                            hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-300/50 flex items-center"
              onClick={() => setShowPasswordModal(true)}
            >
              Đổi mật khẩu
            </button>
          </div>
        </form>
      </div>

      {/* Modal đổi mật khẩu (Giữ nguyên) */}
      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 transition-opacity duration-300 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm transform scale-100 transition-transform duration-300">
            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800 border-b pb-2">
              Đổi mật khẩu
            </h2>
            <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
              <Input
                type="password"
                name="currentPassword"
                placeholder="Mật khẩu hiện tại"
                value={passwordData.currentPassword}
                onChange={(e: any) =>
                  setPasswordData({ ...passwordData, currentPassword: e.target.value })
                }
                required
              />
              <Input
                type="password"
                name="newPassword"
                placeholder="Mật khẩu mới"
                value={passwordData.newPassword}
                onChange={(e: any) =>
                  setPasswordData({ ...passwordData, newPassword: e.target.value })
                }
                required
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu mới"
                value={passwordData.confirmPassword}
                onChange={(e: any) =>
                  setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                }
                required
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
                  onClick={() => setShowPasswordModal(false)}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium shadow-md"
                >
                  Xác nhận đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

const baseInputClass =
  "w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 text-sm shadow-inner"

const Input = ({
  label,
  name,
  value,
  onChange,
  disabled,
  type = "text",
  className = "",
  placeholder = "",
  required,
}: any) => (
  <div className="flex flex-col space-y-1">
    {label && (
      <label htmlFor={name} className="font-semibold text-gray-700 text-sm">
        {label}
      </label>
    )}
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder || label}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={`${baseInputClass} ${className}`}
    />
  </div>
)

const TextArea = ({ label, name, value, onChange, className = "", placeholder = "" }: any) => (
  <div className={`flex flex-col space-y-1 ${className}`}>
    <label htmlFor={name} className="font-semibold text-gray-700 text-sm">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder || label}
      value={value}
      onChange={onChange}
      rows={2}
      className={`${baseInputClass} resize-none`}
    />
  </div>
)
