// app/page.tsx
// Đảm bảo các component Hero và Couple đã được tạo trong thư mục components/sections

import Couple from '@/components/sections/Couple';
import Story from '@/components/sections/Story';
import Schedule from '@/components/sections/Schedule';
import { MusicToggle } from '@/components/MusicToggle';
import Hero from '@/components/sections/Hero';
import fs from "fs";
import path from "path";
import WeddingAlbum from '@/components/sections/Album';
import WeddingWishes from '@/components/sections/WeddingWishes';
import WeddingGift from '@/components/sections/WeddingGift';
import WeddingCard from '@/components/sections/WeddingCard';
import Header from '@/components/Header';
export default function Home() {
    const albumDir = path.join(process.cwd(), "public/album");
    const files = fs.readdirSync(albumDir);

    // Lọc các file ảnh hợp lệ
    const images = files
        .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
        .map((f) => `/album/${f}`);

    return (
        <>
            <Header />
            <main className="pt-16">
                <main>
                    <Hero />
                    <WeddingCard />
                    <Couple />
                    <Story />
                    <Schedule />
                    <WeddingAlbum images={images} />
                    <WeddingWishes />
                    <WeddingGift />
                    <MusicToggle />
                </main>
            </main>
        </>
    );
}

