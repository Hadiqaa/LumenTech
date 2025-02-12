import { ContactHeader } from "@/components/contact/contact-header"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 pb-20">
      <ContactHeader />
      <div className="container grid gap-5 lg:gap-10 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  )
}

