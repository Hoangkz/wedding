// app/page.tsx
// Đảm bảo các component Hero và Couple đã được tạo trong thư mục components/sections

import Couple from '@/components/sections/Couple';
import Story from '@/components/sections/Story';
import Schedule from '@/components/sections/Schedule';
import { Album } from 'lucide-react';
import { MusicToggle } from '@/components/sections/MusicToggle';
import Hero from '@/components/sections/Hero';

export default function Home() {
    return (
        <main>
            <Hero />
            <Couple />
            <Story />
            <Schedule />
            <Album />
            <MusicToggle />
        </main>
    );
}

