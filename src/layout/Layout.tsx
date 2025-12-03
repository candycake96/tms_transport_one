import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const navbarHeight = 56; // ปรับตาม Navbar จริง
  const sidebarWidth = 240; // ปรับตาม Sidebar จริง

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: navbarHeight,
          zIndex: 1050,
        }}
      >
        <Navbar toggleSidebar={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: navbarHeight,
          left: 0,
          width: sidebarWidth,
          bottom: 0,
          backgroundColor: "#f8f9fa",
          overflowY: "auto",
          zIndex: 1040,
          borderRight: "1px solid #ddd",
          transform: isSidebarOpen ? "translateX(0)" : `translateX(-${sidebarWidth}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Content */}
<div
  style={{
    marginTop: navbarHeight,
    marginLeft: isSidebarOpen ? sidebarWidth : 0,
    padding: "1rem",
    minHeight: `calc(100vh - ${navbarHeight}px)`,
    width: `calc(100% - ${isSidebarOpen ? sidebarWidth : 0}px)`, // ปรับ width อัตโนมัติ
    overflowY: "auto",
    overflowX: "hidden", // ป้องกัน content เลยขอบ
    boxSizing: "border-box",
    transition: "margin-left 0.3s ease, width 0.3s ease",
    background: "#f0f2f8",
  }}
>
  <Outlet />
</div>

    </div>
  );
};

export default Layout;
