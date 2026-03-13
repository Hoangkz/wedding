"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingHearts from "../FloatingIcons";

const QrCard = ({ data = {}, delay = 0 }: { data: any; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: delay, type: "spring", stiffness: 80 }}
      className="w-full max-w-[300] w-[80%] p-5 bg-white/95 rounded-3xl shadow-2xl border-t-8 border-pink-500 backdrop-blur-sm transition duration-500 hover:shadow-pink-400/50 hover:scale-[1.01]"
    >
      <h3
        className={`text-2xl font-['Playfair_Display'] font-bold mb-3 ${data?.title === "Nhà Trai" ? "text-indigo-600" : "text-rose-600"}`}
      >
        {data?.title}
      </h3>

      <div className="relative w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-lg group">
        {/* Lớp nền mờ nhẹ khi hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 z-10" />

        <Image
          src={data?.qrCodeUrl}
          alt={`QR Code ${data?.title}`}
          fill
          priority
          className="object-contain p-3 transform transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Overlay hướng dẫn quét */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="px-3 py-2 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-xl">
            Quét để chuyển khoản
          </span>
        </div>
      </div>

      <div className="text-left space-y-1 border-t border-gray-200 pt-3">
        <p className="text-lg font-semibold text-gray-800">{data.name}</p>
        <p className="text-gray-600 text-sm">
          <span className="font-bold text-pink-500 mr-1">STK:</span> {data.account}
        </p>
        <p className="text-gray-500 text-xs italic">
          <span className="font-bold text-pink-500 mr-1">NH:</span> {data.bank}
        </p>
      </div>

      <p className="text-center text-sm text-gray-500 italic mt-4 border-t pt-3 border-dotted">
        {data.note}
      </p>
    </motion.div>
  );
};

const WeddingGift = ({ weddingGift = {} }: { weddingGift: any }) => {
  return (
    <section
      id="gifts"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/layout/gifts')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FloatingHearts count={30} icons={["💰", "🎁", "💖", "✨"]} />

      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative z-10 py-30 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" test text-5xl md:text-6xl font-bold"
          style={{ color: "#DC143C" }}
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

        <div className="flex flex-wrap gap-10 justify-center items-center mb-4 ">
          <QrCard data={weddingGift.bride} delay={0.3} />

          <QrCard data={weddingGift.groom} delay={0.4} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto p-4 bg-white/70 rounded-xl shadow-inner italic text-base"
        >
          <span className="font-bold" style={{ color: "#DC143C" }}>
            Lưu ý:
          </span>{" "}
          Quý vị vui lòng điền nội dung chuyển khoản là &quot;Tên của Quý vị&quot; để cô dâu chú rể
          tiện gửi lời cảm ơn.
        </motion.p>
      </div>
    </section>
  );
};

export default WeddingGift;
