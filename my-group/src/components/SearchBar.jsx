import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-md mb-8 mx-auto ">
      <label
        htmlFor="search"
        className="block text-sm font-semibold text-foreground mb-2 text-left"
      >
        Search Item
      </label>

      <div className="relative flex items-center">
        <svg
          className="absolute left-3 text-muted-foreground pointer-events-none w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>

        <input
          id="search"
          type="search"
          placeholder="Apple Watch, Samsung S21, Macbook Pro..."
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-12 pl-10 pr-4 rounded-xl shadow-md bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
        />
      </div>
    </div>
  );
}
