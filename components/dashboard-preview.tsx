"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, ArrowUpRight, Pause, Play, RefreshCw, ExternalLink, Copy } from "lucide-react"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { CircularProgress } from "./ui/circular-progress"

interface VestingSchedule {
  id: number
  progress: number
  amount: string
  total: string
  createdDate: string
  createdTime: string
  contractName: string
  recipient: string
  nextUnlock: string
  nextUnlockTime?: string
  status: "SCHEDULED" | "PENDING" | "ONGOING" | "PAUSED" | "COMPLETED" | "CANCELLED"
  color: string
}

const initialVestingData: VestingSchedule[] = [
  {
    id: 1,
    progress: 0,
    amount: "0.00",
    total: "59,238,391.00 STRM",
    createdDate: "Nov 24, 2024",
    createdTime: "11:14 PM",
    contractName: "wNGB...Gba2",
    recipient: "77Wy...hf12",
    nextUnlock: "Nov, 2025",
    nextUnlockTime: "11:14 PM",
    status: "SCHEDULED",
    color: "#3a7eef",
  },
  {
    id: 2,
    progress: 0,
    amount: "0.00",
    total: "50.00 SOL",
    createdDate: "Sep 14, 2024",
    createdTime: "8:33 AM",
    contractName: "wNGB...Gba2",
    recipient: "77Wy...hf12",
    nextUnlock: "Oct 14, 2023",
    nextUnlockTime: "8:33 AM",
    status: "PENDING",
    color: "#e0ad0d",
  },
  {
    id: 3,
    progress: 25,
    amount: "25,000,000.00",
    total: "100,000,000.00 STRM",
    createdDate: "Jun 11, 2024",
    createdTime: "10:25 PM",
    contractName: "wNGB...Gba2",
    recipient: "BPyf...qb4T",
    nextUnlock: "Jun 11, 2025",
    nextUnlockTime: "10:25 PM",
    status: "ONGOING",
    color: "#22c55f",
  },
  {
    id: 4,
    progress: 50,
    amount: "5,000.00",
    total: "10,000.00 USDC",
    createdDate: "May 29, 2024",
    createdTime: "9:38 PM",
    contractName: "wNGB...Gba2",
    recipient: "77Wy...hf12",
    nextUnlock: "—",
    status: "PAUSED",
    color: "#69707e",
  },
  {
    id: 5,
    progress: 100,
    amount: "10,000.00",
    total: "10,000.00 USDC",
    createdDate: "May 21, 2024",
    createdTime: "12:20 PM",
    contractName: "wNGB...Gba2",
    recipient: "77Wy...hf12",
    nextUnlock: "—",
    status: "COMPLETED",
    color: "#22c55f",
  },
]

const getStatusColor = (status: VestingSchedule["status"]) => {
  switch (status) {
    case "SCHEDULED":
      return "bg-blue-500/10 text-blue-500"
    case "PENDING":
      return "bg-yellow-500/10 text-yellow-500"
    case "ONGOING":
      return "bg-green-500/10 text-green-500"
    case "PAUSED":
      return "bg-gray-500/10 text-gray-500"
    case "COMPLETED":
      return "bg-green-500/10 text-green-500"
    case "CANCELLED":
      return "bg-red-500/10 text-red-500"
  }
}
export function DashboardPreview() {
  const router = useRouter()
  const [vestingData, setVestingData] = useState<VestingSchedule[]>(initialVestingData)

  const handleCreateNew = () => {
    router.push("/products/vesting")
  }

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    toast.success("Address copied to clipboard")
  }

  const handleViewContract = (contractName: string) => {
    window.open(`https://explorer.solana.com/address/${contractName}`, "_blank")
  }

  const handlePauseSchedule = (id: number) => {
    setVestingData((prevData) =>
      prevData.map((schedule) =>
        schedule.id === id ? { ...schedule, status: schedule.status === "PAUSED" ? "ONGOING" : "PAUSED" } : schedule,
      ),
    )
    toast.success(`Schedule ${vestingData.find((s) => s.id === id)?.status === "PAUSED" ? "resumed" : "paused"}`)
  }

  const handleRefreshSchedule = (id: number) => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
      loading: "Refreshing schedule...",
      success: "Schedule refreshed successfully",
      error: "Failed to refresh schedule",
    })
  }

  const handleCancelSchedule = (id: number) => {
    setVestingData((prevData) =>
      prevData.map((schedule) => (schedule.id === id ? { ...schedule, status: "CANCELLED" } : schedule)),
    )
    toast.success("Schedule cancelled")
  }

  return (
    <section className="container py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="overflow-hidden border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between border-b border-border/40 px-4 py-4">
            <h2 className="text-lg font-semibold">Active Vesting Schedules</h2>
            <Button onClick={handleCreateNew}>Create New</Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]"></TableHead>
                  <TableHead className="w-[200px]">Unlocked/Total</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Subject/Contract ID</TableHead>
                  <TableHead>Sender/Recipient</TableHead>
                  <TableHead>Next Unlock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vestingData.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>
                      <div className="flex justify-center">
                        <CircularProgress value={schedule.progress} color={schedule.color} size={40} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div>{schedule.amount}</div>
                        <div className="text-sm text-muted-foreground">of {schedule.total}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{schedule.createdDate}</div>
                        <div className="text-sm text-muted-foreground">{schedule.createdTime}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 px-2 hover:bg-transparent"
                        onClick={() => handleViewContract(schedule.contractName)}
                      >
                        <div className="size-2 rounded-full bg-blue-500"></div>
                        <span>{schedule.contractName}</span>
                        <ExternalLink className="size-3 text-muted-foreground" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 px-2 hover:bg-transparent"
                        onClick={() => handleCopyAddress(schedule.recipient)}
                      >
                        <ArrowUpRight className="size-3 text-muted-foreground" />
                        <span>{schedule.recipient}</span>
                        <Copy className="size-3 text-muted-foreground" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{schedule.nextUnlock}</div>
                        {schedule.nextUnlockTime && (
                          <div className="text-sm text-muted-foreground">{schedule.nextUnlockTime}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={getStatusColor(schedule.status)}>
                        {schedule.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleRefreshSchedule(schedule.id)}>
                            <RefreshCw className="mr-2 size-4" />
                            Refresh
                          </DropdownMenuItem>
                          {(schedule.status === "ONGOING" || schedule.status === "PAUSED") && (
                            <>
                              <DropdownMenuItem onClick={() => handlePauseSchedule(schedule.id)}>
                                {schedule.status === "PAUSED" ? (
                                  <>
                                    <Play className="mr-2 size-4" />
                                    Resume
                                  </>
                                ) : (
                                  <>
                                    <Pause className="mr-2 size-4" />
                                    Pause
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className="text-red-600"
                                onClick={() => handleCancelSchedule(schedule.id)}
                              >
                                Cancel Schedule
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}


