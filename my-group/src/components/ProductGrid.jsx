//src/components/ProductGrid.jsx
import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ searchQuery = "", onAdd }) {
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.variant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-100">
      {filteredProducts.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
