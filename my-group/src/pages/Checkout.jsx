import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBag } from "../context/BagContext";
import PRODUCTS from "../data/products";
import RatingStars from "../components/RatingStars";
import { money } from "../utils/format";
import gift from "../assets/icons/gift.svg";
import card from "../assets/icons/card.svg";
import selectedTrue from "../assets/icons/true.svg";

export default function Checkout() {
  const navigate = useNavigate();
  const { bag, addToBag, removeFromBag } = useBag();

  const [fullName] = useState("John Maker");
  const [street] = useState("123 Plae Grond Street");
  const [city] = useState("Vermont");
  const [state] = useState("California");
  const [country] = useState("United States of America");

  const [paymentMethod] = useState("Master ending in 1252");
  const [giftCardreal] = useState("$53.21 gift card balance");
  const [billingaddress] = useState("Billing address same as shipping address");

  const items = Array.from(bag.entries()).map(([id, qty]) => {
    const product = PRODUCTS.find((p) => p.id === id);
    return { ...product, quantity: qty };
  });

  const itemsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 6.99;
  const gst = 760.41;
  const giftCard = 0;
  const orderTotal = itemsTotal + shipping + gst - giftCard;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto flex gap-8">

        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-6">

          {/* Shipping */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg">SHIPPING ADDRESS</h2>
            <div className="mt-2 text-gray-700">
              <p>{fullName}</p>
              <p>{street}</p>
              <p>{city}, {state}</p>
              <p>{country}</p>
            </div>
            <button
              onClick={() => navigate("/AddAddress")}
              className="mt-3 border border-black rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Change
            </button>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg">PAYMENT METHOD</h2>
            <div className="mt-2 space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <img src={card} className="w-5 h-5" /> {paymentMethod}
              </p>
              <p className="flex items-center gap-2">
                <img src={gift} className="w-5 h-5" /> {giftCardreal}
              </p>
              <p className="flex items-center gap-2">
                <img src={selectedTrue} className="w-5 h-5" /> {billingaddress}
              </p>
            </div>
            <button
              onClick={() => navigate("/AddPayment")}
              className="mt-3 border border-black rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Change
            </button>
          </div>

          {/* Review Your Bag */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg mb-4">REVIEW YOUR BAG</h2>

            {items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-b last:border-b-0">
                <img src={item.src} className="w-20 h-20 object-contain" />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.variant}</p>

                  <div className="flex items-center gap-2 mt-1">
                    <RatingStars rating={item.rating} />
                    <span className="text-sm">{item.rating}/5</span>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">
                      ${money(item.price)} × {item.quantity}
                    </span>

                    <div className="flex items-center gap-3 text-lg">
                      <button onClick={() => removeFromBag(item.id)} className="text-red-500">−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToBag(item.id)} className="text-green-600">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — ORDER SUMMARY */}
        <aside className="w-72 bg-white rounded-xl shadow-lg p-5 h-fit sticky top-6">
          <h3 className="font-semibold text-lg mb-3">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Items:</span>
            <span>${money(itemsTotal)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated GST:</span>
            <span>${gst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Gift Card:</span>
            <span>${giftCard.toFixed(2)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-red-600 mb-4">
            <span>Total:</span>
            <span>${money(orderTotal)}</span>
          </div>

          <button
            onClick={() => navigate("/Confirmation")}
            className="w-full bg-black text-white py-2.5 rounded-lg hover:opacity-90"
          >
            Place order
          </button>

          <button
            onClick={() => navigate("/Bag")}
            className="w-full mt-3 border border-black py-2 rounded-lg hover:bg-gray-100"
          >
            &lt; Back
          </button>
        </aside>
      </div>
    </div>
  );
}


