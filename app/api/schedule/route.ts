// app/api/schedule/route.ts

import { prisma } from '@/lib/prisma';
import { saveBase64ImageAndGetUrl } from '@/lib/server-utils';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

interface scheduleRequestBody {
    title: string;
    desc: string;
    image: string;
    address: string
    day: string // "YYYY-MM-DD"
    time: string // "HH:mm"
}

// ------------------------------------------
// SỬA ĐỔI: HÀM GET - KHÔNG CẦN THAY ĐỔI
// ------------------------------------------
export async function GET() {
    try {
        const schedules = await prisma.schedule.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        // LƯU Ý: Frontend sẽ tự format item.day và item.time
        return NextResponse.json(schedules, { status: 200 });
    } catch (error) {
        console.error("GET schedule Error:", error);
        return NextResponse.json({ message: "Không thể lấy danh sách schedule." }, { status: 500 });
    }
}

// ------------------------------------------
// SỬA ĐỔI: HÀM POST - CHUYỂN ĐỔI DAY VÀ TIME
// ------------------------------------------
export async function POST(request: Request) {
    try {
        const body: scheduleRequestBody = await request.json();
        const { title, desc, image, address, day, time } = body;

        // Bổ sung kiểm tra image có thể là null
        if (!image || !title || !desc || !address || !day || !time) {
            return NextResponse.json({ message: "Thiếu trường 'title', 'desc', 'image', 'address', 'day' ,'time'" }, { status: 400 });
        }

        const imageUrl = "/schedule/" + nanoid()
        await saveBase64ImageAndGetUrl(image, imageUrl)

        const dateDay = dayjs(day).startOf("day");

        const [hours, minutes] = time.split(':').map(Number);
        const dateTime = dateDay.hour(hours).minute(minutes).second(0).millisecond(0);

        const newItem = await prisma.schedule.create({
            data: {
                id: nanoid(),
                title,
                desc: desc,
                image: imageUrl,
                address,
                day: dateDay.toDate(),
                time: dateTime.toDate(),
            },
        });

        return NextResponse.json(newItem, { status: 201 });

    } catch (error) {
        console.error("POST schedule Error:", error);
        return NextResponse.json({ message: "Không thể tạo mục schedule mới." }, { status: 500 });
    }
}