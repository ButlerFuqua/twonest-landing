import Link from "next/link"
import Image from "next/image"
import { getMarkdownContent } from "../lib/markdown"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollToTop } from "../components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | TwoNest",
  description: "Privacy policy for the TwoNest co-parenting platform.",
}

export default async function PrivacyPage() {
  const content = await getMarkdownContent("privacy.md")

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="TwoNest Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">TwoNest</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <article className="prose dark:prose-invert max-w-3xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
        </article>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="TwoNest Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold">TwoNest</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/data-collection" className="hover:text-foreground">
                Data Collection
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              &copy; {new Date().getFullYear()} TwoNest. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  return (
    markdown
      // Convert headers
      .replace(/^# (.*$)/gm, "<h1>$1</h1>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      // Convert bold text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Convert lists
      .replace(/^- (.*$)/gm, "<li>$1</li>")
      // Wrap lists in ul
      .replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>")
      // Convert paragraphs
      .replace(/^(?!<h|<ul|<li|<\/ul)(.*$)/gm, "<p>$1</p>")
      // Convert links
      .replace(/\[(.*?)\]$$(.*?)$$/g, '<a href="$2">$1</a>')
  )
}
