"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, CryptoVentures",
    content:
      "LumenTech's AI-powered airdrop platform revolutionized our token distribution strategy. We saw a 300% increase in community engagement post-airdrop.",
    avatar: "/clients/alex.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Manager, BlockChain Innovations",
    content:
      "The targeting capabilities of LumenTech's airdrop tool are unmatched. We were able to reward our most valuable community members with precision.",
    avatar: "/clients/emma.jpg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Founder, DeFi Protocol",
    content:
      "Implementing LumenTech's airdrop solution was seamless. The automated distribution saved us countless hours and ensured a fair launch for our token.",
    avatar: "/clients/michael.jpg?height=40&width=40",
  },
]

export function AirdropTestimonials() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

