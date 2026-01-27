import { useState } from "react";
import card from "../assets/icons/card.svg";
import icon from "../assets/images/icon.png";
import calendar from "../assets/icons/calendar.svg";
import lock from "../assets/icons/lock-closed.svg";
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
    navigate("/bag");
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
          <div className="bg-white p-3 rounded-lg mb-6 text-gray-500">
            <p className="flex items-center gap-2">
               <img src={card} alt={card} className="w-6 h-6" />
               MasterCard ending in 4242
             </p>
        <p className="flex items-center gap-2">
               <img src={card} alt={card} className="w-6 h-6 " />
               VISA Debit ending in 2894
             </p>
          
          </div>
          </div>

           {/* Add new card  */}
           <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6 mt-2">
          <h2 className="text-lg font-semibold">ADD A NEW CARD</h2>

          <label htmlFor="cardholder" className="block mb-1 font-light">
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

          <label htmlFor="cardNumber" className="block mb-1 font-light">
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
              <label htmlFor="expiry" className="block mb-1 font-light">
                Expiry Date
              </label>
              <div className="relative">
              <img
      src={calendar}
      alt="Calendar"
      className="absolute left-3 top-5 -translate-y-1/2 w-5 h-5 text-gray-400"
    />
              <input
                id="expiry"
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM / YYYY"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                required
              />
              </div>
            </div>
          
    
    




            <div className="flex-1">
              <label htmlFor="cvc" className="block mb-1 font-light">
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
            <span>Set as default payment method</span>
          </label>

           {/* Buttons  */}
          <button
            type="submit"
          
            className="  w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800"
          >
            <p className="flex items-center gap-2 text-center justify-center">
               <img src={icon} alt={card} className="w-6 h-6" />
                Add Payment Method
             </p>
           
          </button>

<div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className=" mt-3  py-2 hover:bg-gray-100 underline font-light"
          >
            Back
          </button>

           {/* Secure connection  */}
          <div className=" mt-3 text-green-600 font-light flex justify-end items-center gap-2">
          
  {/* imported image */}
  <img
    src={lock}
    alt="Secure"
    className="w-5 h-5 "
  />  
  <span>Secure Connection</span>
</div>
</div>

          </div>
    
        </form>
      </section>
    </>

          );
}


 