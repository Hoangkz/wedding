
import { prisma } from "@/lib/prisma"
import { generateId } from "@/lib/server-utils"
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userName, password, name, shortName } = body as {
      userName: string
      password: string
      name: string
      shortName: string
    }
    
    const existing = await prisma.user.findUnique({ where: { userName } })
    if (existing) {
      return NextResponse.json({ error: "Tên tài khoản đã tồn tại" }, { status: 400 })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
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
