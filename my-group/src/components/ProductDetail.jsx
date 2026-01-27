import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";
import RatingStars from "../components/RatingStars";
import { money } from "../utils/format";
import { useBag } from "../context/BagContext";
import bagAdd from "../assets/icons/bag-add.svg";

function productSVG(p) {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label={p.name}
      style={{ width: "100%", height: "100%" }}
    >
      <rect
        x="110"
        y="22"
        width="120"
        height="176"
        rx="28"
        fill={p.colorA || "#888"}
        opacity="0.8"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="24"
      >
        {p.name}
      </text>
    </svg>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToBag } = useBag();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(productSVG(product));

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6 flex-wrap">
          <button
            type="button"
            aria-label="Back"
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-black hover:underline"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="18"
              height="18"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold">{product.name}</h1>
        </header>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: vertical mini images */}
          <div className="flex flex-row md:flex-col gap-3 md:w-24 shrink-0">
            {[0, 1, 2].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMainImage(product.src)}
                className="flex-1 bg-white rounded-2xl p-2 md:p-4 flex items-center justify-center h-24 md:h-24"
              >
                <img
                  src={product.src}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </button>
            ))}
          </div>

          {/* Center: main image */}
          <div className="flex-1 bg-white rounded-2xl p-4 flex items-center justify-center h-64 md:h-96">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-full object-contain rounded"
            />
          </div>

          {/* Right: product info */}
          <div className="md:w-80 flex flex-col gap-2 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600 font-semibold">{product.variant}</p>
            <div className="flex items-center gap-2">
              <RatingStars rating={product.rating} />
              <span className="text-gray-700 font-semibold">
                {product.rating.toFixed(1)}/5
              </span>
            </div>
            <p className="text-xl font-bold">${money(product.price)}</p>
            <p className="text-gray-600">{product.miniDescription}</p>

            <button
              onClick={() => addToBag(product.id)}
              className="mt-2 bg-black text-white py-1.5 px-2 text-xs rounded-md font-medium inline-flex items-center gap-1 hover:opacity-90 transition w-fit"
            >
              <img src={bagAdd} alt="Add to bag" className="w-3 h-3" />
              Add to Bag
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 relative my-6"></div>

        {/* Full Description */}
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold">Description</h1>
          <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
        </div>
      </div>
    </div>
  );
}

