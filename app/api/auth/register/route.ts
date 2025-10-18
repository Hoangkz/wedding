import { NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/data-source';
import { User } from '@/lib/entities/User';

const userRepo = AppDataSource.getRepository(User);

export async function POST(req: Request) {
    const { email, password, name, shortName, title } = await req.json();

    const exist = await userRepo.findOne({ where: { email } });
    if (exist) return NextResponse.json({ error: 'Email already exists' }, { status: 400 });

    const user = userRepo.create({
        email,
        password,
        name,
        shortName,
        title,
        weddingDate: new Date().toISOString().slice(0, 10),
        bank: '',
        account: '',
        father: '',
        mother: '',
        phone: '',
        qrCodeUrl: '',
        address: '',
        mapUrl: '',
    });

    await userRepo.save(user);
    return NextResponse.json({ message: 'User registered successfully' });
}
