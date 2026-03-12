import fs from "fs/promises"
import path from "path"

import { customAlphabet } from "nanoid"

export async function saveBase64ImageAndGetUrl(
  base64DataUrl: string,
  relativePath: string
): Promise<string> {
  const parts = base64DataUrl.split(";base64,")
  if (parts.length !== 2) {
    throw new Error("Dữ liệu Base64 không đúng định dạng Data URL.")
  }
  const base64Data = parts[1]
  const buffer = Buffer.from(base64Data, "base64")

  const normalizedRelativePath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath

  const fullPath = path.join(process.cwd(), "public", normalizedRelativePath)
  const targetDir = path.dirname(fullPath)

  await fs.mkdir(targetDir, { recursive: true })
  await fs.writeFile(fullPath, buffer)
  return `/${normalizedRelativePath}`
}

const ALPHABET_ALPHANUMERIC = "0123456789abcdeuvwxyz"
export const generateId = (length: number = 6, has: string = ALPHABET_ALPHANUMERIC): string => {
  const nanoid = customAlphabet((has || ALPHABET_ALPHANUMERIC), length)
  return nanoid()
}

export interface Context {
  params: Promise<{ id: string }>
}

export const dataLocal = {
  "albums": [
    "/album/B4OvAG52bwUsZAEnQjlq1",
    "/album/c0KOoFU7w6qOkk8HrxwZT",
    "/album/FjeXfcnCoF0Fct4fp2Kkt",
    "/album/FjeYjXel6qLXKYP1War7v",
    "/album/FrHI1mB-IiJAhCkQFKNYZ",
    "/album/iece5F6eXr8O8nK57gNAo",
    "/album/jDIjd90_fFI8wHkcSFTwc",
    "/album/kB5nDJ_5l-lQkBxpen54H",
    "/album/MAvpHZfDb4hZYn0lSCcqn",
    "/album/nbc5yWRtK-SvkRoK9T-Cq",
    "/album/O_Ir3qR3vF1yW5ukHZko_",
    "/album/P11LEUIxftdPVSWYo2EsQ"
  ],
  "timeLine": [
    {
      "id": "mtscU4rsPSARQFAJRx5MN",
      "title": "Cuộc Trò Chuyện Định Mệnh",
      "desc": "Mình biết Liên từ hồi cấp 3, nhưng khi ấy chỉ là một cái tên thoáng qua, chưa từng có cơ hội trò chuyện. Đến năm cuối đại học, tình cờ thấy một bức ảnh của Liên, tim mình bỗng xao xuyến lạ. Từ hôm đó, mình cứ vô thức mở Facebook của cô ấy lên xem, rồi quyết định lấy hết can đảm để bắt chuyện.",
      "image": null,
      "index": 1
    },
    {
      "id": "ejQVJCaa-HY085RuwKchj",
      "title": "Hẹn ước trọn đời",
      "desc": "Từ những rung động đầu tiên đến khoảnh khắc vui buồn trong hơn 4 năm qua, mình hiểu rằng cô ấy không chỉ là người để yêu, mà là người để cùng đi hết chặng đường dài phía trước. Mình hứa sẽ trân trọng từng điều nhỏ bé, giữ trọn sự chung thủy và cùng cô ấy xây dựng một mái ấm đầy yêu thương. Với cô ấy, đó không chỉ là lời tỏ tình – mà là một hẹn ước trọn đời. ❤️ ✨",
      "image": null,
      "index": 3
    },
    {
      "id": "9wCSuRq01pNV7INBRfU4e",
      "title": "Ngày Dạm Ngõ",
      "desc": "Ngày dạm ngõ là khoảnh khắc đặc biệt khi hai gia đình chính thức gặp gỡ và mở lời cho chuyện trăm năm của chúng mình. Trong không khí ấm áp và chân thành ấy, mình cảm thấy rất bồi hồi – vừa xúc động, vừa hạnh phúc khi tình yêu của chúng mình nhận được sự chúc phúc từ hai bên gia đình.\nĐó không chỉ là một nghi thức truyền thống, mà còn là dấu mốc ý nghĩa khi hai gia đình bắt đầu gắn kết, cùng chứng kiến và ủng hộ cho hành trình mới của chúng mình – hành trình hướng tới một mái ấm hạnh phúc 💖🌿",
      "image": null,
      "index": 4
    }
  ],
  "users": {
    "bride": {
      "id": "6vx9vv",
      "userName": "codau",
      "shortName": "Kim Liên",
      "name": "Nguyễn Thị Kim Liên",
      "dob": "2001-01-15T17:00:00.000Z",
      "phone": "0327388003",
      "type": "Bride",
      "qrCodeUrl": "/qr/6vx9vv.png",
      "avatar": "/avatar/6vx9vv",
      "address": "Số 3, Ngõ Đồng Tâm, Đường Làng Tổ, Liên Hồng, Ô Diên, Hà Nội",
      "mapUrl": "https://maps.app.goo.gl/BUoY8LUuWYErTD7n9",
      "embedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.6113395112388!2d105.70459343076864!3d21.121278315263755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134ff5beb23b33b%3A0x241ccc4be5ea2b03!2zNDggxJDGsOG7nW5nIEzDoG5nIFThu5UsIExpw6puIEjhu5NuZywgxJBhbiBQaMaw4bujbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1773167644663!5m2!1svi!2s",
      "father": "Nguyễn Văn Sửu",
      "mother": "Lê Thị Bình",
      "bio": "Cô dâu là một cô gái xinh xắn và đáng yêu, luôn mang theo nụ cười dịu dàng như những đóa hoa mà cô yêu thích. Với trái tim ấm áp, cô luôn dành sự quan tâm và tình yêu trọn vẹn cho gia đình – nơi luôn là điều quý giá nhất trong cuộc sống của cô",
      "note": "",
      "title": "Tình Yêu Của H & L",
      "bank": "Ngân Hàng Quân Đội MB Bank",
      "account": "0327388003",
      "weddingDate": "2026-03-21T17:00:00.000Z",
      "weddingTime": "13:10",
      "lunarDate": "Dương Lịch",
      "createdAt": "2026-03-09T15:58:25.061Z",
      "updatedAt": "2026-03-10T16:37:44.250Z"
    },
    "groom": {
      "id": "f76acca5-3688-434d-ad1f-6f88569c4cba",
      "userName": "chure",
      "shortName": "Khắc Huy",
      "name": "Nguyễn Khắc Huy",
      "dob": "2001-11-08T17:00:00.000Z",
      "phone": "0339118095",
      "type": "Groom",
      "qrCodeUrl": "/qr/f76acca5-3688-434d-ad1f-6f88569c4cba.png",
      "avatar": "/avatar/f76acca5-3688-434d-ad1f-6f88569c4cba",
      "address": "Số 5, Ngõ 365, Cụm 9, Tiên Tân, Ô Diên, Hà Nội",
      "mapUrl": "https://maps.app.goo.gl/cQYQGKPLuFqL62xS7",
      "embedUrl": "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d232.60231323725765!2d105.67831964841889!3d21.127033047853295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA3JzM3LjMiTiAxMDXCsDQwJzQyLjMiRQ!5e0!3m2!1svi!2s!4v1773167861606!5m2!1svi!2s",
      "father": "Nguyễn Khắc Sản",
      "mother": "Nguyễn Thị Hà",
      "bio": "Chú rể là người đàn ông tinh tế và chỉnh chu, luôn nhẹ nhàng và chu đáo trong từng hành động. Anh trân trọng những giá trị giản dị của cuộc sống và luôn đặt gia đình ở vị trí quan trọng nhất",
      "note": "",
      "title": "Tình Yêu Của H & L",
      "bank": "Ngân Hàng Quân Đội MB Bank",
      "account": "0339118095",
      "weddingDate": "2026-03-21T17:00:00.000Z",
      "weddingTime": "13:10",
      "lunarDate": "Dương Lịch",
      "createdAt": "2026-03-09T15:48:07.321Z",
      "updatedAt": "2026-03-10T18:27:15.235Z"
    }
  },
  "couple": {
    "groom": {
      "type": "groom",
      "name": "Nguyễn Khắc Huy",
      "imageSrc": "/avatar/f76acca5-3688-434d-ad1f-6f88569c4cba",
      "fatherName": "Nguyễn Khắc Sản",
      "motherName": "Nguyễn Thị Hà",
      "bio": "Chú rể là người đàn ông tinh tế và chỉnh chu, luôn nhẹ nhàng và chu đáo trong từng hành động. Anh trân trọng những giá trị giản dị của cuộc sống và luôn đặt gia đình ở vị trí quan trọng nhất"
    },
    "bride": {
      "type": "bride",
      "name": "Nguyễn Thị Kim Liên",
      "imageSrc": "/avatar/6vx9vv",
      "fatherName": "Nguyễn Văn Sửu",
      "motherName": "Lê Thị Bình",
      "bio": "Cô dâu là một cô gái xinh xắn và đáng yêu, luôn mang theo nụ cười dịu dàng như những đóa hoa mà cô yêu thích. Với trái tim ấm áp, cô luôn dành sự quan tâm và tình yêu trọn vẹn cho gia đình – nơi luôn là điều quý giá nhất trong cuộc sống của cô"
    }
  },
  "customer": {
    "id": "946654",
    "name": "aaa",
    "type": "Groom",
    "invitation": "mời bạn tham dự",
    "invitedAt": "2026-03-10T17:27:00.000Z",
    "attended": 1,
    "lunarDate": "19/03/2026 04:10 AM",
    "createdAt": "2026-03-10T17:27:54.152Z",
    "updatedAt": "2026-03-10T18:10:14.607Z",
    "invitationText": "TRÂN TRỌNG KÍNH MỜI",
    "bodyText": "TỚI DỰ BỮA CƠM THÂN MẬT CHUNG VUI\nCÙNG CHÚNG TÔI MỪNG LỄ VU QUY",
    "eventTimeLarge": "00:27",
    "eventDay": "THỨ TƯ",
    "eventDate": "11",
    "eventMonthYear": "03.2026",
    "welcomeMessage": "Rất hân hạnh được đón tiếp!",
    "groomName": "Khắc Huy",
    "brideName": "Kim Liên",
    "venueType": "Tại tư gia nhà trai",
    "venueAddress": "Số 5, Ngõ 365, Cụm 9, Tiên Tân, Ô Diên, Hà Nội",
    "googleMapsLink": "https://maps.app.goo.gl/cQYQGKPLuFqL62xS7",
    "fatherBride": "Nguyễn Văn Sửu",
    "motherBride": "Lê Thị Bình",
    "fatherGroom": "Nguyễn Khắc Sản",
    "motherGroom": "Nguyễn Thị Hà"
  },
  "wishes": [
    {
      "id": "z044cv",
      "name": "Hiền",
      "desc": "Chúc hai bạn luôn hạnh phúc, yêu thương nhau thật nhiều và cùng nhau xây dựng một gia đình tràn đầy tiếng cười. Mong rằng hành trình phía trước sẽ luôn ngập tràn niềm vui và những kỷ niệm đẹp",
      "customerId": null,
      "createdAt": "2026-03-10T19:13:57.792Z",
      "updatedAt": "11/03 02:13"
    },
    {
      "id": "b92cby",
      "name": "Vân Anh",
      "desc": "Chúc mừng hai bạn đã tìm thấy mảnh ghép hoàn hảo của đời mình. Hãy cùng nhau viết nên những chương thật đẹp trong cuốn sách hôn nhân nhé!",
      "customerId": null,
      "createdAt": "2026-03-10T17:16:53.066Z",
      "updatedAt": "11/03 02:06"
    },
    {
      "id": "auz953",
      "name": "Dũng",
      "desc": "Hành trình 'Single' đã kết thúc, chúc mừng hai bạn chính thức gia nhập hội 'Xây tổ ấm'. Chúc tình yêu của hai bạn luôn tươi mới như ngày đầu.",
      "customerId": null,
      "createdAt": "2026-03-10T17:16:41.437Z",
      "updatedAt": "11/03 00:16"
    },
    {
      "id": "z2wwz0",
      "name": "Hoàng",
      "desc": "Trăm năm tình viên mãn, bạc đầu nghĩa phu thê. Chúc hai bạn một hành trình mới rực rỡ và luôn là chỗ dựa vững chắc cho nhau.",
      "customerId": null,
      "createdAt": "2026-03-10T17:16:29.037Z",
      "updatedAt": "11/03 00:59"
    },
    {
      "id": "2ec439",
      "name": "Ngọc Anh",
      "desc": "Chúc mừng hạnh phúc hai bạn! Chúc hai bạn sẽ xây dựng được một gia đình nhỏ ấm áp, đầy ắp tiếng cười.",
      "customerId": null,
      "createdAt": "2026-03-10T17:16:10.434Z",
      "updatedAt": "11/03 00:59"
    }
  ],
  "weddingGift": {
    "groom": {
      "title": "Nhà Trai",
      "qrCodeUrl": "/qr/f76acca5-3688-434d-ad1f-6f88569c4cba.png",
      "bank": "Ngân Hàng Quân Đội MB Bank",
      "account": "0339118095"
    },
    "bride": {
      "title": "Nhà Gái",
      "qrCodeUrl": "/qr/6vx9vv.png",
      "bank": "Ngân Hàng Quân Đội MB Bank",
      "account": "0327388003"
    }
  },
  "schedules": [
    {
      "id": "1_R4CmSMNzLos7KbjPaJ_",
      "title": "Lễ Ăn Hỏi",
      "desc": "Ngày ăn hỏi là khoảnh khắc đẹp đánh dấu bước khởi đầu cho hành trình chung của chúng tôi. Đây không chỉ là ngày hai gia đình chính thức gặp gỡ, mà còn là khoảnh khắc thiêng liêng đánh dấu sự gắn kết và chấp thuận để hai trái tim cùng nhau xây dựng một mái ấm hạnh phúc ❤",
      "address": "",
      "image": "/schedule/zI9nubVX9v8IPf6xydrKJ",
      "day": "2026-03-20T17:00:00.000Z",
      "time": "2026-03-20T23:15:00.000Z",
      "createdAt": "2026-03-10T17:50:06.871Z",
      "updatedAt": "2026-03-10T18:01:43.716Z",
      "date": "06:15 - 21/03/2026"
    },
    {
      "id": "UlxxFBZzdzBv-ncm0piI8",
      "title": "Lễ Thành Hôn",
      "desc": "Lễ Thành Hôn là thời khắc hai trái tim chính thức nên duyên vợ chồng. Trước sự chứng kiến và chúc phúc của gia đình, bạn bè và người thân, chúng tôi cùng nhau bước vào một hành trình mới – hành trình của yêu thương, sẻ chia và xây dựng một mái ấm hạnh phúc ❤",
      "address": "Số 5, Ngõ 365, Tiên Tân, Ô Diên, Hà Nội",
      "image": "/schedule/qtD0SboLSaBS-1-T6rCSK",
      "day": "2026-03-21T17:00:00.000Z",
      "time": "2026-03-22T06:10:00.000Z",
      "createdAt": "2026-03-10T17:58:05.951Z",
      "updatedAt": "2026-03-10T18:04:24.163Z",
      "date": "13:10 - 22/03/2026"
    },
    {
      "id": "fdUExHQg5kX5UfKhU8l8L",
      "title": "Lễ Vu Quy",
      "desc": "Lễ Vu Quy là khoảnh khắc thiêng liêng khi cô dâu chính thức rời mái ấm thân thương để bắt đầu một hành trình mới bên người bạn đời. Trong sự chúc phúc của gia đình và người thân, đó không chỉ là nghi thức truyền thống mà còn là dấu mốc ý nghĩa của tình yêu và sự gắn kết giữa hai gia đình ❤",
      "address": "Số 3, Ngõ Đồng Tâm, Đường Làng Tổ, Liên Hồng, Ô Diên, Hà Nội",
      "image": "/schedule/8-uQMbvdV215rhOP3DBQm",
      "day": "2026-03-21T17:00:00.000Z",
      "time": "2026-03-22T06:10:00.000Z",
      "createdAt": "2026-03-10T17:58:45.648Z",
      "updatedAt": "2026-03-10T18:04:33.442Z",
      "date": "13:10 - 22/03/2026"
    }
  ],
  "hero": {
    "groomName": "Khắc Huy",
    "brideName": "Kim Liên",
    "weddingDate": "2026-03-22T06:10:00.000Z"
  }
}