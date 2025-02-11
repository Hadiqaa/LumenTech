"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-primary" />
            <p>123 Blockchain Avenue, Crypto City, 12345</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-primary" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-primary" />
            <p>support@lumentech.ai</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

