"use client"

import { useState, useEffect, useMemo } from "react"
import { toast } from "react-toastify"
import dayjs from "dayjs"
import { FilePenLine, Trash, PlusCircle, X } from "lucide-react"
import { appWeddingClient } from "@/lib/ApiClient"

import { Button, Input, Pagination, Select, Table, TextArea } from "../users/page"

type CustomerType = "Groom" | "Bride"
type AttendedStatus = -1 | 0 | 1

interface Customer {
  id: string
  name: string
  type: CustomerType
  invitation: string
  invitedAt: string
  attended: AttendedStatus
  createdAt: string
  updatedAt: string
}

const initialFormData: Partial<Customer> = {
  name: "",
  type: "Groom",
  invitation: "",
  invitedAt: dayjs().format("YYYY-MM-DDTHH:mm"),
  attended: -1,
}

const CUSTOMER_TYPES = [
  { value: "Groom", label: "Nhà Trai" },
  { value: "Bride", label: "Nhà Gái" },
]

const ATTENDED_STATUSES = [
  { value: "-1", label: "Chưa xác định" },
  { value: "1", label: "Có tham dự" },
  { value: "0", label: "Không tham dự" },
]

const formatDateTime = (date: string | null | undefined): string => {
  if (!date) return "N/A"
  return dayjs(date).isValid() ? dayjs(date).format("DD/MM/YYYY HH:mm") : "N/A"
}

const displayAttendedStatus = (status: AttendedStatus) => {
  switch (status) {
    case 1:
      return <span className="text-green-600 font-bold">Có tham dự</span>
    case 0:
      return <span className="text-red-600 font-bold">Không tham dự</span>
    case -1:
    default:
      return <span className="text-gray-500">Chưa xác định</span>
  }
}

