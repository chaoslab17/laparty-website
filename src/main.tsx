import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";

const basename = import.meta.env.PROD ? "/laparty-website" : "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Suspense fallback={null}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.Suspense>,
);
