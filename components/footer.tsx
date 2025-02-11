import Link from "next/link"
import { Heart } from "lucide-react"

const footerLinks = {
  Solutions: [
    { name: "Overview", href: "#" },
    { name: "Vesting", href: "#" },
    { name: "Airdrops", href: "#" },
    { name: "Staking", href: "#" },
    { name: "Locks", href: "#" },
    { name: "Payments", href: "#" },
    { name: "Token Mint", href: "#" },
    { name: "Dashboard", href: "#" },
  ],
  Resources: [
    { name: "Use Cases", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Fees", href: "#" },
  ],
  Multichain: [
    { name: "Overview", href: "#" },
    { name: "Solana", href: "#" },
    { name: "Aptos", href: "#" },
    { name: "Sui", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Contact", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: "X" },
  { name: "Discord", href: "#", icon: "Discord" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "GitHub", href: "#", icon: "Git" },
  { name: "Medium", href: "#", icon: "M" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">L</div>
              </div>
              <span className="text-xl font-bold">Lumentech</span>
            </Link>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              Made with <Heart className="size-4 text-red-500" /> by a distributed team.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">© 2024 LumenTech Finance.</p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-muted-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>Audits available</span>
            <Link href="#" className="hover:text-foreground">
              here
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-foreground">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-foreground">
              Sitemap
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-foreground">
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

