import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma'; // Đường dẫn đến Prisma Client
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            name,
            type,
            invitation,
            invitedAt,
            attended = false
        } = body;

        // 1. Kiểm tra dữ liệu bắt buộc
        if (!name || !type || !invitation || !invitedAt) {
            return NextResponse.json({ error: 'Thiếu các trường bắt buộc (name, type, invitation, invitedAt).' }, { status: 400 });
        }

        // 2. Chuyển đổi ngày tháng
        // Chuỗi 'datetime-local' cần được parse thành đối tượng Date
        const invitedDate = new Date(invitedAt);
        if (isNaN(invitedDate.getTime())) {
            return NextResponse.json({ error: 'Định dạng ngày/giờ mời không hợp lệ.' }, { status: 400 });
        }
        const data = {
            id: nanoid(),
            name,
            type,
            invitation,
            invitedAt: dayjs(invitedAt).toDate(),
            attended,
        }
        // 3. Tạo mới trong DB
        const newCustomer = await prisma.customer.create({
            data: data
        });

        return NextResponse.json({
            message: 'Tạo khách hàng thành công!',
            customer: newCustomer
        }, { status: 201 });

    } catch {
        return NextResponse.json({
            error: 'Không thể tạo khách hàng!',
        }, { status: 500 });
    }
}

// Hàm xử lý GET (Lấy danh sách)
export async function GET(req: NextRequest) {

    try {
        const customers = await prisma.customer.findMany({
            orderBy: { invitedAt: 'asc' }, // Sắp xếp theo ngày mời
        });

        return NextResponse.json({ customers }, { status: 200 });

    } catch {
        return NextResponse.json({
            error: 'Không thể tải danh sách khách hàng.',
        }, { status: 500 });
    }
}