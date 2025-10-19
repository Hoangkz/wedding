import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { generateId } from "@/lib/server-utils"

const DEFAULT_PASSWORD = "12345"

const SALT_ROUNDS = 10

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      userName,
      shortName,
      name,
      dob,
      phone,
      address,
      mapUrl,
      father,
      mother,
      bio,
      note,
      title,
      bank,
      account,
      weddingDate,
      weddingTime,
    } = body
    if (!userName) {
      return NextResponse.json({ error: "Tên đăng nhập (userName) là bắt buộc." }, { status: 400 })
    }
    const existingUser = await prisma.user.findUnique({ where: { userName } })
    if (existingUser) {
      return NextResponse.json({ error: "Tên đăng nhập đã tồn tại." }, { status: 409 })
    }
    const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, SALT_ROUNDS)
    const newUser = await prisma.user.create({
      data: {
        id: generateId(),
        userName,
        password: hashedPassword,
        shortName: shortName || null,
        name: name || null,
        dob: dob ? new Date(dob) : null,
        phone: phone || null,
        address: address || null,
        mapUrl: mapUrl || null,
        father: father || null,
        mother: mother || null,
        bio: bio || null,
        note: note || null,
        title: title || null,
        bank: bank || null,
        account: account || null,
        weddingDate: weddingDate ? new Date(weddingDate) : null,
        weddingTime: weddingTime || null,
      },
    })

    return NextResponse.json(
      {
        message: "Tạo người dùng thành công. Mật khẩu mặc định: 12345!",
        user: newUser,
      },
      { status: 201 }
    )
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          error: "Tên đăng nhập đã tồn tại!",
          details: "Unique constraint failed on the field: userName",
        },
        { status: 409 }
      )
    }

    return NextResponse.json(
      {
        error: "Không thể tạo người dùng!",
      },
      { status: 500 }
    )
  }
}
