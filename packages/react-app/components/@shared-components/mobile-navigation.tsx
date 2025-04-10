"use client"

import { Home, Compass, Wallet, BarChart2, Settings } from "lucide-react"
import Link from "next/link"

interface MobileNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function MobileNavigation({ activeTab, setActiveTab }: MobileNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black px-4 py-3 flex justify-between items-center border-t border-gray-800">
      <Link
        href="/"
        className={`flex flex-col items-center ${activeTab === "home" ? "text-white" : "text-gray-500"}`}
        onClick={() => setActiveTab("home")}
      >
        <Home className="h-5 w-5" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link
        href="/explore"
        className={`flex flex-col items-center ${activeTab === "explore" ? "text-white" : "text-gray-500"}`}
        onClick={() => setActiveTab("explore")}
      >
        <Compass className="h-5 w-5" />
        <span className="text-xs mt-1">Explore</span>
      </Link>
      <Link
        href="/wallet"
        className={`flex flex-col items-center ${activeTab === "wallet" ? "text-white" : "text-gray-500"}`}
        onClick={() => setActiveTab("wallet")}
      >
        <Wallet className="h-5 w-5" />
        <span className="text-xs mt-1">Wallet</span>
      </Link>
      <Link
        href="/create"
        className={`flex flex-col items-center ${activeTab === "create" ? "text-white" : "text-gray-500"}`}
        onClick={() => setActiveTab("create")}
      >
        <BarChart2 className="h-5 w-5" />
        <span className="text-xs mt-1">Create</span>
      </Link>
      <Link
        href="/settings"
        className={`flex flex-col items-center ${activeTab === "settings" ? "text-white" : "text-gray-500"}`}
        onClick={() => setActiveTab("settings")}
      >
        <Settings className="h-5 w-5" />
        <span className="text-xs mt-1">Settings</span>
      </Link>
    </div>
  )
}
