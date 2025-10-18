'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, HeartHandshake, Calendar, Image, MessageSquare, Gift, MailCheck } from 'lucide-react';

interface NavItem {
    name: string;
    href: string; // Chứa hash tuyệt đối, ví dụ: '/#couple'
    Icon: React.ElementType;
}

// ⚠️ Đảm bảo các ID này khớp với ID của các section trong trang của bạn
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

interface DesktopNavProps {
    baseIdPath: string; // Ví dụ: '/111' hoặc ''
}

const DesktopNav: React.FC<DesktopNavProps> = ({ baseIdPath }) => {
    const pathname = usePathname();
    const [currentHash, setCurrentHash] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    // Kiểm tra xem chúng ta đang ở trang có thể dùng Hash Navigation (`/` hoặc `/[id]`)
    const isHashPage = pathname === '/' || pathname.match(/^\/[^/]+$/);

    // Lắng nghe Hash từ URL và sự kiện cuộn (Scroll Spy)
    useEffect(() => {
        setIsMounted(true);
        if (!isHashPage || typeof window === 'undefined') return;

        // --- Thiết lập Hash ban đầu ---
        const initialHash = window.location.hash;
        setCurrentHash(initialHash);

        // --- Logic Scroll Spy (Cuộn trang) ---
        const handleScroll = () => {
            let activeHash = '';
            let minDistance = Infinity;
            const threshold = window.innerHeight * 0.33; // Mốc 1/3 màn hình

            // Bỏ qua mục Home
            navItems.slice(1).forEach(item => {
                const id = item.href.substring(2); // '#letter' -> 'letter'
                const element = document.getElementById(id);

                if (element) {
                    const rect = element.getBoundingClientRect();

                    if (rect.top <= threshold && rect.bottom >= 0) {
                        const distance = Math.abs(rect.top - threshold);
                        if (distance < minDistance) {
                            minDistance = distance;
                            activeHash = '#' + id;
                        }
                    }
                }
            });

            // Nếu không có section nào khớp, kiểm tra xem đã cuộn lên đỉnh chưa
            if (!activeHash && window.scrollY < 100) {
                activeHash = ''; // Về trang chủ
            }

            // Cập nhật state nếu hash thay đổi
            if (activeHash !== currentHash) {
                setCurrentHash(activeHash);
            }
        };

        // Bổ sung lắng nghe sự kiện hashchange và scroll
        const handleHashChange = () => {
            // Đợi một chút để cuộn hoàn tất trước khi cập nhật hash
            setTimeout(() => setCurrentHash(window.location.hash), 50);
        };

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHashPage, currentHash]);


    // Hàm kiểm tra mục menu active
    const isActive = (href: string) => {
        if (!isMounted) return false;

        // Link trang chủ (/)
        if (href === '/') {
            return isHashPage && (currentHash === '' || currentHash === '#');
        }

        // Các link neo (#)
        if (href.startsWith('/#')) {
            const hash = href.substring(1);
            return isHashPage && currentHash === hash;
        }

        // Các link khác
        return pathname === href;
    };

    return (
        <ul className="hidden md:flex space-x-2 lg:space-x-4">
            {navItems.map((item) => {
                const active = isActive(item.href);
                const activeClasses = 'text-[#f0394d] font-bold';
                const defaultClasses = 'text-gray-700 hover:text-[#f0394d]';

                // TẠO ĐƯỜNG DẪN HREF HOÀN CHỈNH: /111/#couple hoặc /
                const fullHref = item.href.startsWith('/#')
                    ? baseIdPath + item.href // '/111' + '/#couple' -> '/111/#couple'
                    : item.href === '/' ? baseIdPath || '/' : item.href;

                return (
                    <li key={item.name} className="relative group">
                        <Link
                            href={fullHref}
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