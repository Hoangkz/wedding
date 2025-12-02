"use client";
import { Calendar, Gift, HeartHandshake, Home, Image, MailCheck, MessageSquare, Users, type LucideIcon } from 'lucide-react';
import React, { createContext, useContext, useState } from 'react';

interface NavItem {
    name: string
    href: string
    Icon: React.ElementType | LucideIcon
    isOptional: boolean
}

interface FeatureContextType {
    navItems: NavItem[];
    setNavItems: React.Dispatch<React.SetStateAction<NavItem[]>>;
}

const ALL_NAV_ITEMS: NavItem[] = [
    { name: "Home", href: "/", Icon: Home, isOptional: true },
    { name: "Thư mời", href: "/#letter", Icon: MailCheck, isOptional: true },
    { name: "Cặp đôi", href: "/#couple", Icon: Users, isOptional: true },
    { name: "Chuyện tình yêu", href: "/#story", Icon: HeartHandshake, isOptional: true },
    { name: "Lịch trình", href: "/#wedding-events", Icon: Calendar, isOptional: true },
    { name: "Photo Album", href: "/#album", Icon: Image, isOptional: true },
    { name: "Lời chúc", href: "/#wishes", Icon: MessageSquare, isOptional: true },
    { name: "Mừng cưới", href: "/#gifts", Icon: Gift, isOptional: true },
];

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

export const FeatureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [navItems, setNavItems] = useState<NavItem[]>(ALL_NAV_ITEMS);
    const value = {
        navItems,
        setNavItems,
    };

    return (
        <FeatureContext.Provider value={value}>
            {children}
        </FeatureContext.Provider>
    );
};

export const useFeatures = () => {
    const context = useContext(FeatureContext);
    if (context === undefined) {
        throw new Error('useFeatures must be used within a FeatureProvider');
    }
    return context;
};