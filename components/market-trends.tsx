// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow
// } from "@/components/ui/table";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger
// } from "@/components/ui/dialog";
// import { use, useState, useEffect } from "react";
// import axios from "axios";

// const marketData = [
//   {
//     id: 1,
//     name: "Bitcoin",
//     symbol: "BTC",
//     price: 45678.32,
//     change: "+2.34",
//     aiSentiment: "Bullish",
//     chartColor: "#F7931A",
//     icon: "/bitcoin-logo.webp"
//   },
//   {
//     id: 2,
//     name: "Ethereum",
//     symbol: "ETH",
//     price: 3245.67,
//     change: "+1.56",
//     aiSentiment: "Neutral",
//     chartColor: "#627EEA",
//     icon: "/ethereum-logo.webp"
//   },
//   {
//     id: 3,
//     name: "LumenTech",
//     symbol: "LUMEN",
//     price: 12.45,
//     change: "+5.67",
//     aiSentiment: "Very Bullish",
//     chartColor: "#3B82F6",
//     icon: "/ripple-logo.png"
//   }
// ];

// const stats = [
//   { value: "24/7", label: "AI Trading" },
//   { value: "100+", label: "Supported Coins" },
//   { value: "0.1s", label: "Avg. Execution Time" },
//   { value: "99.9%", label: "Uptime" }
// ];

// export function MarketTrends() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const API_KEY = "ASEL9zSGd885NbC7vwk5AKhX";

//   // call coingecko api to get the latest market data, API KEY= ASEL9zSGd885NbC7vwk5AKhX
//   useEffect(() => {
//     console.log("Fetching market data...");
//     axios
//       .get(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
//       )
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <section className="container space-y-20 px-4">
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,2fr]">
//         {/* Left Section */}
//         <div className="space-y-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
//           >
//             AI-Driven Market Insights
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-muted-foreground"
//           >
//             LumenTech analyzes market trends and provides real-time trading
//             recommendations. Our AI never sleeps, ensuring you never miss a
//             profitable opportunity.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button size="lg" className="mt-4">
//                   Start AI Trading
//                 </Button>
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Start AI Trading</DialogTitle>
//                   <DialogDescription>
//                     To begin AI trading, you need to complete the following
//                     steps:
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="flex flex-col gap-4">
//                   <ol className="list-decimal pl-4">
//                     <li>Connect your wallet</li>
//                     <li>Complete KYC verification</li>
//                     <li>Set your risk tolerance and investment preferences</li>
//                     <li>Fund your account</li>
//                     <li>Review and accept the AI trading terms</li>
//                   </ol>
//                   <Button asChild>
//                     <Link href="/connect-wallet">Connect Wallet to Start</Link>
//                   </Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </motion.div>
//         </div>

//         {/* Right Section - Table */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="rounded-xl border bg-card p-1 overflow-x-auto"
//         >
//           <div className="w-full overflow-x-auto">
//             <Table className="min-w-max">
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-12">#</TableHead>
//                   <TableHead>Name</TableHead>
//                   <TableHead className="text-right">Price</TableHead>
//                   <TableHead className="text-right">24h change</TableHead>
//                   <TableHead>AI Sentiment</TableHead>
//                   <TableHead className="text-right">Trade</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {marketData.map((coin) => (
//                   <TableRow key={coin.id}>
//                     <TableCell>{coin.id}</TableCell>
//                     <TableCell>
//                       <div className="flex items-center gap-2">
//                         <div className="size-8 rounded-full bg-primary/10">
//                           <Image
//                             src={coin.icon || "/placeholder.svg"}
//                             alt={`${coin.name} logo`}
//                             width={32}
//                             height={32}
//                             className="rounded-full"
//                           />
//                         </div>
//                         <div>
//                           <div className="font-medium">{coin.name}</div>
//                           <div className="text-sm text-muted-foreground">
//                             {coin.symbol}
//                           </div>
//                         </div>
//                       </div>
//                     </TableCell>
//                     <TableCell className="text-right">
//                       ${coin.price.toLocaleString()}
//                     </TableCell>
//                     <TableCell
//                       className={cn(
//                         "text-right",
//                         coin.change.startsWith("+")
//                           ? "text-green-500"
//                           : "text-red-500"
//                       )}
//                     >
//                       {coin.change}%
//                     </TableCell>
//                     <TableCell>
//                       <span
//                         className={cn(
//                           "px-2 py-1 rounded-full text-xs font-medium",
//                           {
//                             "bg-green-500/20 text-green-500":
//                               coin.aiSentiment === "Bullish" ||
//                               coin.aiSentiment === "Very Bullish",
//                             "bg-yellow-500/20 text-yellow-500":
//                               coin.aiSentiment === "Neutral",
//                             "bg-red-500/20 text-red-500":
//                               coin.aiSentiment === "Bearish" ||
//                               coin.aiSentiment === "Very Bearish"
//                           }
//                         )}
//                       >
//                         {coin.aiSentiment}
//                       </span>
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <Button
//                         size="sm"
//                         className="w-20"
//                         onClick={() => setIsDialogOpen(true)}
//                       >
//                         Auto Trade
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </motion.div>
//       </div>

