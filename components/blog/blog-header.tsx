"use client"

import { motion } from "framer-motion"

export function BlogHeader() {
  return (
    <section className="bg-background py-20 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">LumenTech Insights</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Stay updated with the latest trends, insights, and innovations in AI-powered Web3 solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

