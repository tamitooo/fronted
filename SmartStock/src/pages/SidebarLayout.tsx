// src/layouts/SidebarLayout.tsx
import React from "react";
import Sidebar from "./Sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-72 w-full p-6">{children}</div> 
    </div>
  );
};

export default SidebarLayout;
