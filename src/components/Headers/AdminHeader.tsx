import React from "react";
import AdminProfile from "./AdminProfile";
import AdminSearchBox from "./AdminSearchBox";

const AdminHeader = () => {
  return (
    <div className="w-full shadow-md h-[69px] px-4">
      <div className="flex items-center h-full justify-between">
        <AdminSearchBox />
        <AdminProfile />
      </div>
    </div>
  );
};

export default AdminHeader;
