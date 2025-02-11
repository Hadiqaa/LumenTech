"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a token airdrop?",
    answer:
      "A token airdrop is a distribution of cryptocurrency tokens to multiple wallet addresses, often for free. It's commonly used as a marketing strategy to increase awareness and adoption of a new cryptocurrency project.",
  },
  {
    question: "How does AI improve airdrop targeting?",
    answer:
      "Our AI algorithms analyze various data points such as wallet activity, social media engagement, and on-chain behavior to identify the most valuable potential recipients for your airdrop, ensuring higher engagement and retention rates.",
  },
  {
    question: "Is the airdrop process secure?",
    answer:
      "Yes, LumenTech employs bank-grade security measures and smart contract audits to ensure the safety and integrity of your token distribution process.",
  },
  {
    question: "Can I customize my airdrop criteria?",
    answer:
      "While our AI provides optimized suggestions, you have full control to set custom criteria for your airdrop recipients based on your project's unique needs and goals.",
  },
  {
    question: "How do I track the success of my airdrop?",
    answer:
      "LumenTech provides a comprehensive analytics dashboard where you can monitor key metrics such as token claim rates, recipient engagement, and overall distribution success in real-time.",
  },
]

export function AirdropFAQ() {
  return (
    <section className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}

