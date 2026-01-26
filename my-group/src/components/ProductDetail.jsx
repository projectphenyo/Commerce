import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PRODUCTS from "../data/products";
import RatingStars from "../components/RatingStars";
import { money } from "../utils/format";
import { useBag } from "../context/BagContext";

function productSVG(p) {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label={p.name}
      style={{ width: "100%", height: "280px" }}
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

  return (
    <>
      <header className="p-6 flex items-center gap-4">
        <button
          type="button"
          aria-label="Back"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            width="18"
            height="18"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>Back</span>
        </button>
        <h1 className="text-2xl font-bold">{product.name}</h1>
      </header>

      <section aria-live="polite" className="p-6">
        <div aria-label="Product images" className="mb-6">
          <div aria-label="Product thumbnails" className="flex gap-4 mb-4">
            {[...Array(3)].map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View alternate image ${i + 1}`}
                className="border rounded p-2"
              >
                {productSVG(product)}
              </button>
            ))}
          </div>
          <div>{productSVG(product)}</div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <div className="text-gray-600 mb-2">{product.variant}</div>

          <div className="flex items-center gap-2 mb-4">
            <RatingStars rating={product.rating} />
            <span>{product.rating.toFixed(1)}/5</span>
          </div>

          <div className="text-blue-600 font-semibold text-lg mb-4">${money(product.price)}</div>

          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
            imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
            tincidunt lorem mi duis. Vitae elementum libero.
          </p>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => addToBag(product.id, 1)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                width="18"
                height="18"
              >
                <path d="M6 8h12l-1 13H7L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
                <path d="M12 12v6" />
                <path d="M9 15h6" />
              </svg>
              <span>Add to Bag</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/bag")}
              className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-100 transition"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                width="18"
                height="18"
              >
                <path d="M6 8h12l-1 13H7L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>
              <span>View Bag</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
