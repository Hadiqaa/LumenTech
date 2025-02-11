import { VestingHero } from "@/components/vesting/vesting-hero"
import { VestingFeatures } from "@/components/vesting/vesting-features"
import { VestingSimulator } from "@/components/vesting/vesting-simulator"
import { VestingFAQ } from "@/components/vesting/vesting-faq"
import { VestingCTA } from "@/components/vesting/vesting-cta"

export default function VestingPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <VestingHero />
      <VestingFeatures />
      <VestingSimulator />
      <VestingFAQ />
      <VestingCTA />
    </div>
  )
}

