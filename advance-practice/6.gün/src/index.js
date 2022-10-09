import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { Provider as ContextProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider store={store}>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
