"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"
import FloatingHearts from "../FloatingIcons"
import { motion, AnimatePresence, Variants } from 'framer-motion'

// =========================================================
// 1. ĐỊNH NGHĨA VARIANTS CHO ANIMATION
// =========================================================

// Variants cho hiệu ứng chuyển ảnh trong Slideshow (trượt ngang)
const imageSlideshowVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95,
        transition: {
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    })
};

// Variants cho 5 ảnh ngoài Album (Trượt từ Phải sang Trái, xuất hiện lần lượt)
const itemFadeInRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1, // Stagger effect: delay tăng dần theo index
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1]
        }
    })
};


const WeddingAlbum = ({ images }: { images: string[] }) => {
    // =========================================================
    // 2. STATE VÀ REF
    // =========================================================
    const [showSlideshow, setShowSlideshow] = useState(false)
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)
    const thumbRef = useRef<HTMLDivElement>(null)
    const currentThumb = useRef<HTMLImageElement | null>(null)
    const [isCollapsed, setIsCollapsed] = useState(true)

    // =========================================================
    // 3. LOGIC XỬ LÝ
    // =========================================================

    useEffect(() => {
        if (currentThumb.current && thumbRef.current) {
            const thumb = currentThumb.current
            const container = thumbRef.current
            const offsetLeft = thumb.offsetLeft - container.offsetLeft
            const centerPosition = offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2
            container.scrollTo({ left: centerPosition, behavior: "smooth" })
        }
    }, [current])

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setShowSlideshow(false)
            } else if (e.key === "ArrowLeft") {
                handlePrev()
            } else if (e.key === "ArrowRight") {
                handleNext()
            }
        }

        if (showSlideshow) {
            document.body.style.overflow = "hidden"
            window.addEventListener("keydown", handleKeyDown)
        } else {
            document.body.style.overflow = "auto"
            window.removeEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.body.style.overflow = "auto"
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [showSlideshow, handlePrev, handleNext])

    useEffect(() => {
        if (showSlideshow) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [showSlideshow])


    return (
        <>
            <section
                id="album"
                className="relative overflow-hidden"
                style={{
                    backgroundImage: `url('/layout/album.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Biểu tượng bay quanh */}
                <FloatingHearts count={30} icons={["💰", "🎁", "💖", "✨"]} />

                {/* Overlay nền nhẹ */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

                <div className="relative z-10 py-30 px-6 md:px-12 text-center">
                    {/* Tiêu đề */}
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className=" test text-5xl md:text-6xl font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
                    >
                        Album Hình Cưới
                    </motion.h1>

                    {/* Dòng mô tả */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-gray-700 max-w-2xl mx-auto mb-12 mt-4 text-lg italic"
                    >
                        Hãy cùng chúng tôi lưu giữ những khoảnh khắc ngọt ngào, đầy yêu thương và hạnh phúc trong ngày trọng đại của đời mình 💖
                    </motion.p>

                    {/* --- Hiển thị 5 ảnh đầu với Animation (Kích thước được khôi phục) --- */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                        {images.slice(0, 5).map((src, i) => (
                            <motion.div
                                key={i}
                                variants={itemFadeInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                custom={i}
                                className="flex items-start"
                            >
                                <img
                                    src={src}
                                    alt={`wedding-${i}`}
                                    className="hover:scale-105 hover:opacity-80 rounded-2xl shadow-md object-contain max-h-[300px] cursor-pointer"
                                    onClick={() => {
                                        setShowSlideshow(true)
                                        setCurrent(i)

                                    }}
                                />
                            </motion.div>

                        ))}

                    </div>

                    {/* --- Nút xem thêm --- */}
                    {
                        images.length > 5 && (
                            <div className="flex justify-center mt-10">
                                <button
                                    onClick={() => {
                                        setShowSlideshow(true)
                                        setCurrent(0)
                                    }}
                                    className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-200 hover:scale-105 transition"
                                >
                                    Xem toàn bộ Album
                                </button>
                            </div>
                        )
                    }
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* PHẦN SLIDESHOW */}
            {/* -------------------------------------------------- */}
            {showSlideshow && (
                <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-[1000]" style={{ overflowY: "hidden" }}>
                    {/* --- Nút đóng --- */}
                    <button
                        onClick={() => setShowSlideshow(false)}
                        className="absolute top-5 right-6 bg-gradient-to-r
                            from-pink-400 to-rose-500 text-white p-3 rounded-full
                            shadow-xl backdrop-blur-md hover:scale-110 transition-all duration-300"
                        title="Đóng"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* --- Nút chuyển ảnh trái/phải --- */}


                    {/* Ảnh lớn */}

                    <img
                        src={images[current]}
                        alt="slideshow"
                        className=" max-h-[80vh] max-w-[90vw] rounded-2xl object-contain mb-6 shadow-2xl transition-all duration-300"
                    />

                    {/* --- Thanh thumbnail --- */}
                    {isCollapsed && (
                        <div
                            className="fixed bottom-[10px] left-1/2 -translate-x-1/2 flex items-center w-full max-w-[90vw] z-[1100]"
                        >
                            {/* Nút chuyển trái */}
                            <button
                                onClick={handlePrev}
                                className="cursor-pointer absolute left-0 bg-white/20 backdrop-blur-md text-white
                                    border border-white/30 p-3 rounded-full shadow-lg
                                    hover:bg-white/40 hover:scale-110 opacity-80 hover:opacity-100 transition-all duration-300"
                                title="Ảnh trước"
                            >
                                <ChevronLeft className="w-7 h-7" />
                            </button>

                            {/* Dải thumbnail */}
                            <div
                                ref={thumbRef}
                                className="flex gap-3 overflow-x-auto p-3 bg-black/40 rounded-xl mx-14
                                    scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-transparent scroll-smooth"
                                style={{
                                    scrollbarColor: "rgba(244,114,182,0.8) transparent",
                                    scrollbarWidth: "thin",
                                }}
                            >
                                {images.map((src, i) => (
                                    <img
                                        key={i}
                                        ref={i === current ? currentThumb : null}
                                        src={src}
                                        alt={`thumb-${i}`}
                                        onClick={() => setCurrent(i)}
                                        className={`h-16 w-16 object-cover rounded-md cursor-pointer border-2 transition ${i === current
                                            ? "border-pink-500 scale-110 shadow-lg"
                                            : "border-transparent opacity-70 hover:opacity-100"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Nút chuyển phải */}
                            <button
                                onClick={handleNext}
                                className="cursor-pointer absolute right-0 bg-white/20 backdrop-blur-md text-white border border-white/30 p-3 rounded-full shadow-lg
                                    hover:bg-white/40 hover:scale-110 opacity-80 hover:opacity-100 transition-all duration-300"
                                title="Ảnh sau"
                            >
                                <ChevronRight className="w-7 h-7" />
                            </button>
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className={`text-white hover:scale-105 w-8 h-8 flex items-center justify-center
                                        rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-80
                                        hover:opacity-100 absolute left-1/2 -translate-x-1/2 -top-1 bg-gray-500/40
                                        hover:bg-gray-500/70`}
                                title={isCollapsed ? "Ẩn dải ảnh" : "Hiện dải ảnh"}
                            >
                                <ChevronUp />
                            </button>

                        </div>
                    )}
                    {
                        !isCollapsed &&
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className={`text-white hover:scale-105 w-8 h-8 flex items-center justify-center
                                rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-80
                                hover:opacity-100 bg-gray-500/40 hover:bg-gray-500/70`}
                            title={isCollapsed ? "Ẩn dải ảnh" : "Hiện dải ảnh"}
                        >
                            <ChevronUp />
                        </button>
                    }
                </div>
            )}
        </>
    )
}

export default WeddingAlbum