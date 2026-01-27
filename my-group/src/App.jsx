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
        <div className="app flex">
          <Sidebar />
          <main className="main flex-1 min-h-screen ml-20 mr-70 bg-gray-50 p-6">
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
          <BagPanel />
        </div>
      </Router>
    </BagProvider>
  );
}
