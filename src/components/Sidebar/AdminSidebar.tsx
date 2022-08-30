import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import sidebar from "../../data/sidebar";
import { useRouter } from "next/router";

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <div className="shadow-md h-screen">
      <div className="pt-10">
        <Logo />
        <Menu data={sidebar(String(router.asPath))} />
      </div>
    </div>
  );
};

export default AdminSidebar;
