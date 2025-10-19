
import { prisma } from "@/lib/prisma"
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization")
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const secret = process.env.JWT_SECRET
    if (!secret) {
      throw new Error("JWT_SECRET not defined")
    }
    const payload = jwt.verify(token, secret) as { id: string }
    
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user
    return NextResponse.json({ user: rest })
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}
