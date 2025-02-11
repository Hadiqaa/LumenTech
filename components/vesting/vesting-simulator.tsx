"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function VestingSimulator() {
  const [totalTokens, setTotalTokens] = useState(1000000)
  const [vestingPeriod, setVestingPeriod] = useState(12)
  const [cliffPeriod, setCliffPeriod] = useState(3)

  const generateVestingSchedule = () => {
    const schedule = []
    const tokensPerMonth = totalTokens / vestingPeriod

    for (let i = 0; i <= vestingPeriod; i++) {
      if (i < cliffPeriod) {
        schedule.push({ month: i, tokens: 0 })
      } else {
        schedule.push({ month: i, tokens: tokensPerMonth * (i - cliffPeriod + 1) })
      }
    }

    return schedule
  }

  const vestingSchedule = generateVestingSchedule()

  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Vesting Simulator
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Customize Your Vesting Schedule</CardTitle>
            <CardDescription>Adjust the parameters to see how your vesting schedule changes.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="total-tokens">Total Tokens</Label>
              <Input
                id="total-tokens"
                type="number"
                value={totalTokens}
                onChange={(e) => setTotalTokens(Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vesting-period">Vesting Period (months)</Label>
              <Slider
                id="vesting-period"
                min={1}
                max={48}
                step={1}
                value={[vestingPeriod]}
                onValueChange={(value) => setVestingPeriod(value[0])}
              />
              <span className="text-sm text-muted-foreground">{vestingPeriod} months</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cliff-period">Cliff Period (months)</Label>
              <Slider
                id="cliff-period"
                min={0}
                max={vestingPeriod}
                step={1}
                value={[cliffPeriod]}
                onValueChange={(value) => setCliffPeriod(value[0])}
              />
              <span className="text-sm text-muted-foreground">{cliffPeriod} months</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={vestingSchedule} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="tokens" stroke="#8884d8" strokeWidth={2} />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <Button className="w-full">Generate AI-Optimized Schedule</Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

