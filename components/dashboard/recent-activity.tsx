"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

const activities = [
  {
    project: "LumenToken",
    action: "Token Distribution",
    date: "2023-06-15",
    description: "Distributed 100,000 LUMEN tokens to early investors",
  },
  {
    project: "AstroChain",
    action: "Smart Contract Deployment",
    date: "2023-06-14",
    description: "Deployed new staking contract on Ethereum mainnet",
  },
  {
    project: "QuantumSwap",
    action: "Liquidity Pool Creation",
    date: "2023-06-13",
    description: "Created new QSWAP-ETH liquidity pool on Uniswap V3",
  },
  {
    project: "LumenToken",
    action: "Governance Proposal",
    date: "2023-06-12",
    description: "Submitted proposal for token burn mechanism",
  },
]

export function RecentActivity() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-primary" />
              <CardTitle>Recent Activity</CardTitle>
            </div>
            <CardDescription>Latest actions across your projects</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {activity.project[0]}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-muted-foreground">{activity.date}</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

