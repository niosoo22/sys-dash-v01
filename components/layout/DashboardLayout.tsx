"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { sidebar, toggleSidebar } = useDashboard();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A1F]">
      <Header />
      {!isSmallScreen && <Sidebar />}
      {isSmallScreen && !sidebar.isCollapsed && (
        <div className="fixed inset-0 bg-black/50 z-20" onClick={() => toggleSidebar()} />
      )}
      {isSmallScreen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: sidebar.isCollapsed ? "-100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-16 left-0 z-30"
        >
          <Sidebar />
        </motion.div>
      )}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "pt-16 min-h-screen transition-all duration-300",
          !isSmallScreen && (sidebar.isCollapsed ? "pl-20" : "pl-64")
        )}
      >
        {children}
      </motion.main>
    </div>
  );
}