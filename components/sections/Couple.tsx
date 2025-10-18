"use client";
import { motion } from "framer-motion";
import CoupleIntroCard from "../CoupleIntroCard";
import { Heart1 } from "../Heart";
import FloatingHearts from "../FloatingIcons";

const IntroPage = () => {
    // --- Dữ liệu Cô Dâu ---
    const brideData = {
        type: "bride",
        name: "Ngô Việt Hoài",
        imageSrc: "/codau.jpeg",
        fatherName: "NGÔ XUÂN NGHĨA",
        motherName: "TRẦN HỒNG THẮM",
        bio: "Cô gái đến từ Xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích về với vôi, nuôi mèo và nuôi ước mơ cho cô một vườn trong khỏe sắc.",
    };

    // --- Dữ liệu Chú Rể ---
    const groomData = {
        type: "groom",
        name: "Hoàng Kiến Văn",
        imageSrc: "/chure.jpeg",
        fatherName: "HOÀNG ANH KIỆT",
        motherName: "NGUYỄN THỊ HOÀI",
        bio: 'Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phố Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: "Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đôi luông là nơi tràn ngập sinh yêu thương để ta trở về."',
    };

    return (
        <section id="couple" className="relative overflow-hidden">

            <FloatingHearts count={30} icons={["💕", "❤️", "🌸"]} />
            {/* --- Nền và nội dung chính --- */}
            <div
                style={{
                    backgroundImage: `url('/2.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="min-h-screen py-30 relative flex flex-col items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                >
                    <div className="relative z-20 text-center px-4">
                        {/* --- Tiêu đề --- */}
                        <motion.div
                            className="flex justify-center items-center "
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="test text-center font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg" style={{ fontSize: 55, }}>
                                Cô dâu
                            </h1>
                            <motion.h1
                                className="test text-center mx-4 sm:mx-12 font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
                                style={{ fontSize: 55, }}
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                &
                            </motion.h1>
                            <h1 className="test text-center font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg" style={{ fontSize: 55, }}>
                                Chú rể
                            </h1>
                        </motion.div>

                        {/* --- Tim động --- */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 10 }}
                            className="flex justify-center mt-6"
                        >
                            <Heart1 />
                        </motion.div>

                        {/* --- Hai card --- */}
                        <div className="flex justify-around lg:justify-center items-stretch lg:space-x-8 space-y-8 lg:space-y-0 flex-wrap mt-10 relative z-20">
                            <CoupleIntroCard {...brideData} />
                            <CoupleIntroCard {...groomData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroPage;
