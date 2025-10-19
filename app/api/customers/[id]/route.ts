import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { Context } from "@/lib/server-utils"

export async function PUT(req: NextRequest, context: Context) {
  const { id } = await context.params

  try {
    const body = await req.json()
    const {
      name,
      type,
      invitation,
      invitedAt, // Chuỗi datetime-local
      attended,
    } = body

    const updateData: any = { name, type, invitation }

    // Xử lý trường invitedAt (chỉ cập nhật nếu nó tồn tại)
    if (invitedAt) {
      const invitedDate = new Date(invitedAt)
      if (isNaN(invitedDate.getTime())) {
        return NextResponse.json({ error: "Định dạng ngày/giờ mời không hợp lệ." }, { status: 400 })
      }
      updateData.invitedAt = invitedDate
    }

    // Xử lý trường attended (chỉ cập nhật nếu nó tồn tại)
    if (typeof attended === "boolean") {
      updateData.attended = attended
    }

    // 1. Kiểm tra tồn tại
    const existingCustomer = await prisma.customer.findUnique({ where: { id } })
    if (!existingCustomer) {
      return NextResponse.json({ error: "Không tìm thấy khách hàng để cập nhật." }, { status: 404 })
    }

    // 2. Cập nhật trong DB
    const updatedCustomer = await prisma.customer.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json(
      {
        message: "Cập nhật khách hàng thành công.",
        customer: updatedCustomer,
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Cập nhật khách hàng thất bại.",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest, { params }: Context) {
  const { id } = await params

  try {
    // 1. Kiểm tra tồn tại
    const existingCustomer = await prisma.customer.findUnique({ where: { id } })
    if (!existingCustomer) {
      return NextResponse.json({ error: "Không tìm thấy khách hàng để xóa." }, { status: 404 })
    }

    // 2. Xóa khỏi DB
    await prisma.customer.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: `Khách hàng ID ${id} đã được xóa thành công.` },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Xóa khách hàng thất bại.",
      },
      { status: 500 }
    )
  }
}
