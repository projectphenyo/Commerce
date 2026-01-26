import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import { useBag } from "../context/BagContext";

export default function Menu({ searchQuery }) {
  const { addToBag } = useBag();

  return (
       <div className="flex flex-col h-full w-full bg-gray-100">
      <header className="mb-4 p-4 bg-gray-100  ">
        <h1 className="text-2xl font-semibold text-gray-800">Menu</h1>
        <SearchBar value={searchQuery} onChange={() => {}} />
      </header>

      <section aria-live="polite" className="p-6 grid gap-6">
        <ProductGrid searchQuery={searchQuery} onAdd={addToBag} />
      </section>
    </div>

  );
}
