"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the security of our users' assets and data above all else.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in AI and blockchain.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "We believe in the power of community and actively involve our users in our development.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We strive to create solutions that save time and resources for our users.",
  },
]

export function Values() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Core Values</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <value.icon className="h-10 w-10 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

