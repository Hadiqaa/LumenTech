"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI in Decentralized Finance",
    excerpt:
      "Explore how artificial intelligence is reshaping the landscape of DeFi and creating new opportunities for investors and developers alike.",
    date: "2023-06-15",
    author: "Dr. Sophia Chen",
    slug: "future-of-ai-in-defi",
  },
  {
    title: "Optimizing Token Vesting Strategies with Machine Learning",
    excerpt:
      "Learn how LumenTech's AI algorithms are revolutionizing token vesting, ensuring better alignment between projects and their stakeholders.",
    date: "2023-06-10",
    author: "Alex Rodriguez",
    slug: "optimizing-token-vesting-with-ml",
  },
  {
    title: "The Rise of AI-Powered Trading Bots in Crypto Markets",
    excerpt:
      "Discover how advanced AI trading bots are changing the game in cryptocurrency markets and what this means for individual traders.",
    date: "2023-06-05",
    author: "Emma Watson",
    slug: "ai-powered-trading-bots-in-crypto",
  },
]

export function BlogPosts() {
  return (
    <section className="container">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

