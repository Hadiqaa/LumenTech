"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp, ShieldCheck, Zap, BarChart3, Coins } from "lucide-react"

const features = [
  {
    title: "AI Market Analysis",
    description: "Our advanced AI continuously analyzes market trends and patterns to make informed trading decisions.",
    icon: Brain,
  },
  {
    title: "Automated Trading",
    description: "Set your strategy and let LumenTech execute trades on solana coins automatically, 24/7, without emotional bias.",
    icon: Zap,
  },
  {
    title: "Risk Management",
    description: "Built-in risk assessment and stop-loss features to protect your investments in volatile markets.",
    icon: ShieldCheck,
  },
  {
    title: "Performance Tracking",
    description: "Real-time dashboards and reports to monitor your portfolio's performance and AI-driven insights.",
    icon: BarChart3,
  },
  {
    title: "Multi-Exchange Support",
    description: "Trade across multiple cryptocurrency exchanges from a single, unified platform.",
    icon: Coins,
  },
  {
    title: "Predictive Analytics",
    description: "Leverage machine learning models to forecast potential market movements and optimize trades.",
    icon: TrendingUp,
  },
]

export function Features() {
  return (
    <section className="container space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Powered Trading Features based on Solana</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Harness the power of artificial intelligence to revolutionize your crypto trading strategy.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="glass-card border-0 h-[226px]">
              <CardHeader>
                <feature.icon className="size-12 rounded-lg bg-primary/10 p-2 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

