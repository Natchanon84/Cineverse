import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const el = document.querySelector("#root")
const root = ReactDom.createRoot(el)

root.render(
  <App />
)