// src/components/Sidebar.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import menuIcon from "../assets/icons/menu.svg";
import storefrontIcon from "../assets/icons/storefront.svg";
import bagIcon from "../assets/icons/bag-handle.svg";
import logoutIcon from "../assets/icons/log-out.svg";
import whiteIcon from "../assets/icons/white.svg";
import closeIcon from "../assets/icons/close.svg";

const navItems = [
  { id: "store", label: "Store", icon: storefrontIcon },
  { id: "bag", label: "Bag", icon: bagIcon },
];

export default function Sidebar({ currentPage, onNavigate }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const menuBtnRef = useRef(null);

  const activeLabel = useMemo(() => {
    if (currentPage === "store") return "Store";
    if (currentPage === "bag") return "Bag";
    return "";
  }, [currentPage]);

  const handleNavigate = (id) => {
    if (onNavigate) onNavigate(id);
    navigate(`/${id}`);
    setOpen(false);
  };

  // Close on ESC + click outside
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e) => {
      if (!open) return;
      const drawer = drawerRef.current;
      const btn = menuBtnRef.current;
      if (!drawer) return;

      const clickedInsideDrawer = drawer.contains(e.target);
      const clickedMenuButton = btn?.contains(e.target);
      if (!clickedInsideDrawer && !clickedMenuButton) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <aside aria-label="Primary navigation" className="fixed left-0 top-0 h-screen z-50">
      {/* Left rail */}
      <div className="h-full w-20 bg-white flex flex-col items-center py-6 border-r border-black/5">
        {/* Logo */}
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6">
          <img src="/Flat-logo.png" alt="Logo" className="w-6 h-6" />
        </div>

        {/* Menu toggle button */}
        <button
          ref={menuBtnRef}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200
            ${open ? "bg-black/5 text-white" : "bg-white text-black hover:bg-black/5"}
          `}
          title={open ? "Close" : "Menu"}
        >
          {/* When open */}
          {open ? (
            <button
  onClick={() => setOpen(false)}
  className="w-10 h-10 rounded-xl hover:bg-black/5 transition flex items-center justify-center"
  aria-label="Close drawer"
  title="Close"
>
  <img src={closeIcon} alt="Close" className="w-5 h-5" />
</button>

          ) : (
            <img src={menuIcon} alt="Menu" className="w-6 h-6" />
          )}
        </button>

        {/* Quick icons in the rail  */}
        <nav className="mt-6 flex flex-col gap-4 items-center">
          {navItems.map(({ id, label, icon }) => {
            const isActive = currentPage === id;
            return (
              <button
                key={id}
                onClick={() => handleNavigate(id)}
                aria-label={label}
                title={label}
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200
                  ${isActive ? "bg-black text-white" : "bg-white text-black hover:bg-black/5"}
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
        </nav>

        {/* Logout icon at bottom */}
        <button
          onClick={() => alert("Logged out!")}
          aria-label="Logout"
          title="Logout"
          className="mt-auto w-11 h-11 rounded-xl flex items-center justify-center text-red-600 hover:text-red-500 hover:bg-red-50 transition"
        >
          <img src={logoutIcon} alt="Logout" className="w-6 h-6" />
        </button>
      </div>

      {/* Expanded drawer  */}
      <div
        className={`absolute left-20 top-0 h-full w-60 sm:w-65 pointer-events-none`}
        aria-hidden={!open}
      >
        {/* Backplate  */}
        <div
          ref={drawerRef}
          className={`
            mt-23 ml-3 mr-3 rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]
            border border-black/5 overflow-hidden
            transition-all duration-200 ease-out
            ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
            pointer-events-auto
          `}
        >
          {/* Drawer header row */}
          <div className="px-4 pt-4 pb-3 flex items-center justify-between">
            
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl hover:bg-black/5 transition flex items-center justify-center"
              aria-label="Close drawer"
              title="Close"
            >
              
              <img src={closeIcon} alt="Close" className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer links  */}
          <div className="px-3 pb-3">
            <div className="flex flex-col gap-2">
              {navItems.map(({ id, label, icon }) => {
                const isActive = currentPage === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavigate(id)}
                    className={`
                      w-full flex items-center gap-3 rounded-xl px-3 py-3 transition
                      ${isActive ? "bg-black text-white" : "bg-black/5 text-black hover:bg-black/5"}
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center
                        ${isActive ? "bg-white/10" : "bg-white"}
                      `}
                    >
                      <img
                        src={icon}
                        alt=""
                        className={`w-5 h-5 ${isActive ? "filter invert" : ""}`}
                      />
                    </span>
                    <span className="font-medium">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Logout inside drawer  */}
            <button
              onClick={() => alert("Logged out!")}
              className="mt-4 w-full rounded-xl bg-red-500 text-white px-3 py-3 flex items-center gap-3 hover:bg-red-600 active:scale-[0.99] transition"
            >
              <span className="w-9 h-9 rounded-lg flex items-center justify-center">
                <img src={whiteIcon} alt="" className="w-5 h-5 " />
              </span>
              <span className="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}