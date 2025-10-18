"use client";
import { useParams } from 'next/navigation';

import Couple from '@/components/sections/Couple';
import Story from '@/components/sections/Story';
import Schedule from '@/components/sections/Schedule';
import { MusicToggle } from '@/components/MusicToggle';
import Hero from '@/components/sections/Hero';
import WeddingAlbum from '@/components/sections/Album';
import WeddingWishes from '@/components/sections/WeddingWishes';
import WeddingGift from '@/components/sections/WeddingGift';
import WeddingCard from '@/components/sections/WeddingCard';
import { useEffect, useState } from 'react';
export default function Home() {
    const params = useParams();
    const id = params.id;
    // 
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/album')
            .then(res => res.json())
            .then(data => setImages(data));
    }, []);


    return (
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
    );
}

