"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function VestingCTA() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Optimize Your Token Vesting?
            </h2>
            <p className="max-w-[600px] text-lg text-primary-foreground/80">
              Join LumenTech today and experience the power of AI-driven token vesting. Maximize your project's
              potential with our cutting-edge technology.
            </p>
            <Link href="/login">
            <Button size="lg" variant="secondary">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

