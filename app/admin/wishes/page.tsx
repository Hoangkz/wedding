"use client";

import { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { FilePenLine, Trash, PlusCircle, X } from "lucide-react";
import { appWeddingClient } from "@/lib/ApiClient";
import { Button, Input, Pagination, Table, TextArea } from "../users/page"; // Thay thế bằng đường dẫn thực tế

// Định nghĩa kiểu dữ liệu
interface Wish {
    id: string;
    name: string;
    desc: string; // Nội dung lời chúc
    customerId: string | null;
    createdAt: string;
    updatedAt: string;
    // Có thể thêm customerName nếu API trả về join data
    customerName?: string | null;
}

const initialFormData: Partial<Wish> = {
    name: "",
    desc: "",
    customerId: null,
};

const formatDateTime = (date: string): string => {
    return dayjs(date).format("DD/MM/YYYY HH:mm");
};

// =========================================================================
// WISH MANAGEMENT COMPONENT
// =========================================================================

export default function WishManagementPage() {
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingWish, setEditingWish] = useState<Partial<Wish> | null>(null);

    // --- Logic Fetch Data ---
    const fetchWishes = async () => {
        setLoading(true);
        try {
            // Giả định API GET /api/wishes trả về danh sách lời chúc
            const response = await appWeddingClient.getWishes();
            setWishes(response.data.wishes || []);
        } catch {
            toast.error("Không thể tải danh sách lời chúc.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWishes();
    }, []);

    // --- Logic CRUD ---
    const handleEditClick = (wish: Wish) => {
        setEditingWish(wish);
        setIsModalOpen(true);
    };

    const handleNewClick = () => {
        setEditingWish(initialFormData);
        setIsModalOpen(true);
    };

    const handleModalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditingWish((prev) => ({ ...prev, [name]: value === "" ? null : value }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingWish || !editingWish.name || !editingWish.desc) {
            toast.error("Tên người gửi và nội dung lời chúc là bắt buộc.");
            return;
        }

        // Chuẩn hóa customerId (rỗng -> null)
        const payload = {
            ...editingWish,
            customerId: editingWish.customerId || null
        };

        try {
            if (editingWish.id) {
                // SỬA
                await appWeddingClient.updateWish(editingWish.id, payload);
                toast.success("Cập nhật lời chúc thành công!");
            } else {
                // THÊM MỚI
                await appWeddingClient.createWish(payload);
                toast.success("Thêm lời chúc thành công!");
            }

            fetchWishes();
            setIsModalOpen(false);
        } catch (err: any) {
            toast.error(err?.response?.data?.error || "Lưu lời chúc thất bại!");
        }
    };

    const handleDelete = async (wishId: string, wishName: string) => {
        if (window.confirm(`Bạn có chắc chắn muốn xóa lời chúc của "${wishName}"?`)) {
            try {
                await appWeddingClient.deleteWish(wishId);
                toast.success("Xóa lời chúc thành công.");
                fetchWishes();
            } catch (err: any) {
                toast.error(err?.response?.data?.error || "Xóa lời chúc thất bại.");
            }
        }
    };

    // --- Lọc & Phân trang ---
    const filteredWishes = useMemo(() => {
        return wishes.filter(wish =>
            wish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            wish.desc.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [wishes, searchTerm]);

    const paginatedWishes = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredWishes.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredWishes, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredWishes.length / itemsPerPage);

    // =========================================================================
    // RENDER UI CHÍNH
    // =========================================================================

    return (
        <div>
            <div className="bg-white rounded-xl shadow-xl p-4 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                    <Input
                        type="text"
                        placeholder="Tìm kiếm theo Tên hoặc Nội dung lời chúc..."
                        value={searchTerm}
                        onChange={(e: any) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="w-full md:w-80"
                    />
                    <Button
                        onClick={handleNewClick}
                        className="cursor-pointer bg-green-600 hover:bg-green-700 text-white flex items-center"
                    >
                        <PlusCircle size={20} className="mr-2" /> Thêm lời chúc mới
                    </Button>
                </div>

                {loading ? (
                    <div className="text-center py-10 text-gray-500">Đang tải dữ liệu...</div>
                ) : (
                    <>
                        <Table headers={["Người gửi", "Nội dung", "Khách hàng ID", "Ngày tạo", "Hành động"]}>
                            {paginatedWishes.map((wish) => (
                                <tr key={wish.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-3 text-sm font-semibold">{wish.name}</td>
                                    <td className="p-3 text-sm text-gray-700 truncate max-w-sm">{wish.desc}</td>
                                    <td className="p-3 text-sm text-gray-500">
                                        {wish.customerId ? <span className="font-mono text-xs px-2 py-1 bg-gray-100 rounded">{wish.customerId}</span> : "N/A"}
                                    </td>
                                    <td className="p-3 text-sm text-gray-700">{formatDateTime(wish.createdAt)}</td>
                                    <td className="flex space-x-2 py-3">
                                        <Button
                                            onClick={() => handleEditClick(wish)}
                                            className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white"
                                        >
                                            <FilePenLine size={20} />
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(wish.id, wish.name)}
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

            <WishModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                wish={editingWish}
                onChange={handleModalChange}
                onSave={handleSave}
            />
        </div>
    );
}

// -------------------------------------------------------------------------
// WISH MODAL COMPONENT
// -------------------------------------------------------------------------

const WishModal = ({ isOpen, onClose, wish, onChange, onSave }: any) => {
    if (!isOpen || !wish) return null;

    const isNew = !wish.id;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col">

                {/* HEADER CỐ ĐỊNH */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-800">
                        {isNew ? "Thêm Lời Chúc Mới" : `Chỉnh sửa Lời chúc: ${wish.name}`}
                    </h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
                        <X size={24} />
                    </button>
                </div>

                {/* FORM BODY (Scrollable) */}
                <div className="flex-grow overflow-y-auto p-4">
                    <form onSubmit={onSave} className="space-y-4">
                        <Input
                            label="Tên Người Gửi (Name) *"
                            name="name"
                            value={wish.name || ''}
                            onChange={onChange}
                        />
                        <Input
                            label="ID Khách hàng (Optional)"
                            name="customerId"
                            value={wish.customerId || ''}
                            onChange={onChange}
                            placeholder="Nhập ID khách hàng nếu có liên kết"
                        />
                        <TextArea
                            label="Nội dung Lời chúc (Desc) *"
                            name="desc"
                            value={wish.desc || ''}
                            onChange={onChange}
                            rows={5}
                        />
                    </form>
                </div>

                {/* FOOTER CỐ ĐỊNH */}
                <div className="flex justify-end space-x-3 border-t pt-4 p-2 sticky bottom-0 bg-white z-10">
                    <Button type="button" onClick={onClose} className="cursor-pointer bg-gray-300 text-gray-800 hover:bg-gray-400">
                        Hủy
                    </Button>
                    <Button type="submit" onClick={onSave} className="cursor-pointer bg-green-600 text-white hover:bg-green-700">
                        Lưu {isNew ? "Mới" : "Thay đổi"}
                    </Button>
                </div>
            </div>
        </div>
    );
};