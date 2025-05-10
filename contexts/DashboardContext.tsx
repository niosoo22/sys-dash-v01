"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type SidebarState = {
  isCollapsed: boolean;
  activeItem: string;
};

type DashboardContextType = {
  sidebar: SidebarState;
  setSidebar: React.Dispatch<React.SetStateAction<SidebarState>>;
  toggleSidebar: () => void;
  setActiveItem: (item: string) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState<SidebarState>({
    isCollapsed: false,
    activeItem: "pos",
  });

  const toggleSidebar = () => {
    setSidebar((prev) => ({ ...prev, isCollapsed: !prev.isCollapsed }));
  };

  const setActiveItem = (item: string) => {
    setSidebar((prev) => ({ ...prev, activeItem: item }));
  };

  return (
    <DashboardContext.Provider value={{ sidebar, setSidebar, toggleSidebar, setActiveItem }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};