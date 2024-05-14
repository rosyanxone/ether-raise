import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context/index.jsx";
import App from "./App.jsx";

const apiKey = import.meta.env.VITE_API_KEY;
const chainId = import.meta.env.VITE_CHAIN_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider activeChain={parseInt(chainId)} clientId={apiKey}>
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </ThirdwebProvider>,
);
