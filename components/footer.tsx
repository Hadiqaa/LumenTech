import Link from "next/link"
import { FaHeart, FaXTwitter, FaDiscord, FaLinkedin, FaSquareGithub, FaMedium } from "react-icons/fa6"

const footerLinks = {
  Solutions: [
    { name: "Overview", href: "/learn" },
    { name: "Vesting", href: "/products/vesting" },
    { name: "Airdrops", href: "/products/airdrops" },
    { name: "Staking", href: "/products/staking" },
    { name: "Dashboard", href: "/products/dashboard" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "https://x.com/LumenTech", icon: <FaXTwitter /> },
  { name: "Discord", href: "#", icon: <FaDiscord /> },
  { name: "LinkedIn", href: "#", icon: <FaLinkedin /> },
  { name: "GitHub", href: "#", icon: <FaSquareGithub /> },
  { name: "Medium", href: "#", icon: <FaMedium /> },
]

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-background flex ">
      <div className="mx-auto  px-1 md:px-8 py-12 ">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left Section - Logo & Social Links */}
          <div className="w-full">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">L</div>
              </div>
              <span className="text-xl font-bold">LumenTech</span>
            </Link>

            {/* Made with Love */}
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <span className="whitespace-nowrap">Made with</span>
              <FaHeart className="mx-1 text-[#7f6af7] size-4" />
              <span className="whitespace-nowrap">by a distributed team.</span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">© 2024 LumenTech Finance.</p>

            {/* Social Media Links */}
            {/* <div className="mt-5 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-6 text-muted-foreground hover:text-primary transition"
                  aria-label={`Visit our ${link.name} page`}
                >
                  {link.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Right Section - Footer Navigation */}
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full space-x-20">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase">{category}</h3>
                <ul className="mt-3 space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground/80 transition-colors hover:text-primary"
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
      </div>
    </footer>
  )
}
