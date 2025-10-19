import { NextResponse, NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { UserType } from "@/prisma/generated"
import dayjs from "dayjs"
import { Context } from "@/lib/server-utils"

export async function GET(req: NextRequest, context: Context) {
  const { id } = await context.params

  try {
    const existingCustomer = await prisma.customer.findUnique({ where: { id } })
    if (!existingCustomer) {
      return NextResponse.json(
        { error: "Vui lòng đảm bảo bạn đang truy cập bằng đường dẫn thiệp mời đầy đủ!" },
        { status: 404 }
      )
    }

    const groom = await prisma.user.findFirst({
      where: { type: UserType.Groom },
      select: {
        name: true,
        shortName: true,
        address: true,
        mapUrl: true,
      },
    })

    const bride = await prisma.user.findFirst({
      where: { type: UserType.Bride },
      select: {
        name: true,
        shortName: true,
        address: true,
        mapUrl: true,
      },
    })
    const dayOfWeekMap = [
      "CHỦ NHẬT",
      "THỨ HAI",
      "THỨ BA",
      "THỨ TƯ",
      "THỨ NĂM",
      "THỨ SÁU",
      "THỨ BẢY",
    ]
    const date = dayjs(existingCustomer.invitedAt)
    const eventDayVietnamese = dayOfWeekMap[date.day()]

    const data = {
      invitationText: "TRÂN TRỌNG KÍNH MỜI",
      bodyText: "TỚI DỰ BỮA CƠM THÂN MẬT CHUNG VUI\nCÙNG CHÚNG TÔI MỪNG LỄ VU QUY",
      groomName: groom?.shortName || "",
      brideName: bride?.shortName || "",
      eventTimeLarge: date.format("HH:mm"),
      eventDay: eventDayVietnamese,
      eventDate: date.format("D"),
      eventMonthYear: date.format("MM.YYYY"),
      lunarDate: "(Tức ngày 20 tháng 8 năm Ất Tỵ)",
      venueType: "Tại Tư Gia Nhà Gái",
      venueAddress: bride?.address,
      welcomeMessage: "Rất hân hạnh được đón tiếp!",
      googleMapsLink: bride?.mapUrl,
    }
    if (existingCustomer.type === "Groom") {
      data.venueType = "Tại Tư Gia Nhà Trai"
      data.venueAddress = groom?.address
      data.googleMapsLink = groom?.mapUrl
    }

    return NextResponse.json(data, { status: 200 })
  } catch {
    return NextResponse.json(
      {
        error: "Vui lòng đảm bảo bạn đang truy cập bằng đường dẫn thiệp mời đầy đủ!",
      },
      { status: 500 }
    )
  }
}
