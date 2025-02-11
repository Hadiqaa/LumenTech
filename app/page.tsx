import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { Features } from "@/components/features"
import { TokenStats } from "@/components/token-stats"
import { WalletSection } from "@/components/wallet-section"
import { MarketTrends } from "@/components/market-trends"
import { TransferVisualization } from "@/components/transfer-visualization"
import { GettingStarted } from "@/components/getting-started"
import { DashboardImage } from "@/components/dashboard-image"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      {/* <DashboardPreview /> */}
      <DashboardImage/>
      <Features />
      <TokenStats />
      <WalletSection />
      <MarketTrends />
      <TransferVisualization />
      <GettingStarted />
    </div>
  )
}

