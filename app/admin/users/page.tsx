"use client"

import { appWeddingClient } from "@/lib/ApiClient"
import dayjs from "dayjs"
import { ArrowLeft, ArrowRight, FilePenLine, Trash, X } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"

const initialFormData: Partial<User> = {
  shortName: "",
  name: "",
  dob: "",
  phone: "",
  qrCodeUrl: "",
  address: "",
  mapUrl: "",
  father: "",
  mother: "",
  bio: "",
  note: "",
  title: "",
  bank: "",
  account: "",
  weddingDate: "",
  weddingTime: "",
}

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<Partial<User> | null>(null)

  const formatDate = (date: string | null | undefined): string => {
    if (!date) return ""
    return dayjs(date).isValid() ? dayjs(date).format("YYYY-MM-DD") : ""
  }

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await appWeddingClient.getUsers()
      const formattedUsers = response.data.users.map((user: any) => ({
        ...user,
        dob: formatDate(user.dob),
        weddingDate: formatDate(user.weddingDate),
      }))
      setUsers(formattedUsers)
    } catch {
      toast.error("Không thể tải danh sách người dùng.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [users, searchTerm])

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredUsers.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredUsers, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)

  const handleEditClick = (user: User) => {
    setEditingUser({ ...user })
    setIsModalOpen(true)
  }

  const handleNewUserClick = () => {
    setEditingUser(initialFormData)
    setIsModalOpen(true)
  }

  const handleModalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setEditingUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingUser) return

    try {
      if (editingUser.id) {

        await appWeddingClient.updateUser(editingUser.id, editingUser)
        toast.success("Cập nhật người dùng thành công!")
      } else {

        if (!editingUser.userName) {
          toast.error("Tên đăng nhập không được để trống!")
          return
        }

        const newUserPayload = {
          ...editingUser,
          userName: editingUser.userName,
          password: "12345",
        }

        await appWeddingClient.createUser(newUserPayload)
        toast.success("Thêm người dùng thành công! Mật khẩu mặc định: 12345!")
      }

      fetchUsers()
      setIsModalOpen(false)
    } catch (err: any) {

      const errorMsg = err?.response?.data?.error || "Lưu thông tin người dùng thất bại!"
      toast.error(errorMsg)
    }
  }

  const handleDelete = async (userId: string) => {
    if (
      window.confirm("Bạn có chắc chắn muốn xóa người dùng này? Thao tác này không thể hoàn tác.")
    ) {
      try {
        await appWeddingClient.deleteUser(userId)
        toast.success("Xóa người dùng thành công.")
        fetchUsers()
      } catch (err: any) {
        toast.error(err?.response?.data?.error || "Xóa người dùng thất bại.")
      }
    }
  }

  return (
    <div>
      <div className="bg-white rounded-xl shadow-xl p-4 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <Input
            type="text"
            placeholder="Tìm kiếm theo Username hoặc Tên..."
            value={searchTerm}
            onChange={(e: any) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="w-200"
          />
          <Button
            onClick={handleNewUserClick}
            className="cursor-pointer bg-green-600 hover:bg-green-700 text-white cursor-pointer"
          >
            Thêm người dùng mới
          </Button>
        </div>
        {loading ? (
          <div className="text-center py-10 text-gray-500">Đang tải dữ liệu...</div>
        ) : (
          <>
            <Table
              headers={["ID", "Tên đăng nhập", "Họ và tên", "Điện thoại", "Ngày cưới", "Loại tài khoản", "Hành động"]}
            >
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-sm text-gray-700 font-mono w-[100px] truncate">
                    {user.id.slice(0, 8)}...
                  </td>
                  <td className="p-3 text-sm font-semibold text-blue-600">{user.userName}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {user.name || user.shortName || "Chưa cập nhật"}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{user.phone || "N/A"}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {user.weddingDate ? dayjs(user.weddingDate).format("DD/MM/YYYY") : "Chưa có"}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {user.type === "Groom" ? "Cô dâu" : user.type === "Bride" ? "Chú rể" : "Người dùng"}
                  </td>
                  <td className="flex space-x-2">
                    <Button
                      onClick={() => handleEditClick(user)}
                      className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white "
                    >
                      <FilePenLine size={20} />
                    </Button>
                    <Button
                      onClick={() => handleDelete(user.id)}
                      className="cursor-pointer bg-red-500 hover:bg-red-600 text-white "
                    >
                      <Trash size={20} />
                    </Button>
                  </td>
                </tr>
              ))}
            </Table>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={editingUser}
        onChange={handleModalChange}
        onSave={handleSave}
      />
    </div>
  )
}

const baseInputClass =
  "w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150 text-sm shadow-inner"

export const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  className = "",
  placeholder = "",
  disabled = false,
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
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      className={`${baseInputClass} ${className}`}
    />
  </div>
)

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  className = "",
  placeholder = "",
}: any) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={name} className="font-semibold text-gray-700 text-sm">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder || label}
      value={value || ""}
      onChange={onChange}
      rows={3}
      className={`${baseInputClass} resize-none`}
    />
  </div>
)

