import { prisma } from "@/lib/prisma"
import { Context } from "@/lib/server-utils"
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, { params }: Context) {
  try {
    const userId = (await params).id
    const body = await req.json()
    const { currentPassword, newPassword } = body
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { password: true },
    })
    if (!user) {
      return NextResponse.json({ error: "User không tồn tại" }, { status: 404 })
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password)
    if (!isMatch) {
      return NextResponse.json({ error: "Mật khẩu cũ không đúng" }, { status: 400 })
    }
    const hashed = await bcrypt.hash(newPassword, 10)
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashed },
    })

    return NextResponse.json({ message: "Đổi mật khẩu thành công" })
  } catch {
    return NextResponse.json({ error: "Đổi mật khẩu thất bại" }, { status: 500 })
  }
}
