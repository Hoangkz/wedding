// app/api/timeline/route.ts

import { prisma } from '@/lib/prisma';
import { saveBase64ImageAndGetUrl } from '@/lib/server-utils';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

interface TimelineRequestBody {
    title: string;
    desc: string;
    image?: string | null;
    index: number;
}

export async function GET() {
    try {
        const timelines = await prisma.timeline.findMany({
            orderBy: {
                index: 'asc',
            },
        });

        return NextResponse.json(timelines, { status: 200 });
    } catch (error) {
        console.error("GET Timeline Error:", error);
        return NextResponse.json({ message: "Không thể lấy danh sách timeline." }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body: TimelineRequestBody = await request.json();
        const { title, desc, image } = body;
        if (!title || !desc) {

            return NextResponse.json({ message: "Thiếu trường 'title', 'desc'" }, { status: 400 });
        }
        let newImage = undefined
        if (image) {
            newImage = "/timeline/" + nanoid()
            await saveBase64ImageAndGetUrl(image, newImage)
        }
        const last = await prisma.timeline.findFirst({
            orderBy: { index: "desc" }
        });
        const newItem = await prisma.timeline.create({
            data: {
                id: nanoid(),
                title,
                desc: desc,
                image: newImage,
                index: last?.index ? last?.index + 1 : 1
            },
        });

        return NextResponse.json(newItem, { status: 201 });

    } catch (error) {
        console.error("POST Timeline Error:", error);
        return NextResponse.json({ message: "Không thể tạo mục timeline mới." }, { status: 500 });
    }
}