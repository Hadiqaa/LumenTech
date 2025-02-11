"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"

const wallets = [
  { name: "MetaMask", icon: "/logo/metamask.png" },
  { name: "WalletConnect", icon: "/logo/walletconnect.png" },
  { name: "Coinbase Wallet", icon: "/logo/coinbase.png" },
  { name: "Trust Wallet", icon: "/logo/trustwallet.png" },
  { name: "Phantom", icon: "/logo/phantom.png" },
]

export function ConnectWalletForm() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const router = useRouter()

  async function onConnect(walletName: string) {
    setIsConnecting(true)
    setSelectedWallet(walletName)

    // Simulating wallet connection
    setTimeout(() => {
      setIsConnecting(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Connect Your Wallet</CardTitle>
          <CardDescription className="text-center">Choose a wallet to connect to LumenTech</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className="w-full justify-start"
              onClick={() => onConnect(wallet.name)}
              disabled={isConnecting}
            >
              <div className="w-6 h-6 mr-1 relative flex items-center justify-center">
                <Image
                  src={wallet.icon || "/placeholder.svg"}
                  alt={`${wallet.name} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              {wallet.name}
              {isConnecting && selectedWallet === wallet.name && (
                <Icons.spinner className="ml-auto h-4 w-4 animate-spin" />
              )}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            New to cryptocurrency wallets?{" "}
            <a
              href="https://ethereum.org/en/wallets/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline underline-offset-4"
            >
              Learn more about wallets
            </a>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


