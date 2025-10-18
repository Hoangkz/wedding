import { LucideProps } from 'lucide-react';
import { createContext, ForwardRefExoticComponent, RefAttributes, useContext } from 'react';

// Giả sử bạn có interface User giống với Prisma model
export interface User {
    id: string;
    userName: string;
    password: string;
    shortName?: string;
    name?: string;
    dob?: string; // hoặc Date
    phone?: string;
    qrCodeUrl?: string;
    address?: string;
    mapUrl?: string;
    father?: string;
    mother?: string;
    bio?: string;
    note?: string;
    title?: string;
    bank?: string;
    account?: string;
    weddingDate?: string; // hoặc Date
    weddingTime?: string;
    createdAt: string; // hoặc Date
    updatedAt: string; // hoặc Date
}

// AdminUser sẽ là User trừ password
export type AdminUser = Omit<User, 'password'> | null;

export interface navAdmin {
    name: string;
    url: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}
export const AdminUserContext = createContext<{ user?: AdminUser, navAdminDashBoard: navAdmin[] }>
    ({ user: undefined, navAdminDashBoard: [] });

export const useAdminContext = () => useContext(AdminUserContext);
