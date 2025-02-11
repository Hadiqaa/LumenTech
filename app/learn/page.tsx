import { LearnHeader } from "@/components/learn/learn-header"
import { LearnTopics } from "@/components/learn/learn-topics"
import { FeaturedResources } from "@/components/learn/featured-resources"

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <LearnHeader />
      <LearnTopics />
      <FeaturedResources />
    </div>
  )
}

