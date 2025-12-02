"use client"
import { CollapseSection } from "@/components/CollapseSection";
import { appWeddingClient } from "@/lib/ApiClient";
import { LOVE_TIMELINE_EMOJIS, toBase64 } from "@/lib/utils";
import dayjs from "dayjs";
import { PlusCircle, Trash2, X } from 'lucide-react';
import { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input, TextArea } from "../users/page";

interface ScheduleItem {
    id: string;
    title: string;
    desc: string;
    address: string;
    day: string;
    time: string;
    image: string | File | null;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const ScheduleSection = () => {
    const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newItem, setNewItem] = useState<Omit<ScheduleItem, 'id'>>({
        title: '',
        desc: '',
        image: null,
        address: "",
        day: "",
        time: ""
    });

    useEffect(() => {
        appWeddingClient.getSchedule().then((e: any) => {
            const rs = e.data?.map((item: any) => {

                const dateDay = dayjs(item.day);
                const dateTime = dayjs(item.time);

                return {
                    ...item,

                    day: dateDay.format("YYYY-MM-DD"),
                    time: dateTime.format("HH:mm")
                }
            })
            setSchedule(rs)
        })
    }, []);

    const handleFieldChange = (index: number, field: keyof ScheduleItem, value: string) => {
        const updatedItems = [...schedule];

        updatedItems[index] = { ...updatedItems[index], [field]: value };
        setSchedule(updatedItems);
    };

    const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (!file) return;

