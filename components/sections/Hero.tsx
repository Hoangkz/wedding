"use client"
import CountdownTimer from '@/components/CountdownTimer';
import { Heart } from '../Heart';

// Import font tùy chỉnh nếu cần (ví dụ: Google Fonts)
// Tuy nhiên, để đơn giản, ta dùng font hệ thống và class serif/cursive của Tailwind

const Hero = () => {
    return (
        <section id="/#" className='relative overflow-hidden' style={{
            backgroundImage: `url('/1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundSize: "cover",
        }}>

            <div className='min-h-screen flex items-center justify-center'
                style={{ backgroundColor: "rgba(97, 69, 44, 0.5)" }}
            >

                {/* 2. Lớp Overlay (Tạo độ tương phản cho chữ) */}
                <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

                {/* 3. Nội dung Chính */}
                <div className="relative z-20 text-center text-white p-4 md:p-8">

                    {/* Tên Cô dâu & Chú rể */}
                    <div className="couple-name wow fadeInUp">
                        <h1 className="wow fadeInLeft test" >Kiến Văn</h1>
                        <Heart />
                        <h1 className="wow fadeInRight test">Việt Hoài</h1>
                    </div>

                    <p className="text-xl font-light tracking-widest uppercase mb-8 opacity-75">
                        WE&#39;RE GETTING MARRIED
                    </p>

                    {/* 4. Đồng hồ Đếm ngược */}
                    <CountdownTimer />

                    {/* 5. Nút Xác nhận Tham dự */}
                    <button
                        className="mt-12 flex items-center justify-center mx-auto cursor-pointer
                               px-8 py-3 
                               bg-white/20 hover:bg-white/30 
                               text-white text-base md:text-lg 
                               rounded-full border border-white 
                               shadow-xl backdrop-blur-sm 
                               transition duration-300 ease-in-out hover:scale-[1.02]"
                        onClick={() => console.log('Xác nhận tham dự!')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        XÁC NHẬN THAM DỰ
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;