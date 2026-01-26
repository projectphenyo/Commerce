// src/pages/Checkout.jsx
import { useNavigate } from "react-router-dom";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import RatingStars from "../components/RatingStars";
import { money } from "../utils/format";

export default function Bag() {
  const { bag, addToBag, removeFromBag } = useBag();
  const navigate = useNavigate();

  const entries = Array.from(bag.entries());

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto p-6">

      {/* Left: Bag Items */}
      <section className="flex-1">
        <h1 className="font-fraunces text-3xl mb-6">Check your Bag Items</h1>

        {entries.length === 0 && <p>Your bag is empty.</p>}

        {entries.map(([id, qty]) => {
          const p = PRODUCTS.find((x) => x.id === id);
          if (!p) return null;

          return (
            <article
              key={id}
              className="bg-white/70 border border-black/10 rounded-2xl shadow-md p-4 grid grid-cols-[120px_1fr_auto] gap-4 items-center mb-4"
            >
              {/* Product Image */}
              <div className="w-28 h-24 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={p.src}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div>
                <h2 className="font-extrabold text-lg mb-1">{p.name}</h2>
                <div className="text-gray-500 font-semibold text-xs mb-2">
                  {p.variant}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <RatingStars rating={p.rating || 4.5} />
                  <div className="font-extrabold text-gray-800">
                    $ {money(p.price)}{" "}
                    <span className="text-gray-500 font-bold">× {qty}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromBag(id)}
                  className="w-8 h-8 rounded-lg border bg-white font-bold text-red-500 text-lg"
                >
                  −
                </button>
                <div className="min-w-6 text-center font-extrabold">{qty}</div>
                <button
                  onClick={() => addToBag(id)}
                  className="w-8 h-8 rounded-lg border bg-white font-bold text-green-500 text-lg"
                >
                  +
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {/* Right: Bag Preview
      <aside className="w-72 bg-white rounded-2xl shadow-lg p-5 sticky top-5 flex flex-col gap-4">

        {/* Images only
        <div className="grid grid-cols-3 gap-3">
          {entries.map(([id]) => {
            const p = PRODUCTS.find((x) => x.id === id);
            if (!p) return null;

            return (
              <div
                key={id}
                className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* View Bag Button 
        <button
          onClick={() => navigate("/Checkout")}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-black text-white font-semibold hover:opacity-90 transition"
        >
          <span className="material-icons text-base">shopping_bag</span>
          View Bag
        </button>

      </aside>*/}
    </div>
  );
}

