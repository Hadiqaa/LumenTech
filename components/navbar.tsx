import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { WalletIcon, Menu, ChevronDown } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">L</div>
            </div>
            <span className="text-xl font-bold">Lumentech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center">
            <DesktopNav />
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                  <Menu className="h-6 w-6 md:h-7 md:w-7" />  
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/connect-wallet">
                <WalletIcon className="mr-2 size-4" />
                Connect Wallet
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {products.map((product) => (
                <ListItem key={product.title} title={product.title} href={product.href}>
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {company.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/learn" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Learn</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="https://x.com/LumenTech"
            target="_blank"
            rel="noopener noreferrer"
            className={navigationMenuTriggerStyle()}
          >
            <FaXTwitter />
            <span className="sr-only">Twitter</span>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const MobileNav = React.memo(function MobileNav() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href="/" className="flex items-center space-x-2 my  -3">
        <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-tr from-blue-500 to-purple-500">
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">L</div>
        </div>
        <div className="text-xl font-bold">Lumentech</div>
      </Link>
      <nav className="flex flex-col space-y-5">
        <MobileNavSection title="Products" items={products} />
        <MobileNavSection title="Company" items={company} />
        <Link href="/learn" className="text-lg font-medium">
          Learn
        </Link>
        <a
          href="https://x.com/LumenTech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-lg font-medium"
        >
          <FaXTwitter />
        </a>
      </nav>
      <div className="flex flex-col space-y-4">
        <Button variant="outline" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button asChild>
          <Link href="/connect-wallet">
            <WalletIcon className="mr-2 size-4" />
            Connect Wallet
          </Link>
        </Button>
      </div>
    </div>
  )
})

type MobileNavSectionProps = {
  title: string
  items: Array<{ title: string; href: string }>
}

function MobileNavSection({ title, items }: MobileNavSectionProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out">
        <div className="mt-2 space-y-2 pl-4">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="block text-sm">
              {item.title}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

function navigationMenuTriggerStyle() {
  return cn(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
  )
}

const products = [
  {
    title: "Token Vesting",
    href: "/products/vesting",
    description: "Create and manage token vesting schedules with AI-powered optimization.",
  },
  {
    title: "Staking",
    href: "/products/staking",
    description: "Secure staking platform with real-time analytics and rewards.",
  },
  {
    title: "Airdrops",
    href: "/products/airdrops",
    description: "Launch and manage token airdrops with AI-driven engagement scoring.",
  },
  {
    title: "Dashboard",
    href: "/products/dashboard",
    description: "Manage your projects and view AI-driven insights.",
  },
]

const company = [
  {
    title: "About",
    href: "/about",
    description: "Learn about our mission and vision for the future of Web3.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read the latest news and insights from our team.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our support team.",
  },
]

