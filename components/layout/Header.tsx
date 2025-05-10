"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const { sidebar, toggleSidebar } = useDashboard();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-40 bg-[#13133A] border-b border-[#1D1D4D]">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="mr-2 text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}
          
          <Link href="/dashboard" className="flex items-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hidden md:block text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                Silky Systems
              </span>
              <span className="block md:hidden text-2xl font-bold text-white">SS</span>
            </motion.div>
          </Link>
        </div>

        <div className={cn("relative mx-auto hidden md:block", sidebar.isCollapsed ? "ml-20" : "ml-64")}>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#B4B4CF]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1D1D4D] border border-[#292968] text-white placeholder-[#B4B4CF] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 hover:bg-[#1D1D4D]">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" alt="User avatar" />
                  <AvatarFallback className="bg-[#1D1D4D] text-white">SS</AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium text-white">Sarah Chen</span>
                  <span className="text-xs text-[#B4B4CF]">Administrator</span>
                </div>
                <ChevronDown className="h-4 w-4 text-[#B4B4CF]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-[#13133A] border border-[#1D1D4D] text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#1D1D4D]" />
              <DropdownMenuItem className="hover:bg-[#1D1D4D] cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#1D1D4D] cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#1D1D4D]" />
              <DropdownMenuItem className="hover:bg-[#1D1D4D] text-red-400 cursor-pointer">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}