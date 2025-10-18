import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma'; // Đường dẫn đến Prisma Client
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

// Mật khẩu mặc định
const DEFAULT_PASSWORD = "12345";
// Độ phức tạp của thuật toán băm (salt)
const SALT_ROUNDS = 10;

export async function POST(req: NextRequest) {
    // 🔴 1. Kiểm tra Quyền Hạn (Authorization)
    // Cần kiểm tra Bearer Token hoặc Session Cookie để đảm bảo
    // chỉ người dùng Admin mới có thể tạo tài khoản mới.
    // (Bỏ qua phần này ở đây nhưng BẮT BUỘC phải thực hiện trong thực tế)

    try {
        const body = await req.json();
        const {
            userName,
            shortName,
            name,
            dob,
            phone,
            address,
            mapUrl,
            father,
            mother,
            bio,
            note,
            title,
            bank,
            account,
            weddingDate,
            weddingTime
        } = body;
        if (!userName) {
            return NextResponse.json({ error: 'Tên đăng nhập (userName) là bắt buộc.' }, { status: 400 });
        }
        const existingUser = await prisma.user.findUnique({ where: { userName } });
        if (existingUser) {
            return NextResponse.json({ error: 'Tên đăng nhập đã tồn tại.' }, { status: 409 }); // 409 Conflict
        }
        const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, SALT_ROUNDS);
        const newUser = await prisma.user.create({
            data: {
                id: nanoid(),
                userName,
                password: hashedPassword, // Lưu mật khẩu đã được băm
                shortName: shortName || null,
                name: name || null,
                dob: dob ? new Date(dob) : null, // Chuyển sang đối tượng Date
                phone: phone || null,
                address: address || null,
                mapUrl: mapUrl || null,
                father: father || null,
                mother: mother || null,
                bio: bio || null,
                note: note || null,
                title: title || null,
                bank: bank || null,
                account: account || null,
                weddingDate: weddingDate ? new Date(weddingDate) : null,
                weddingTime: weddingTime || null,
                // ID sẽ tự động được tạo bởi Prisma/Database
                // qrCodeUrl: sẽ được cập nhật sau
            },
        });

        return NextResponse.json({
            message: 'Tạo người dùng thành công. Mật khẩu mặc định: 12345.',
            user: newUser
        }, { status: 201 }); // 201 Created

    } catch (error: any) {
        // Xử lý lỗi trùng lặp (nếu không bắt được ở bước 3)
        if (error.code === 'P2002') {
            return NextResponse.json({
                error: 'Tên đăng nhập đã tồn tại.',
                details: 'Unique constraint failed on the field: userName'
            }, { status: 409 });
        }

        return NextResponse.json({
            error: 'Không thể tạo người dùng.',
            details: error.message
        }, { status: 500 });
    }
}