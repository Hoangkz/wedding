import { prisma } from "@/lib/prisma";
import { User, UserType } from "@/prisma/generated";
import dayjs from "dayjs";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const id = searchParams.get("id")
    const [albums, timeLine, users, dataCustomer, wishes, schedules] = await Promise.all([
        getAlbum(),
        getTimelines(),
        getUsers(),
        getCustomer(id),
        getWishes(),
        getSchedules(),
    ])
    const { groom, bride } = users
    const couple = {
        groom: {
            type: "groom",
            name: groom?.name,
            imageSrc: groom?.avatar,
            fatherName: groom?.father,
            motherName: groom?.mother,
            bio: groom?.bio,
        },
        bride: {
            type: "bride",
            name: bride?.name,
            imageSrc: bride?.avatar,
            fatherName: bride?.father,
            motherName: bride?.mother,
            bio: bride?.bio,
        }
    }
    const weddingGift = {
        groom: {
            title: "Nhà Gái",
            qrCodeUrl: groom.qrCodeUrl,
            bank: groom.bank,
            account: groom.account
        },
        bride: {
            title: "Nhà Trai",
            qrCodeUrl: bride.qrCodeUrl,
            bank: bride.bank,
            account: bride.account
        }
    }
    const time1 = groom.weddingTime?.split(":")
    const hero = {
        groomName: groom.shortName,
        brideName: bride.shortName,
        weddingDate: dayjs(groom.weddingDate)
            .startOf("day").add(Number(time1?.[0]) || 0, "hour")
            .add(Number(time1?.[1]) || 0, "minute").toDate(),
    }
    if (dataCustomer) {
        if (dataCustomer.type === "Bride") {
            const time2 = bride.weddingTime?.split(":")
            hero.weddingDate = dayjs(bride.weddingDate)
                .startOf("day").add(Number(time2?.[0]) || 0, "hour")
                .add(Number(time2?.[1]) || 0, "minute").toDate()
        }
    }

    const customer = dataCustomer ? {
        ...dataCustomer,
        groomName: groom.shortName,
        brideName: bride.shortName,
        venueType: (dataCustomer && dataCustomer?.type === "Groom") ? "Tại tư gia nhà gái" : "Tại tư gia nhà trai",
        venueAddress: (dataCustomer && dataCustomer?.type === "Groom") ? groom.address : bride.address,
        googleMapsLink: (dataCustomer && dataCustomer?.type === "Groom") ? groom.mapUrl : bride.mapUrl,
        fatherBride: bride.father,
        motherBride: bride.mother,
        fatherGroom: groom.father,
        motherGroom: groom.mother,
    } : false

    return NextResponse.json({
        albums,
        timeLine,
        users,
        couple,
        customer, wishes,
        weddingGift, schedules, hero
    })
}

const getAlbum = async () => {
    const albumDir = path.join(process.cwd(), "public/album")
    const files = fs.readdirSync(albumDir)
    const images = files.map((f) => `/album/${f}`)
    return images
}

const getTimelines = async () => {
    try {
        const timelines = await prisma.timeline.findMany({
            orderBy: {
                index: 'asc',
            },
        });
        return timelines
    } catch {
        return [];
    }
}

const getSchedules = async () => {
    try {
        const schedules = await prisma.schedule.findMany({
            orderBy: [
                { day: 'asc' },
                { time: 'asc' }
            ],
        });
        return schedules.map(e => {
            return {
                ...e, date: dayjs(e.time).format("HH:mm") + " - " + dayjs(e.day).format("DD/MM/YYYY")
            }
        })
    } catch {
        return [];
    }
}
const getUsers = async () => {
    const [groom, bride] = await Promise.all([
        prisma.user.findFirst({
            where: { type: UserType.Groom },

        }),
        prisma.user.findFirst({
            where: { type: UserType.Bride },

        })
    ])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...restGroom } = groom as User
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: p1, ...restBride } = bride as User
    return {
        bride: restBride,
        groom: restGroom
    }

}
const getCustomer = async (id: string | null) => {
    if (!id) {
        return false
    }
    const customer = await prisma.customer.findUnique({ where: { id } })
    if (!customer) {
        return false
    }
    const dayOfWeekMap = [
        "CHỦ NHẬT",
        "THỨ HAI",
        "THỨ BA",
        "THỨ TƯ",
        "THỨ NĂM",
        "THỨ SÁU",
        "THỨ BẢY",
    ]
    const date = dayjs(customer.invitedAt)
    const eventDayVietnamese = dayOfWeekMap[date.day()]
    return {
        ...customer,
        invitationText: "TRÂN TRỌNG KÍNH MỜI",
        bodyText: "TỚI DỰ BỮA CƠM THÂN MẬT CHUNG VUI\nCÙNG CHÚNG TÔI MỪNG LỄ VU QUY",
        eventTimeLarge: date.format("HH:mm"),
        eventDay: eventDayVietnamese,
        eventDate: date.format("D"),
        eventMonthYear: date.format("MM.YYYY"),
        welcomeMessage: "Rất hân hạnh được đón tiếp!",
    }

}

const getWishes = async () => {
    try {
        const rs = await prisma.wish.findMany({
            orderBy: {
                createdAt: "desc"
            },
        });
        return rs.map(e => ({
            ...e,
            updatedAt: e.updatedAt ? dayjs(e.updatedAt).format("DD/MM HH:mm") : dayjs(e.createdAt).format("DD/MM HH:mm")
        }))
    } catch {
        return [];

    }
}