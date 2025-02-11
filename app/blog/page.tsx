import { BlogHeader } from "@/components/blog/blog-header"
import { BlogPosts } from "@/components/blog/blog-posts"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <BlogHeader />
      <BlogPosts />
      <BlogNewsletter />
    </div>
  )
}

