"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Video, Headphones } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    icon: FileText,
    title: "AI in DeFi: A Comprehensive Guide",
    type: "Whitepaper",
    description: "An in-depth exploration of how artificial intelligence is transforming decentralized finance.",
    href: "/resources/ai-in-defi-whitepaper",
  },
  {
    icon: Video,
    title: "Understanding Token Vesting with AI",
    type: "Video Tutorial",
    description: "A step-by-step video guide on how AI optimizes token vesting strategies for maximum efficiency.",
    href: "/resources/token-vesting-tutorial",
  },
  {
    icon: Headphones,
    title: "The Future of Automated Trading",
    type: "Podcast",
    description: "Listen to industry experts discuss the evolution of AI-driven trading in cryptocurrency markets.",
    href: "/resources/automated-trading-podcast",
  },
]

export function FeaturedResources() {
  return (
    <section className="container">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Resources</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <resource.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{resource.type}</p>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

