"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { useState } from "react"
import FloatingHearts from "../FloatingIcons"

const UserIcon = () => (
  <svg
    className="w-5 h-5 text-pink-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </svg>
)
const MessageIcon = () => (
  <svg
    className="w-5 h-5 text-pink-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    ></path>
  </svg>
)
const SendIcon = () => (
  <svg
    className="w-5 h-5 ml-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    ></path>
  </svg>
)

type Wish = {
  id: number
  name: string
  desc: string
  updatedAt: string
}

const getMockTime = () => {
  const now = new Date()
  const minutesAgo = Math.floor(Math.random() * 60)
  now.setMinutes(now.getMinutes() - minutesAgo)
  return now.toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
}

const WeddingWishes = ({ initialWishes }: { initialWishes: any[] }) => {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes || [])
  const [name, setName] = useState("")
  const [desc, setdesc] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !desc.trim()) {
      setSubmitError("Vui lòng điền đầy đủ Tên và Lời chúc.")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
      const newWish: Wish = {
        id: Date.now(),
        name: name.trim(),
        desc: desc.trim(),
        updatedAt: getMockTime(),
      }

      setWishes([newWish, ...wishes])
      setName("")
      setdesc("")
    } catch {
      setSubmitError("Gửi lời chúc thất bại. Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  }

  return (
    <section
      id="wishes"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/layout/wishes')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Biểu tượng bay quanh */}
      <FloatingHearts count={35} icons={["💖", "💍", "🌸", "🕊️", "✨"]} />

      {/* Overlay nền nhẹ */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative z-10 py-30 px-6 md:px-12 text-center">
        {/* Tiêu đề - Giảm kích thước chữ */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" test text-5xl md:text-6xl font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Sổ Lưu Bút
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg italic"
        >
          Hạnh phúc là có những người thân yêu cùng chứng kiến ngày trọng đại!
        </motion.p>

        {/* Khu vực chính - Form và Danh sách lời chúc */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Form gửi lời chúc - Gọn gàng hơn */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-5/12 bg-white rounded-2xl p-6 shadow-2xl border border-pink-100 backdrop-blur-sm lg:sticky lg:top-10"
          >
            <h2 className="text-2xl font-bold text-pink-600 mb-6 font-['Playfair_Display']">
              Gửi Lời Chúc Yêu Thương
            </h2>

            {/* Input Group: Tên */}
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon />
              </div>
              <input
                type="text"
                placeholder="Tên của bạn"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setSubmitError(null)
                }}
                disabled={isSubmitting}
                className="w-full border border-pink-200 rounded-lg p-2.5 pl-11 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder:italic text-sm"
              />
            </div>

            {/* Input Group: Lời chúc - Giảm chiều cao */}
            <div className="mb-4 relative">
              <div className="absolute top-3 left-0 flex items-start pl-3">
                <MessageIcon />
              </div>
              <textarea
                placeholder="Lời chúc chân thành nhất..."
                value={desc}
                onChange={(e) => {
                  setdesc(e.target.value)
                  setSubmitError(null)
                }}
                disabled={isSubmitting}
                className="w-full border border-pink-200 rounded-lg p-2.5 pl-11 h-28 resize-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder:italic text-sm"
              />
            </div>

            {/* Thông báo lỗi */}
            {submitError && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-xs mb-4 bg-red-50 p-2 rounded border border-red-200"
              >
                ❌ {submitError}
              </motion.p>
            )}

            {/* Nút Gửi */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white font-bold text-base py-2.5 rounded-full shadow-lg transition duration-300 transform flex items-center justify-center ${isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-rose-500 to-pink-600 hover:shadow-pink-400/50 hover:scale-[1.02]"
                }`}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <SendIcon />
              )}
              {isSubmitting ? "Đang gửi..." : "Gửi lời chúc"}
            </button>
          </motion.form>

          {/* Danh sách lời chúc - GIỚI HẠN HEIGHT VÀ THÊM SCROLL */}
          <motion.div className="w-full lg:w-7/12 flex flex-col gap-4 text-left">
            {/* Container giới hạn chiều cao và cuộn */}
            <div className="max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence>
                {wishes && wishes.length === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg italic"
                  >
                    Hãy là người đầu tiên gửi lời chúc tới cô dâu, chú rể! ✨
                  </motion.p>
                )}

                {wishes.map((wish) => (
                  <motion.div
                    key={wish.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit={{ opacity: 0, height: 0, margin: 0 }}
                    className="bg-white/95 p-5 mb-4 rounded-xl shadow-lg border-l-4 border-pink-400/80 
                                        backdrop-blur-sm transition duration-300 hover:shadow-xl hover:scale-[1.005] flex flex-col"
                  >
                    <p className="text-gray-800 text-base italic mb-3 leading-relaxed">
                      &ldquo;{wish.desc}&rdquo;
                    </p>

                    <div className="flex justify-between items-center border-t border-pink-100 pt-2 mt-auto">
                      <p className="text-pink-600 font-bold text-sm tracking-wider">
                        — {wish.name}
                      </p>
                      <p className="text-stone-400 text-xs italic">{wish.updatedAt}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Thêm style cho thanh cuộn (dành cho Tailwind CSS custom utility) */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f472b6; /* pink-400 */
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fbcfe8; /* pink-100 */
          border-radius: 3px;
        }
      `}</style>
    </section>
  )
}

export default WeddingWishes
