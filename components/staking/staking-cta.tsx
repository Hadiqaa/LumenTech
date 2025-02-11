"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function StakingCTA() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Earning with AI-Powered Staking?
            </h2>
            <p className="max-w-[600px] text-lg text-primary-foreground/80">
              Join LumenTech today and experience the future of intelligent staking. Maximize your crypto holdings with
              our cutting-edge AI technology.
            </p>
            <Button size="lg" variant="secondary">
              Start Staking Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

