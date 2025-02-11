"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Revolutionizing Web3 with AI-Powered Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            LumenTech is at the forefront of merging artificial intelligence with blockchain technology, creating
            innovative solutions for token management and decentralized finance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

