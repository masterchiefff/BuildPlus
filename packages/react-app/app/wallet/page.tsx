"use client"

import { useState, useEffect } from "react"
import { ArrowUp, ArrowDown, Copy, ExternalLink, Clock, CheckCircle } from "lucide-react"
import MobileNavigation from "@/components/@shared-components/mobile-navigation"
import DesktopSidebar from "@/components/@shared-components/desktop-sidebar"
import ConnectWalletButton from "@/components/@shared-components/connect-wallet-button"
import Wallet from "@/components/@shared-components/Wallet" 

// Mock transaction data
const MOCK_TRANSACTIONS = [
  {
    id: 1,
    type: "send",
    amount: "50.00",
    recipient: "0x1234...5678",
    timestamp: "2025-04-10 14:30",
    status: "completed",
    projectName: "Classroom in Kisumu",
  },
  {
    id: 2,
    type: "receive",
    amount: "100.00",
    sender: "0x8765...4321",
    timestamp: "2025-04-09 10:15",
    status: "completed",
  },
  {
    id: 3,
    type: "send",
    amount: "25.00",
    recipient: "0x2468...1357",
    timestamp: "2025-04-08 16:45",
    status: "completed",
    projectName: "Home in Nakuru",
  },
  {
    id: 4,
    type: "send",
    amount: "75.00",
    recipient: "0x3690...2468",
    timestamp: "2025-04-07 09:30",
    status: "pending",
    projectName: "Medical Clinic in Nairobi",
  },
]

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState<string>("wallet")
  const [account, setAccount] = useState<string>("")
  const [balance, setBalance] = useState<string>("1,200.89")
  const [transactions, setTransactions] = useState<any[]>([])
  const [copied, setCopied] = useState<boolean>(false)
  const [walletConnected, setWalletConnected] = useState<boolean>(false)

  useEffect(() => {
    // Simulate wallet connection
    setAccount("0x1234...5678")
    setWalletConnected(true)
    setTransactions(MOCK_TRANSACTIONS)
  }, [])

  const copyAddress = () => {
    navigator.clipboard.writeText("0x1234567890abcdef1234567890abcdef12345678")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop layout */}
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <DesktopSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <h1 className="text-xl font-bold">Wallet</h1>
            {!walletConnected && <ConnectWalletButton />}
          </div>

          {/* Wallet content */}
          <div className="p-6 overflow-auto h-[calc(100vh-73px)]">
            {walletConnected ? (
              <div>
                <div className="bg-indigo-600 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center mb-1">
                        <img src="/placeholder.svg?height=20&width=20" alt="MiniPay" className="h-5 w-5 mr-2" />
                        <p className="text-indigo-200 text-sm">MiniPay Balance</p>
                      </div>
                      <h2 className="text-white text-4xl font-bold">{balance} cUSD</h2>
                      <div className="flex items-center mt-2">
                        <div className="flex">
                          <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                          <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                          <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                          <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                        </div>
                        <span className="text-white text-xs ml-1">8973</span>
                      </div>
                      <p className="text-indigo-200 text-xs mt-1">Connected to MiniPay</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-black bg-opacity-20 rounded-lg p-3 text-white">
                        <ArrowUp className="h-5 w-5 mb-1 mx-auto" />
                        <span className="text-xs block">Send</span>
                      </button>
                      <button className="bg-black bg-opacity-20 rounded-lg p-3 text-white">
                        <ArrowDown className="h-5 w-5 mb-1 mx-auto" />
                        <span className="text-xs block">Receive</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-black bg-opacity-20 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-indigo-200">Wallet Address</p>
                        <p className="text-sm text-white font-mono">0x1234567890abcdef1234567890abcdef12345678</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-indigo-700 rounded-full" onClick={copyAddress}>
                          {copied ? (
                            <CheckCircle className="h-4 w-4 text-white" />
                          ) : (
                            <Copy className="h-4 w-4 text-white" />
                          )}
                        </button>
                        <a
                          href="https://explorer.celo.org/address/0x1234567890abcdef1234567890abcdef12345678"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-indigo-700 rounded-full"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-4">Transaction History</h2>
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 text-sm font-medium text-gray-400">
                    <div>Type</div>
                    <div>Amount</div>
                    <div>Details</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y divide-gray-800">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="grid grid-cols-5 gap-4 p-4 text-sm">
                        <div className="flex items-center">
                          {tx.type === "send" ? (
                            <ArrowUp className="h-4 w-4 text-red-500 mr-2" />
                          ) : (
                            <ArrowDown className="h-4 w-4 text-green-500 mr-2" />
                          )}
                          <span className="text-white">{tx.type === "send" ? "Sent" : "Received"}</span>
                        </div>
                        <div className={tx.type === "send" ? "text-red-500" : "text-green-500"}>
                          {tx.type === "send" ? "-" : "+"}
                          {tx.amount} cUSD
                        </div>
                        <div className="text-gray-300">
                          {tx.type === "send" ? (
                            <div>
                              <p>To: {tx.recipient}</p>
                              {tx.projectName && <p className="text-xs text-indigo-400">{tx.projectName}</p>}
                            </div>
                          ) : (
                            <p>From: {tx.sender}</p>
                          )}
                        </div>
                        <div className="text-gray-400">{tx.timestamp}</div>
                        <div>
                          {tx.status === "completed" ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                              <CheckCircle className="h-3 w-3 mr-1" /> Completed
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-900 text-yellow-300">
                              <Clock className="h-3 w-3 mr-1" /> Pending
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="bg-gray-800 rounded-full p-6 mb-4">
                  <Wallet className="h-10 w-10 text-indigo-400" />
                </div>
                <h2 className="text-xl font-bold mb-2">Connect Your Wallet</h2>
                <p className="text-gray-400 text-center max-w-md mb-6">
                  Connect your Celo wallet to view your balance, transaction history, and make donations.
                </p>
                <ConnectWalletButton />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden min-h-screen flex flex-col pb-16">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-800">
          <h1 className="text-xl font-bold">Wallet</h1>
        </div>

        {/* Wallet content */}
        <div className="flex-1 overflow-auto p-4">
          {walletConnected ? (
            <div>
              <div className="bg-indigo-600 rounded-xl p-4 mb-6">
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <img src="/placeholder.svg?height=20&width=20" alt="MiniPay" className="h-5 w-5 mr-2" />
                    <p className="text-indigo-200 text-sm">MiniPay Balance</p>
                  </div>
                  <h2 className="text-white text-3xl font-bold">{balance} cUSD</h2>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                      <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                      <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                      <span className="h-1 w-1 bg-white rounded-full mx-0.5"></span>
                    </div>
                    <span className="text-white text-xs ml-1">8973</span>
                  </div>
                  <p className="text-indigo-200 text-xs mt-1">Connected to MiniPay</p>
                </div>

                <div className="flex gap-3 mb-4">
                  <button className="flex-1 bg-black bg-opacity-20 rounded-lg py-2 text-white flex flex-col items-center">
                    <ArrowUp className="h-5 w-5 mb-1" />
                    <span className="text-xs">Send</span>
                  </button>
                  <button className="flex-1 bg-black bg-opacity-20 rounded-lg py-2 text-white flex flex-col items-center">
                    <ArrowDown className="h-5 w-5 mb-1" />
                    <span className="text-xs">Receive</span>
                  </button>
                </div>

                <div className="bg-black bg-opacity-20 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex-1 mr-2">
                      <p className="text-xs text-indigo-200">Wallet Address</p>
                      <p className="text-sm text-white font-mono truncate">{account}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-indigo-700 rounded-full" onClick={copyAddress}>
                        {copied ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <Copy className="h-4 w-4 text-white" />
                        )}
                      </button>
                      <a
                        href="https://explorer.celo.org/address/0x1234567890abcdef1234567890abcdef12345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-indigo-700 rounded-full"
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-lg font-bold mb-3">Transaction History</h2>
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div key={tx.id} className="bg-gray-900 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${tx.type === "send" ? "bg-red-900" : "bg-green-900"}`}
                        >
                          {tx.type === "send" ? (
                            <ArrowUp className="h-4 w-4 text-red-500" />
                          ) : (
                            <ArrowDown className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium">{tx.type === "send" ? "Sent" : "Received"}</p>
                          <p className="text-xs text-gray-400">{tx.timestamp}</p>
                        </div>
                      </div>
                      <div className={`text-right ${tx.type === "send" ? "text-red-500" : "text-green-500"}`}>
                        <p className="font-bold">
                          {tx.type === "send" ? "-" : "+"}
                          {tx.amount} cUSD
                        </p>
                        <p className="text-xs">
                          {tx.status === "completed" ? (
                            <span className="text-green-400">Completed</span>
                          ) : (
                            <span className="text-yellow-400">Pending</span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {tx.type === "send" ? (
                        <div>
                          <p>To: {tx.recipient}</p>
                          {tx.projectName && <p className="text-indigo-400">{tx.projectName}</p>}
                        </div>
                      ) : (
                        <p>From: {tx.sender}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-gray-800 rounded-full p-6 mb-4">
                <Wallet className="h-10 w-10 text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold mb-2">Connect Your Wallet</h2>
              <p className="text-gray-400 text-center mb-6">
                Connect your Celo wallet to view your balance, transaction history, and make donations.
              </p>
              <ConnectWalletButton />
            </div>
          )}
        </div>

        {/* Bottom navigation */}
        <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}
