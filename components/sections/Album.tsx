// components/sections/Album.tsx
import React from 'react';
import { Camera } from 'lucide-react';

// Tạo mảng placeholder cho 9 ảnh
const photos = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/album/photo-${i + 1}.jpg`, // Cần tạo 9 ảnh placeholder trong public/images/album
    alt: `Wedding Photo ${i + 1}`,
}));

// Màu Đỏ/Hồng: #e32b42 (theme color)
const themeColor = 'text-[#e32b42]';
const themeBg = 'bg-[#e32b42]';

const Album: React.FC = () => {
    return (
        <section id="album" className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tiêu đề Section */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl sm:text-5xl font-bold mb-2 ${themeColor}`}>Photo Album</h2>
                    <p className="text-xl text-gray-600">Những khoảnh khắc đẹp nhất của chúng tôi</p>
                    <div className={`w-20 h-1 mx-auto mt-4 ${themeBg}`}></div>
                </div>

                {/* Grid Ảnh (3x3) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="relative aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                            // Trong thực tế, bạn sẽ thêm hàm mở lightbox tại đây
                            onClick={() => console.log(`Open Lightbox for Photo ${photo.id}`)}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
                                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nút Xem Thêm (nếu có nhiều ảnh) */}
                <div className="text-center mt-10">
                    <button
                        className={`py-3 px-8 rounded-full text-white font-semibold transition-all duration-300 ${themeBg} hover:bg-opacity-90 hover:shadow-lg`}
                    >
                        Tải Thêm Ảnh
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Album;