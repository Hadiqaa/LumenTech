"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WalletIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const wallets = [
  {
    name: "Bitcoin",
    symbol: "BTC/USDT",
    price: 40322.5,
    change: 0.23,
    chart: "/bitcoin.jpg",
    icon: "/bitcoin-logo.webp",
  },
  {
    name: "Ethereum",
    symbol: "ETH/USDT",
    price: 2250.75,
    change: -0.15,
    chart: "/ethereum.jpg",
    icon: "/ethereum-logo.webp",
  },
  {
    name: "Ripple",
    symbol: "XRP/USDT",
    price: 0.55,
    change: 1.2,
    chart: "/ripple.jpg",
    icon: "/ripple-logo.png",
  },
]

export function WalletSection() {
  return (
    <section className="container space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Wallets</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Connect your wallet to start managing your tokens with AI-powered insights.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {wallets.map((wallet, index) => (
          <motion.div
            key={wallet.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-card overflow-hidden border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={wallet.icon || "/placeholder.svg"}
                      alt={`${wallet.name} logo`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{wallet.name}</h3>
                      <p className="text-sm text-muted-foreground">{wallet.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">${wallet.price.toLocaleString()}</p>
                    <p className={wallet.change > 0 ? "text-green-500" : "text-red-500"}>
                      {wallet.change > 0 ? "+" : ""}
                      {wallet.change}%
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Image
                    src={wallet.chart || "/placeholder.svg"}
                    alt={`${wallet.name} price chart`}
                    width={200}
                    height={100}
                    className="h-[100px] w-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="mt-8" asChild>
            <Link href="/connect-wallet">
              <WalletIcon className="mr-2 size-5" />
              Connect Wallet
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

