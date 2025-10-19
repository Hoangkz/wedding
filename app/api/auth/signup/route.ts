// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { generateId } from "@/lib/server-utils"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userName, password, name, shortName } = body as {
      userName: string
      password: string
      name: string
      shortName: string
    }

    // Kiểm tra userName đã tồn tại chưa
    const existing = await prisma.user.findUnique({ where: { userName } })
    if (existing) {
      return NextResponse.json({ error: "Tên tài khoản đã tồn tại" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Tạo user mới
    const user = await prisma.user.create({
      data: {
        id: generateId(),
        userName,
        password: hashedPassword,
        name,
        shortName,
      },
    })

    return NextResponse.json({ message: "Tạo tài khoản thành công", user })
  } catch {
    return NextResponse.json({ error: "Tạo tài khoản không thành công" }, { status: 500 })
  }
}
