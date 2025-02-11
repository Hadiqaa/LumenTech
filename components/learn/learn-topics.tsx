"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Coins, Lock, Zap, BarChart, Users } from "lucide-react"
import Link from "next/link"

const topics = [
  {
    icon: Brain,
    title: "AI in Blockchain",
    description:
      "Discover how artificial intelligence is enhancing blockchain technology and decentralized applications.",
    href: "/learn/ai-in-blockchain",
  },
  {
    icon: Coins,
    title: "Token Economics",
    description:
      "Learn about the principles of token economics and how AI can optimize token distribution and utility.",
    href: "/learn/token-economics",
  },
  {
    icon: Lock,
    title: "Smart Contract Security",
    description: "Explore the importance of smart contract security and how AI can help identify vulnerabilities.",
    href: "/learn/smart-contract-security",
  },
  {
    icon: Zap,
    title: "Automated Trading",
    description:
      "Understand the basics of automated trading in crypto markets and the role of AI in optimizing strategies.",
    href: "/learn/automated-trading",
  },
  {
    icon: BarChart,
    title: "DeFi Analytics",
    description: "Learn how AI-driven analytics are providing deeper insights into decentralized finance markets.",
    href: "/learn/defi-analytics",
  },
  {
    icon: Users,
    title: "Community Governance",
    description: "Explore the concepts of decentralized governance and how AI can enhance decision-making processes.",
    href: "/learn/community-governance",
  },
]

export function LearnTopics() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Learning Topics</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={topic.href} className="block h-full">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <topic.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

