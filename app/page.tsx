"use client"
import Couple from '@/components/sections/Couple';
import Story from '@/components/sections/Story';
import Schedule from '@/components/sections/Schedule';
import { MusicToggle } from '@/components/MusicToggle';
import Hero from '@/components/sections/Hero';
import WeddingAlbum from '@/components/sections/Album';
import WeddingWishes from '@/components/sections/WeddingWishes';
import WeddingGift from '@/components/sections/WeddingGift';
import WeddingCard from '@/components/sections/WeddingCard';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
export default function Home() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/album')
            .then(res => res.json())
            .then(data => setImages(data));
    }, []);

    return (
        <>
            <Header />
            <main className="pt-16">
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
        </>
    );
}

