// components/CoupleIntroCard.jsx
import React from 'react';
import Image from 'next/image';

type CoupleIntroCardProps = {
    type: string;
    name: string;
    imageSrc: string;
    fatherName: string;
    motherName: string;
    bio: string;
};

const CoupleIntroCard: React.FC<CoupleIntroCardProps> = ({
    type,
    name,
    imageSrc,
    fatherName,
    motherName,
    bio
}) => {
    // 1. Cấu hình màu sắc & nội dung dựa trên 'type'
    const isBride = type === 'bride';
    const bgColor = isBride ? 'bg-red-500' : 'bg-blue-400'; // Màu Đỏ và Xanh Teal/Blue
    const title = isBride ? 'CÔ DÂU' : 'CHÚ RỂ';

    // Font chữ viết tay/hoa mỹ (Bạn cần import font tùy chỉnh để đạt hiệu ứng tốt nhất)

    return (
        <div className={`w-full max-w-sm md:max-w-md lg:w-1/2 p-3 shadow-xl ${bgColor}`} >
            <div className="text-center text-white pb-6">

                {/* Tiêu đề CÔ DÂU / CHÚ RỂ */}
                <h2 className=" text-xl md:text-2xl font-bold uppercase tracking-widest mb-4 border-b border-white/50 pb-2" >
                    {title}
                </h2>

                {/* Khung Ảnh */}
                <div className="mx-auto w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    {/* Sử dụng Next.js Image để tối ưu hóa, đảm bảo ảnh nằm trong thư mục public */}
                    <Image
                        src={imageSrc}
                        alt={name}
                        width={224} // Kích thước cố định cho ảnh 56x56
                        height={224}
                        objectFit="cover"
                        className="w-full h-full"
                    />
                </div>

                {/* Tên Chính (Kiểu chữ viết tay) */}
                <h1 className="text-4xl md:text-5xl font-serif mb-4 test " style={{ fontSize: 55 }}>
                    {name}
                </h1>

                {/* Tên Phụ huynh */}
                <div className="text-sm md:text-base font-light mb-3">
                    <p>
                        Ông: <strong>
                            {fatherName}
                        </strong>
                    </p>
                    <p>
                        Bà: <strong>
                            {motherName}
                        </strong>
                    </p>
                </div>

                {/* Tiểu sử */}
                <div className="text-base font-light leading-relaxed text-justify px-2 md:px-4">
                    {bio}
                </div>
            </div>
        </div >
    );
};

export default CoupleIntroCard;