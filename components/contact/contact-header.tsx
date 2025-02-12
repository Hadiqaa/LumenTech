"use client"

import { motion } from "framer-motion"

export function ContactHeader() {
  return (
    <section className="bg-background pt-20 pb-10 ">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Get in Touch</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions about our AI-powered Web3 solutions? We're here to help. Reach out to our team for support,
            partnerships, or general inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

