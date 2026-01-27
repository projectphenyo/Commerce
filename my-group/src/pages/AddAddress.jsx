import { useState } from "react";
import lock from "../assets/icons/lock-closed.svg";
import { useNavigate } from "react-router-dom";

export default function AddAddress() {
  const navigate = useNavigate();

  // Address state
  const [fullName, setFullName] = useState("John Maker");
  const [street, setStreet] = useState("123 Plae Grond Street");
  const [city, setCity] = useState("Vermont");
  const [state, setState] = useState("California");
  const [country, setCountry] = useState("United States of America");

  // Checkbox state
  const [defaultAddress, setDefaultAddress] = useState(false);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted!\n${fullName}, ${street}, ${city}, ${state}, ${country}\nDefault: ${defaultAddress}`
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6" aria-live="polite">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        {/* Shipping Address Card */}
        <div className="w-full bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-lg font-semibold text-center">SHIPPING ADDRESS</h2>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block mb-1 font-light">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Street */}
          <div>
            <label htmlFor="street" className="block mb-1 font-light">
              Street
            </label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block mb-1 font-light">
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block mb-1 font-light">
              State/Province
            </label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block mb-1 font-light">
              Country
            </label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={defaultAddress}
              onChange={() => setDefaultAddress(!defaultAddress)}
            />
            <span>Set as default address</span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex justify-center bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800"
          >
            Save Address
          </button>

          {/* Footer row */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mt-3 py-2 hover:bg-gray-100 underline font-light"
            >
              Back
            </button>

            {/* Secure connection */}
            <div className="mt-3 text-green-600 font-light flex items-center gap-2">
              <img src={lock} alt="Secure" className="w-5 h-5" />
              <span>Secure Connection</span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}