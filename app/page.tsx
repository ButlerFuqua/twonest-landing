import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ShareButton } from "./components/share-button"
import { ScrollToTop } from "./components/scroll-to-top"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="TwoNest Logo" width={32} height={32} className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">TwoNest</span>
          </div>
          <div className="flex items-center gap-4">
            <ShareButton />
            <Button asChild>
              <Link href="https://www.app.twonest.app">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Co-Parent Smarter. <span className="text-teal-600">Raise Stronger.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
            Because your child deserves clarity, not chaos.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2 bg-teal-600 hover:bg-teal-700">
              <Link href="https://www.app.twonest.app">
                Create Your Nest <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white dark:from-teal-950/20 dark:via-background dark:to-background"></div>
      </section>

      {/* Transparent Communication Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 inline-block rounded-full bg-teal-100 dark:bg-teal-900 px-4 py-1 text-sm font-medium text-teal-800 dark:text-teal-100">
                Be Transparent—Without the Tension
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                You don't have to talk to stay on the same page.
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                TwoNest lets you share routines, rules, and updates without direct communication—so your child can
                experience consistency across both homes without being exposed to conflict.
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Because clarity shouldn't require confrontation. And your child should never have to carry the weight of
                your communication gaps.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-teal-900/20 p-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/app-mockup.png"
                  alt="TwoNest app showing a parent sharing an update about their child's school day"
                  width={800}
                  height={600}
                  className="w-full h-auto bg-white dark:bg-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Experience Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-teal-100 dark:bg-teal-900 px-4 py-1 text-sm font-medium text-teal-800 dark:text-teal-100">
              Built for Your Child's Experience
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Focused on what matters most—your child
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Most co-parenting tools focus on court orders and custody logs. TwoNest is built to reduce conflict,
              foster consistency, and protect the one person who didn't choose any of this—your child.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Everything You Need to Stay Aligned</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Tools designed to create consistency and reduce conflict
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Posts</h3>
              <p className="text-muted-foreground">
                Share school notes, updates, milestones, and changes without needing a live conversation.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Comments</h3>
              <p className="text-muted-foreground">Keep conversations focused and organized under each post.</p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">My Nest / Their Nest</h3>
              <p className="text-muted-foreground">
                Show what life looks like in your home—routines, expectations, and rules.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Co-Parent Invitations</h3>
              <p className="text-muted-foreground">
                Invite the other parent and build a shared child group with full access.
              </p>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Smart Notifications</h3>
              <p className="text-muted-foreground">Be alerted only when something important happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-b from-white to-teal-50 dark:from-background dark:to-teal-950/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-block rounded-full bg-teal-100 dark:bg-teal-900 px-4 py-1 text-sm font-medium text-teal-800 dark:text-teal-100">
                Limited-Time Launch Offer
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Get Lifetime Access for Just $8.49</h2>
              <div className="mb-6 flex items-center justify-center">
                <span className="mr-2 text-xl font-medium line-through text-muted-foreground">$4.99/month</span>
                <span className="rounded-full bg-teal-100 dark:bg-teal-900 px-3 py-1 text-sm font-medium text-teal-800 dark:text-teal-100">
                  Save 85%+
                </span>
              </div>
              <p className="text-lg text-muted-foreground">One-time payment. Full app. No subscriptions. No catch.</p>
              <p className="text-sm text-muted-foreground">Available to the first 1,000 families only.</p>
            </div>

            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span>Unlimited posts and comments</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span>Full access to My Nest / Their Nest features</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span>Co-parent invitations</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span>Smart notifications</span>
              </div>
              <div className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-teal-600 dark:text-teal-400" />
                <span>All future updates</span>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="mb-4 w-full gap-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 dark:text-gray-900"
              >
                <Link href="https://www.app.twonest.app">
                  Create Your Nest <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">Because peace and clarity shouldn't cost $300 a year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-teal-600 dark:bg-teal-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Start Free Today</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-teal-100">
            No credit card. No commitment. Just a better, calmer way to co-parent.
          </p>
          <Button
            size="lg"
            asChild
            className="mb-4 gap-2 bg-white text-teal-600 hover:bg-teal-50 dark:bg-teal-950 dark:text-white dark:hover:bg-teal-900"
          >
            <Link href="https://www.app.twonest.app">
              Create Your Nest <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <div className="mt-8 flex justify-center">
            <ShareButton variant="outline" className="border-teal-400 text-white hover:bg-teal-700" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
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
