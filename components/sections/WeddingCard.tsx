"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
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
    fatherGroom: "",
    motherGroom: "",
    fatherBride: "",
    motherBride: "",
  });

  useEffect(() => {
    if (data) {
      setWeddingInfo({ ...data });
    }
  }, [data]);

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="letter"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-stone-100"
      style={{
        backgroundImage: `url('/layout/letter')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay lớp phủ mịn hơn */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 backdrop-blur-[2px]"></div>

      <div
        className="relative z-10 container mx-auto px-4 py-16 flex flex-col md:flex-row items-center
       justify-center gap-8 lg:gap-12 space-y-6 md:space-y-0"
      >
        {/* THIỆP 1: THIỆP MỜI (Phía Trái) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className="relative w-full max-w-[380px] bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50"
        >
          {/* Họa tiết trang trí góc */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-rose-200 rounded-tl-lg"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-rose-200 rounded-br-lg"></div>

          <motion.div variants={fadeIn} className="text-center space-y-4">
            <h2 className="text-sm tracking-[0.3em] font-light text-gray-500 uppercase italic">
              {"Trân trọng kính mời"}
            </h2>

            <div className="py-2">
              <span className="text-rose-800 font-serif italic text-xl border-b border-rose-200 px-6">
                Bạn
              </span>
            </div>

            <p className="text-xs tracking-widest text-gray-600 uppercase leading-relaxed">
              {weddingInfo.bodyText}
            </p>

            <div>
              <h3 className="test font-dancing-script text-4xl mb-2" style={{ color: "#DC143C" }}>
                {weddingInfo.groomName}
              </h3>
              <span className="font-playfair text-xl text-stone-400">&</span>
              <h3 className="test font-dancing-script text-4xl mt-2" style={{ color: "#DC143C" }}>
                {weddingInfo.brideName}
              </h3>
            </div>

            <div className="space-y-2 border-y border-stone-100 ">
              <p className="text-sm font-medium tracking-widest">
                VÀO LÚC <span className="text-xl font-serif text-rose-800">10:00</span>
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-8 bg-stone-300"></div>
                <div className="text-center">
                  <p className="text-[16px] uppercase tracking-tighter text-stone-500">Chủ Nhật</p>
                  <p className="text-3xl font-serif font-bold text-stone-800">22</p>
                  <p className="text-[16px] uppercase tracking-tighter text-stone-500">Tháng 03</p>
                </div>
                <div className="h-[1px] w-8 bg-stone-300"></div>
              </div>
              <p className="text-[11px] text-stone-400 italic">Tức ngày 04/02 Năm Bính Ngọ</p>
            </div>

            <p className="text-sm font-light italic text-stone-600 pt-4 lg:pt-6 leading-relaxed">
              {weddingInfo.welcomeMessage}
            </p>
          </motion.div>
        </motion.div>

        {/* THIỆP 2: THÔNG TIN CHI TIẾT (Phía Phải) */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full max-w-[380px] bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-100"
        >
          {/* Avatar trang trí */}
          <div className="flex justify-center -mt-16 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden"
            >
              <Image
                src={"/avatar.jpg"}
                alt="Wedding"
                fill
                className="object-cover"
                unoptimized={true}
              />
            </motion.div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-lg font-serif font-bold tracking-wider text-stone-800">
              TRÂN TRỌNG KÍNH MỜI
            </h2>
            <div className="py-2">
              <span className="text-rose-800 font-serif italic text-xl border-b border-rose-200 px-6">
                Bạn
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Đến dự lễ thành hôn
              </p>
              <p className="text-lg font-serif italic text-rose-800">Của hai chúng tôi</p>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl space-y-2">
              <p className="text-sm tracking-widest uppercase text-stone-600">Thời gian</p>
              <p className="text-xl font-bold text-stone-800">13:10 — 22.03.2026</p>
              <p className="text-[10px] text-stone-400 italic font-light">
                Sự hiện diện của Quý vị là niềm vinh hạnh cho gia đình!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-rose-900 border-b border-rose-100 pb-1 mb-2">
                  Nhà Trai
                </p>
                <p className="text-[11px] leading-tight">
                  Ông: <strong>{weddingInfo.fatherGroom}</strong>
                </p>
                <p className="text-[11px] leading-tight pb-2">
                  Bà: <strong>{weddingInfo.motherGroom}</strong>
                </p>
                <p className="text-[10px] italic text-stone-500">Chú rể:</p>
                <p className="text-sm font-bold text-rose-700">{weddingInfo.groomName}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-rose-900 border-b border-rose-100 pb-1 mb-2">
                  Nhà Gái
                </p>
                <p className="text-[11px] leading-tight">
                  Ông: <strong>{weddingInfo.fatherBride}</strong>
                </p>
                <p className="text-[11px] leading-tight pb-2">
                  Bà: <strong>{weddingInfo.motherBride}</strong>
                </p>
                <p className="text-[10px] italic text-stone-500">Cô dâu:</p>
                <p className="text-sm font-bold text-rose-700">{weddingInfo.brideName}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingCard;
