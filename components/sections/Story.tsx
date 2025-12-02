
"use client"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import React from "react"
import FloatingHearts from "../FloatingIcons"
import { Heart1, Heart2 } from "../Heart"

interface StoryEvent {
  year: number
  title: string
  desc: string
  Icon: React.ElementType
  alignment: "left" | "right"
}

// const storyEvents: StoryEvent[] = [
//   {
//     year: 2018,
//     title: "Lần đầu gặp gỡ",
//     desc:
//       "Chúng tôi tình cờ gặp nhau tại một buổi tiệc sinh nhật của người bạn chung. Tình yêu sét đánh từ cái nhìn đầu tiên!",
//     Icon: Heart,
//     alignment: "right",
//   },
//   {
//     year: 2019,
//     title: "Hẹn hò chính thức",
//     desc:
//       "Sau nhiều tháng tìm hiểu, chúng tôi chính thức trở thành một cặp. Những buổi hẹn hò lãng mạn bắt đầu.",
//     Icon: Flower2,
//     alignment: "left",
//   },
//   {
//     year: 2021,
//     title: "Lời cầu hôn lãng mạn",
//     desc:
//       'Anh ấy quỳ gối dưới ánh nến và nói lời cầu hôn lãng mạn nhất. Cô ấy đã nói "Em đồng ý!".',
//     Icon: AArrowDown,
//     alignment: "right",
//   },
//   {
//     year: 2022,
//     title: "Ngày cưới hạnh phúc",
//     desc:
//       "Một chương mới được mở ra. Chúng tôi sẽ cùng nhau xây dựng tổ ấm và đồng hành suốt cuộc đời.",
//     Icon: Home,
//     alignment: "left",
//   },
// ]

const themeColor = "text-[#e32b42]"
const themeBg = "bg-[#e32b42]"

const Story = ({ storyEvents }: { storyEvents: any[] }) => {
  return (
    <section
      id="story"
      className="relative"
      style={{
        backgroundImage: `url('/layout/story')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover",
      }}
    >
      <FloatingHearts count={40} icons={["💕", "❤️", "🌸"]} />
      <div className="py-30 bg-white" style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.4 }}
          >

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h1
                className="test text-xl md:text-2xl text-center font-bold bg-gradient-to-r 
                        from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
                style={{ fontSize: 55 }}
              >
                Chuyện Tình Yêu
              </h1>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: [1, 1.15, 1],
                opacity: 1,
              }}
              viewport={{ once: false }}
            >
              <Heart1 />
            </motion.div>

            <motion.div
              style={{
                width: "100",
                display: "flex",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <Image src="/bird.png" width={100} height={100} alt="vector-img" />
            </motion.div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="
                                absolute 
                                md:left-1/2 md:transform md:-translate-x-1/2 
                                md:w-1 md:h-full md:bg-gray-200 md:block
                                left-[20px] w-0.5 h-full bg-gray-200 block
                            "
            ></div>

            {storyEvents?.map((event, index) => {
              const check = index % 2
              return <motion.div
                key={event.id}
                className="relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ amount: 0.4, once: false }}
              >
                <div
                  className={`mb-8 flex justify-end md:justify-between items-center w-full 
                                    ${check
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                    }`}
                >

                  <div className="w-full md:w-5/12 relative" style={{ maxWidth: "80%" }}>

                    <div
                      className={`
                                                absolute top-5 h-0 w-0 border-solid border-transparent
                                                border-t-[16px] border-b-[16px]
                                                border-r-[18px] border-r-white left-[-16px]
                                                ${check
                          ? "md:border-r-[18px] md:border-r-white md:left-[-16px] md:border-l-0 md:right-auto"
                          : "md:border-l-[18px] md:border-l-white md:right-[-16px] md:border-r-0 md:left-auto"
                        }
                                            `}
                    ></div>

                    <div
                      className={`p-4 rounded-lg shadow-lg ${check ? "md:text-right" : "md:text-left"
                        } bg-gray-50 hover:shadow-xl transition-shadow duration-300`}
                    >
                      <h3
                        style={{
                          textTransform: "capitalize",
                          fontFamily: "Great Vibes, cursive",
                        }}
                        className={`text-3xl font-bold mb-2 ${themeColor}`}
                      >
                        {event.title}
                      </h3>
                      <p className="text-gray-700 text-justify">{event.desc}</p>

                    </div>
                  </div>
                  {event?.image &&
                    <div className="hidden md:flex flex-col items-center rounded w-2/12">
                      <div
                        className={`flex items-center justify-center shadow-lg`}
                      >
                        <img src={event.image} className="rounded" />
                      </div>
                    </div>
                  }
                  {event?.Icon &&
                    <div className="hidden md:flex flex-col items-center w-2/12">
                      <div
                        className={`w-8 h-8 rounded-full ${themeBg} flex items-center justify-center shadow-lg`}
                      >
                        {/* <event.Icon className="w-5 h-5 text-white" /> */}
                      </div>
                    </div>
                  }
                </div>

                <div className="hidden md:block w-full absolute top-0">
                  <div
                    className={`hidden md:block py-1 px-3 rounded-full text-white text-lg font-bold`}
                  >
                    <Heart2 />
                  </div>
                </div>
                <div className="w-30 absolute left-[-39] md:hidden top-0">
                  <div className={`py-1 px-3 rounded-full text-white text-lg font-bold`}>
                    <Heart2 />
                  </div>
                </div>
              </motion.div>
            })}
          </div>

          <motion.div
            className="mt-16 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <Quote className={`w-10 h-10 mx-auto mb-4 ${themeColor}`} />
            <p className="text-2xl italic text-gray-800">
              Chúng tôi đã sẵn sàng cho hành trình vạn dặm tiếp theo của cuộc đời mình!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story
