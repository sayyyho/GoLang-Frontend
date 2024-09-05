import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "/login",
        // element: <Login />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
