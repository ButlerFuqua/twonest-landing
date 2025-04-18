import fs from "fs"
import path from "path"

export async function getMarkdownContent(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), "app", filename)
  const fileContent = fs.readFileSync(filePath, "utf8")
  return fileContent
}
