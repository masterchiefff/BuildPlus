"use client"

import { useState } from "react"
import { User, Bell, Shield, Globe, Moon, HelpCircle, LogOut, ChevronRight, Settings } from "lucide-react"
import MobileNavigation from "@/components/@shared-components/mobile-navigation"
import DesktopSidebar from "@/components/@shared-components/desktop-sidebar"
import ConnectWalletButton from "@/components/@shared-components/connect-wallet-button"
import { useTranslation } from "react-i18next"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<string>("settings")
  const [walletConnected, setWalletConnected] = useState<boolean>(true)
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [notifications, setNotifications] = useState<boolean>(true)
  const [language, setLanguage] = useState<string>("en")

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
            <h1 className="text-xl font-bold">Settings</h1>
            {!walletConnected && <ConnectWalletButton />}
          </div>

          {/* Settings content */}
          <div className="p-6 overflow-auto h-[calc(100vh-73px)]">
            {walletConnected ? (
              <div className="max-w-2xl mx-auto">
                <div className="bg-gray-900 rounded-xl p-6 mb-6">
                  <div className="flex items-center">
                    <div className="h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">John Doe</h2>
                      <p className="text-gray-400">0x1234...5678</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Account Settings</h3>
                    <div className="bg-gray-900 rounded-xl overflow-hidden">
                      <div className="border-b border-gray-800">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800">
                          <div className="flex items-center">
                            <User className="h-5 w-5 text-indigo-400 mr-3" />
                            <span>Profile Information</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      <div className="border-b border-gray-800">
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center">
                            <Bell className="h-5 w-5 text-indigo-400 mr-3" />
                            <span>Notifications</span>
                          </div>
                          <button
                            className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${notifications ? "bg-indigo-600 justify-end" : "bg-gray-700 justify-start"}`}
                            onClick={() => setNotifications(!notifications)}
                          >
                            <div className="w-5 h-5 rounded-full bg-white shadow-md transform mx-0.5"></div>
                          </button>
                        </div>
                      </div>
                      <div>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800">
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-indigo-400 mr-3" />
                            <span>Security</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">App Settings</h3>
                    <div className="bg-gray-900 rounded-xl overflow-hidden">
                      <div className="border-b border-gray-800">
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center">
                            <Moon className="h-5 w-5 text-indigo-400 mr-3" />
                            <span>Dark Mode</span>
                          </div>
                          <button
                            className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${darkMode ? "bg-indigo-600 justify-end" : "bg-gray-700 justify-start"}`}
                            onClick={() => setDarkMode(!darkMode)}
                          >
                            <div className="w-5 h-5 rounded-full bg-white shadow-md transform mx-0.5"></div>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center">
                            <Globe className="h-5 w-5 text-indigo-400 mr-3" />
                            <span>Language</span>
                          </div>
                          <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                            <option value="sw">Swahili</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Support</h3>
                    <div className="bg-gray-900 rounded-xl overflow-hidden">
                      <div className="border-b border-gray-800">
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800">
                          <div className="flex items-center">
                            <HelpCircle className="h-5 w-5 text-indigo-400 mr-3" />
                            <span>Help Center</span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>
                      <div>
                        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800 text-red-500">
                          <div className="flex items-center">
                            <LogOut className="h-5 w-5 mr-3" />
                            <span>Disconnect Wallet</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="bg-gray-800 rounded-full p-6 mb-4">
                  <Settings className="h-10 w-10 text-indigo-400" />
                </div>
                <h2 className="text-xl font-bold mb-2">Connect Your Wallet</h2>
                <p className="text-gray-400 text-center max-w-md mb-6">
                  You need to connect your Celo wallet to access settings.
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
          <h1 className="text-xl font-bold">Settings</h1>
        </div>

        {/* Settings content */}
        <div className="flex-1 overflow-auto p-4">
          {walletConnected ? (
            <div>
              <div className="bg-gray-900 rounded-xl p-4 mb-6">
                <div className="flex items-center">
                  <div className="h-14 w-14 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <User className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">John Doe</h2>
                    <p className="text-sm text-gray-400">0x1234...5678</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-medium mb-2 px-1">Account Settings</h3>
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="border-b border-gray-800">
                      <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-indigo-400 mr-3" />
                          <span>Profile Information</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                    <div className="border-b border-gray-800">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <Bell className="h-5 w-5 text-indigo-400 mr-3" />
                          <span>Notifications</span>
                        </div>
                        <button
                          className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${notifications ? "bg-indigo-600 justify-end" : "bg-gray-700 justify-start"}`}
                          onClick={() => setNotifications(!notifications)}
                        >
                          <div className="w-5 h-5 rounded-full bg-white shadow-md transform mx-0.5"></div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800">
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-indigo-400 mr-3" />
                          <span>Security</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-medium mb-2 px-1">App Settings</h3>
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="border-b border-gray-800">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <Moon className="h-5 w-5 text-indigo-400 mr-3" />
                          <span>Dark Mode</span>
                        </div>
                        <button
                          className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${darkMode ? "bg-indigo-600 justify-end" : "bg-gray-700 justify-start"}`}
                          onClick={() => setDarkMode(!darkMode)}
                        >
                          <div className="w-5 h-5 rounded-full bg-white shadow-md transform mx-0.5"></div>
                        </button>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <Globe className="h-5 w-5 text-indigo-400 mr-3" />
                          <span>Language</span>
                        </div>
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="en">English</option>
                          <option value="fr">French</option>
                          <option value="es">Spanish</option>
                          <option value="sw">Swahili</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-medium mb-2 px-1">Support</h3>
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="border-b border-gray-800">
                      <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800">
                        <div className="flex items-center">
                          <HelpCircle className="h-5 w-5 text-indigo-400 mr-3" />
                          <span>Help Center</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                    <div>
                      <button className="w-full flex items-center justify-between p-4 hover:bg-gray-800 text-red-500">
                        <div className="flex items-center">
                          <LogOut className="h-5 w-5 mr-3" />
                          <span>Disconnect Wallet</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="bg-gray-800 rounded-full p-6 mb-4">
                <Settings className="h-10 w-10 text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold mb-2">Connect Your Wallet</h2>
              <p className="text-gray-400 text-center mb-6">You need to connect your Celo wallet to access settings.</p>
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
