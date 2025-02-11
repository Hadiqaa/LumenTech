import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { Values } from "@/components/about/values"
import { Team } from "@/components/about/team"
import { Achievements } from "@/components/about/achievements"
import { JoinUs } from "@/components/about/join-us"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <Achievements />
      <JoinUs />
    </div>
  )
}

