"use client"

import Header from "@/components/Header"
import { MusicToggle } from "@/components/MusicToggle"
import Address from "@/components/sections/Address"
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
import { useCallback, useEffect, useState } from "react"
export default function Home() {
    const { setNavItems } = useFeatures();

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
    const [schedules, setSchedules] = useState<false | []>(false)
    const [address, setAddress] = useState<false | any>(false)
    const [customer, setCustomer] = useState()

    const loadData = useCallback(async () => {
        try {
            const {
                albums,
                timeLine,
                couple,
                customer,
                wishes,
                weddingGift,
                schedules,
                hero,
                users
            } = (await appWeddingClient.getInfor()).data
            setMedia(albums)
            setTimeLines(timeLine)
            setCouple(couple)
            setWeddingGift(weddingGift)
            setWishes(wishes)
            setSchedules(schedules)
            if (users?.groom && users?.bride) {
                setAddress({
                    groom: {
                        name: users.groom.name,
                        shortName: users.groom.shortName,
                        address: users.groom.address,
                        mapUrl: users.groom.mapUrl,
                        embedUrl: users.groom.embedUrl
                    },
                    bride: {
                        name: users.bride.name,
                        shortName: users.bride.shortName,
                        address: users.bride.address,
                        mapUrl: users.bride.mapUrl,
                        embedUrl: users.bride.embedUrl
                    }
                })
            }
            if (customer) {
                setCustomer(customer)
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
                    }
                    else if (item.href === "/#address") {
                        if (users?.groom && users?.bride) {
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
    }, [setNavItems])
    useEffect(() => {
        loadData()
    }, [loadData])

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
                <WeddingWishes initialWishes={wishes || []} />
                {weddingGift && <WeddingGift weddingGift={weddingGift} />}
                {address && <Address groomData={address.groom} brideData={address.bride} />}
                <MusicToggle />
            </main>
        </>
    )
}
