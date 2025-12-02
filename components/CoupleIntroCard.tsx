"use client"
import { motion } from "framer-motion"
import React from "react"

type CoupleIntroCardProps = {
  type: string
  name: string
  imageSrc: string
  fatherName: string
  motherName: string
  bio: string
}

const CoupleIntroCard: React.FC<CoupleIntroCardProps> = ({
  type,
  name,
  imageSrc,
  fatherName,
  motherName,
  bio,
}) => {
  const isBride = type === "bride"
  const accentColor = isBride ? "from-rose-400 to-rose-600" : "from-sky-400 to-blue-600"
  const title = isBride ? "CÔ DÂU" : "CHÚ RỂ"

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`m-4 relative 
        w-full 
        max-w-sm sm:max-w-md 
        lg:w-[44%]
        p-6 rounded-3xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/30 
        flex-shrink-0`}    >
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${accentColor} opacity-30 blur-xl`}
      ></div>

      <div className="relative z-10 text-center text-gray-800">

        <h2
          className={`text-lg md:text-xl font-semibold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${accentColor}`}
        >
          {title}
        </h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[6px] border-white shadow-[0_0_25px_rgba(0,0,0,0.15)] mb-6 relative"
        >
          {imageSrc && <img
            src={imageSrc}
            alt={name}
            className="object-cover"
          // sizes="(max-width: 768px) 100vw, 33vw"
          />
          }
          <div className="absolute inset-0 rounded-full ring-2 ring-white/70 ring-offset-4 ring-offset-transparent"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="test  text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "azure" }}
        >
          {name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed"
        >
          <p>
            Ông: <strong className="font-medium">{fatherName}</strong>
          </p>
          <p>
            Bà: <strong className="font-medium">{motherName}</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 1 }}
          className={`text-base font-light leading-relaxed text-justify px-2 md:px-6 ${isBride ? "text-rose-700" : "text-blue-700"
            }`}
        >
          {bio}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`mt-6 mx-auto w-2/3 h-[2px] bg-gradient-to-r ${accentColor} rounded-full origin-left`}
        ></motion.div>
      </div>
    </motion.div>
  )
}

export default CoupleIntroCard
