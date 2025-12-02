"use client"

import Header from "@/components/Header"
import { MusicToggle } from "@/components/MusicToggle"
import WeddingAlbum from "@/components/sections/Album"
import Couple from "@/components/sections/Couple"
import Hero from "@/components/sections/Hero"
import Schedule from "@/components/sections/Schedule"
import Story from "@/components/sections/Story"
import WeddingCard from "@/components/sections/WeddingCard"
import WeddingGift from "@/components/sections/WeddingGift"
import WeddingWishes from "@/components/sections/WeddingWishes"
import { useFeatures } from "@/context/feature.context"
import { appWeddingClient } from "@/lib/ApiClient"
import dayjs from "dayjs"
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
export default function Home() {
    const { setNavItems } = useFeatures();
    const { id } = useParams()

    const [media, setMedia] = useState<string[]>([])
    const [timeLines, setTimeLines] = useState([])
    const [heroData, setHeroData] = useState({
        brideName: "",
        groomName: "",
        time: dayjs().add(10, "day")
    })
    const [couple, setCouple] = useState<false | any>(false)
    const [wishes, setWishes] = useState<false | []>(false)
    const [weddingGift, setWeddingGift] = useState<false | []>(false)
    const [weddingCard, setWeddingCard] = useState<false | any>(false)
    const [schedules, setSchedules] = useState<false | []>(false)
    const [customer, setCustomer] = useState()

    const [weddingInfo, setWeddingInfo] = useState({
        invitationText: "",
        bodyText: "",
        groomName: "",
        brideName: "",
        eventTimeLarge: "",
        eventDay: "",
        eventDate: "",
        eventMonthYear: "",
        lunarDate: "",
        venueType: "",
        venueAddress: "",
        welcomeMessage: "",
        googleMapsLink: "",
    })
    const loadData = useCallback(async (newId: string) => {
        try {
            const {
                albums,
                timeLine,
                couple,
                customer,
                wishes,
                weddingGift,
                schedules,
                hero
            } = (await appWeddingClient.getInfor(newId)).data
            setMedia(albums)
            setTimeLines(timeLine)
            setCouple(couple)
            setWeddingGift(weddingGift)
            setWeddingCard(customer)
            setWishes(wishes)
            setSchedules(schedules)
            if (customer) {
                setCustomer(customer)
                if (id) {
                    localStorage.setItem("id", newId)
                }
            }
            setHeroData(hero)
            setNavItems((pre) => {
                return pre.map(item => {
                    let isOptional = false
                    if (item.href === "/#album") {
                        if (albums && albums.length > 0) {
                            isOptional = true
                        }
                    }
                    else if (item.href === "/#letter") {
                        if (customer) {
                            isOptional = true
                        }
                    }
                    else if (item.href === "/#couple") {
                        if (couple) {
                            isOptional = true
                        }
                    }
                    else if (item.href === "/#story") {
                        if (timeLine && timeLine.length > 0) {
                            isOptional = true
                        }
                    }
                    else if (item.href === "/#wedding-events") {
                        if (schedules && schedules.length > 0) {
                            isOptional = true
                        }
                    } else {
                        isOptional = true
                    }
                    return { ...item, isOptional }
                })
            })

        } catch {
        }
    }, [setNavItems, id])
    useEffect(() => {
        const itemId = (id as string) || localStorage.getItem("id") || ""
        loadData(itemId)
    }, [loadData, id])

    return (
        <>
            <Header />
            <main>
                <Hero heroData={heroData} />
                {customer && <WeddingCard data={customer} />}
                {couple && <Couple brideData={couple.bride} groomData={couple.groom} />}
                {timeLines && timeLines.length > 0 && <Story storyEvents={timeLines} />}
                {schedules && schedules.length > 0 && <Schedule schedules={schedules} />}
                {media && media.length > 0 && <WeddingAlbum images={media} />}
                {wishes && wishes.length > 0 && <WeddingWishes initialWishes={wishes} />}
                {weddingGift && <WeddingGift weddingGift={weddingGift} />}
                <MusicToggle />
            </main>
        </>
    )
}
