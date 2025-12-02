"use client"
import { CollapseSection } from "@/components/CollapseSection";
import { appWeddingClient } from "@/lib/ApiClient";
import { toBase64 } from "@/lib/utils";
import { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";

const MultiImageSection = () => {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        appWeddingClient.getAlbum().then(e => setImages(e.data))
    }, [])

    const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;
        const images = await Promise.all(files.map(e => toBase64(e)))
        try {
            const rs = await appWeddingClient.createFileAlbum(images)
            e.target.value = '';
            setImages((e) => {
                return [...e, ...rs.data]
            })
            toast.success("Thêm file album thành công!")
        } catch {
            toast.error("Thêm file album thất bại!")
        }
    }

    const handleRemoveImage = async (fileName: string) => {
        try {
            await appWeddingClient.deleteFileAlbum(fileName);
            const newImages = images.filter(e => e !== fileName);
            setImages(newImages);
            toast.success("Xoá file album thành công!")
        } catch {
            toast.error("Xoá file album thất bại!")
        }
    }

    return <CollapseSection title="2. Trang Album Cưới" defaultOpen={false}>
        <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Ảnh chi tiết ({images.length} ảnh)</h3>

            <div className="flex flex-wrap gap-3 max-h-60 overflow-y-auto p-2 border rounded-lg bg-gray-50">
                {images.length === 0 && <p className="text-sm text-gray-500 w-full text-center py-4">Chưa có ảnh nào.</p>}
                {images.map((url, index) => (
                    <div key={index} className="relative w-24 h-24">
                        <img
                            src={url}
                            alt={`Ảnh ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg border-2 border-gray-300"
                        />
                        <button
                            onClick={() => handleRemoveImage(url)}
                            className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full w-6 h-6 text-xs font-bold hover:bg-red-600 transition-colors shadow-md"
                            aria-label={`Xóa ảnh ${index + 1}`}
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>

            <label className="block text-sm font-medium text-gray-700 mt-2">Thêm ảnh mới:</label>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleAddImage}
                className="block w-full text-sm text-gray-600 file:mr-4
                    file:py-2 file:px-2 file:cursor-pointer file:rounded-lg file:border-0 
                    file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 
                    hover:file:bg-green-200 transition-colors cursor-pointer"
            />
        </div>
    </CollapseSection>
}

export default memo(MultiImageSection)