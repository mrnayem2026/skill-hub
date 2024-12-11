"use client";

import { LayoutDashboard, Compass } from 'lucide-react';
import React from 'react'
import SidebarItem from './sidebar-item';

const getRoutes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SidebarRoutes = () => {
  const routes = getRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem 
          key={route.href} 
          icon={route.icon} 
          label={route.label} 
          href={route.href} 
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;