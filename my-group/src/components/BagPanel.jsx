import React, { useEffect, useState } from "react";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import bagIcon from "../assets/icons/bag-handle.svg";
import BagItem from "./BagItem";
import { useNavigate, useLocation } from "react-router-dom";

export default function BagPanel() {
  const { bag, bagCount, addToBag, removeFromBag } = useBag();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setItems(Array.from(bag.entries()));
  }, [bag]);

  const isBagPage = location.pathname === "/bag";
  const isCheckoutPage = location.pathname === "/checkout";

  // Do NOT show side panel on Bag or Checkout pages
  if (isBagPage || isCheckoutPage) return null;

  return (
    <aside
      className="fixed top-0 right-0 h-screen w-72 md:w-80 flex-col p-4 bg-gray-100 transform transition-transform duration-300">
        {/* w-64 bg-white rounded-2xl p-5 shadow-sm h-fit sticky top-6 */}
      {/* Bag header */}
      <div className="p-4 bg-white rounded-xl mb-3">
        <h2 className="text-xl font-bold text-center">Bag</h2>
        <p className="text-sm text-center text-gray-500">
          {bagCount()} item{bagCount() !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Bag items */}
      <div className="flex flex-col gap-3 flex-1 overflow-auto bg-white rounded-xl p-3">
        {items.length === 0 && (
          <p className="text-center text-gray-400 mt-10">Your bag is empty</p>
        )}
        {items.map(([id, qty]) => {
          const p = PRODUCTS.find((x) => x.id === id);
          if (!p) return null;
          return (
            <BagItem
              key={id}
              product={p}
              quantity={qty}
              onIncrease={addToBag}
              onDecrease={removeFromBag}
            />
          );
        })}
      </div>

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        <button
          className="h-12 bg-black text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90"
          onClick={() => navigate("/bag")}
        >
          <img src={bagIcon} alt="Bag" className="w-4 h-4" />
          View Bag
        </button>

        {bagCount() > 0 && (
          <button
            className="h-12 bg-pink-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        )}
      </div>
      
    </aside>
  );
}



  {/* Bag total
  <div aria-label="Bag total" className="flex justify-between font-bold px-4 py-3 bg-white border-t border-border">
    <span>Bag Total:</span>
    <div>${money(total)}</div>
  </div> */}

  {/* Checkout button */}
  {/* <div className="p-4 bg-white border-t border-border">
    <button
      type="button"
      title="Checkout"
      onClick={() => alert(`Checkout - Total: $${money(total)}`)}
      disabled={items.length === 0}
      className="flex items-center gap-2 w-full justify-center px-4 py-3 bg-emerald-600 text-white rounded-lg disabled:opacity-50 hover:bg-black transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path d="M6 7h15l-1.5 9h-13z" />
        <path d="M6 7l-2-3H2" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
      <span>Checkout</span>
    </button>
  </div> */}

