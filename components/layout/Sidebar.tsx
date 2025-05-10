"use client";

import { useDashboard } from "@/contexts/DashboardContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Package, 
  Truck, 
  ChevronLeft, 
  ChevronRight, 
  Settings, 
  HelpCircle 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "POS", path: "/dashboard", icon: BarChart3, id: "pos" },
  { name: "CRM", path: "/dashboard/crm", icon: Users, id: "crm" },
  { name: "ERP", path: "/dashboard/erp", icon: Briefcase, id: "erp" },
  { name: "Inventory", path: "/dashboard/inventory", icon: Package, id: "inventory" },
  { name: "Fleet", path: "/dashboard/fleet", icon: Truck, id: "fleet" },
];

export function Sidebar() {
  const { sidebar, toggleSidebar, setActiveItem } = useDashboard();
  const pathname = usePathname();

  const handleNavClick = (id: string) => {
    setActiveItem(id);
  };

  return (
    <motion.aside
      initial={{ width: sidebar.isCollapsed ? 80 : 256 }}
      animate={{ width: sidebar.isCollapsed ? 80 : 256 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-[calc(100vh-4rem)] fixed left-0 top-16 bg-[#13133A] border-r border-[#1D1D4D] overflow-hidden z-30"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex justify-end">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-[#1D1D4D] transition-colors"
            aria-label={sidebar.isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebar.isCollapsed ? <ChevronRight className="h-5 w-5 text-[#B4B4CF]" /> : <ChevronLeft className="h-5 w-5 text-[#B4B4CF]" />}
          </button>
        </div>

        <nav className="flex-1 px-3 py-2">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
              return (
                <li key={item.id}>
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.path}
                          onClick={() => handleNavClick(item.id)}
                          className={cn(
                            "flex items-center h-12 px-3 rounded-lg transition-colors relative",
                            isActive
                              ? "bg-[#1D1D4D] text-white"
                              : "text-[#B4B4CF] hover:bg-[#1D1D4D] hover:text-white"
                          )}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeNavIndicator"
                              className="absolute left-0 w-1 h-6 bg-white rounded-r-full"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          {!sidebar.isCollapsed && (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="ml-3 font-medium"
                            >
                              {item.name}
                            </motion.span>
                          )}
                        </Link>
                      </TooltipTrigger>
                      {sidebar.isCollapsed && (
                        <TooltipContent side="right" sideOffset={10}>
                          {item.name}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-[#1D1D4D]">
          <ul className="space-y-2">
            <li>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="#settings"
                      className="flex items-center h-12 px-3 rounded-lg text-[#B4B4CF] hover:bg-[#1D1D4D] hover:text-white transition-colors"
                    >
                      <Settings className="h-5 w-5 flex-shrink-0" />
                      {!sidebar.isCollapsed && <span className="ml-3 font-medium">Settings</span>}
                    </Link>
                  </TooltipTrigger>
                  {sidebar.isCollapsed && (
                    <TooltipContent side="right" sideOffset={10}>
                      Settings
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
            <li>
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="#help"
                      className="flex items-center h-12 px-3 rounded-lg text-[#B4B4CF] hover:bg-[#1D1D4D] hover:text-white transition-colors"
                    >
                      <HelpCircle className="h-5 w-5 flex-shrink-0" />
                      {!sidebar.isCollapsed && <span className="ml-3 font-medium">Help</span>}
                    </Link>
                  </TooltipTrigger>
                  {sidebar.isCollapsed && (
                    <TooltipContent side="right" sideOffset={10}>
                      Help
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          </ul>
        </div>
      </div>
    </motion.aside>
  );
}