// app/api/customers/route.ts
import { NextResponse } from 'next/server';
import { AppDataSource } from '@/lib/data-source';
import { Customer, CustomerType } from '@/lib/entities/Customer';

const customerRepo = AppDataSource.getRepository(Customer);

export async function GET() {
    const customers = await customerRepo.find({ order: { createdAt: 'DESC' } });
    return NextResponse.json(customers);
}

export async function POST(req: Request) {
    const { name, invitation, invitedAt, attended, type } = await req.json();

    const customer = customerRepo.create({
        name,
        invitation,
        invitedAt: new Date(invitedAt),
        attended: attended ?? false,
        type: type === 'Bride' ? CustomerType.Bride : CustomerType.Groom,
    });

    await customerRepo.save(customer);
    return NextResponse.json(customer);
}

export async function PUT(req: Request) {
    const { id, name, invitation, invitedAt, attended, type } = await req.json();

    const customer = await customerRepo.findOne({ where: { id } });
    if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

    customer.name = name ?? customer.name;
    customer.invitation = invitation ?? customer.invitation;
    customer.invitedAt = invitedAt ? new Date(invitedAt) : customer.invitedAt;
    customer.attended = attended ?? customer.attended;
    customer.type = type
        ? type === 'Bride'
            ? CustomerType.Bride
            : CustomerType.Groom
        : customer.type;

    await customerRepo.save(customer);
    return NextResponse.json(customer);
}

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const customer = await customerRepo.findOne({ where: { id } });
    if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 });

    await customerRepo.remove(customer);
    return NextResponse.json({ message: 'Customer deleted' });
}
