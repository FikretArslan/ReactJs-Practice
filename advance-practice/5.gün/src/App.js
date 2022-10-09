import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components5/Cart";
import Products from "./components5/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
