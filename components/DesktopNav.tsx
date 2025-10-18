'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, HeartHandshake, Calendar, Image, MessageSquare, Gift, MailCheck } from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
    Icon: React.ElementType;
}

export const navItems: NavItem[] = [
    { name: 'Home', href: '/', Icon: Home },
    { name: 'Thư mời', href: '/#letter', Icon: MailCheck },
    { name: 'Cặp đôi', href: '/#couple', Icon: Users },
    { name: 'Chuyện tình yêu', href: '/#story', Icon: HeartHandshake },
    { name: 'Lịch trình', href: '/#wedding-events', Icon: Calendar },
    { name: 'Photo Album', href: '/#album', Icon: Image },
    { name: 'Lời chúc', href: '/#wishes', Icon: MessageSquare },
    { name: 'Mừng cưới', href: '/#gifts', Icon: Gift },
];

const DesktopNav: React.FC = () => {
    const pathname = usePathname();
    // Khởi tạo currentHash từ window nếu có, hoặc để trống (tránh hydration mismatch)
    const [currentHash, setCurrentHash] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== 'undefined') {
            setCurrentHash(window.location.hash);

            // Lắng nghe sự kiện hashchange để cập nhật active khi CUỘN
            const handleHashChange = () => {
                setCurrentHash(window.location.hash);
            };
            window.addEventListener('hashchange', handleHashChange);
            return () => {
                window.removeEventListener('hashchange', handleHashChange);
            };
        }
    }, []);

    // Hàm xử lý click: Cập nhật hash thủ công ngay lập tức
    const handleLinkClick = (href: string) => {
        if (href.startsWith('/#')) {
            const hash = href.substring(1); // Lấy #couple
            setCurrentHash(hash); // Cập nhật state hash ngay lập tức
        } else if (href === '/') {
            setCurrentHash(''); // Nếu click Home, đặt hash là rỗng
        }
        // Các link khác (không phải hash) sẽ tự động kích hoạt logic active qua usePathname
    };

    // Hàm kiểm tra mục menu active (sử dụng currentHash)
    const isActive = (href: string) => {
        if (!isMounted) return false; // Tránh render sai khi Server Side Rendering

        // Link trang chủ (/)
        if (href === '/') {
            return pathname === '/' && currentHash === '';
        }

        // Các link neo (#)
        if (href.startsWith('/#')) {
            const hash = href.substring(1);
            // So sánh hash đã được lưu trong state
            return pathname === '/' && currentHash === hash;
        }

        // Các link thông thường
        return pathname === href;
    };

    return (
        <ul className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item) => {
                const active = isActive(item.href);
                const activeClasses = 'text-[#f0394d] font-bold';
                const defaultClasses = 'text-gray-700 hover:text-[#f0394d]';

                return (
                    <li key={item.name} className="relative group">
                        <Link
                            href={item.href}
                            // Thêm sự kiện onClick
                            onClick={() => handleLinkClick(item.href)}
                            className={`flex flex-col items-center p-2 text-xs lg:text-sm font-medium transition-colors relative ${active ? activeClasses : defaultClasses
                                }`}
                        >
                            <item.Icon className={`w-5 h-5 lg:w-6 lg:h-6 mb-1 ${active ? 'text-[#f0394d]' : 'text-gray-500 group-hover:text-[#f0394d]'} transition-colors`} />

                            <span>{item.name}</span>
                        </Link>

                        <span
                            className={`absolute left-0 right-0 bottom-0 h-0.5 bg-[#f0394d] transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}
                        ></span>
                    </li>
                );
            })}
        </ul>
    );
};

export default DesktopNav;