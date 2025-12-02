// app/api/album/route.ts
import { saveBase64ImageAndGetUrl } from "@/lib/server-utils"
import fs from "fs"
import { nanoid } from "nanoid"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

export async function GET() {
  const albumDir = path.join(process.cwd(), "public/album")
  const files = fs.readdirSync(albumDir)
  const images = files.map((f) => `/album/${f}`)
  return NextResponse.json(images)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { images }: { images: string[] } = body
  try {
    const files = await Promise.all(images.map(image => {
      const file = "/album/" + nanoid()
      saveBase64ImageAndGetUrl(image, file)
      return file
    }))

    return NextResponse.json(files, { status: 200 })
  } catch {
    return NextResponse.json({ message: "Thêm ablum thất bại!" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('fileName');
  if (!filename || filename.includes('..')) {
    return NextResponse.json({ message: "Tên file không hợp lệ hoặc thiếu 'fileName'." }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', filename);

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    await fs.promises.unlink(filePath);

    return new Response(null, { status: 204 });

  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return NextResponse.json({ message: `Không tìm thấy file: ${filename}.` }, { status: 404 });
    }
    return NextResponse.json({ message: "Lỗi Server khi xóa file." }, { status: 500 });
  }
}