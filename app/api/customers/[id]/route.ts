import { prisma } from "@/lib/prisma"
import { Context } from "@/lib/server-utils"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, context: Context) {
  const { id } = await context.params

  try {
    const body = await req.json()
    const {
      name,
      type,
      invitation,
      invitedAt, 
      attended,
    } = body

    const updateData: any = { name, type, invitation }
    
    if (invitedAt) {
      const invitedDate = new Date(invitedAt)
      if (isNaN(invitedDate.getTime())) {
        return NextResponse.json({ error: "Định dạng ngày/giờ mời không hợp lệ." }, { status: 400 })
      }
      updateData.invitedAt = invitedDate
    }
    
    if (typeof attended === "boolean") {
      updateData.attended = attended
    }
    
    const existingCustomer = await prisma.customer.findUnique({ where: { id } })
    if (!existingCustomer) {
      return NextResponse.json({ error: "Không tìm thấy khách hàng để cập nhật." }, { status: 404 })
    }
    
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
    
    const existingCustomer = await prisma.customer.findUnique({ where: { id } })
    if (!existingCustomer) {
      return NextResponse.json({ error: "Không tìm thấy khách hàng để xóa." }, { status: 404 })
    }
    
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
