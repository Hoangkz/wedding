import { prisma } from "@/lib/prisma";
import { generateId } from "@/lib/server-utils";
import dayjs from "dayjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, type, invitation, invitedAt, attended = false } = body
    
    if (!name || !type || !invitation || !invitedAt) {
      return NextResponse.json(
        { error: "Thiếu các trường bắt buộc (name, type, invitation, invitedAt)." },
        { status: 400 }
      )
    }
    
    const invitedDate = new Date(invitedAt)
    if (isNaN(invitedDate.getTime())) {
      return NextResponse.json({ error: "Định dạng ngày/giờ mời không hợp lệ." }, { status: 400 })
    }
    const data = {
      id: generateId(),
      name,
      type,
      invitation,
      invitedAt: dayjs(invitedAt).toDate(),
      attended,
    }
    
    const newCustomer = await prisma.customer.create({
      data: data,
    })

    return NextResponse.json(
      {
        message: "Tạo khách hàng thành công!",
        customer: newCustomer,
      },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Không thể tạo khách hàng!",
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: { invitedAt: "asc" }, 
    })

    return NextResponse.json({ customers }, { status: 200 })
  } catch {
    return NextResponse.json(
      {
        error: "Không thể tải danh sách khách hàng.",
      },
      { status: 500 }
    )
  }
}
