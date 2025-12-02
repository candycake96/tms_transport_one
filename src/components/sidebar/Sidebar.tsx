import React, { Children, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const toggleSubmenu = (menuName: string) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };
    

    const menuItems = [
        { name: "Home", path: "/pages"  },

        {
            name: "Settings",
            path: "/settings",
            children: [
                { name: "proposal price", path: "setyings/proposal_price_setting" },
                { name: "User Setting", path: "/settings/user" },
                { name: "System Setting", path: "/settings/system" },
                { name: "Permission", path: "/settings/permission" },
            ],
        },
        {
            name: "Proposal Price Review",
            path: "/proposal",
            children: [
                { name: "proposal_price_review_main", path: "proposal_price_main" },
                { name: "User Setting", path: "/settings/user" },
                { name: "System Setting", path: "/settings/system" },
                { name: "Permission", path: "/settings/permission" },
            ],
        },
        
        { name: "Import", path: "/transport" },

        {
            name: "Export",
            path: "/reports",
            children: [
                { name: "Daily Report", path: "/reports/daily" },
                { name: "Monthly Report", path: "/reports/monthly" },
            ],
        },

        { name: "Domastic", path: "/domastic" },
        { name: "About", path: "/about" },
    ];

    const isActive = (path: string) =>
        location.pathname.toLowerCase().startsWith(path.toLowerCase());

    return (
        <div className="d-flex flex-column p-3" style={{ height: "100%" }}>
            <div className="mb-3 text-center fw-bolder" style={{ fontSize: "0.80rem", color: "#0d6efd" }}>
                TMS System
            </div>

            <ul className="nav nav-pills flex-column mb-auto">

                {menuItems.map((item) => (
                    <li key={item.name} className="nav-item">

                        {/* มีเมนูย่อย */}
                        {item.children ? (
                            <>
                                <div
                                    className="nav-link d-flex justify-content-between"
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: isActive(item.path) ? "#e3f2fd" : "transparent",
                                        color: isActive(item.path) ? "#0d6efd" : "#000",
                                        borderRadius: "6px",
                                        padding: "8px 12px",
                                    }}
                                    onClick={() => toggleSubmenu(item.name)}
                                >
                                    {item.name}
                                    <span>{openMenu === item.name ? "▾" : "▸"}</span>
                                </div>

                                {/* เมนูย่อย */}
                                {openMenu === item.name && (
                                    <ul className="nav flex-column ms-3">
                                        {item.children.map((sub) => (
                                            <li key={sub.path}>
                                                <Link
                                                    to={sub.path}
                                                    className="nav-link"
                                                    style={{
                                                        backgroundColor: isActive(sub.path) ? "#e3f2fd" : "transparent",
                                                        color: isActive(sub.path) ? "#0d6efd" : "#000",
                                                        borderRadius: "6px",
                                                        padding: "6px 12px",
                                                        fontSize: "0.9rem",
                                                    }}
                                                    onClick={() => toggleSidebar()}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            // ไม่มีเมนูย่อย (เมนูหลักปกติ)
                            <Link
                                to={item.path}
                                className="nav-link"
                                style={{
                                    backgroundColor: isActive(item.path) ? "#e3f2fd" : "transparent",
                                    color: isActive(item.path) ? "#0d6efd" : "#000",
                                    borderRadius: "6px",
                                    padding: "8px 12px",
                                }}
                                onClick={() => toggleSidebar()}
                            >
                                {item.name}
                            </Link>
                        )}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
