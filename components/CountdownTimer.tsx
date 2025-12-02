"use client"
import dayjs from "dayjs"
import { useEffect, useState } from "react"

// const TARGET_DATE = new Date("2025-11-21T10:00:00").getTime()

const calculateTimeLeft = (weddingDate: string) => {
  const date = dayjs(weddingDate)
  const now = dayjs()
  const distance = date.diff(now) // milliseconds

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOver: true,
    }
  }

  const days = date.diff(now, "day")
  const hours = date.diff(now.add(days, "day"), "hour")
  const minutes = date.diff(now.add(days, "day").add(hours, "hour"), "minute")
  const seconds = date.diff(
    now.add(days, "day").add(hours, "hour").add(minutes, "minute"),
    "second"
  )

  return { days, hours, minutes, seconds, isOver: false }
}
const CountdownTimer = ({ weddingDate }: { weddingDate: string }) => {
  const [isClient, setIsClient] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [isClient, weddingDate])

  if (!isClient) {
    return (
      <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 mt-6 opacity-0">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center 
                        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                        rounded-full border-2 bg-white/10"
          />
        ))}
      </div>
    )
  }

  if (timeLeft.isOver) {
    return <div className="text-xl text-white">Đám cưới đã diễn ra!</div>
  }

  const timerUnits = [
    { value: timeLeft.days, label: "Ngày", className: "border-teal-500 text-teal-500" },
    { value: timeLeft.hours, label: "Giờ", className: "border-teal-500 text-teal-500" },
    { value: timeLeft.minutes, label: "Phút", className: "border-teal-500 text-teal-500" },
    { value: timeLeft.seconds, label: "Giây", className: "border-red-500 text-red-500" },
  ]

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 mt-6">
      {timerUnits.map((unit, index) => (
        <div
          key={index}
          className={`
                        flex flex-col items-center justify-center 
                        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                        rounded-full border-2 sm:border-3 md:border-4 bg-white/10 
                        shadow-lg transition-all duration-300 hover:scale-105
                        ${unit.className}
                    `}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs md:text-sm uppercase font-semibold">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
