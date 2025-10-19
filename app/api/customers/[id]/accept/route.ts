import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"

import { Context } from "@/lib/server-utils"

export async function POST(req: NextRequest, context: Context) {
  const { id } = await context.params

  try {
    const existingCustomer = await prisma.customer.findUnique({ where: { id } })
    if (!existingCustomer) {
      return NextResponse.json(
        { error: "Vui lòng đảm bảo bạn đang truy cập bằng đường dẫn thiệp mời đầy đủ!" },
        { status: 404 }
      )
    }
    const updatedCustomer = await prisma.customer.update({
      where: { id },
      data: {
        attended: 1,
      },
    })

    return NextResponse.json(
      {
        message: "Xác nhận tham dự thành công!",
        customer: updatedCustomer,
      },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      {
        error: "Vui lòng đảm bảo bạn đang truy cập bằng đường dẫn thiệp mời đầy đủ!",
      },
      { status: 500 }
    )
  }
}
