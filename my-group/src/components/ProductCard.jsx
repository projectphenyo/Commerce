//src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { money } from "../utils/format";
import RatingStars from "./RatingStars";

export default function ProductCard({ product, onAdd }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/detail/${product.id}`);

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`${product.name}, ${product.variant}, $${money(product.price)}. Open details.`}
      onClick={handleNavigate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNavigate();
        }
      }}
      className="group bg-gray-100 rounded-2xl shadow-md overflow-hidden object-contain  "
    >
      <div className="mb-4 aspect-square bg-product-card p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-70 rounded-2xl bg-white object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="mb-2">
        <div className="text-lg font-bold text-foreground">{product.name}</div>
        <div className="text-gray-600">{product.variant}</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-blue-600 font-semibold">${money(product.price)}</div>
        <button
          type="button"
          aria-label={`Add ${product.name} to bag`}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product.id);
          }}
          className="w-10 h-10 rounded-xl bg-icon-button text-icon-button-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l1.5-7M7 13l-4-8m0 0h18" />
          </svg>
        </button>
      </div>
    </article>
  );
}
