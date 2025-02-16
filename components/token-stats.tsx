"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap, BarChart3 } from "lucide-react"

const stats = [
  {
    title: "Total Trading Volume",
    value: "$0B",
    change: "+0%",
    icon: BarChart3,
  },
  {
    title: "AI-Executed Solana coin Trades",
    value: "0M",
    change: "+0%",
    icon: Zap,
  },
  {
    title: "Active Traders",
    value: "0K",
    change: "0%",
    icon: Users,
  },
  {
    title: "Avg. ROI (30d)",
    value: "$0",
    change: "0%",
    icon: TrendingUp,
  },
]

export function TokenStats() {
  return (
    <section className="container">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-card border-0">
              <CardContent className="flex items-center gap-4 p-6">
                <stat.icon className="size-12 rounded-lg bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-green-500">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

