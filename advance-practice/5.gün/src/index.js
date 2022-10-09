import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { StoreProvider } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