export default function CustomerManagementPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCustomer, setEditingCustomer] = useState<Partial<Customer> | null>(null)

  const fetchCustomers = async () => {
    setLoading(true)
    try {
      const response = await appWeddingClient.getCustomers()
      setCustomers(response.data.customers || [])
    } catch {
      toast.error("Không thể tải danh sách khách hàng.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  const handleEditClick = (customer: Customer) => {
    setEditingCustomer({
      ...customer,
      invitedAt: dayjs(customer.invitedAt).format("YYYY-MM-DDTHH:mm"),

      attended: customer.attended,
    })
    setIsModalOpen(true)
  }

  const handleNewClick = () => {
    setEditingCustomer(initialFormData)
    setIsModalOpen(true)
  }

  const handleModalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    let newValue: string | number = value

    if (name === "attended") {
      newValue = parseInt(value, 10)
    }

    setEditingCustomer((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingCustomer || !editingCustomer.name || !editingCustomer.invitation) {
      toast.error("Tên khách và lời mời là bắt buộc.")
      return
    }

    const payload = {
      ...editingCustomer,
      attended:
        typeof editingCustomer.attended === "string"
          ? parseInt(editingCustomer.attended, 10)
          : editingCustomer.attended,
    }

    try {
      if (editingCustomer.id) {
        await appWeddingClient.updateCustomer(editingCustomer.id, payload)
        toast.success("Cập nhật khách hàng thành công!")
      } else {
        await appWeddingClient.createCustomer(payload)
        toast.success("Thêm khách hàng thành công!")
      }

      fetchCustomers()
      setIsModalOpen(false)
    } catch (err: any) {
      toast.error(err?.response?.data?.error || "Lưu thông tin khách hàng thất bại!")
    }
  }

  const handleDelete = async (customerId: string, customerName: string) => {
    if (
      window.confirm(
        `Bạn có chắc chắn muốn xóa khách hàng "${customerName}"? Thao tác này không thể hoàn tác!`
      )
    ) {
      try {
        await appWeddingClient.deleteCustomer(customerId)
        toast.success("Xóa khách hàng thành công!")
        fetchCustomers()
      } catch (err: any) {
        toast.error(err?.response?.data?.error || "Xóa khách hàng thất bại!")
      }
    }
  }

  const filteredCustomers = useMemo(() => {
    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.invitation.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [customers, searchTerm])

  const paginatedCustomers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredCustomers.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredCustomers, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <Input
            type="text"
            placeholder="Tìm kiếm theo Tên khách hoặc Lời mời..."
            value={searchTerm}
            onChange={(e: any) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full md:w-80"
          />
          <Button
            onClick={handleNewClick}
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white flex items-center"
          >
            <PlusCircle size={20} className="mr-2" /> Thêm khách hàng mới
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">Đang tải dữ liệu...</div>
        ) : (
          <>
            <Table headers={["Tên khách", "Loại", "Lời mời", "Ngày mời", "Tham dự", "Hành động"]}>
              {paginatedCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 text-sm font-semibold">{customer.name}</td>
                  <td className="p-3 text-sm">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        customer.type === "Groom"
                          ? "bg-blue-100 text-blue-800"
                          : customer.type === "Bride"
                            ? "bg-pink-100 text-pink-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {CUSTOMER_TYPES.find((t) => t.value === customer.type)?.label || "N/A"}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 truncate max-w-xs">
                    {customer.invitation}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {formatDateTime(customer.invitedAt)}
                  </td>
                  <td className="p-3 text-sm font-bold">
                    {displayAttendedStatus(customer.attended)}
                  </td>
                  <td className="flex space-x-2 py-3">
                    <Button
                      onClick={() => handleEditClick(customer)}
                      className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                      <FilePenLine size={20} />
                    </Button>
                    <Button
                      onClick={() => handleDelete(customer.id, customer.name)}
                      className="cursor-pointer bg-red-500 hover:bg-red-600 text-white"
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

      {/* Modal Thêm/Sửa */}
      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        customer={editingCustomer}
        onChange={handleModalChange}
        onSave={handleSave}
      />
    </div>
  )
}

const CustomerModal = ({ isOpen, onClose, customer, onChange, onSave }: any) => {
  if (!isOpen || !customer) return null

  const isNew = !customer.id

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* HEADER CỐ ĐỊNH */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-800">
            {isNew ? "Thêm Khách Hàng Mới" : `Chỉnh sửa: ${customer.name}`}
          </h2>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>
        </div>

        {/* FORM BODY (Scrollable) */}
        <div className="flex-grow overflow-y-auto p-6">
          <form onSubmit={onSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Tên Khách Hàng *"
                name="name"
                value={customer.name}
                onChange={onChange}
              />

              <Select
                label="Thuộc bên *"
                name="type"
                value={customer.type}
                onChange={onChange}
                options={CUSTOMER_TYPES.map((t) => ({ value: t.value, label: t.label }))}
              />

              <Input
                label="Ngày/Giờ Mời *"
                name="invitedAt"
                type="datetime-local"
                value={customer.invitedAt}
                onChange={onChange}
              />

              <Select
                label="Trạng thái tham dự *"
                name="attended"
                value={String(customer.attended)}
                onChange={onChange}
                options={ATTENDED_STATUSES}
              />

              <TextArea
                label="Nội dung Lời mời (in trên thiệp)"
                name="invitation"
                value={customer.invitation}
                onChange={onChange}
                className="md:col-span-2"
              />
            </div>
          </form>
        </div>

        {/* FOOTER CỐ ĐỊNH */}
        <div className="flex justify-end space-x-3 border-t pt-4 p-6 sticky bottom-0 bg-white z-10">
          <Button
            type="button"
            onClick={onClose}
            className="cursor-pointer bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Hủy
          </Button>
          <Button
            type="submit"
            onClick={onSave}
            className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
          >
            Lưu {isNew ? "Mới" : "Thay đổi"}
          </Button>
        </div>
      </div>
    </div>
  )
}
