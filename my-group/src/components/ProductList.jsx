import React from "react";
import PRODUCTS from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList({ searchQuery, onAdd }) {
  // Filter products by search query
  const filteredProducts = PRODUCTS.filter((p) =>
    [p.name, p.variant]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
