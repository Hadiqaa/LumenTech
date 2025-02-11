"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BlogNewsletter() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Subscribe to Our Newsletter</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Stay up to date with the latest news, articles, and resources, sent to your inbox weekly.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

