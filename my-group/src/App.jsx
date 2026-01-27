import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BagPanel from "./components/BagPanel";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import Bag from "./pages/Bag";
import AddPayment from "./pages/AddPayment";
import Checkout from "./pages/Checkout";
import ProductDetail from "./components/ProductDetail";
import { BagProvider } from "./context/BagContext";
import Confirmation from "./pages/Confirmation";

function AppLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const hideBagPanel =
    location.pathname === "/bag" ||
    location.pathname === "/checkout" ||
    location.pathname === "/addPayment" ||
    location.pathname === "/confirmation";

  return (
    <div className="relative flex min-h-screen">
  <Sidebar />

  <main className="flex-1 ml-20 p-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/menu" replace />} />
          <Route path="/menu" element={<Menu searchQuery={searchQuery} />} />
          <Route path="/store" element={<Store searchQuery={searchQuery} />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/addPayment" element={<AddPayment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

    </div>
  );
}

export default function App() {
  return (
    <BagProvider>
      <Router>
        <AppLayout />
      </Router>
    </BagProvider>
  );
}

