import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { nanoid } from 'nanoid';

export async function GET(req: NextRequest) {
    try {
        const wishes = await prisma.wish.findMany({
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json({ wishes }, { status: 200 });

    } catch {
        console.error('Lỗi khi tải danh sách lời chúc:');
        return NextResponse.json({
            error: 'Không thể tải danh sách lời chúc.',
        }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            name,
            desc,
            customerId = null
        } = body;

        if (!name || !desc) {
            return NextResponse.json({ error: 'Thiếu các trường bắt buộc (name, desc)!' }, { status: 400 });
        }

        if (customerId && typeof customerId === 'string' && customerId.trim() !== '') {
            const customerExists = await prisma.customer.findUnique({ where: { id: customerId } });
            if (!customerExists) {
                return NextResponse.json({ error: 'Customer ID không tồn tại.' }, { status: 400 });
            }
        }

        const newWish = await prisma.wish.create({
            data: {
                id: nanoid(),
                name,
                desc,
                customerId: customerId || null,
            }
        });

        return NextResponse.json({
            message: 'Tạo lời chúc thành công!',
            wish: newWish
        }, { status: 201 });

    } catch {
        console.error('Lỗi khi tạo lời chúc:');
        return NextResponse.json({
            error: 'Không thể tạo lời chúc!',
        }, { status: 500 });
    }
}