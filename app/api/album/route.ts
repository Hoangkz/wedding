// app/api/album/route.ts
import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const albumDir = path.join(process.cwd(), "public/album")
  const files = fs.readdirSync(albumDir)
  const images = files.filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f)).map((f) => `/album/${f}`)
  return NextResponse.json(images)
}