export const Button = ({ onClick, children, className = "" }: any) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm shadow-md ${className}`}
  >
    {children}
  </button>
)

export const Table = ({ headers, children }: any) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header: string) => (
            <th
              key={header}
              className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
    </table>
  </div>
)

export const Pagination = ({ currentPage, totalPages, onPageChange }: any) => (
  <div className="flex justify-center space-x-1 mt-4">
    <Button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`bg-gray-200 text-gray-700 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
    >
      <ArrowLeft />
    </Button>
    <span className="px-4 py-2 text-sm text-gray-700">
      Trang **{currentPage}** / **{totalPages}**
    </span>
    <Button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`bg-gray-200 text-gray-700 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"}`}
    >
      <ArrowRight />
    </Button>
  </div>
)

const UserModal = ({ isOpen, onClose, user, onChange, onSave }: any) => {
  if (!isOpen || !user) return null

  const isNew = !user.id

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">

      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">

        <div className="flex justify-between items-center p-3 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-800 ">
            {isNew ? "Thêm người dùng Mới" : `Chỉnh sửa người dùng: ${user.userName}`}
          </h2>

          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          <form onSubmit={onSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              <Input
                label="Username (Tên đăng nhập) *"
                name="userName"
                value={user.userName}
                onChange={onChange}
                disabled={!isNew}
                className={!isNew ? "bg-gray-100" : isNew && !user.userName ? "border-red-500" : ""}
              />

              {isNew && (
                <div className="flex flex-col space-y-1">
                  <label className="font-semibold text-gray-700 text-sm">Mật khẩu</label>
                  <Input
                    type="text"
                    name="passwordInfo"
                    value="Mặc định: 12345"
                    disabled={true}
                    className="bg-green-100 text-green-700 font-bold"
                  />
                </div>
              )}

              <Input
                label="Tên gọi tắt"
                name="shortName"
                value={user.shortName}
                onChange={onChange}
              />
              <Input label="Tên đầy đủ" name="name" value={user.name} onChange={onChange} />

              <Input
                label="Ngày sinh"
                name="dob"
                type="date"
                value={user.dob}
                onChange={onChange}
              />
              <Input label="Số điện thoại" name="phone" value={user.phone} onChange={onChange} />
              <Input label="Tiêu đề trang" name="title" value={user.title} onChange={onChange} />

              <Input label="Tên Bố" name="father" value={user.father} onChange={onChange} />
              <Input label="Tên Mẹ" name="mother" value={user.mother} onChange={onChange} />
              <div className="col-span-1"></div>

              <Input
                label="Ngày cưới"
                name="weddingDate"
                type="date"
                value={user.weddingDate}
                onChange={onChange}
              />
              <Input
                label="Giờ làm lễ"
                name="weddingTime"
                type="time"
                value={user.weddingTime}
                onChange={onChange}
              />
              <Input label="Tên Ngân hàng" name="bank" value={user.bank} onChange={onChange} />

              <Input label="Số tài khoản" name="account" value={user.account} onChange={onChange} />
              <Input
                label="URL Google Map"
                name="mapUrl"
                value={user.mapUrl}
                onChange={onChange}
                className="lg:col-span-2"
              />

              <TextArea
                label="Địa chỉ tổ chức"
                name="address"
                value={user.address}
                onChange={onChange}
                className="lg:col-span-3"
              />
              <TextArea
                label="Tiểu sử/Giới thiệu (Bio)"
                name="bio"
                value={user.bio}
                onChange={onChange}
                className="lg:col-span-3"
              />
              <TextArea
                label="Ghi chú (Note)"
                name="note"
                value={user.note}
                onChange={onChange}
                className="lg:col-span-3"
              />

              {user.qrCodeUrl && (
                <div className="lg:col-span-3 flex items-center space-x-4 border p-3 rounded-lg bg-gray-50">
                  <label className="font-semibold text-gray-700 text-sm min-w-[150px]">
                    Ảnh QR Code
                  </label>
                  <Image
                    width={64}
                    height={64}
                    src={user.qrCodeUrl}
                    alt="QR Code"
                    className="w-16 h-16 object-contain border rounded"
                  />
                  <p className="text-sm text-gray-500 truncate">
                    {user.qrCodeUrl.length > 50
                      ? user.qrCodeUrl.substring(0, 50) + "..."
                      : user.qrCodeUrl}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="flex justify-end space-x-3 border-t pt-4 p-4 sticky bottom-0 bg-white z-10">
          <Button
            type="button"
            onClick={onClose}
            className="cursor-pointer bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Hủy
          </Button>
          <Button
            onClick={onSave}
            type="submit"
            className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
          >
            Lưu {isNew ? "Mới" : "Thay đổi"}
          </Button>
        </div>
      </div>
    </div>
  )
}

import { User } from "@/context/admin.context"
import React, { SelectHTMLAttributes } from "react"

interface SelectOption {
  value: string | null
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  value: string | number
  options: SelectOption[]
  className?: string
  labelClassName?: string
  optionNull?: boolean
  error?: string
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  className = "",
  labelClassName = "",
  error,
  optionNull = false,
  ...rest
}) => {

  const id = `select-${name}`

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label &&
        <label htmlFor={id} className={`font-semibold text-gray-700 text-sm ${labelClassName}`}>
          {label}
        </label>
      }
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}

        className={`
                    w-full px-3 py-1.5 border rounded-lg 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    text-gray-900 transition duration-150 ease-in-out
                    ${error ? "border-red-500" : "border-gray-300"}
                    ${rest.disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
                `}
        {...rest}
      >
        {!optionNull &&
          <option value="" disabled>
            Chọn một tùy chọn
          </option>
        }
        {options.map((option) => (
          <option key={option.value} value={option.value || ""}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
