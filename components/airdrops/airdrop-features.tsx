"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Users, Zap, BarChart, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Driven Targeting",
    description: "Intelligent recipient selection based on engagement metrics and community contribution.",
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Boost your community size and engagement through strategic token distribution.",
  },
  {
    icon: Zap,
    title: "Automated Distribution",
    description: "Effortlessly distribute tokens to thousands of wallets with just a few clicks.",
  },
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description: "Track the impact of your airdrops with comprehensive, real-time data insights.",
  },
  {
    icon: Shield,
    title: "Anti-Sybil Measures",
    description: "Advanced algorithms to prevent airdrop farming and ensure fair distribution.",
  },
  {
    icon: Globe,
    title: "Multi-chain Support",
    description: "Launch airdrops across multiple blockchains from a single, unified platform.",
  },
]

export function AirdropFeatures() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Airdrop Features
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

