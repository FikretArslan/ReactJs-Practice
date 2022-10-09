import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
