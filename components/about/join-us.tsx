"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"


export function JoinUs() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Join Us in Shaping the Future of Web3
            </h2>
            <p className="max-w-[600px] text-lg text-primary-foreground/80">
              We're always looking for talented individuals who are passionate about AI, blockchain, and decentralized
              finance. Join our team and help us build the next generation of Web3 solutions.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