//       {/* Stats Section */}
//       <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={stat.label}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="text-center"
//           >
//             <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
//               {stat.value}
//             </div>
//             <div className="mt-2 text-muted-foreground">{stat.label}</div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import axios from "axios";

// Define a TypeScript interface for a coin object
interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const stats = [
  { value: "24/7", label: "AI Trading" },
  { value: "100+", label: "Supported Coins" },
  { value: "0.1s", label: "Avg. Execution Time" },
  { value: "99.9%", label: "Uptime" }
];

export function MarketTrends(): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [coins, setCoins] = useState<Coin[]>([]);

  // API URL for CoinGecko
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

  // Fetch market data on component mount
  useEffect(() => {
    console.log("Fetching market data...");
    axios
      .get<Coin[]>(apiUrl)
      .then((response) => {
        console.log("API response:", response.data);
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching market data:", error);
      });
  }, []);

  return (
    <section className="container space-y-20 px-4">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,2fr]">
        {/* Left Section */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            AI-Driven Market Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            LumenTech analyzes market trends and provides real-time trading
            recommendations. Our AI never sleeps, ensuring you never miss a
            profitable opportunity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-4">
                  Start AI Trading
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start AI Trading</DialogTitle>
                  <DialogDescription>
                    To begin AI trading, you need to complete the following
                    steps:
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <ol className="list-decimal pl-4">
                    <li>Connect your wallet</li>
                    <li>Complete KYC verification</li>
                    <li>Set your risk tolerance and investment preferences</li>
                    <li>Fund your account</li>
                    <li>Review and accept the AI trading terms</li>
                  </ol>
                  <Button asChild>
                    <Link href="/connect-wallet">Connect Wallet to Start</Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* Right Section - Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl border bg-card p-1 overflow-x-auto"
        >
          <div className="w-full overflow-x-auto">
            <Table className="min-w-max">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">24h Change</TableHead>
                  <TableHead>AI Sentiment</TableHead>
                  <TableHead className="text-right">Trade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coins.length > 0 ? (
                  coins.map((coin, index) => (
                    <TableRow key={coin.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="size-8 rounded-full bg-primary/10">
                            <Image
                              src={coin.image || "/placeholder.svg"}
                              alt={`${coin.name} logo`}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{coin.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {coin.symbol.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        ${coin.current_price.toLocaleString()}
                      </TableCell>
                      <TableCell
                        className={cn(
                          "text-right",
                          coin.price_change_percentage_24h > 0
                            ? "text-green-500"
                            : "text-red-500"
                        )}
                      >
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            {
                              "bg-green-500/20 text-green-500":
                                coin.price_change_percentage_24h > 0,
                              "bg-red-500/20 text-red-500":
                                coin.price_change_percentage_24h <= 0
                            }
                          )}
                        >
                          {coin.price_change_percentage_24h > 0
                            ? "Bullish"
                            : "Bearish"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          className="w-20"
                          onClick={() => setIsDialogOpen(true)}
                        >
                          Auto Trade
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      Loading market data...
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
