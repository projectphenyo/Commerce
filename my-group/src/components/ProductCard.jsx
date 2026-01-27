// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { money } from "../utils/format";
import bagAdd from "../assets/icons/bag-add.svg";
import shoppingCart from "../assets/icons/shoppingiconToday.png";

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
      className="group rounded-3xl  overflow-hidden 
                 p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow duration-300
                 flex flex-col w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md"
    >
      {/* Image Container */}
      <div className="mb-4 w-full aspect-square rounded-3xl bg-white p-4 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-70 object-contain rounded-3xl"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{product.variant}</p>
        </div>

        {/* Price & Add Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-900">
            $ {money(product.price)}
          </span>
          <button
            type="button"
            aria-label={`Add ${product.name} to bag`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product.id);
            }}
            className="w-10 h-10 rounded-2xl bg-gray-100 text-white flex items-center justify-center 
                       hover:bg-gray-200 transition-colors duration-300"
          >
            <img src={shoppingCart} alt="Add to bag" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

