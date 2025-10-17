// components/sections/Story.tsx
import React from 'react';
import { Heart, Flower2, AArrowDown, Home, Quote } from 'lucide-react';
import { Heart1, Heart2 } from '../Heart';
import Image from 'next/image';

interface StoryEvent {
    year: number;
    title: string;
    description: string;
    Icon: React.ElementType;
    alignment: 'left' | 'right';
}

const storyEvents: StoryEvent[] = [
    {
        year: 2018,
        title: 'Lần đầu gặp gỡ',
        description: 'Chúng tôi tình cờ gặp nhau tại một buổi tiệc sinh nhật của người bạn chung. Tình yêu sét đánh từ cái nhìn đầu tiên!',
        Icon: Heart,
        alignment: 'right',
    },
    {
        year: 2019,
        title: 'Hẹn hò chính thức',
        description: 'Sau nhiều tháng tìm hiểu, chúng tôi chính thức trở thành một cặp. Những buổi hẹn hò lãng mạn bắt đầu.',
        Icon: Flower2,
        alignment: 'left',
    },
    {
        year: 2021,
        title: 'Lời cầu hôn lãng mạn',
        description: 'Anh ấy quỳ gối dưới ánh nến và nói lời cầu hôn lãng mạn nhất. Cô ấy đã nói "Em đồng ý!".',
        Icon: AArrowDown,
        alignment: 'right',
    },
    {
        year: 2022,
        title: 'Ngày cưới hạnh phúc',
        description: 'Một chương mới được mở ra. Chúng tôi sẽ cùng nhau xây dựng tổ ấm và đồng hành suốt cuộc đời.',
        Icon: Home,
        alignment: 'left',
    },
];

// Màu Đỏ/Hồng: #e32b42 (theme color)
const themeColor = 'text-[#e32b42]';
const themeBg = 'bg-[#e32b42]';

const Story: React.FC = () => {
    return (
        <section id="story" style={{
            backgroundImage: `url('/3.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundSize: "cover",
        }}>
            <div className="py-20 lg:py-32 bg-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>

                <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tiêu đề Section */}
                    <div className="text-center mb-4">
                        <div className="flex justify-center items-center">
                            <h1 className="test text-xl md:text-2xl text-center" style={{ fontSize: 55 }}>Chuyện Tình Yêu</h1>
                        </div>

                        <Heart1 />
                        <div style={{ width: "100", display: "flex", justifyContent: 'center' }}>
                            <Image src="/4.png" width={100} height={100} alt="vector-img"></Image>
                        </div>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Đường dọc chính giữa */}
                        <div className="absolute 
                            /* Căn giữa cho màn hình lớn (md trở lên) */
                            md:left-1/2 
                            md:transform 
                            md:-translate-x-1/2 
                            md:w-1 md:h-full md:bg-gray-200 
                            md:block 

                            /* Căn chỉnh cho màn hình nhỏ (mặc định) */
                            left-[20px] 
                            w-0.5 /* Hoặc w-1 tùy ý bạn */
                            h-full 
                            bg-gray-200 
                            block
                        ">
                        </div>
                        {storyEvents.map((event, index) => (
                            <div key={index} className='relative'>
                                < div
                                    className={`mb-8 flex justify-end md:justify-between items-center w-full 
                                    ${event.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                    {/* Nội dung (Chiếm 45%) */}
                                    <div className="w-full md:w-5/12 relative" style={{ maxWidth: "80%" }}>
                                        <div
                                            className={`
                                                absolute top-5 h-0 w-0 border-solid border-transparent
                                                border-t-[16px] border-b-[16px]
                                                border-r-[18px] border-r-white left-[-16px]  // Mặc định (mobile): mũi tên bên trái
                                                ${event.alignment === "right" ?
                                                    "md:border-r-[18px] md:border-r-white md:left-[-16px] md:border-l-0 md:right-auto" :
                                                    "md:border-l-[18px] md:border-l-white md:right-[-16px] md:border-r-0 md:left-auto"}
                                            `}
                                        ></div>
                                        <div
                                            className={`p-4 rounded-lg shadow-lg ${event.alignment === 'right' ? 'md:text-right' : 'md:text-left'} 
                                        bg-gray-50 hover:shadow-xl transition-shadow duration-300`}
                                        >
                                            <h3 style={{
                                                textTransform: "capitalize",
                                                fontFamily: "Great Vibes, cursive"
                                            }} className={`text-3xl font-bold mb-2 ${themeColor}`}>{event.title}</h3>
                                            <p className="text-gray-700 text-justify">{event.description}</p>
                                        </div>
                                    </div>

                                    {/* Dấu chấm và Icon (Chiếm 10%) - Chỉ hiển thị trên Desktop */}
                                    <div className="hidden md:flex flex-col items-center w-2/12">
                                        {/* Dấu chấm tròn */}
                                        <div className={`w-8 h-8 rounded-full ${themeBg} flex items-center justify-center shadow-lg`}>
                                            <event.Icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                </div>

                                {/* Năm - Hiện trên Desktop (Bên ngoài khối nội dung) */}
                                <div className='hidden md:block w-full absolute top-0'>
                                    <div className={`hidden md:block py-1 px-3 rounded-full text-white text-lg font-bold `}>
                                        <Heart2 />
                                    </div>
                                </div>
                                <div className='w-30 absolute left-[-39] md:hidden top-0'>
                                    <div className={`py-1 px-3 rounded-full text-white text-lg font-bold `}>
                                        <Heart2 />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                    {/* Kết thúc Timeline bằng một khối Quote */}
                    <div className="mt-16 text-center max-w-2xl mx-auto">
                        <Quote className={`w-10 h-10 mx-auto mb-4 ${themeColor}`} />
                        <p className="text-2xl italic text-gray-800">
                            Chúng tôi đã sẵn sàng cho hành trình vạn dặm tiếp theo của cuộc đời mình!
                        </p>
                    </div>

                </div>
            </div >
        </section >
    );
};

export default Story;