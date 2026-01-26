import React from "react";
import { money } from "../utils/format";

export default function BagItem({ product, quantity, onIncrease, onDecrease }) {
  return (
    <article className="flex items-center gap-4 border-b py-4">
      <div aria-hidden="true">
        <img
          src={product.src}
          alt={product.name}
          className="w-28 h-24 object-contain"
        />
      </div>

      <div className="flex-1">
        <div className="font-bold">{product.name}</div>
        <div className="text-gray-600">{product.variant}</div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at aliquam fermentum.
        </p>

        <div className="flex justify-between mt-2">
          <div className="text-blue-600 font-semibold">
            ${money(product.price)}
            <span className="ml-2 text-gray-500 font-bold">× {quantity}</span>
          </div>
        </div>
      </div>

      <div aria-label="Quantity controls" className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onDecrease(product.id)}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          –
        </button>
        <div aria-label="Quantity" className="font-bold">
          {quantity}
        </div>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onIncrease(product.id)}
          className="px-2 py-1 border rounded hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </article>
  );
}
