// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/icons/menu.svg";
import storefrontIcon from "../assets/icons/storefront.svg";
import bagIcon from "../assets/icons/bag-handle.svg";
import logoutIcon from "../assets/icons/log-out.svg";

const navItems = [
  { id: "menu", label: "Menu", icon: menuIcon },
  { id: "store", label: "Store", icon: storefrontIcon },
  { id: "bag", label: "Bag", icon: bagIcon },
];

export default function Sidebar({ currentPage, onNavigate }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (onNavigate) onNavigate(id);
    if (id === "menu" || id === "store" || id === "bag") {
      navigate(`/${id}`);
    }
  };

  return (
    <aside
      aria-label="Primary navigation"
      className="fixed left-0 top-0 h-screen w-20 bg-white flex flex-col items-center py-6 z-50"
    >
      {/* Logo */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6">
        <img src="/Flat-logo.png" alt="Logo" className="w-6 h-6" />
      </div>

      <nav className="flex flex-col gap-4 h-full">
        {navItems.map(({ id, label, icon }) => {
          const isActive = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              aria-label={label}
              title={label}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200
                ${isActive ? "bg-black text-white" : "bg-white text-black"}
              `}
            >
              <img
                src={icon}
                alt={label}
                className={`w-6 h-6 ${isActive ? "filter invert" : ""}`}
              />
            </button>
          );
        })}

        {/* Logout button */}
        <button
          onClick={() => alert("Logged out!")}
          aria-label="Logout"
          title="Logout"
          className="mt-auto w-11 h-11 rounded-xl flex items-center justify-center text-red-600 hover:text-red-500 hover:bg-red-50"
        >
          <img src={logoutIcon} alt="Logout" className="w-6 h-6" />
        </button>
      </nav>
    </aside>
  );
}