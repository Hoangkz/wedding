import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = (await params).id
        const body = await req.json()
        const { currentPassword, newPassword } = body
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { password: true },
        });
        if (!user) {
            return NextResponse.json({ error: 'User không tồn tại' }, { status: 404 });
        }
        // Kiểm tra mật khẩu cũ
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: 'Mật khẩu cũ không đúng' }, { status: 400 });
        }

        // Hash mật khẩu mới
        const hashed = await bcrypt.hash(newPassword, 10);
        console.log(hashed)
        await prisma.user.update({
            where: { id: userId },
            data: { password: hashed },
        });

        return NextResponse.json({ message: 'Đổi mật khẩu thành công' });
    } catch {
        console.log
        return NextResponse.json({ error: err.message || 'Đổi mật khẩu thất bại' }, { status: 500 });
    }
}
