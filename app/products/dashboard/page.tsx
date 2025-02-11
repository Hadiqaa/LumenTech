import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ProjectOverview } from "@/components/dashboard/project-overview"
import { TokenMetrics } from "@/components/dashboard/token-metrics"
import { AIInsights } from "@/components/dashboard/ai-insights"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 pb-20">
      <DashboardHeader />
      <div className="container grid gap-8 md:grid-cols-2">
        <ProjectOverview />
        <TokenMetrics />
      </div>
      <AIInsights />
      <RecentActivity />
    </div>
  )
}

