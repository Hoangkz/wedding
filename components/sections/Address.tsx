"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, MapPin, Navigation } from "lucide-react";
import FloatingHearts from "../FloatingIcons";

interface AddressProps {
  groomData: {
    name: string;
    address: string;
    mapUrl: string;
    embedUrl?: string;
  };
  brideData: {
    name: string;
    address: string;
    mapUrl: string;
    embedUrl?: string;
  };
}

const Address = ({ groomData, brideData }: AddressProps) => {
  const handleDirections = (mapUrl: string) => {
    if (mapUrl) {
      window.open(mapUrl, "_blank");
    }
  };
  return (
    <section
      id="address"
      className="relative overflow-hidden bg-slate-50"
      style={{
        backgroundImage: `url('/layout/wedding-events')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay với Gradient để tạo chiều sâu */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>

      <FloatingHearts count={20} icons={["📍", "💕", "🌸", "✨"]} />

      <div className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        {/* Tiêu đề được trau chuốt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="h-[1px] w-12 bg-pink-300"></div>
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
            <div className="h-[1px] w-12 bg-pink-300"></div>
          </div>
          <h1
            className="test text-5xl md:text-7xl font-serif font-bold mb-6 italic"
            style={{ color: "#DC143C" }}
          >
            Địa Chỉ Buổi Lễ
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg italic">
            Sự hiện diện của quý vị là niềm vinh hạnh lớn nhất của gia đình chúng tôi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Component Card dùng chung để dễ quản lý */}
          <AddressCard
            data={groomData}
            title="Nhà Trai"
            accentColor="blue"
            onNavigate={() => handleDirections(groomData.mapUrl)}
          />
          <AddressCard
            data={brideData}
            title="Nhà Gái"
            accentColor="pink"
            onNavigate={() => handleDirections(brideData.mapUrl)}
          />
        </div>
      </div>
    </section>
  );
};

// Sub-component cho gọn mã nguồn
const AddressCard = ({ data, title, accentColor, onNavigate }: any) => {
  const isPink = accentColor === "pink";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group bg-white/90 backdrop-blur-lg border border-white/50 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
    >
      {/* Header của Card */}
      <div
        className={`p-8 ${isPink ? "bg-rose-50" : "bg-blue-50"} border-b border-gray-100 transition-colors duration-500 group-hover:bg-white`}
      >
        <span
          className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3`}
          style={{ backgroundColor: "#DC143C", color: "white" }}
        >
          {title}
        </span>
        <h2 className={`text-3xl font-bold`} style={{ color: "#DC143C" }}>
          {isPink ? "Cô Dâu" : "Chú Rể"} {data.shortName}
        </h2>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-start gap-4 mb-8 text-left">
          <div
            className={`p-3 rounded-2xl ${isPink ? "bg-rose-100 text-rose-500" : "bg-blue-100 text-blue-500"}`}
          >
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase font-semibold tracking-tighter mb-1">
              Địa chỉ
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">{data.address}</p>
          </div>
        </div>

        {data.embedUrl && (
          <div className="relative mb-8 rounded-3xl overflow-hidden shadow-inner group/map">
            <iframe
              src={data.embedUrl}
              width="100%"
              height="250"
              className="grayscale-[0.3] contrast-[1.1] transition-all duration-700 group-hover/map:grayscale-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[8px] border-white/10 rounded-3xl"></div>
          </div>
        )}

        <Button
          onClick={onNavigate}
          className={`mt-auto w-full py-8 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 ${
            isPink
              ? "bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white"
              : "bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-blue-500 hover:to-indigo-700 text-white"
          }`}
        >
          <Navigation className="w-5 h-5 mr-3 animate-pulse" />
          Chỉ đường
        </Button>
      </div>
    </motion.div>
  );
};

export default Address;
