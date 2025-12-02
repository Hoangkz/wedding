import { prisma } from '@/lib/prisma';
import { Context, saveBase64ImageAndGetUrl } from '@/lib/server-utils';
import fs from "fs";
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';
import path from 'path';

export async function PUT(request: Request, context: Context) {
    const { id } = await context.params;

    try {
        const item = await prisma.timeline.findFirst({
            where: { id: id },
        });
        if (!item) {
            return NextResponse.json({ message: `Không tìm thấy mục timeline với ID: ${id} để cập nhật.` }, { status: 404 });
        }

        const { title, image, desc, arrow } = await request.json();
        if (arrow === "up") {
            const truoc = await prisma.timeline.findFirst({
                where: { index: item.index - 1 },
            });
            if (!truoc) {
                return NextResponse.json({ message: `Không tìm thấy mục timeline ${item.index - 1}` }, { status: 404 });
            }
            const rs = await prisma.timeline.update({
                where: { id: id },
                data: {
                    index: item.index - 1
                },
            });
            await prisma.timeline.update({
                where: { id: truoc.id },
                data: {
                    index: item.index
                },
            });
            return NextResponse.json(rs, { status: 200 });
        }
        else if (arrow === "down") {
            const sau = await prisma.timeline.findFirst({
                where: { index: item.index + 1 },
            });
            if (!sau) {
                return NextResponse.json({ message: `Không tìm thấy mục timeline ${item.index + 1}` }, { status: 404 });
            }
            const rs = await prisma.timeline.update({
                where: { id: id },
                data: {
                    index: item.index + 1
                },
            });
            await prisma.timeline.update({
                where: { id: sau.id },
                data: {
                    index: item.index
                },
            });
            return NextResponse.json(rs, { status: 200 });
        }
        let newImage = undefined
        if (image) {
            newImage = "/timeline/" + nanoid()
            await saveBase64ImageAndGetUrl(image, newImage)
        }

        const updatedItem = await prisma.timeline.update({
            where: { id: id },
            data: {
                title, image: newImage, desc,
            },
        });

        return NextResponse.json(updatedItem, { status: 200 });

    } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json({ message: `Không tìm thấy mục timeline với ID: ${id}.` }, { status: 404 });
        }
        console.error("PUT Timeline Error:", error);
        return NextResponse.json({ message: "Không thể cập nhật mục timeline." }, { status: 500 });
    }
}

export async function DELETE(request: Request, context: Context) {
    const { id } = await context.params;
    try {

        const schedule = await prisma.timeline.findFirst({
            where: { id: id },

        })
        if (!schedule) {
            return NextResponse.json({ message: `Không tìm thấy mục lịch trình với ID: ${id} để xóa.` }, { status: 404 });
        }
        await prisma.timeline.delete({
            where: { id: id },
        });
        const file = schedule.image
        if (file) {
            const filePath = path.join(process.cwd(), 'public', file);
            try {
                await fs.promises.access(filePath, fs.constants.F_OK);
                await fs.promises.unlink(filePath);

            } catch {
            }
        }

        return new Response(null, { status: 204 });

    } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json({ message: `Không tìm thấy mục timeline với ID: ${id} để cập nhật.` }, { status: 404 });
        }
        return NextResponse.json({ message: "Không thể xóa mục timeline." }, { status: 500 });
    }
}

export async function POST(request: Request, context: Context) {
    const { id } = await context.params;

    try {
        const item = await prisma.timeline.findFirst({
            where: { id: id },
        });
        if (!item) {
            return NextResponse.json({ message: `Không tìm thấy mục timeline với ID: ${id} để cập nhật.` }, { status: 404 });
        }

        const updatedItem = await prisma.timeline.update({
            where: { id: id },
            data: {
                image: null
            },
        });
        const filename = item.image
        if (item.image) {

            const filePath = path.join(process.cwd(), 'public', item.image);

            try {
                await fs.promises.access(filePath, fs.constants.F_OK);
                await fs.promises.unlink(filePath);

                return new Response(null, { status: 204 });

            } catch (error: any) {
                if (error.code === 'ENOENT') {
                    return NextResponse.json({ message: `Không tìm thấy file: ${filename}.` }, { status: 404 });
                }
                return NextResponse.json({ message: "Lỗi Server khi xóa file." }, { status: 500 });
            }
        }
        return NextResponse.json(updatedItem, { status: 200 });

    } catch (error) {
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json({ message: `Không tìm thấy mục timeline với ID: ${id}.` }, { status: 404 });
        }
        console.error("PUT Timeline Error:", error);
        return NextResponse.json({ message: "Không thể cập nhật mục timeline." }, { status: 500 });
    }
}
