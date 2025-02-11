"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp, Shield, Zap, BarChart3, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Driven Strategies",
    description: "Our AI analyzes market trends to optimize your staking strategy for maximum returns.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic APY Optimization",
    description: "Automatically adjust your staking allocations based on real-time APY changes across networks.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Bank-grade security measures and smart contract audits to protect your staked assets.",
  },
  {
    icon: Zap,
    title: "Instant Rewards",
    description: "Receive staking rewards in real-time, with the option for automatic compounding.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Detailed insights into your staking performance with AI-powered predictions.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Staking",
    description: "Choose between locked and flexible staking options to suit your investment strategy.",
  },
]

export function StakingFeatures() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Staking Features
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

