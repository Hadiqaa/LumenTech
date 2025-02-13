"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, DollarSign, Code } from "lucide-react"

const achievements = [
  {
    icon: Users,
    title: "0 Users",
    description: "",
  },
  {
    icon: DollarSign,
    title: "0 TVL",
    description: "",
  },
  {
    icon: Code,
    title: "0 Integrations",
    description: "",
  },
  {
    icon: Award,
    title: "0 Awards",
    description: "",
  },
]

export function Achievements() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Our Achievements</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <achievement.icon className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="text-center text-2xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

