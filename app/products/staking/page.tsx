import { StakingHero } from "@/components/staking/staking-hero"
import { StakingFeatures } from "@/components/staking/staking-features"
import { StakingCalculator } from "@/components/staking/staking-calculator"
import { StakingStats } from "@/components/staking/staking-stats"
import { StakingFAQ } from "@/components/staking/staking-faq"
import { StakingCTA } from "@/components/staking/staking-cta"

export default function StakingPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <StakingHero />
      <StakingFeatures />
      <StakingCalculator />
      <StakingStats />
      <StakingFAQ />
      <StakingCTA />
    </div>
  )
}

