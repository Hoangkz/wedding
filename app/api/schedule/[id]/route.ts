import { prisma } from '@/lib/prisma';
import { Context, saveBase64ImageAndGetUrl } from '@/lib/server-utils';
import dayjs from 'dayjs';
import fs from "fs";
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';
import path from 'path';

export async function PUT(request: Request, context: Context) {
    const { id } = await context.params;

    try {
        const item = await prisma.schedule.findFirst({
            where: { id: id },
        });
        if (!item) {
            return NextResponse.json({ message: `Không tìm thấy schedule với ID: ${id} để cập nhật.` }, { status: 404 });
        }

        const { title, image, desc, address, day, time } = await request.json();

        let newImage = undefined
        if (image) {
            newImage = "/schedule/" + nanoid()
            await saveBase64ImageAndGetUrl(image, newImage)
        }
        const dateDay = dayjs(day).startOf("day")

        const [hours, minutes] = time.split(':').map(Number);
        const dateTime = dateDay.hour(hours).minute(minutes).second(0).millisecond(0)

        const updatedItem = await prisma.schedule.update({
            where: { id: id },
            data: {
                title, image: newImage, desc, address,
                day: day ? dateDay.toDate() : undefined,
                time: dateTime ? dateTime.toDate() : undefined
            },
        });

        return NextResponse.json(updatedItem, { status: 200 });

    } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json({ message: `Không tìm thấy mục schedule với ID: ${id}.` }, { status: 404 });
        }
        console.error("PUT schedule Error:", error);
        return NextResponse.json({ message: "Không thể cập nhật mục schedule." }, { status: 500 });
    }
}

/**
 * Xử lý DELETE /api/schedule/[id]
 * Xóa một mục schedule cụ thể
 */
export async function DELETE(request: Request, context: Context) {
    const { id } = await context.params;
    try {
        const schedule = await prisma.schedule.findFirst({
            where: { id: id },

        })
        if (!schedule) {
            return NextResponse.json({ message: `Không tìm thấy mục schedule với ID: ${id} để xóa.` }, { status: 404 });
        }
        await prisma.schedule.delete({
            where: { id: id },
        });
        const file = schedule.image

        const filePath = path.join(process.cwd(), 'public', file);

        try {
            await fs.promises.access(filePath, fs.constants.F_OK);
            await fs.promises.unlink(filePath);

        } catch {
        }

        return new Response(null, { status: 204 });

    } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json({ message: `Không tìm thấy mục schedule với ID: ${id} để xóa.` }, { status: 404 });
        }
        return NextResponse.json({ message: "Không thể xóa mục schedule." }, { status: 500 });
    }
}