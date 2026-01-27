// src/pages/Store.jsx
import React, { useState } from "react";
import { useBag } from "../context/BagContext";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

export default function Store() {
  const { addToBag } = useBag();

  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      {/* Header with Search Bar */}
      <header className="p-4 bg-gray-100 sticky top-0 z-30">
        {/* Search input */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </header>

      {/* Product Grid */}
      <main className="flex-1 p-4 md:p-6">
        <ProductList searchQuery={searchQuery} onAdd={addToBag} />
      </main>
    </div>
  );
}


