"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

const tradingActivities = [
  { username: "@trader1", amount: "$1,200", type: "Buy BTC", position: { top: "10%", left: "5%" } },
  { username: "@trader2", amount: "$850", type: "Sell ETH", position: { top: "15%", right: "10%" } },
  { username: "@trader3", amount: "$3,000", type: "Buy LAI", position: { bottom: "20%", left: "15%" } },
  { username: "@trader4", amount: "$500", type: "Sell BTC", position: { bottom: "25%", right: "5%" } },
]

export function TransferVisualization() {
  return (
    <section className="hidden lg:block container mb-10">
      <div className="text-center space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium tracking-wider text-orange-500"
        >
          AI-POWERED TRADING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Automated Solana-Powered Trading
          <br />
          in Real-Time
        </motion.h2>
      </div>

      <div className="relative mt-10 h-[600px] w-full">
        {/* World Map Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="1200" height="600" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h1200v600H0z" fill="none"/%3E%3Cpath d="M200 100q400 0 800 400M200 200q400 0 800 200M200 300q400 0 800 0M200 400q400 0 800-200M200 500q400 0 800-400" stroke="%23ffffff" stroke-width="0.5" stroke-dasharray="4 4"/%3E%3C/svg%3E\')',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Blue Glow */}
        <div className="absolute left-[10%] top-[10%] size-32 rounded-full bg-blue-500/20 blur-3xl" />

        {/* Central Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Card className="flex w-64 flex-col gap-2 bg-card/50 p-4 backdrop-blur">
            <p className="text-sm text-muted-foreground">AI Trading Performance</p>
            <p className="text-2xl font-bold text-blue-500">+18.7%</p>
            <div className="mt-2 flex h-12 items-end gap-1">
              {[0.4, 0.6, 0.3, 0.8, 0.5, 0.7, 0.4].map((height, i) => (
                <div key={i} className="flex-1 rounded-sm bg-blue-500" style={{ height: `${height * 100}%` }} />
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Trading Activity Cards */}
        {tradingActivities.map((activity, index) => (
          <motion.div
            key={activity.username}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="absolute"
            style={{
              ...activity.position,
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
            }}
          >
            <Card className="flex w-48 flex-col items-center gap-2 bg-card/50 p-4 backdrop-blur">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="size-6 text-primary" />
              </div>
              <p className="font-medium">{activity.username}</p>
              <p className="text-sm text-muted-foreground">{activity.type}</p>
              <p className="text-lg font-semibold">{activity.amount}</p>
            </Card>
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 h-full w-full" style={{ filter: "blur(1px)" }}>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M200 150 Q 600 300 1000 150"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: 0.7 }}
            d="M200 450 Q 600 300 1000 450"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

