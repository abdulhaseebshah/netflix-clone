import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/side-navbar/sidebar";

const AppLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
