import React, { useEffect, useState } from "react";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import { money } from "../utils/format";
import bagIcon from "../assets/icons/bag-handle.svg";
import { useNavigate } from "react-router-dom";
import BagItem from "./BagItem";


export default function BagPanel() {
  const { bag, bagCount, clearBag, addToBag, removeFromBag } = useBag();
   const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const arr = Array.from(bag.entries());
    setItems(arr);
  }, [bag]);

  const total = items.reduce((acc, [id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return p ? acc + p.price * qty : acc;
  }, 0);

   return (   
<aside
  aria-label="Bag panel"
  className="hidden sm:flex fixed right-0 top-0 h-screen sm:w-72 md:w-[320px] bg-background flex-col z-50"


>
  {/* Header */}
  <div className="p-4 border-b border-border bg-white">
    <h2 className="text-2xl font-bold text-foreground text-center">Bag</h2>
  </div>

  {/* Item count */}
  <div className="px-4 py-2 bg-white text-sm text-gray-600 ">
    {bagCount()} item{bagCount() !== 1 ? "s" : ""}
  </div>

  {/* Items preview */}
  <div
    aria-label="Bag items preview"
    className="flex flex-col gap-3 flex-1 overflow-auto px-4 py-4 bg-white"
  >
    {items.length === 0 && (
      <div className="flex flex-col items-center justify-center text-muted-foreground py-5">
        <p className="text-sm">Your bag is empty.</p>
      </div>
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

  {/* View Bag button */}
  <div className="p-4 border-t border-border bg-white">
    <button
      className="w-full h-12 bg-emerald-600 text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 hover:shadow-md transition-all"
      onClick={() => navigate("/Bag")}
    >
      <img src={bagIcon} alt="Shopping Bag" className=" w-4 h-4 " />
      View Bag
    </button>
  </div>

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
</aside>
  );
}
