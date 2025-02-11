"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function Mission() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden p-0">
          <CardContent className="flex flex-col md:flex-row p-0">
            <div className="flex-1 p-6 md:p-10">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At LumenTech, our mission is to democratize access to advanced financial tools in the Web3 space. We
                strive to empower individuals and organizations with AI-driven insights and automated solutions,
                enabling them to navigate the complex world of cryptocurrencies and decentralized finance with
                confidence.
              </p>
            </div>
            <div className="flex-1 relative ">
              <Image
                src="/ethereum.jpg"
                alt="LumenTech team collaborating"
                className="h-full w-full object-cover"
                width={600} height={400}/>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

