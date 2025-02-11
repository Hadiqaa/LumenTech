"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BarChartIcon as ChartBar, Lock, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Optimized Schedules",
    description: "Intelligent vesting schedules tailored to your project's unique needs and market conditions.",
  },
  {
    icon: ChartBar,
    title: "Real-time Analytics",
    description: "Monitor vesting progress and token distribution with advanced, real-time analytics.",
  },
  {
    icon: Lock,
    title: "Smart Contract Security",
    description: "Bank-grade security measures to protect your tokens throughout the vesting period.",
  },
  {
    icon: Zap,
    title: "Automated Distributions",
    description: "Hassle-free, automated token distributions at each vesting milestone.",
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description: "Stay compliant with regulatory requirements using our built-in compliance checks.",
  },
  {
    icon: Users,
    title: "Stakeholder Dashboard",
    description: "Transparent, easy-to-use dashboards for all vesting participants.",
  },
]

export function VestingFeatures() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Vesting Features
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

