
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { saveBase64ImageAndGetUrl } from '@/lib/server-utils';
import dayjs from 'dayjs';
import { User } from '@/prisma/generated';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = (await params).id
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                userName: true,
                name: true,
                shortName: true,
                title: true,
            },
        });
        if (!user) return NextResponse.json({ error: 'User không tồn tại' }, { status: 404 });
        return NextResponse.json(user);
    } catch {
        return NextResponse.json({ error: 'Không thể lấy user' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {

        const userId = (await params).id;
        const body = await req.json();
        const { id, userName, password, qrCodeUrl, ...rest } = body;

        const dataToUpdate: User = { ...rest };

        if (qrCodeUrl && qrCodeUrl.startsWith('data:')) {
            const newQrCodeUrl = await saveBase64ImageAndGetUrl(qrCodeUrl, userId);
            dataToUpdate.qrCodeUrl = newQrCodeUrl;

        } else if (qrCodeUrl) {

            dataToUpdate.qrCodeUrl = qrCodeUrl;
        } else {

            dataToUpdate.qrCodeUrl = null;
        }
        if (rest.dob) {
            dataToUpdate.dob = dayjs(rest.dob).toDate()
        }

        if (rest.weddingDate) {
            dataToUpdate.weddingDate = dayjs(rest.weddingDate).toDate()
        }
        const updated = await prisma.user.update({
            where: { id: userId },
            data: dataToUpdate,
        });

        console.log(`Cập nhật thành công user ${userId}`);
        return NextResponse.json(updated);

    } catch {
        return NextResponse.json({ error: err.message || 'Cập nhật thất bại' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = (await params).id;
        const authHeader = req.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        // decode token
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET not defined');
        }
        const { id } = jwt.verify(token, secret) as { id: string };
        if (id === userId) {
            throw new Error('Không thể xoá tài khoản này!');
        }

        await prisma.user.delete({ where: { id: userId } });
        return NextResponse.json({ message: 'Xoá user thành công' });
    } catch {
        return NextResponse.json({ error: err.message || 'Xoá user thất bại' }, { status: 500 });
    }
}
