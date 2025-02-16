"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TokenChart } from "@/components/token-chart"
import { RocketIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="container flex flex-col items-center justify-between gap-5 pt-20 md:flex-row md:gap-12 lg:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 text-center md:items-start md:text-left lg:gap-8 md:w-3/4 lg:w-full"
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">LumenTech</span>{" "}
          Automated Crypto Trading
        </h1>
        <p className="max-w-[600px] text-muted-foreground sm:text-xl">
          Experience the future of crypto trading with our Solana-based AI-powered automation. LumenTech analyzes markets, executes
          trades, and maximizes your returns 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg">
                <RocketIcon className="mr-2 size-5" />
                Start Auto-Trading
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Start Auto-Trading</DialogTitle>
                <DialogDescription>
                  To begin auto-trading, you need to connect your wallet and set up your trading preferences.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <p>
                  1. Connect your wallet
                  <br />
                  2. Set your risk tolerance
                  <br />
                  3. Choose your preferred cryptocurrencies
                  <br />
                  4. Set your investment amount
                </p>
                <Button asChild>
                  <Link href="/connect-wallet">Connect Wallet to Start</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="lg" asChild>
            <Link href="/learn">Explore AI Features</Link>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-[500px] md:w-1/2"
      >
        <TokenChart />
      </motion.div>
    </div>
  )
}

