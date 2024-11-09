import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./pages/Popup";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <HashRouter>
      <Popup />
    </HashRouter>
  </React.StrictMode>
);
