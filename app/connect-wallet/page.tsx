import { ConnectWalletForm } from "@/components/connect-wallet/connect-wallet-form"

export default function ConnectWalletPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <ConnectWalletForm />
      </div>
    </div>
  )
}

