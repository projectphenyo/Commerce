import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ searchQuery = "", onAdd }) {
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.variant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {filteredProducts.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
