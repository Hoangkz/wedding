"use client";

import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { memo, useMemo, useState } from "react";
import FloatingHearts from "../FloatingIcons";

// --- Types ---
type Wish = {
  id: string;
  name: string;
  desc: string;
  updatedAt: string;
  createdAt: string;
};

// --- Icons (Giữ nguyên) ---
const UserIcon = () => (
  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const MessageIcon = () => (
  <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);
const SendIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// --- Sub-Component: Form (Để cô lập state gõ chữ) ---
const WishForm = ({ onWishSent }: { onWishSent: () => void }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !desc.trim()) {
      setSubmitError("Vui lòng điền đầy đủ Tên và Lời chúc.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), desc: desc.trim() }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setName("");
      setDesc("");
      onWishSent(); // Gọi refetch từ cha
    } catch {
      setSubmitError("Gửi lời chúc thất bại. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full lg:w-5/12 bg-white rounded-2xl p-6 shadow-2xl border border-pink-100 backdrop-blur-sm lg:sticky lg:top-10"
    >
      <h2
        className="text-2xl font-bold mb-6 font-['Playfair_Display']"
        style={{ color: "#DC143C" }}
      >
        Gửi Lời Chúc Yêu Thương
      </h2>

      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <UserIcon />
        </div>
        <input
          type="text"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSubmitError(null);
          }}
          disabled={isSubmitting}
          className="w-full border border-pink-200 rounded-lg p-2.5 pl-11 text-gray-700 focus:ring-2 focus:ring-pink-400 outline-none text-sm"
        />
      </div>

      <div className="mb-4 relative">
        <div className="absolute top-3 left-0 flex items-start pl-3">
          <MessageIcon />
        </div>
        <textarea
          placeholder="Lời chúc chân thành nhất..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            setSubmitError(null);
          }}
          disabled={isSubmitting}
          className="w-full border border-pink-200 rounded-lg p-2.5 pl-11 h-28 resize-none text-gray-700 focus:ring-2 focus:ring-pink-400 outline-none text-sm"
        />
      </div>

      {submitError && (
        <p className="text-red-500 text-xs mb-4 bg-red-50 p-2 rounded border border-red-200">
          ❌ {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full text-white font-bold py-2.5 rounded-full shadow-lg transition duration-300 transform flex items-center justify-center ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-rose-500 to-pink-600 hover:scale-[1.02]"
        }`}
      >
        {isSubmitting ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
        ) : (
          <SendIcon />
        )}
        {isSubmitting ? "Đang gửi..." : "Gửi lời chúc"}
      </button>
    </motion.form>
  );
};

// --- Sub-Component: Wish Item (Dùng memo để tránh re-render thừa) ---
const WishCard = memo(({ wish, variants }: { wish: Wish; variants: Variants }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }} // Quan trọng: Chỉ chạy hiệu ứng 1 lần khi scroll tới
    className="bg-white/95 p-5 mb-4 rounded-xl shadow-lg border-l-4 border-pink-400/80 backdrop-blur-sm transition duration-300 hover:shadow-xl flex flex-col"
  >
    <p className="text-gray-800 text-base italic mb-3 leading-relaxed">&ldquo;{wish.desc}&rdquo;</p>
    <div className="flex justify-between items-center border-t border-pink-100 pt-2 mt-auto">
      <p className="font-bold text-sm tracking-wider" style={{ color: "#DC143C" }}>
        — {wish.name}
      </p>
      <p className="text-stone-400 text-xs italic">{wish.updatedAt}</p>
    </div>
  </motion.div>
));
WishCard.displayName = "WishCard";

// --- Main Component ---
const WeddingWishes = ({ initialWishes = [] }: { initialWishes?: Wish[] }) => {
  const {
    data: wishes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["wishes"],
    queryFn: async () => {
      const response = await fetch("/api/infor/wishes");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      return data as Wish[];
    },
  });

  const itemVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 150, damping: 20 },
      },
    }),
    [],
  );

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
      <FloatingHearts count={50} icons={["💖", "💍", "🌸", "🕊️", "✨"]} />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative z-10 py-30 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="test text-5xl md:text-6xl font-bold"
          style={{ color: "#DC143C" }}
        >
          Sổ Lưu Bút
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg italic"
        >
          Hạnh phúc là có những người thân yêu cùng chứng kiến ngày trọng đại!
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          {/* Form cô lập state */}
          <WishForm onWishSent={refetch} />

          {/* Danh sách lời chúc */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4 text-left">
            <div className="max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
                </div>
              ) : (
                <AnimatePresence>
                  {(wishes.length > 0 ? wishes : initialWishes).map((wish) => (
                    <WishCard key={wish.id} wish={wish} variants={itemVariants} />
                  ))}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #f472b6;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fbcfe8;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default WeddingWishes;
