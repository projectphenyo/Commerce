import React from "react";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import { money } from "../utils/format";
import RatingStars from "../components/RatingStars";
import { useNavigate } from "react-router-dom";

export default function Bag() {
  const { bag, addToBag, removeFromBag } = useBag();
  const navigate = useNavigate();

  const items = Array.from(bag.entries()).map(([id, qty]) => {
    const product = PRODUCTS.find((p) => p.id === id);
    return { ...product, quantity: qty };
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* LEFT: Items */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Check your Bag Items</h2>

        <div className="space-y-4 md:space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow">
              <img
                src={item.src}
                alt={item.name}
                className="w-full md:w-28 h-40 md:h-28 object-contain mx-auto"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.variant}</p>
                <p className="text-sm text-gray-500 mt-1">{item.miniDescription}</p>

                <div className="flex items-center gap-2 mt-2">
                  <RatingStars rating={item.rating} />
                  <span className="text-sm">{item.rating}/5</span>
                </div>
<div className="flex items-center justify-between gap-2">
                <div className="mt-2 font-semibold">
                  ${money(item.price)} × {item.quantity}
                </div>

                {/* Quantity controls */}
              <div className="flex flex-row items-center justify-center gap-2 mt-2">
                <button onClick={() => addToBag(item.id)} className="text-green-600 text-xl">+</button>
                <span>{item.quantity}</span>
                <button onClick={() => removeFromBag(item.id)} className="text-red-500 text-xl">−</button>
              </div>
              </div>

            </div>
              </div>

              
            
 
           
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-300" />

      {/* RIGHT: Summary */}
      <div className="w-full md:w-80 bg-white p-4 md:p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-4">Bag</h3>

        <div className="flex gap-2 mb-4 overflow-x-auto">
          {items.slice(0, 4).map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.name}
              className="w-12 h-12 object-contain border-white rounded shrink-0"
            />
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex justify-between font-semibold mb-4">
            <span>Bag Total:</span>
            <span>${money(total)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

