import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/Login";
import { AuthProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext"; // ✅ Import CartProvider
import CheckoutForm from "./components/Checkout";

const App = () => {
  return (
    <CartProvider> {/* ✅ Wrap entire app with CartProvider */}
      <Router>
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route
                path="/login"
                element={
                  <AuthProvider>
                    <LoginPage />
                  </AuthProvider>
                }
              />
              <Route path="/smartphones" element={<Home />} />
              <Route path="/checkout" element={<CheckoutForm />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
