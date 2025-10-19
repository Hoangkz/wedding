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
export const generateId = (length: number = 6): string => {
  const nanoid = customAlphabet(ALPHABET_ALPHANUMERIC, length)
  return nanoid()
}

export interface Context {
  params: Promise<{ id: string }>
}
