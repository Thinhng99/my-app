/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd-button-color/dist/css/style.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "store";
import { validateMessages } from "./utils/Validation";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConfigProvider form={{ validateMessages }}>
      <App />
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
