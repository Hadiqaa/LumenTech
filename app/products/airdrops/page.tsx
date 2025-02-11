import { AirdropHero } from "@/components/airdrops/airdrop-hero"
import { AirdropFeatures } from "@/components/airdrops/airdrop-features"
import { AirdropSimulator } from "@/components/airdrops/airdrop-simulator"
import { AirdropTestimonials } from "@/components/airdrops/airdrop-testimonials"
import { AirdropFAQ } from "@/components/airdrops/airdrop-faq"
import { AirdropCTA } from "@/components/airdrops/airdrop-cta"

export default function AirdropPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <AirdropHero />
      <AirdropFeatures />
      <AirdropSimulator />
      <AirdropTestimonials />
      <AirdropFAQ />
      <AirdropCTA />
    </div>
  )
}

