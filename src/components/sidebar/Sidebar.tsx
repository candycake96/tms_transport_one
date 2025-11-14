import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Transport", path: "/transport" },
    { name: "Reports", path: "/reports" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="d-flex flex-column p-3" style={{ height: "100%" }}>
      <div className="mb-4 text-center fw-bold fs-5">🚛 TMS System</div>
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${
                location.pathname === item.path ? "active bg-primary text-white" : "text-dark"
              }`}
              onClick={() => toggleSidebar()}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
