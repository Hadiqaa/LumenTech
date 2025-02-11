"use client"

import { motion } from "framer-motion"

export function LearnHeader() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Learn About AI-Powered Web3</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our educational resources to understand the intersection of artificial intelligence and blockchain
            technology. Gain insights into how LumenTech is revolutionizing decentralized finance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

