// app/api/wishes/route.ts
import { NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/data-source';
import { Wish } from '@/lib/entities/Wish';
import { Customer } from '@/lib/entities/Customer';
import { number } from 'framer-motion';

const wishRepo = AppDataSource.getRepository(Wish);
const customerRepo = AppDataSource.getRepository(Customer);

// GET /api/wishes
export async function GET() {
    // Lấy tất cả wish, kèm customer nếu có
    const wishes = await wishRepo.find({
        relations: ['customer'],
        order: { createdAt: 'DESC' },
    });
    return NextResponse.json(wishes);
}

// POST /api/wishes
export async function POST(req: Request) {
    const { name, desc, customerId } = await req.json();

    let customer: Customer | null;

    const data: {
        name: string,
        desc: string,
        customer?: Customer
    } = {
        name,
        desc,
    }

    if (customerId) {
        customer = await customerRepo.findOne({ where: { id: customerId } });
        if (!customer) {
            return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
        }
        data.customer = customer
    }

    const wish = wishRepo.create(data);

    await wishRepo.save(wish);
    return NextResponse.json(wish);
}

// PUT /api/wishes
export async function PUT(req: Request) {
    const { id, name, desc, customerId } = await req.json();

    const wish = await wishRepo.findOne({ where: { id }, relations: ['customer'] });
    if (!wish) return NextResponse.json({ error: 'Wish not found' }, { status: 404 });

    wish.name = name ?? wish.name;
    wish.desc = desc ?? wish.desc;

    if (customerId !== undefined) {
        if (customerId === null) {
            wish.customer = undefined; // remove customer
        } else {
            const customer = await customerRepo.findOne({ where: { id: customerId } });
            if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
            wish.customer = customer;
        }
    }

    await wishRepo.save(wish);
    return NextResponse.json(wish);
}

// DELETE /api/wishes?id=123
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const wish = await wishRepo.findOne({ where: { id } });
    if (!wish) return NextResponse.json({ error: 'Wish not found' }, { status: 404 });

    await wishRepo.remove(wish);
    return NextResponse.json({ message: 'Wish deleted' });
}
