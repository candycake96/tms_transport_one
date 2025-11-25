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
        { name: "Proposal Price Review", path: "/proposal_price_main" },
        { name: "Import", path: "/transport" },
        { name: "Export", path: "/reports" },
        { name: "Domastic", path: "/domastic"},
        { name: "About", path: "/about" },
    ];

    return (
        <div className="d-flex flex-column p-3" style={{ height: "100%" }}>
            <div className="mb-3 text-center fw-bolder" style={{ fontSize: "0.80rem", color: "#0d6efd" }}>
                TMS System
            </div>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <li key={item.path} className="nav-item">
                        <Link
                            to={item.path}
                            className="nav-link"
                            style={{
                                backgroundColor: location.pathname === item.path ? "#e3f2fd" : "transparent",
                                color: location.pathname === item.path ? "#0d6efd" : "#000",
                                borderRadius: "6px",
                                padding: "8px 12px",
                                
                            }}
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
