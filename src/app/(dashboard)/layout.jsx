import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoListComponent from "@/components/TodoListComponent";
import { headers } from "next/headers";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-3/12">
          <SidebarComponent />
        </div>
        <div className="w-9/12 pl-10">
          <NavbarComponent />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
