import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

if (typeof global === "undefined") {
  window.global = window;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
