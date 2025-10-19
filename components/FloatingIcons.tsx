"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type FloatingHeartsProps = {
  count: number
  icons?: string[] // <-- hỗ trợ mảng icon
}

const FloatingHearts = ({ count, icons }: FloatingHeartsProps) => {
  const [hearts, setHearts] = useState<
    {
      left: number
      top: number
      size: number
      delay: number
      duration: number
      offsetX: number
      icon: string
    }[]
  >([])

  useEffect(() => {
    const availableIcons = icons && icons.length > 0 ? icons : ["❤️"]

    const newHearts = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 3,
      offsetX: Math.random() * 30 - 15,
      icon: availableIcons[Math.floor(Math.random() * availableIcons.length)], // random icon
    }))

    setHearts(newHearts)
  }, [count, icons])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-100">
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: `${h.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, h.offsetX, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: h.delay,
          }}
        >
          {h.icon}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
