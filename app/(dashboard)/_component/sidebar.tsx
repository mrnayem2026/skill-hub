import React from 'react'
import Logo from './logo';
import SidebarRoutes from './sidebar-routes';

const Sidebar = () => {
  return (
    <div className="h-full bg-white flex flex-col overflow-y-auto border-r shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;