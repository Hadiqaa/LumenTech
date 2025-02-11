"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function StakingCalculator() {
  const [stakingAmount, setStakingAmount] = useState(1000)
  const [stakingPeriod, setStakingPeriod] = useState(12)
  const [apy, setApy] = useState(10)

  const calculateRewards = () => {
    const data = []
    let currentAmount = stakingAmount
    for (let i = 0; i <= stakingPeriod; i++) {
      data.push({
        month: i,
        amount: currentAmount,
      })
      currentAmount *= 1 + apy / 100 / 12
    }
    return data
  }

  const rewardsData = calculateRewards()

  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Staking Rewards Calculator
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Estimate Your Staking Rewards</CardTitle>
            <CardDescription>Adjust the parameters to see potential returns on your staked tokens.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="staking-amount">Staking Amount (LUM)</Label>
              <Input
                id="staking-amount"
                type="number"
                value={stakingAmount}
                onChange={(e) => setStakingAmount(Number(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="staking-period">Staking Period (months)</Label>
              <Slider
                id="staking-period"
                min={1}
                max={60}
                step={1}
                value={[stakingPeriod]}
                onValueChange={(value) => setStakingPeriod(value[0])}
              />
              <span className="text-sm text-muted-foreground">{stakingPeriod} months</span>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="apy">Annual Percentage Yield (APY)</Label>
              <Slider id="apy" min={1} max={30} step={0.1} value={[apy]} onValueChange={(value) => setApy(value[0])} />
              <span className="text-sm text-muted-foreground">{apy.toFixed(1)}%</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rewardsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`${value.toFixed(2)} LUM`, "Amount"]}
                    labelFormatter={(label) => `Month ${label}`}
                  />
                  <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Estimated Final Balance:</p>
                <p className="text-2xl font-bold">{rewardsData[rewardsData.length - 1].amount.toFixed(2)} LUM</p>
              </div>
              <Button>Start Staking Now</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

