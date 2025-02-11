"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sophia Chen",
    role: "CEO & AI Research Lead",
    bio: "With a Ph.D. in Machine Learning and 10+ years in the blockchain industry, Sophia leads our AI initiatives.",
    image: "/clients/sophia.jpg?height=300&width=300",
  },
  {
    name: "Alex Rodriguez",
    role: "CTO & Blockchain Architect",
    bio: "A veteran smart contract developer, Alex ensures our solutions are secure, scalable, and efficient.",
    image: "/clients/alex.jpg?height=300&width=300",
  },
  {
    name: "Emma Watson",
    role: "Head of Product",
    bio: "Emma's background in UX and finance helps bridge the gap between complex technology and user needs.",
    image: "/clients/emma.jpg?height=300&width=300",
  },
  {
    name: "Michael Chang",
    role: "Chief Financial Officer",
    bio: "With experience in both traditional finance and DeFi, Michael oversees our financial strategies and compliance.",
    image: "/clients/michael.jpg?height=300&width=300",
  },
]

export function Team() {
  return (
    <section className="container">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Meet Our Team</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover object-top"
                />
                <CardTitle className="text-center">{member.name}</CardTitle>
                <p className="text-center text-sm text-muted-foreground">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

