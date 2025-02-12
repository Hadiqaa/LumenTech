"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coins } from "lucide-react"
import Link from "next/link"

export function StakingHero() {
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
            AI-Powered <span className="text-primary">Token Staking</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Maximize your crypto holdings with LumenTech's intelligent staking platform. Earn rewards while contributing
            to network security.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link href="/login">
              <Button size="lg">
                Start Staking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/learn">
              <Button size="lg" variant="outline">
                Learn More
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
              <Coins className="h-16 w-16 text-primary" />
              <h3 className="mt-6 text-2xl font-bold">Intelligent Yield Optimization</h3>
              <p className="mt-4 text-muted-foreground">
                Our AI algorithms continuously analyze market conditions to maximize your staking rewards and minimize
                risks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

