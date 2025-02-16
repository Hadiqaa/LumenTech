"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

const steps = [
  {
    number: "01",
    title: "Create an account",
    description: "Sign up and verify your identity in minutes",
  },
  {
    number: "02",
    title: "Fund your wallet",
    description: "Deposit crypto or fiat to start trading",
  },
  {
    number: "03",
    title: "Set AI parameters",
    description: "Customize your trading strategy and risk tolerance",
  },
  {
    number: "04",
    title: "Activate auto-trading",
    description: "Let LumenTech start making trades on your behalf",
  },
  {
    number: "05",
    title: "Monitor & optimize",
    description: "Track performance and adjust your strategy as needed",
  },
]

export function GettingStarted() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="container space-y-20">
      <div className="mx-auto max-w-4xl space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Start Solana based AI-Powered Trading in Minutes
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="text-4xl font-bold text-muted-foreground/20">{step.number}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="relative overflow-hidden bg-card/50 p-10 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to revolutionize your
                <br />
                crypto trading?
              </h2>
              <p className="text-muted-foreground">
                Join now with <span className="font-semibold text-foreground">LumenTech</span> and let our AI handle
                your trades while you focus on strategy.
              </p>
              <div className="pt-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg">Get Started with AI Trading</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Get Started with AI Trading</DialogTitle>
                      <DialogDescription>
                        To begin AI trading, you need to complete the following steps:
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                      <ol className="list-decimal pl-4">
                        <li>Create an account and verify your identity</li>
                        <li>Connect your wallet</li>
                        <li>Fund your account</li>
                        <li>Set your AI trading parameters</li>
                        <li>Review and accept the AI trading terms</li>
                      </ol>
                      <Button asChild>
                        <Link href="/signup">Create Account to Start</Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

