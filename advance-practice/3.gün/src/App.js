import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components3/Home";
import LoginForm from "./components3/LoginForm";
import RegisterForm from "./components3/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
