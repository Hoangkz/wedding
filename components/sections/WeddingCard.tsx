"use client"

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const WeddingCard = ({ data }: { data: any }) => {
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
    invitation: "",
    fatherGroom: "", // Thêm trường dữ liệu Cha chú rể
    motherGroom: "", // Thêm trường dữ liệu Mẹ chú rể
    fatherBride: "", // Thêm trường dữ liệu Cha cô dâu
    motherBride: "", // Thêm trường dữ liệu Mẹ cô dâu
  })
  useEffect(() => {
    setWeddingInfo({
      invitationText: data?.invitationText,
      bodyText: data?.bodyText,
      groomName: data?.groomName,
      brideName: data?.brideName,
      eventTimeLarge: data?.eventTimeLarge,
      eventDay: data?.eventDay,
      eventDate: data?.eventDate,
      eventMonthYear: data?.eventMonthYear,
      lunarDate: data?.lunarDate,
      venueType: data?.venueType,
      venueAddress: data?.venueAddress,
      welcomeMessage: data?.welcomeMessage,
      googleMapsLink: data?.googleMapsLink,
      invitation: data?.invitation,
      // Cập nhật các trường mới nếu có trong data
      fatherGroom: data?.fatherGroom,
      motherGroom: data?.motherGroom,
      fatherBride: data?.fatherBride,
      motherBride: data?.motherBride,
    })
  }, [data])

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
      className="relative overflow-hidden min-h-screen" // Đã chỉnh sửa layout cho phù hợp với 2 thiệp
      style={{
        backgroundImage: `url('/layout/letter')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm m-0"></div>
      <div className="p-4 py-20 flex flex-wrap items-center justify-center space-y-12 md:space-x-4 md:space-y-0">
        <div className="relative z-10 py-3 px-3 w-full max-w-sm text-center bg-white rounded-xl
        shadow-2xl border border-gray-200 overflow-hidden">
          <div className="absolute inset-2 border border-gray-300 pointer-events-none rounded-lg"></div>

          {/* Tiêu đề */}
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg font-bold text-gray-800 tracking-wider"
          >
            {weddingInfo.invitationText}
          </motion.h2>

          {/* Đường kẻ chấm */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-b-2  border-dotted border-gray-400 w-3/4 mx-auto mb-1"
          >
            <strong style={{ color: "blue", fontWeight: 400, fontStyle: "italic" }}>
              {weddingInfo?.invitation}
            </strong>
          </motion.div>

          {/* Body Text */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[280px] mx-auto text-sm text-gray-700 leading-relaxed mb-5 uppercase font-medium"
            style={{ lineHeight: 1.3 }}
          >
            <span className="block">
              {weddingInfo.bodyText}
            </span>
          </motion.p>

          {/* Tên cô dâu & chú rể */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-2"
          >
            <p className="test font-dancing-script text-rose-700">
              {weddingInfo.groomName}
            </p>
            <p className="font-playfair text-2xl text-gray-600 my-0.5">&</p>
            <p className="test font-dancing-script text-rose-700">
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
            className="flex justify-center items-center gap-1"
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
            className="text-left max-w-[280px] mx-auto"
          >
            <p className="test text-xl text-rose-700 leading-tight" style={{ fontSize: 28 }}>
              {weddingInfo.venueType}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {weddingInfo.venueAddress && <strong className="block text-center" style={{ fontWeight: 500, lineHeight: 1.1 }}>
                {weddingInfo.venueAddress}
              </strong>
              }
            </p>
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm italic"
          >
            <span style={{ fontWeight: 300 }}>
              {weddingInfo.welcomeMessage}
            </span>
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-2"
          >
            <Link href={weddingInfo.googleMapsLink || ""} target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer flex items-center
              justify-center mx-auto bg-rose-700 text-white text-xs
              font-bold py-1.5 px-4 rounded-full shadow-lg
              hover:bg-rose-800 transition duration-300 transform hover:scale-105">
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

        <div className="relative z-10 py-3 px-3 w-full max-w-sm text-center bg-white rounded-xl
        shadow-2xl border border-gray-200 overflow-hidden">
          <div className="absolute inset-2 border border-gray-300 pointer-events-none rounded-lg"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            // Chỉnh lại kích thước ảnh nhỏ hơn và dùng ảnh mẫu
            className="mx-auto w-34 h-34 rounded-full overflow-hidden 
            border-[2px] border-white shadow-[0_0_15px_rgba(0,0,0,0.1)] relative"
          >
            <img
              src={"/avatar/e01cxc"} // Thay đổi nếu bạn có ảnh icon riêng
              alt={"Avatar"}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Tiêu đề: TRÂN TRỌNG KÍNH MỜI */}
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-xl font-bold text-gray-800 tracking-wider"
          >
            TRÂN TRỌNG KÍNH MỜI
          </motion.h2>

          {/* Đường kẻ chấm */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="border-b-2 border-dotted border-gray-400 w-3/4 mx-auto mb-1"
          >
            <strong style={{ color: "blue", fontWeight: 400, fontStyle: "italic" }}>
              {weddingInfo?.invitation || ""}
            </strong>
          </motion.div>

          {/* Body Text: TỚI DỰ LỄ THÀNH HÔN CỦA 2 ... CHÚNG TÔI */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-[280px] mx-auto text-sm text-gray-700 leading-relaxed uppercase font-medium"
          >
            <span className="block" style={{ lineHeight: 1.3 }}>
              TỚI DỰ LỄ THÀNH HÔN
              <br />
              CỦA HAI CHÚNG TÔI
            </span>
          </motion.p>
          {/* Thời gian và Ngày tháng */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-base text-gray-700 tracking-wider"
          >
            VÀO LÚC{" "}
            <span className="text-lg font-bold text-rose-700">{weddingInfo.eventTimeLarge}</span>
            , CHỦ NHẬT
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-bold text-rose-700"
          >
            {`${weddingInfo.eventDate}.${weddingInfo.eventMonthYear}`}
          </motion.div>

          {/* Ngày âm lịch */}
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-xs text-gray-600 italic mb-2"
          >
            {weddingInfo.lunarDate}
          </motion.p>

          {/* Địa điểm chính: Tại Tư Gia Nhà Trai */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mx-auto max-w-[280px]"
          >
            <p className="test text-rose-700" style={{ fontSize: 28 }}>
              Tại Tư Gia Nhà Trai
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {weddingInfo.venueAddress && <strong className="block text-center" style={{ fontWeight: 500, lineHeight: 1.1 }}>
                {weddingInfo.venueAddress}
              </strong>
              }
            </p>
          </motion.div>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm italic"
          >
            <span style={{ fontWeight: 300, lineHeight: 1.1 }}>
              Sự hiện diện của Quý vị
              <br />
              là niềm vinh hạnh cho gia đình chúng tôi!
            </span>
          </motion.p>  {/* Lời mời */}

          {/* Thông tin Cha Mẹ, Cô dâu Chú rể */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-around text-xs mt-1"
          >
            <div className="text-gray-800 text-center">
              <p className="font-bold">Nhà Trai</p>
              <p className="font-bold">Ông: {weddingInfo.fatherGroom}</p>
              <p className="font-bold">Bà: {weddingInfo.motherGroom}</p>
              <p className="mt-1 italic fontfamily">Chú rể: <span >{weddingInfo.groomName}</span></p>
            </div>
            <div className="text-gray-800 text-center ">
              <p className="font-bold">Nhà Gái</p>
              <p className="font-bold">Ông: {weddingInfo.fatherBride}</p>
              <p className="font-bold">Bà: {weddingInfo.motherBride}</p>
              <p className="mt-1 italic fontfamily" >Cô dâu: <span>{weddingInfo.brideName}</span></p>
            </div>
          </motion.div>

        </div>
      </div>
    </section >
  )
}

export default WeddingCard