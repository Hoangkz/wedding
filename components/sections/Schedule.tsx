"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import FloatingHearts from "../FloatingIcons"

const WeddingEventsPage = ({ schedules }: { schedules: any[] }) => {
  const events = [
    {
      title: "Lễ Đính Hôn",
      date: "10:00 - 15/11/2025",
      address: "Nhà gái - TP. Huế",
      desc:
        "Buổi lễ đính hôn được tổ chức trong không khí thân mật, ấm cúng cùng sự hiện diện của gia đình hai bên.",
      image: "/engagement.jpg",
    },
    {
      title: "Lễ Thành Hôn",
      date: "08:00 - 30/11/2025",
      address: "Nhà trai - TP. Hồ Chí Minh",
      desc:
        "Khoảnh khắc thiêng liêng khi cô dâu và chú rể chính thức nên duyên vợ chồng, trước sự chứng kiến của người thân và bạn bè.",
      image: "/wedding.jpg",
    },
    {
      title: "Tiệc Cưới",
      date: "18:00 - 30/11/2025",
      address: "Trung tâm tiệc cưới White Palace, Q.Phú Nhuận",
      desc:
        "Bữa tiệc tràn ngập niềm vui, âm nhạc và lời chúc phúc dành cho đôi uyên ương trong ngày trọng đại.",
      image: "/party.jpg",
    },
  ]

  return (
    <section
      id="wedding-events"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/layout/wedding-events')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Biểu tượng bay quanh */}
      <FloatingHearts count={35} icons={["💖", "💍", "🌸", "🕊️", "✨"]} />

      {/* Overlay nền nhẹ */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative z-10 py-30 px-6 md:px-12 text-center">
        {/* Tiêu đề */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="test text-5xl md:text-6xl font-bold mb-1 font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          Lịch Trình Cưới
        </motion.h1>

        {/* Dòng mô tả */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg italic"
        >
          Cùng nhìn lại hành trình tình yêu được đánh dấu bằng những khoảnh khắc đáng nhớ trong ngày
          trọng đại của chúng tôi 💕
        </motion.p>

        {/* Danh sách sự kiện */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {schedules && schedules.map((event: any, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  width={64}
                  height={64}
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h2>
                <p className="text-pink-600 font-medium mb-1">{event.date}</p>
                <p className="text-blue-600 italic mb-3">{event.address}</p>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingEventsPage
