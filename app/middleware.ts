import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "secret"

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const token = req.cookies.get("token")?.value
    if (!token) return NextResponse.redirect(new URL("/login", req.url))

    try {
      jwt.verify(token, JWT_SECRET)
    } catch {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
