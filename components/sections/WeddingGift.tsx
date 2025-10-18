"use client"

import { motion } from "framer-motion"
import FloatingHearts from "../FloatingIcons" // Giữ nguyên component hiệu ứng
import { weddingInfo } from "@/lib/values"

// Dữ liệu mô phỏng QR và thông tin chuyển khoản (Giữ nguyên)

const QrCard = ({ data, delay }: { data: typeof weddingInfo.groom, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: delay, type: "spring", stiffness: 80 }}
            // THAY ĐỔI QUAN TRỌNG: Đặt max-width cụ thể là 300px trên màn hình lớn
            className="w-full max-w-[300] w-[80%] p-5 bg-white/95 rounded-3xl shadow-2xl border-t-8 border-pink-500 backdrop-blur-sm transition duration-500 hover:shadow-pink-400/50 hover:scale-[1.01]"
        >
            {/* Tiêu đề nhà */}
            <h3 className={`text-2xl font-['Playfair_Display'] font-bold mb-3 ${data.title === 'Nhà Trai' ? 'text-indigo-600' : 'text-rose-600'}`}>
                {data.title}
            </h3>

            {/* Mã QR */}
            <div className="relative w-full aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3 border-4 border-white shadow-inner group">
                <img
                    src={data.qrCodeUrl}
                    alt={`QR Code ${data.title}`}
                    className="w-full h-full object-cover p-2 transform group-hover:scale-[1.03] transition duration-500"
                />
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="p-1.5 bg-black/70 rounded text-xs">Quét để chuyển khoản</span>
                </div>
            </div>

            {/* Thông tin chuyển khoản */}
            <div className="text-left space-y-1 border-t border-gray-200 pt-3">
                <p className="text-lg font-semibold text-gray-800">
                    {data.name}
                </p>
                <p className="text-gray-600 text-sm">
                    <span className="font-bold text-pink-500 mr-1">STK:</span> {data.account}
                </p>
                <p className="text-gray-500 text-xs italic">
                    <span className="font-bold text-pink-500 mr-1">NH:</span> {data.bank}
                </p>
            </div>

            {/* Lời cảm ơn nhỏ */}
            <p className="text-center text-sm text-gray-500 italic mt-4 border-t pt-3 border-dotted">{data.note}</p>
        </motion.div>
    )
}

const WeddingGift = () => {
    return (
        <section
            id="gifts"
            className="relative overflow-hidden"
            style={{
                backgroundImage: `url('/layout/gifts.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Biểu tượng bay quanh */}
            <FloatingHearts count={30} icons={["💰", "🎁", "💖", "✨"]} />

            {/* Overlay nền nhẹ */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

            <div className="relative z-10 py-30 px-6 md:px-12 text-center">

                {/* Tiêu đề chính - Đã sửa lỗi lồng thẻ và tối ưu hóa CSS */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" test text-5xl md:text-6xl font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Mừng Cưới
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-gray-700 max-w-2xl mx-auto mb-4 text-lg italic"
                >
                    Sự hiện diện của Quý vị là món quà quý giá nhất!
                </motion.p>



                {/* Khu vực 2 Thẻ QR */}
                <div className="flex flex-wrap gap-10 justify-center items-center mb-4 ">

                    {/* Thẻ QR Nhà Trai */}
                    <QrCard data={weddingInfo.groom} delay={0.3} />

                    {/* Thẻ QR Nhà Gái */}
                    <QrCard data={weddingInfo.bride} delay={0.4} />

                </div>

                {/* Ghi chú chung */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-700 max-w-2xl mx-auto p-4 bg-white/70 rounded-xl shadow-inner italic text-base"
                >
                    <span className="font-bold text-pink-600">Lưu ý:</span> Quý vị vui lòng điền nội dung chuyển khoản là &quot;Tên của Quý vị&quot; để cô dâu chú rể tiện gửi lời cảm ơn.
                </motion.p>
            </div>
        </section>
    )
}

export default WeddingGift