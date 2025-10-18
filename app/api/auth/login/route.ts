// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userName, password } = body;
        const user = await prisma.user.findUnique({ where: { userName } });
        if (!user) return NextResponse.json({ error: 'Tên tài khoản hoặc mật khẩu không chính xác' }, { status: 400 });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return NextResponse.json({ error: 'Tên tài khoản hoặc mật khẩu không chính xác' }, { status: 400 });

        const token = jwt.sign({ id: user.id, userName: user.userName }, process.env.JWT_SECRET!, { expiresIn: '1d' });

        return NextResponse.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                userName: user.userName,
            },
        });
    } catch {
        return NextResponse.json({ error: "Đang nhập không thành công!" }, { status: 500 });
    }
}
