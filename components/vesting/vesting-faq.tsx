"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is token vesting?",
    answer:
      "Token vesting is a process of gradually distributing tokens to stakeholders over a set period of time. It helps align long-term interests and prevents market flooding.",
  },
  {
    question: "How does AI optimize vesting schedules?",
    answer:
      "Our AI analyzes market conditions, project milestones, and stakeholder profiles to create optimal vesting schedules that maximize project success and stakeholder satisfaction.",
  },
  {
    question: "Is the vesting process secure?",
    answer:
      "Yes, our vesting contracts are audited by top security firms and use advanced encryption to ensure the safety of your tokens throughout the vesting period.",
  },
  {
    question: "Can I customize my vesting schedule?",
    answer:
      "While our AI provides optimized suggestions, you have full control to customize your vesting schedule according to your project's unique needs.",
  },
  {
    question: "How do I track my vested tokens?",
    answer:
      "LumenTech provides a user-friendly dashboard where you can track your vested tokens in real-time, view upcoming distributions, and analyze vesting progress.",
  },
]

export function VestingFAQ() {
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

