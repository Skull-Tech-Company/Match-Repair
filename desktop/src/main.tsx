import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.tsx";
import { ModalProvider } from "@/contexts/ModalContext";

import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ModalProvider {...{ children: <App /> }}>
        <App />
      </ModalProvider>
    </Router>
  </React.StrictMode>
);
