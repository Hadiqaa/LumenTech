"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift } from "lucide-react"
import Link from "next/link"

export function AirdropHero() {
  return (
    <section className="container pt-20 pb-16">
      <div className="flex flex-col items-center text-center lg:flex-row lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered <span className="text-primary">Token Airdrops</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Revolutionize your token distribution with LumenTech's intelligent airdrop platform. Maximize engagement and
            community growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/login">
            <Button size="lg">
              Launch Airdrop
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 lg:mt-0 lg:w-1/2 "
        >
          <div className="relative lg:ml-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
            <div className="relative rounded-2xl bg-card p-8 shadow-xl flex flex-col items-center lg:items-start">
              <Gift className="h-16 w-16 text-primary" />
              <h3 className="mt-6 text-2xl font-bold">Smart Airdrop Distribution</h3>
              <p className="mt-4 text-muted-foreground">
                Our AI algorithms ensure fair and strategic token distribution to maximize community engagement and
                project growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

