import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CoinContextProvider from "./context/CoinContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>
);
