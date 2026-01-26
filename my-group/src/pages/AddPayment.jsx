import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPaymentMethod() {
  const navigate = useNavigate();
  const [cardholder, setCardholder] = useState("John Maker");
  const [cardNumber, setCardNumber] = useState("5126-5987-2214-7621");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [defaultPayment, setDefaultPayment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment method added!");
    navigate("/checkout");
  };

  return (  
    <>
      <section className="p-6" aria-live="polite">
        <form
          onSubmit={handleSubmit}
        >
          {/* select a cards */}
          <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6 mb-2">
          <h2 className="text-lg font-semibold">SELECT A CARD</h2>
          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <p>MasterCard ending in 4242</p>
            <p>VISA Debit ending in 2894</p>
          </div>
          </div>

           {/* Add new card  */}
           <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6 mt-2">
          <h2 className="text-lg font-semibold">ADD A NEW CARD</h2>

          <label htmlFor="cardholder" className="block mb-1 font-medium">
            Cardholder Name
          </label>
          <input
            id="cardholder"
            type="text"
            value={cardholder}
            onChange={(e) => setCardholder(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            required
          />

          <label htmlFor="cardNumber" className="block mb-1 font-medium">
            Card Number
          </label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="xxxx-xxxx-xxxx-xxxx"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            required
          />

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block mb-1 font-medium">
                Expiry Date
              </label>
              <input
                id="expiry"
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM / YYYY"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="cvc" className="block mb-1 font-medium">
                CVC
              </label>
              <input
                id="cvc"
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="123"
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          <label className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={defaultPayment}
              onChange={() => setDefaultPayment(!defaultPayment)}
            />
            <span>Save this as your default payment method</span>
          </label>

           {/* Buttons  */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800"
          >
            Add Payment Method
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full mt-3 border border-black rounded-lg py-2 hover:bg-gray-100"
          >
            Back
          </button>

           Secure connection 
          <div className="mt-3 text-green-600 font-bold flex items-center gap-2">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>Secure Connection</span>
          </div>
          </div>  
        </form>
      </section>
    </>

          );
}


 