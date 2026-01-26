import React, { useState } from "react";
import { useBag } from "../context/BagContext";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

export default function Menu() {
  const { addToBag } = useBag();

  // This is the state for the search input
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-full w-full bg-gray-100">
      {/* Header with Search Bar */}
      <header className="mb-4 p-4 bg-gray-100">
        {/* Pass both value and state updater */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </header>

      {/* Product Grid */}
      <section className="p-6 flex-1">
        <ProductList searchQuery={searchQuery} onAdd={addToBag} />
      </section>
    </div>
  );
}

