import React, { useState } from "react";

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
    
  // User State
const [user, setUser] = useState(() => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
});


    return (
        <nav
            className="navbar navbar-dark d-flex justify-content-between align-items-center"
            style={{
                width: "100%",
                padding: "0.5rem 1rem",
                boxSizing: "border-box",
                background: "#3366ff"
            }}
        >
            <div className="d-flex align-items-center">
                <span className="fw-bolder text-light me-3">Company</span>

                {/* Hamburger */}
                <button
                    className="btn btn-outline-light me-3"
                    onClick={toggleSidebar}
                >
                    <i className="bi bi-list"></i>
                </button>
            </div>

            <div className="d-flex align-items-center">
                <span className="text-light me-3">
  {user ? user.fname : "Guest"}
</span>
                <button className="btn btn-outline-light btn-sm me-3">
                    <i className="bi bi-bell"></i>
                </button>

                <button className="btn btn-outline-light btn-sm me-1">
                    <i className="bi bi-person"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
