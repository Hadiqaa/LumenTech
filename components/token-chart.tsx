"use client"

import { useEffect, useState, useRef } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Simulated token price data
const generateData = (days: number) => {
  const data = []
  let price = 0

  for (let i = 0; i < days; i++) {
    price = 0
    data.push({
      timestamp: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000),
      price: Math.max(0, price),
    })
  }

  return data
}

const timeRanges = [
  { label: "1H", days: 1 / 24 },
  { label: "1D", days: 1 },
  { label: "1W", days: 7 },
  { label: "1M", days: 30 },
  { label: "1Y", days: 365 },
  { label: "ALL", days: 365 * 2 },
]

export function TokenChart() {
  const [timeRange, setTimeRange] = useState(timeRanges[1])
  const [data, setData] = useState(generateData(timeRange.days))
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setData(generateData(timeRange.days))
  }, [timeRange.days])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  return (
    <Card className="w-full h-full border-0 shadow-none">
      <CardHeader>
        <CardTitle>Token Price</CardTitle>
        <CardDescription>AI-powered price analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="timestamp"
                tickFormatter={(timestamp) => {
                  const date = new Date(timestamp)
                  return timeRange.days <= 1
                    ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    : date.toLocaleDateString([], { month: "short", day: "numeric" })
                }}
                fontSize={12}
                tickLine={false}
                axisLine={false}
                minTickGap={20}
              />
              <YAxis
                dataKey="price"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                width={60}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null
                  const data = payload[0].payload
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Price</span>
                          <span className="font-bold">${data.price.toLocaleString()}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Time</span>
                          <span className="font-bold">{new Date(data.timestamp).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#chart-gradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range.label}
              variant="outline"
              size="sm"
              onClick={() => setTimeRange(range)}
              className={cn(
                "flex-1 min-w-[60px]",
                timeRange.label === range.label &&
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
              )}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

