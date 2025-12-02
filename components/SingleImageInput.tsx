"use client"
import { appWeddingClient } from "@/lib/ApiClient";
import { useEffect, useState } from "react";

interface SingleImageInputProps {
    label: string;
    fileUrl: string | null;
}

export const SingleImageInput: React.FC<SingleImageInputProps> = ({ label, fileUrl }) => {
    const [isUploading, setIsUploading] = useState(false);

    const [previewUrl, setPreviewUrl] = useState<string | null>(fileUrl);

    useEffect(() => {

        if (fileUrl !== previewUrl && fileUrl && !previewUrl?.startsWith('blob:')) {
            setPreviewUrl(fileUrl);
        }

        return () => {
            if (previewUrl && previewUrl.startsWith('blob:')) {
                URL.revokeObjectURL(previewUrl);

            }
        };

    }, [fileUrl, previewUrl]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileToUpload = e.target.files ? e.target.files[0] : null;
        if (!fileToUpload) return;

        const newPreviewUrl = URL.createObjectURL(fileToUpload);
        setPreviewUrl(newPreviewUrl);

        setIsUploading(true);
        try {

            const base64DataUrl = await fileToBase64(fileToUpload);

            await appWeddingClient.uploadFileBackgroundImage(
                {
                    image: base64DataUrl,
                    label: label
                });

        } catch (error) {
            console.error("Lỗi khi tải lên ảnh:", error);
            alert(`Lỗi khi tải lên ${label}. Vui lòng kiểm tra console.`);

        } finally {
            setIsUploading(false);

            e.target.value = '';
        }
    };

    return (
        <div className="flex flex-col space-y-1 lg:col-span-1">
            <label className="font-semibold text-gray-700 text-sm flex items-center">
                {label} {isUploading && <span className="ml-2 text-indigo-500 animate-pulse">(Đang tải...)</span>}
            </label>
            <div className={`flex items-center space-x-4 rounded-lg border p-3 ${isUploading ? 'bg-indigo-50' : 'bg-gray-50'}`}>
                {/* Dùng previewUrl đã được quản lý */}
                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt={`${label} Preview`}
                        className="w-20 h-20 object-cover border-2 border-indigo-400 rounded-lg shadow-md bg-white p-1"
                    />
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={isUploading}
                    className="block w-full text-sm text-gray-600 file:mr-4
             file:py-2 file:px-2 file:cursor-pointer file:flex file:rounded-full file:border-0 
             file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 
             hover:file:bg-blue-200 transition-colors cursor-pointer disabled:opacity-50"
                />
            </div>
        </div>
    );
};

export const fileToBase64 = (file: File): Promise<string> => {

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};

export interface MediaData {
    heroImage: string | null;
    weddingCardImage: string | null;
    coupleMainImage: string | null;
    storyBackgroundImage: string | null;
    albumBackgroundImage: string | null;
    storyTimeline: TimelineItem[];
    weddingAlbumImages: string[];
    weddingWishesImage: string | null;
    weddingGiftQR: string | null;
}

export interface TimelineItem {
    id: string;
    title: string;
    description: string;
    image: string | File | null;
}

export const MOCK_USER_ID = "iimXFJ62U6uELC-QyMZWF";