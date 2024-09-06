import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import HomePage from "./pages/Home/Home.main.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <HomePage />,
      },
      {
        path: "loading",
        element: <Loading />,
      },

    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
