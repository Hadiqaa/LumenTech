"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp, AlertTriangle } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    title: "Token Price Prediction",
    description:
      "AI predicts a 15% increase in LumenToken price over the next 30 days based on current market trends and project milestones.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description:
      "Potential volatility detected in the AstroChain project. Consider adjusting your strategy to mitigate risks.",
  },
  {
    icon: Brain,
    title: "Optimization Suggestion",
    description:
      "Reallocating 10% of resources from QuantumSwap to AstroChain could improve overall portfolio performance by 8%.",
  },
]

export function AIInsights() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">AI-Driven Insights</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight, index) => (
            <Card key={insight.title}>
              <CardHeader>
                <insight.icon className="h-8 w-8 text-primary" />
                <CardTitle>{insight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{insight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

