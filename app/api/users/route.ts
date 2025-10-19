// app/api/users/route.ts
import { prisma } from "@/lib/prisma"
import { generateId } from "@/lib/server-utils"
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const users = await prisma.user.findMany({})
    return NextResponse.json({ users })
  } catch {
    return NextResponse.json({ error: "Không thể lấy danh sách users" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { userName, password, name, shortName, title, dob, phone } = body

    const hashedPassword = await bcrypt.hash(password || "123456", 10)

    const user = await prisma.user.create({
      data: {
        id: generateId(),
        userName,
        password: hashedPassword,
        name,
        shortName,
        title,
        dob: dob || new Date("1995-01-01"),
        phone: phone || "0000000000",
        qrCodeUrl: "",
        address: "",
        mapUrl: "",
        father: "",
        mother: "",
        weddingDate: new Date(),
        bank: "",
        account: "",
      },
      select: {
        id: true,
        userName: true,
        name: true,
        shortName: true,
        title: true,
      },
    })

    return NextResponse.json(user)
  } catch {
    return NextResponse.json({ error: "Tạo user thất bại" }, { status: 500 })
  }
}
