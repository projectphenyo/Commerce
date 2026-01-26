import React from "react";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/icons/menu.svg";
import storefrontIcon from "../assets/icons/storefront.svg";
import bagIcon from "../assets/icons/bag-handle.svg";
import logoutIcon from "../assets/icons/log-out.svg";

const navItems = [
  { id: "menu", label: "Menu", icon: menuIcon },
  { id: "store", label: "Store", icon: storefrontIcon },
  { id: "checkout", label: "Checkout", icon: bagIcon },
];

export default function Sidebar({ currentPage, onNavigate }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (onNavigate) onNavigate(id);
    if (id === "menu" || id === "store" || id === "checkout") {
      navigate(`/${id}`);
    }
  };

  return (
    <aside
      aria-label="Primary navigation"
      className="fixed left-0 top-0 h-screen w-20 bg-white flex flex-col p-4 shadow-sm z-50"
    >
      <div
        aria-label="Logo"
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
      >
        <img src="/Flat-logo.png" alt="Logo" className="w-6 h-6" />
      </div>

      <nav aria-label="Sections" className="flex flex-col gap-4 h-full">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            aria-label={label}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
              currentPage === id
                ? "bg-gray-200 text-white shadow-md"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
            title={label}
          >
            <img src={icon} alt={label} className="w-6 h-6" />
          </button>
        ))}

        <button
          onClick={() => alert("Logged out!")}
          aria-label="Logout"
          className="mt-auto w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 text-red-600 hover:text-red-500 hover:bg-red-50"
          title="Logout"
        >
          <img src={logoutIcon} alt="Logout" className="w-6 h-6" />
        </button>
      </nav>
    </aside>
  );
}
