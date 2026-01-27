import React, { useEffect, useState } from "react";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import bagIcon from "../assets/icons/bag-handle.svg";
import { useNavigate } from "react-router-dom";

export default function BagPanel() {
  const { bag } = useBag();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const arr = Array.from(bag.entries());
    setItems(arr);
  }, [bag]);

  return (
    <aside
  aria-label="Bag panel"
  className="hidden sm:flex fixed right-0 top-0 h-screen sm:w-72 md:w-[320px] flex-col z-50 p-4 bg-gray-100 border-l border-gray-300"
>

      <p className="text-center text-black font-bold text-lg mt-4">
      Bag
      </p>

      {/* Container for images + button */}
      <div className="flex flex-col gap-4">
        {/* Product images */}
        <div className="grid grid-cols-3 gap-3">
          {items.length === 0 && (
            <p className="col-span-3 text-center text-gray-500 text-sm mt-4">
              Your bag is empty
            </p>
          )}

          {items.map(([id]) => {
            const p = PRODUCTS.find((x) => x.id === id);
            if (!p) return null;

            return (

              <div
                key={id}
                className="w-20 h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-sm"
              >
                <img
                  src={p.src}
                  alt={`Product ${id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* Black "View Bag" button directly under images */}
        <button
          onClick={() => navigate("/Bag")}
          className="w-full py-3 rounded-full bg-black text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
        >
          <img src={bagIcon} alt="Shopping Bag" className="w-4 h-4 invert" />
          View Bag
        </button>
      </div>
    </aside>
  );
}


