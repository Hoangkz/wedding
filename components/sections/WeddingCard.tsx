"use client"

import { appWeddingClient } from "@/lib/ApiClient";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WeddingCard = () => {
  const [weddingInfo, setWeddingInfo] = useState({
    invitationText: "",
    bodyText: "",
    groomName: "",
    brideName: "",
    eventTimeLarge: "",
    eventDay: "",
    eventDate: "",
    eventMonthYear: "",
    lunarDate: "",
    venueType: "",
    venueAddress: "",
    welcomeMessage: "",
    googleMapsLink: "",
  })
  const { id } = useParams()
  const loadData = useCallback(async () => {
    if (!id) {
      return
    }
    try {
      const rs = await appWeddingClient.getInfo(id as string)
      console.log(rs.data)
      setWeddingInfo(rs.data)
    } catch {
      toast.warning("Không tìm thấy người dùng. Vui lòng truy cập bằng đường dẫn thiệp mời đầy đủ!")
    }
  }, [id])
  useEffect(() => {
    loadData()
  }, [id, loadData])

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
  }

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  }

  return (
    <section
      id="letter"
      className="relative overflow-hidden min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url('/layout/letter.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      <div className="py-18">
        <div className="relative z-10 py-6 px-6 w-full max-w-sm text-center bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="absolute inset-2 border border-gray-300 pointer-events-none rounded-lg"></div>

          {/* Tiêu đề */}
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg font-bold text-gray-800 tracking-wider mb-3"
          >
            {weddingInfo.invitationText}
          </motion.h2>

          {/* Đường kẻ chấm */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-b-2 border-dotted border-gray-400 w-1/2 mx-auto mb-4"
          ></motion.div>

          {/* Body Text */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm text-gray-700 leading-relaxed mb-5 uppercase font-medium"
          >
            {weddingInfo.bodyText.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </motion.p>

          {/* Tên cô dâu & chú rể */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-5"
          >
            <p className="test font-dancing-script text-xl text-rose-700 leading-tight">
              {weddingInfo.groomName}
            </p>
            <p className="font-playfair text-2xl text-gray-600 my-0.5">&</p>
            <p className="test font-dancing-script text-xl text-rose-700 leading-tight">
              {weddingInfo.brideName}
            </p>
          </motion.div>

          {/* Thời gian */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-base text-gray-700 mb-1 tracking-wider"
          >
            VÀO LÚC{" "}
            <span className="text-lg font-bold text-rose-700">{weddingInfo.eventTimeLarge}</span>
          </motion.p>

          {/* Ngày tháng */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center items-center gap-1 mb-2"
          >
            <span className="text-xs text-gray-700 uppercase font-bold tracking-wide border-b border-dotted border-gray-400 pb-0.5">
              {weddingInfo.eventDay}
            </span>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-700 text-white text-2xl font-bold shadow-md -mt-1.5">
              {weddingInfo.eventDate}
            </div>
            <span className="text-xs text-gray-700 uppercase font-bold tracking-wide border-b border-dotted border-gray-400 pb-0.5">
              {weddingInfo.eventMonthYear}
            </span>
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-xs text-gray-600 italic mb-2"
          >
            {weddingInfo.lunarDate}
          </motion.p>

          {/* Địa điểm */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left max-w-[280px] mx-auto mb-2"
          >
            <p className="font-dancing-script text-2xl text-rose-700 leading-tight">
              {weddingInfo.venueType}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {weddingInfo.venueAddress.split("\n").map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="font-dancing-script text-xl text-rose-700 "
          >
            {weddingInfo.welcomeMessage}
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-2"
          >
            <Link href={weddingInfo.googleMapsLink} target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer flex items-center justify-center mx-auto bg-rose-700 text-white text-xs font-bold py-1.5 px-4 rounded-full shadow-lg hover:bg-rose-800 transition duration-300 transform hover:scale-105">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                Chỉ Đường
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WeddingCard