        const updatedItems = [...schedule];
        updatedItems[index] = { ...updatedItems[index], image: file };
        setSchedule(updatedItems);
        e.target.value = '';
    };

    const handleNewItemImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setNewItem({ ...newItem, image: file });
        e.target.value = '';
    };

    const handleNewItemDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "weddingDate") {
            setNewItem(prev => ({ ...prev, day: value }));
        } else if (name === "weddingTime") {
            setNewItem(prev => ({ ...prev, time: value }));
        }
    };

    const handleAddItem = async () => {
        if (!newItem.title.trim()) {
            toast.error("Vui lòng nhập Tiêu đề cho mục mới.");
            return;
        }

        if (!newItem.day || !newItem.time) {
            toast.error("Vui lòng chọn đầy đủ Ngày và Giờ làm lễ.");
            return;
        }

        try {
            const data: any = {
                title: newItem.title,
                desc: newItem.desc,
                address: newItem.address,

                day: newItem.day,
                time: newItem.time,
                image: null,
            };

            if (newItem.image) {
                data.image = await toBase64(newItem.image as File);
            }

            const rs = await appWeddingClient.createSchedule(data);

            const dateDay = dayjs(rs.data.day);
            const dateTime = dayjs(rs.data.time);

            const newScheduleItem: ScheduleItem = {
                ...rs.data,
                day: dateDay.format("YYYY-MM-DD"),
                time: dateTime.format("HH:mm")
            };

            setSchedule([...schedule, newScheduleItem]);

            setNewItem({ title: '', desc: '', image: null, address: "", day: "", time: "" });
            setIsModalOpen(false);
            toast.success("Thêm lịch trình thành công!");
        } catch {
            toast.error("Lỗi thêm lịch trình, hãy thử lại sau!");
        }
    };

    const handleUpdateItem = async (item: ScheduleItem) => {

        if (!item.day || !item.time) {
            toast.error("Ngày và Giờ làm lễ không hợp lệ.");
            return;
        }

        try {
            const newData: any = {
                title: item.title,
                desc: item.desc,
                address: item.address,
                day: item.day,
                time: item.time,
                image: item.image,
            };
            const file = item?.image as File;
            if (file instanceof File) {
                newData.image = await toBase64(file);
            } else {
                newData.image = null;
            }

            await appWeddingClient.updateSchedule(item.id, newData);
            toast.success("Cập nhật lịch trình thành công!");

        } catch {
            toast.error("Cập nhật lịch trình thất bại, hãy thử lại sau!");
        }
    }

    const handleRemoveItem = async (id: string) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa cột mốc này khỏi lịch trình?")) {
            try {
                await appWeddingClient.deleteSchedule(id)
                setSchedule(schedule.filter(item => item.id !== id));
                toast.success("Xoá lịch trình thành công!")
            } catch {
                toast.error("Xoá lịch trình thất bại!")
            }
        }
    };

    return (
        <>
            <div className="space-y-4">
                <div className="flex justify-between items-start m-0">
                    <p className="text-sm text-gray-500 max-w-[calc(100%-140px)] mr-4">
                        Quản lý các cột thời gian trong lễ vu quy của bạn. Nhấn &quot;Thêm Mới&quot; để mở cửa sổ nhập liệu.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center py-2 px-3 
                                border border-transparent rounded-md text-sm font-medium 
                                text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                                focus:ring-offset-2 focus:ring-indigo-500 transition whitespace-nowrap"
                        title="Thêm lịch trình mới"
                    >
                        <PlusCircle size={16} className="mr-1" /> Thêm Mới
                    </button>
                </div>

                <h3 className="font-semibold text-gray-700">📋 Danh sách lịch trình ({schedule.length} mục):</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[80vh] overflow-y-auto p-2 border border-gray-200 rounded-lg bg-gray-50 shadow-inner">
                    {schedule.length === 0 && (
                        <p className="md:col-span-2 lg:col-span-3 xl:col-span-4 text-center text-gray-500 italic p-4">Chưa có mục lịch trình nào. Hãy nhấn **Thêm Mục lịch trình Mới** để bắt đầu!</p>
                    )}
                    {schedule.map((item, index) => (
                        <div key={item.id} className="relative p-3 border border-indigo-200 rounded-lg bg-white shadow-md flex flex-col transition hover:shadow-lg">
                            <div className="flex-grow space-y-1">
                                {/* Title Input */}
                                <Input
                                    type="text"
                                    label={"Tiêu đề"}
                                    value={item.title}
                                    placeholder="Tiêu đề"
                                    onChange={(e: any) => handleFieldChange(index, 'title', e.target.value)}
                                />
                                {/* Address Input */}

                                <Input
                                    label={"Địa điểm"}
                                    type="text"
                                    value={item.address}
                                    placeholder="Địa điểm"
                                    onChange={(e: any) => handleFieldChange(index, 'address', e.target.value)}
                                    className="w-full border p-1 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {/* Date Input */}
                                <label className="font-semibold text-gray-700 text-sm">
                                    Thời gian
                                </label>
                                <div className="flex space-x-2">
                                    <input
                                        type="date"
                                        value={item.day}
                                        onChange={(e) => handleFieldChange(index, 'day', e.target.value)}
                                        className="w-full border p-1 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        title="Ngày"
                                    />
                                    {/* Time Input */}
                                    <input
                                        type="time"
                                        value={item.time}
                                        onChange={(e) => handleFieldChange(index, 'time', e.target.value)}
                                        className="w-full border p-1 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        title="Giờ"
                                    />
                                </div>
                                {/* Description Input */}
                                <TextArea
                                    label={"Mô tả"}
                                    value={item.desc}
                                    placeholder="Mô tả"
                                    onChange={(e: any) => handleFieldChange(index, 'desc', e.target.value)}
                                    rows={5}
                                />

                                <div className="flex items-center space-x-2 pt-2">
                                    {(item.image) && (
                                        <img
                                            src={item.image instanceof File ? URL.createObjectURL(item.image) : item.image as string}
                                            alt={`Schedule Image ${index + 1}`}
                                            className="w-10 h-10 object-cover rounded-md border"
                                        />
                                    )}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(index, e)}
                                        className="
                                                flex-1 min-w-0 max-w-full 
                                                text-xs text-gray-600 file:py-1 
                                                file:px-2 file:cursor-pointer file:rounded-full 
                                                file:border-0 file:text-xs file:font-medium 
                                                file:bg-indigo-50 file:text-indigo-700
                                                hover:file:bg-indigo-100 cursor-pointer 
                                                overflow-hidden whitespace-nowrap file:flex"
                                    />

                                    <button
                                        onClick={() => handleUpdateItem(item)}
                                        className="flex items-center justify-center py-2 px-3 cursor-pointer
                                                border border-transparent rounded-md text-sm font-medium 
                                                text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 
                                                focus:ring-offset-2 focus:ring-indigo-500 transition whitespace-nowrap"
                                        title="Cập nhật lịch trình"
                                    >Cập nhật
                                    </button>
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="cursor-pointer text-red-500 hover:text-red-700 transition p-1"
                                        title="Xóa mục này"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <SimpleModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Thêm lịch trình mới"
            >
                <div className="max-h-[80vh] overflow-y-auto p-1">
                    <div className="space-y-2">
                        {/* Title Input */}
                        <input
                            type="text"
                            placeholder="Tiêu đề"
                            value={newItem.title}
                            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                            className="w-full border p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {/* Address Input */}
                        <input
                            type="text"
                            placeholder="Địa điểm"
                            value={newItem.address}
                            onChange={(e) => setNewItem({ ...newItem, address: e.target.value })}
                            className="w-full border p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {/* Day/Time Inputs - Cấu trúc 70/30 và Image */}
                        <div className="flex space-x-2">
                            {/* Ngày lễ - 70% */}
                            <div className="w-[70%] max-w-[150px]">
                                <Input
                                    label="Ngày"
                                    name="weddingDate"
                                    type="date"
                                    value={newItem.day}
                                    onChange={handleNewItemDateTimeChange}
                                />
                            </div>
                            {/* Giờ làm lễ - 30% */}
                            <div className="w-[30%] max-w-[120px]">
                                <Input
                                    label="Giờ"
                                    name="weddingTime"
                                    type="time"
                                    value={newItem.time}
                                    onChange={handleNewItemDateTimeChange}
                                />
                            </div>
                            {/* Image Input */}
                            <div>
                                <label className="text-sm text-gray-600 block pt-2">🖼️ Ảnh đính kèm:</label>
                                <div className="flex items-center space-x-3">
                                    {(newItem.image) && (
                                        <img
                                            src={URL.createObjectURL(newItem.image as File)}
                                            alt="New lịch trình Image Preview"
                                            className="w-16 h-16 object-cover rounded-lg border border-gray-300 shadow-sm"
                                        />
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleNewItemImageChange}
                                        className="text-sm text-gray-600 file:flex file:py-1 file:px-3 file:cursor-pointer file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Description Input */}
                        <textarea
                            placeholder="Mô tả chi tiết..."
                            value={newItem.desc}
                            onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })}
                            className="w-full border p-2 rounded-md h-24 resize-none focus:ring-indigo-500 focus:border-indigo-500"
                        />

                        {/* Emojis */}
                        <CollapseSection size="small" title="Emojis" defaultOpen={false}>
                            <div className="flex flex-wrap max-h-48 overflow-y-auto p-1 border rounded-md">
                                {LOVE_TIMELINE_EMOJIS?.map((subItem, index) => (
                                    <div key={index} className="text-2xl cursor-pointer hover:scale-110 p-1" onClick={async () => {
                                        setNewItem({ ...newItem, desc: newItem.desc + subItem });
                                    }}>
                                        {subItem}
                                    </div>
                                ))}
                            </div>
                        </CollapseSection>

                        {/* Add Button */}
                        <button
                            onClick={handleAddItem}
                            className="w-full py-2 mt-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition font-medium"
                        >
                            Thêm vào lịch trình
                        </button>
                    </div>
                </div>
            </SimpleModal>
        </>
    )
}

export default memo(ScheduleSection)

const SimpleModal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
                <div className=" justify-between">
                    <div className="p-3 flex justify-between">
                        <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
                        <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700 p-1 
                        rounded-full hover:bg-gray-100 transition">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="p-4 pt-0">
                    {children}
                </div>
            </div>
        </div>
    );
};