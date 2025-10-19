import { prisma } from "@/lib/prisma"
import { generateId } from "@/lib/server-utils"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const wishes = await prisma.wish.findMany({
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({ wishes }, { status: 200 })
  } catch {
    return NextResponse.json(
      {
        error: "Không thể tải danh sách lời chúc.",
      },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, desc, customerId = null } = body

    if (!name || !desc) {
      return NextResponse.json(
        { error: "Thiếu các trường bắt buộc (name, desc)!" },
        { status: 400 }
      )
    }

    if (customerId && typeof customerId === "string" && customerId.trim() !== "") {
      const customerExists = await prisma.customer.findUnique({ where: { id: customerId } })
      if (!customerExists) {
        return NextResponse.json({ error: "Customer ID không tồn tại." }, { status: 400 })
      }
    }

    const newWish = await prisma.wish.create({
      data: {
        id: generateId(),
        name,
        desc,
        customerId: customerId || null,
      },
    })

    return NextResponse.json(
      {
        message: "Tạo lời chúc thành công!",
        wish: newWish,
      },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Không thể tạo lời chúc!",
      },
      { status: 500 }
    )
  }
}
