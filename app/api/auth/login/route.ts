import { NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/data-source';
import jwt from 'jsonwebtoken';
import { User } from '@/lib/entities/User';

const userRepo = AppDataSource.getRepository(User);
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(req: Request) {
    console.log(req)
    const { email, password } = await req.json();

    const user = await userRepo.findOne({ where: { email } });
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const valid = await user.comparePassword(password);
    if (!valid) return NextResponse.json({ error: 'Invalid password' }, { status: 401 });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });

    return NextResponse.json({ token, user: { id: user.id, name: user.name, email: user.email } });
}
