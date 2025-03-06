"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface SidebarContextType {
  isVisible: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('sidebarVisible');
    if (saved !== null) {
      setIsVisible(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsVisible((prev) => {
      const newState = !prev;
      localStorage.setItem('sidebarVisible', JSON.stringify(newState));
      return newState;
    });
  };

  const contextValue = React.useMemo<SidebarContextType>(
    () => ({
      isVisible,
      toggleSidebar,
    }),
    [isVisible]
  );

  if (!isClient) {
    return null; 
  }

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

