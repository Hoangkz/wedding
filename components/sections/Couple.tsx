// app/page.js

import CoupleIntroCard from "../CoupleIntroCard";
import { Heart1 } from "../Heart";

const IntroPage = () => {

    // --- Dữ liệu Cô Dâu ---
    const brideData = {
        type: 'bride',
        name: 'Ngô Việt Hoài',
        imageSrc: '/3.jpeg', // Tên file ảnh trong thư mục public
        fatherName: 'NGÔ XUÂN NGHĨA',
        motherName: 'TRẦN HỒNG THẮM',
        bio: 'Cô gái đến từ Xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích về với vôi, nuôi mèo và nuôi ước mơ cho cô một vườn trong khỏe sắc.'
    };

    // --- Dữ liệu Chú Rể ---
    const groomData = {
        type: 'groom',
        name: 'Hoàng Kiến Văn',
        imageSrc: '/4.jpeg', // Tên file ảnh trong thư mục public
        fatherName: 'HOÀNG ANH KIỆT',
        motherName: 'NGUYỄN THỊ HOÀI',
        bio: 'Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phố Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: "Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đôi luông là nơi tràn ngập sinh yêu thương để ta trở về."'
    };

    return (
        <section id="couple" >
            <div style={{ backgroundImage: `url('/2.jpg')` }}>
                <div className="min-h-screen bg-gray-100 py-30"
                    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
                    <div className="mx-auto px-4" >
                        {/* Tiêu đề chung */}
                        <div className="flex justify-center items-center">
                            <h1 className="test text-xl md:text-2xl text-center" style={{ fontSize: 55 }}>Cô dâu</h1>
                            <h1 className="test text-xl md:text-2xl text-center mx-4 sm:mx-12 " style={{ fontSize: 55 }}>&</h1>
                            <h1 className="test text-xl md:text-2xl text-center" style={{ fontSize: 55 }}>Chú rể</h1>
                        </div>

                        <Heart1 />

                        {/* Container chứa 2 Card - Sử dụng flexbox cho bố cục 2 cột */}
                        <div className="flex justify-center items-stretch lg:space-x-8 space-y-8 lg:space-y-0 flex-wrap">

                            {/* Card Cô Dâu */}
                            <CoupleIntroCard {...brideData} />

                            {/* Card Chú Rể */}
                            <CoupleIntroCard {...groomData} />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroPage;