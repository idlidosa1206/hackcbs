import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./pages/Popup";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <BrowserRouter>
      <Popup />
    </BrowserRouter>
  </React.StrictMode>
);
