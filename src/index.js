import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./views";
import { Provider } from "react-redux";
import { configureStore } from "./application/store";
import services from "./infrastructure/services";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
);
