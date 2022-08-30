import React, { FC } from "react";
import AdminHeader from "../Headers/AdminHeader";
import AdminSidebar from "../Sidebar/AdminSidebar";

import { ChildrenProps } from "../../models";

const AdminLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-[250px]">
        <AdminSidebar />
      </div>
      <div className="flex-1">
        <AdminHeader />

        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
