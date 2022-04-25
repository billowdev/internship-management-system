import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./views";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import services from "./services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore(services)}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
