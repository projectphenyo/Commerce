// src/pages/Checkout.jsx
import { useNavigate } from "react-router-dom";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import RatingStars from "../components/RatingStars";
import { money } from "../utils/format";

export default function Checkout() {
  const { bag, addToBag, removeFromBag } = useBag();
  const navigate = useNavigate();

  const entries = Array.from(bag.entries());

  // Calculate totals
  const itemsTotal = entries.reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((x) => x.id === id);
    return p ? sum + p.price * qty : sum;
  }, 0);

  const shipping = 6.99;
  const gst = 760.41; // Example GST
  const giftCard = 0.0;
  const orderTotal = itemsTotal + shipping + gst - giftCard;

  return (
    <div className="flex gap-6 max-w-6xl mx-auto p-6">
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
              {/* Product Image Placeholder */}
              <div
                aria-hidden="true"
                className="w-30 h-24 rounded-xl bg-gray-200 grid place-items-center font-bold text-sm text-gray-600"
              >
                {p.name}
              </div>

              {/* Product Info */}
              <div>
                <h2 className="font-extrabold text-lg mb-1">{p.name}</h2>
                <div className="text-gray-500 font-semibold text-xs mb-2">
                  {p.variant}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2 max-w-prose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <RatingStars rating={p.rating || 4.5} />
                  <div className="font-extrabold text-gray-800">
                    $ {money(p.price)}{" "}
                    <span className="text-gray-500 font-bold">× {qty}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Controls */}
              <div
                aria-label={`Quantity controls for ${p.name}`}
                className="flex items-center gap-2"
              >
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => removeFromBag(id)}
                  className="w-8 h-8 rounded-lg border border-black/10 bg-white/70 font-bold text-red-500 text-lg cursor-pointer"
                >
                  −
                </button>
                <div
                  aria-label="Quantity"
                  className="min-w-6 text-center font-extrabold text-gray-800"
                >
                  {qty}
                </div>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => addToBag(id)}
                  className="w-8 h-8 rounded-lg border border-black/10 bg-white/70 font-bold text-green-500 text-lg cursor-pointer"
                >
                  +
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {/* Right: Order Summary */}
      <aside
        className="w-72 bg-white rounded-xl shadow-lg p-5 sticky top-5 text-sm text-gray-900 font-semibold"
        aria-label="Order Summary"
      >
        <div className="mb-3 flex justify-between">
          <span>Items:</span>
          <span>$ {money(itemsTotal)}</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span>Shipping:</span>
          <span>$ {shipping.toFixed(2)}</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span>Estimated GST:</span>
          <span>$ {gst.toFixed(2)}</span>
        </div>
        <div className="mb-3 flex justify-between">
          <span>Gift Card:</span>
          <span>$ {giftCard.toFixed(2)}</span>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="mb-5 flex justify-between text-red-600 font-extrabold text-lg">
          <span>Order Total:</span>
          <span>$ {money(orderTotal)}</span>
        </div>
        <button
          type="button"
          onClick={() => alert("Checkout complete!")}
          className="w-full py-3 rounded-lg bg-black text-white font-extrabold text-base hover:bg-gray-800"
        >
          Place your order
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-3 w-full py-2 rounded-lg border border-black bg-transparent text-black font-bold text-sm hover:bg-gray-100"
        >
          &lt; Back
        </button>
      </aside>
    </div>
  );
}