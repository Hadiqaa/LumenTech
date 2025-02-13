"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const projects = [
  { name: "LumenToken", progress: 75, status: "On Track" },
  { name: "AstroChain", progress: 40, status: "Delayed" },
  { name: "QuantumSwap", progress: 90, status: "Ahead" },
]

export function ProjectOverview() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Current status of your active projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* {projects.map((project, index) => (
              <div key={project.name} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{project.name}</p>
                  <Progress value={project.progress} className="w-[200px]" />
                </div>
                <div className="text-right">
                  <p className="font-medium">{project.progress}%</p>
                  <p className={`text-sm ${project.status === "Delayed" ? "text-red-500" : "text-green-500"}`}>
                    {project.status}
                  </p>
                </div>
              </div>
            ))} */}
            <div className="font-semibold text-xl">
              No Project Created
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

