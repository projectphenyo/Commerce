import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BagPanel from "./components/BagPanel";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import Bag from "./pages/Bag";
import AddPayment from "./pages/AddPayment";
import Checkout from "./pages/Checkout";  
import ProductDetail from "./components/ProductDetail"; // <-- fixed import path
import { BagProvider } from "./context/BagContext";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BagProvider>
      <Router>
        {/* Top-level wrapper: relative so BagPanel can position inside */}
        <div className="relative flex min-h-screen">

          {/* Sidebar: fixed left side */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 ml-20 mr-72 p-6 bg-gray-50">
            {/* ml-20 = sidebar width, mr-72 = Bag panel width */}
            <Routes>
              <Route path="/" element={<Navigate to="/menu" replace />} />
              <Route path="/menu" element={<Menu searchQuery={searchQuery} />} />
              <Route path="/store" element={<Store searchQuery={searchQuery} />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/addPayment" element={<AddPayment />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* Bag panel */}
          <BagPanel />
        </div>
      </Router>
    </BagProvider>
  );
}
