import { prisma } from "@/lib/prisma"
import { Context } from "@/lib/server-utils"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, context: Context) {

  const { id } = await context.params

  try {
    const body = await req.json()
    const { name, desc, customerId } = body
    
    const existingWish = await prisma.wish.findUnique({ where: { id } })
    if (!existingWish) {
      return NextResponse.json({ error: "Không tìm thấy lời chúc để cập nhật." }, { status: 404 })
    }
    
    const updatedWish = await prisma.wish.update({
      where: { id },
      data: {
        name,
        desc,
        
        customerId: customerId === "" ? null : customerId,
      },
    })

    return NextResponse.json(
      {
        message: "Cập nhật lời chúc thành công.",
        wish: updatedWish,
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Cập nhật lời chúc thất bại.",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest, { params }: Context) {
  const { id } = await params

  try {
    
    const existingWish = await prisma.wish.findUnique({ where: { id } })
    if (!existingWish) {
      return NextResponse.json({ error: "Không tìm thấy lời chúc để xóa." }, { status: 404 })
    }

    await prisma.wish.delete({
      where: { id },
    })

    return NextResponse.json(
      { message: `Lời chúc ID ${id} đã được xóa thành công.` },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Xóa lời chúc thất bại.",
      },
      { status: 500 }
    )
  }
}
