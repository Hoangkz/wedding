// components/sections/Schedule.tsx
import React from 'react';
import { MapPin, Clock, Church, Martini } from 'lucide-react';
import { Heart1 } from '../Heart';

interface Event {
    time: string;
    title: string;
    location: string;
    address: string;
    Icon: React.ElementType;
}

const weddingSchedule: Event[] = [
    {
        time: '10:00 AM',
        title: 'LỄ THÀNH HÔN',
        location: 'Nhà Thờ Lớn Hà Nội',
        address: '40 P. Nhà Chung, Hàng Trống, Hoàn Kiếm, Hà Nội',
        Icon: Church,
    },
    {
        time: '06:00 PM',
        title: 'TIỆC CƯỚI TẠI NHÀ HÀNG',
        location: 'Khách Sạn Lotte Hà Nội',
        address: '54 P. Liễu Giai, Cống Vị, Ba Đình, Hà Nội',
        Icon: Martini,
    },
];

// Màu Xanh Cyan: #03c0cc
const themeColor = 'text-[#03c0cc]';
const themeBg = 'bg-[#03c0cc]';
const secondaryColor = 'text-[#e32b42]'; // Màu đỏ cho tiêu đề phụ

const Schedule: React.FC = () => {
    return (
        <section id="schedule" className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tiêu đề Section */}

                <div className="text-center mb-16">
                    <h2 className="test text-xl md:text-2xl text-center" >Lịch Trình</h2>
                    <p className="text-xl text-gray-600">Đón chờ ngày hạnh phúc bên gia đình và bạn bè</p>
                    <Heart1 />

                </div>

                {/* Lịch Trình (Grid 2 cột) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {weddingSchedule.map((event, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#03c0cc] flex flex-col items-center text-center"
                        >
                            <div className={`p-4 rounded-full ${themeBg} mb-4 shadow-md`}>
                                <event.Icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Thời gian */}
                            <h3 className={`text-3xl font-extrabold mb-3 ${themeColor}`}>{event.time}</h3>

                            {/* Tiêu đề sự kiện */}
                            <h4 className={`text-xl font-bold mb-4 ${secondaryColor}`}>{event.title}</h4>

                            {/* Địa điểm */}
                            <div className="text-gray-700">
                                <p className="font-semibold">{event.location}</p>
                                <div className="flex items-center justify-center mt-2 text-sm">
                                    <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                                    <span>{event.address}</span>
                                </div>
                            </div>

                            {/* Nút Xem Bản Đồ */}
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-6 inline-block py-2 px-6 rounded-full text-white font-medium transition-colors ${themeBg} hover:bg-opacity-80`}
                            >
                                Xem Bản Đồ
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;