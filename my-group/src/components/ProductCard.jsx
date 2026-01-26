//src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { money } from "../utils/format";
import bagAdd from "../assets/icons/bag-add.svg";

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
        className="group bg-gray-100 rounded-2xl shadow-md overflow-hidden object-contain 
                p-4 sm:p-6 hover:shadow-lg transition">

      <div className="mb-4 aspect-square bg-product-card p-4 flex items-center justify-center overflow-hidden">
        <img
          src={product.src}
          alt={product.name}
          className="w-full h-90 rounded-2xl bg-white object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

<div className="p-4">
  <h3 className="font-semibold text-foreground">{product.name}</h3>
  <p className="text-sm text-muted-foreground mb-3">{product.variant}</p>

  <div className="flex items-center justify-between">
    <span className="text-lg font-bold text-foreground">
      $ {money(product.price)}
    </span>

    {/* addToBag button */}
    <button
      type="button"
      aria-label={`Add ${product.name} to bag`}
      onClick={(e) => {
        e.stopPropagation();
        onAdd(product.id);
      }}
      className="w-10 h-10 rounded-xl bg-icon-button text-icon-button-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
    >
      <img src={bagAdd} alt="Add to bag" className="w-4 h-4" />
    </button>
  </div>
</div>


      {/* </div> */}
    </article>
  );
}
