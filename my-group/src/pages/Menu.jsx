import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import { useBag } from "../context/BagContext";

export default function Menu({ searchQuery }) {
  const { addToBag } = useBag();

  return (
    <main className="ml-20 flex-1 min-h-screen mr-70 bg-gray-50">
      <header className="p-6 bg-gray-100 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">Menu</h1>
        <SearchBar value={searchQuery} onChange={() => {}} />
      </header>

      <section aria-live="polite" className="p-6 grid gap-6">
        <ProductGrid searchQuery={searchQuery} onAdd={addToBag} />
      </section>
    </main>
  );
}
