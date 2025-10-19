"use client"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { toast } from "react-toastify"

import CountdownTimer from "@/components/CountdownTimer"
import { appWeddingClient } from "@/lib/ApiClient"

import FloatingHearts from "../FloatingIcons"
import { Heart } from "../Heart"

const Hero = () => {
  const { id } = useParams()
  const accept = async () => {
    if (!id) {
      toast.warning(
        "Lỗi: Không thể xác nhận. Vui lòng đảm bảo bạn đang truy cập bằng đường dẫn thiệp mời đầy đủ!"
      )
      return
    }
    try {
      await appWeddingClient.acceptCustomer(id as string)
      toast.success("Xác nhận tham dự thành công!")
    } catch (error: any) {
      toast.warning(
        error?.response?.data?.error ||
          "Lỗi: Không thể xác nhận. Vui lòng đảm bảo bạn đang truy cập bằng đường dẫn thiệp mời đầy đủ!"
      )
    }
  }
  return (
    <section
      id="/#"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/layout/home.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover",
      }}
    >
      {/* Trái tim bay quanh */}
      <FloatingHearts count={30} icons={["❤️", "💕"]} />

      <div
        className="min-h-screen flex items-center justify-center relative"
        style={{ backgroundColor: "rgba(97, 69, 44, 0.5)" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

        <div className="relative z-20 text-center text-white p-4 md:p-8">
          <div className="couple-name flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.h1
              className="test text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              Kiến Văn
            </motion.h1>

            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Heart />
            </motion.div>

            <motion.h1
              className="test text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2 }}
            >
              Việt Hoài
            </motion.h1>
          </div>

          <motion.p
            className="text-xl font-light tracking-widest uppercase mb-8 opacity-75"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            WE&#39;RE GETTING MARRIED
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <CountdownTimer />
          </motion.div>

          <motion.button
            className="mt-12 flex items-center justify-center mx-auto cursor-pointer
                           px-8 py-3
                           bg-white/20 hover:bg-white/30
                           text-white text-base md:text-lg
                           rounded-full border border-white
                           shadow-xl backdrop-blur-sm
                           transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: [0.6, 1, 0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={accept}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            XÁC NHẬN THAM DỰ
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero
