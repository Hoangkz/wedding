import { saveBase64ImageAndGetUrl } from "@/lib/server-utils"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { image, label }: { image: string, label: string } = body
  const path = label.replace("#", "").toLowerCase()
  try {
    await saveBase64ImageAndGetUrl(image, "/layout/" + path)

    return NextResponse.json({ message: "Thêm ảnh nền " + path + "thành công!" })
  } catch {
    return NextResponse.json({ message: "Thêm ảnh nền " + path + "thất bại!" }, { status: 500 })
  }
}
