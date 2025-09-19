import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router";
import CounterContextProvider, { CounterContext } from "./context/CounterContext";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CounterContextProvider>
      <App/>
    </CounterContextProvider>
      <Toaster/>   
  </BrowserRouter>
);
