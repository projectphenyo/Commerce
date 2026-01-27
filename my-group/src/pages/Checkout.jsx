import { useState } from "react";
import gift from "../assets/icons/gift.svg";
import card from "../assets/icons/card.svg";
import selectedTrue from "../assets/icons/true.svg";  
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  // Address state
  const [fullName, setFullName] = useState("John Maker");
  const [street, setStreet] = useState("123 Plae Grond Street");
  const [city, setCity] = useState("Vermont");
  const [state, setState] = useState("California");
  const [country, setCountry] = useState("United States of America");

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState("Master ending in 1252");
  const [giftCardreal, setGiftCard] = useState("$53.21 gift card balance");
  const [billingaddress, setBillingaddress] = useState("Billing address same as shipping address");

  // Order summary placeholder values
  const itemsTotal = 5849.37;
  const shipping = 6.99;
  const gst = 760.41;
  const giftCard = 0;
  const orderTotal = itemsTotal + shipping + gst - giftCard;

  const money = (value) => value.toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left column: address + payment */}
        <div className="space-y-4">
          {/* Shipping Address Card */}
          <div className="w-full bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-semibold">SHIPPING ADDRESS</h2>
            <div className="space-y-1 text-gray-700 mt-2">
              <p>{fullName}</p>
              <p>{street}</p>
              <p>{city}, {state}</p>
              <p>{country}</p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/AddAddress")}
              className="mt-3 w-full md:w-auto border border-black rounded-lg py-2 hover:bg-gray-100"
            >
              Change
            </button>
          </div>

          {/* Payment Method Card */}
          <div className="w-full bg-white rounded-xl shadow-md p-4">
            <h2 className="text-lg font-semibold">PAYMENT METHOD</h2>
            <div className="space-y-2 text-gray-700 mt-2">
              <p className="flex items-center gap-2">
                <img src={card} alt="Card" className="w-6 h-6" />
                {paymentMethod}
              </p>
              <p className="flex items-center gap-2">
                <img src={gift} alt="Gift" className="w-6 h-6" />
                {giftCardreal}
              </p>
              <p className="flex items-center gap-2">
                <img src={selectedTrue} alt="Billing" className="w-6 h-6" />
                {billingaddress}
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/AddPayment")}
              className="mt-3 w-full md:w-auto border border-black rounded-lg py-2 hover:bg-gray-100"
            >
              Change
            </button>
          </div>
        </div>

        {/* Right column: Order Summary */}
        <aside
          className="bg-white rounded-xl shadow-lg p-5 md:sticky md:top-5 text-sm text-gray-500 font-semibold"
          aria-label="Order Summary"
        >
          <h3 className="text-lg font-semibold mb-2 text-black">Order Summary</h3>
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
            onClick={() => navigate("/Confirmation")}
            className="w-full py-3 rounded-lg bg-black text-white text-base hover:bg-gray-800"
          >
            Place your order
          </button>
          <button
            type="button"
            onClick={() => navigate("/Bag")}
            className="mt-3 w-full py-2 rounded-lg border border-black bg-transparent text-black font-bold text-sm hover:bg-gray-100"
          >
            &lt; Back
          </button>
        </aside>
      </div>
    </div>
  );
}
