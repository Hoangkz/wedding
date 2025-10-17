"use client"
import React, { useState, useEffect } from 'react';

// Ngày cưới mục tiêu (Thay đổi ngày này)
const TARGET_DATE = new Date('2025-11-21T10:00:00').getTime();

const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;

    if (distance < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isOver: true,
        };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        isOver: false,
    };
};

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Xóa timer khi component unmount
        return () => clearTimeout(timer);
    });

    // Cấu hình hiển thị cho từng đơn vị thời gian
    const timerUnits = [
        { value: timeLeft.days, label: "Ngày", className: "border-teal-500 text-teal-500" }, // Ngày - màu xanh teal
        { value: timeLeft.hours, label: "Giờ", className: "border-teal-500 text-teal-500" }, // Giờ - màu xanh teal
        { value: timeLeft.minutes, label: "Phút", className: "border-teal-500 text-teal-500" }, // Phút - màu xanh teal
        { value: timeLeft.seconds, label: "Giây", className: "border-red-500 text-red-500" }, // Giây - màu đỏ
    ];

    if (timeLeft.isOver) {
        return <div className="text-xl text-white">Đám cưới đã diễn ra!</div>;
    }

    return (
        <div className="flex justify-center space-x-4 md:space-x-8 mt-6">
            {timerUnits.map((unit, index) => (
                <div
                    key={index}
                    className={`
                        flex flex-col items-center justify-center 
                        w-24 h-24 md:w-28 md:h-28 
                        rounded-full border-4 bg-white/10 
                        shadow-lg transition-all duration-300 hover:scale-105
                        ${unit.className}
                    `}
                >
                    <span className="text-4xl md:text-5xl font-bold">
                        {unit.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-sm uppercase font-semibold mt-1">
                        {unit.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;