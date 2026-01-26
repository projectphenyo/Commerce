// src/pages/Store.jsx
import React from "react";
import { Button } from "../components/ui/Button"; 
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";
import RatingStars from "../components/RatingStars";
import { money } from "../utils/format";
import { useBag } from "../context/BagContext";

function ProductPlaceholder({ product }) {
  return (
    <div
      className="w-full h-72 flex items-center justify-center text-white text-2xl font-bold rounded-md"
      style={{ backgroundColor: product.colorA || "#ccc" }}
    >
      {product.name}
    </div>
  );
}

export default function Store() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToBag, bag } = useBag();
  const navigate = useNavigate();

  const isInCart = bag.has(product.id);

  return (
    <>
      {/* Header */}
      <header className="flex items-center gap-4 p-4 bg-gray-50">
        <button
          type="button"
          aria-label="Back"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <h1 className="text-xl font-bold">{product.name}</h1>
      </header>

      {/* Product Section */}
      <section aria-live="polite" className="p-6 grid md:grid-cols-2 gap-8">
        {/* Images */}
        <div aria-label="Product images" className="space-y-4">
          <div
            aria-label="Product thumbnails"
            className="flex gap-2 justify-center"
          >
            {[...Array(3)].map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View alternate image ${i + 1}`}
                className="w-24 h-24 border rounded overflow-hidden"
              >
                <ProductPlaceholder product={product} />
              </button>
            ))}
          </div>
          <div className="border rounded overflow-hidden">
            <ProductPlaceholder product={product} />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <div className="text-gray-500">{product.subtitle}</div>

          <div className="flex items-center gap-2">
            <RatingStars rating={product.rating} />
            <span className="font-semibold text-gray-700">
              {product.rating.toFixed(1)}/5
            </span>
          </div>

          <div className="text-xl font-bold">${money(product.price)}</div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
            imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
            tincidunt lorem mi duis. Vitae elementum libero.
          </p>

          {/* Add to Bag button */}
          <div className="flex gap-4">
            <Button
              size="icon"
              onClick={() => addToBag(product.id, 1)}
              className={`w-9 h-9 rounded-xl transition-all duration-200 ${
                isInCart
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              <span role="img" aria-label="shopping bag">🛍️</span>
            </Button>

            <button
              type="button"
              onClick={() => navigate("/bag")}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <span>🛍️</span>
              <span>View Bag</span>
            </button>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="p-6 border-t">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
          odio faucibus nec malesuada purus volutpat vel sed viverra. Id
          sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus.
        </p>
      </section>
    </>
  );
}


