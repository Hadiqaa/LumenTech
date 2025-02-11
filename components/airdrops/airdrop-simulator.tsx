"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function AirdropSimulator() {
  const [totalTokens, setTotalTokens] = useState(1000000)
  const [recipients, setRecipients] = useState(10000)
  const [engagementWeight, setEngagementWeight] = useState(50)

  const generateAirdropData = () => {
    const engagementBased = (totalTokens * engagementWeight) / 100
    const equalDistribution = totalTokens - engagementBased

    return [
      { name: "Engagement-Based", value: engagementBased },
      { name: "Equal Distribution", value: equalDistribution },
    ]
  }

  const airdropData = generateAirdropData()
  const COLORS = ["#8884d8", "#82ca9d"]

  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Airdrop Simulator
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Customize Your Airdrop</CardTitle>
            <CardDescription>Adjust the parameters to see how your airdrop distribution changes.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="total-tokens">Total Tokens to Airdrop</Label>
              <Input
                id="total-tokens"
                type="number"
                value={totalTokens}
                onChange={(e) => setTotalTokens(Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipients">Number of Recipients</Label>
              <Input
                id="recipients"
                type="number"
                value={recipients}
                onChange={(e) => setRecipients(Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="engagement-weight">Engagement-Based Distribution Weight</Label>
              <Slider
                id="engagement-weight"
                min={0}
                max={100}
                step={1}
                value={[engagementWeight]}
                onValueChange={(value) => setEngagementWeight(value[0])}
              />
              <span className="text-sm text-muted-foreground">{engagementWeight}%</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={airdropData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {airdropData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <Button className="w-full">Generate AI-Optimized Airdrop</Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

