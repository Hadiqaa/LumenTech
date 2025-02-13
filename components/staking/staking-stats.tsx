"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Coins, TrendingUp, Lock } from "lucide-react"

const stats = [
  {
    title: "Total Value Locked",
    value: "$0B",
    icon: Lock,
    change: "+0%",
  },
  {
    title: "Active Stakers",
    value: "0+",
    icon: Users,
    change: "+0%",
  },
  {
    title: "Average APY",
    value: "0%",
    icon: TrendingUp,
    change: "+0%",
  },
  {
    title: "Total Rewards Distributed",
    value: "0LUM",
    icon: Coins,
    change: "+0%",
  },
]

export function StakingStats() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        LumenTech Staking Ecosystem
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <stat.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-lg font-semibold">{stat.title}</h3>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-green-500">{stat.change}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

