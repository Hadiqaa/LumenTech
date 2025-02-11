import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"
import type React from "react"

export const metadata: Metadata = {
  title: "LumenTech - AI-Powered Web3 Token Management",
  description: "Next-generation token management platform with AI-driven insights at lumentech.fun",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative mx-auto min-h-screen max-w-screen-2xl bg-gradient-to-b from-background/90 to-background/50 dark:from-background/90 dark:to-background">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster theme="dark" position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}

