"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is token staking?",
    answer:
      "Token staking is the process of locking up cryptocurrency tokens to support a blockchain network's operations and earn rewards. By staking, you contribute to the network's security and consensus mechanism.",
  },
  {
    question: "How does AI improve the staking process?",
    answer:
      "Our AI algorithms analyze market trends, network conditions, and historical data to optimize staking strategies. This includes dynamically adjusting stake allocations, predicting optimal entry and exit points, and maximizing rewards while minimizing risks.",
  },
  {
    question: "Is staking on LumenTech secure?",
    answer:
      "Yes, LumenTech employs bank-grade security measures, including multi-signature wallets, cold storage, and regular smart contract audits. We also use AI-driven risk assessment to further enhance the security of staked assets.",
  },
  {
    question: "Can I unstake my tokens at any time?",
    answer:
      "This depends on the specific staking option you choose. We offer both flexible staking with immediate unstaking and fixed-term staking with higher rewards. Our AI can help you choose the best option based on your investment goals.",
  },
  {
    question: "How are staking rewards calculated and distributed?",
    answer:
      "Staking rewards are calculated based on the amount staked, the duration of staking, and the current network rewards rate. Our AI optimizes this process to maximize your returns. Rewards are distributed in real-time and can be automatically compounded for greater growth.",
  },
]

export function StakingFAQ() {
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

