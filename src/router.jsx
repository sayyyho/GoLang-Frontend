import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import {HomePage} from "./pages/Home/Home.main.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";

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
      {
        path: "main",
        element: <ChatPage />,
      },
      {
        path: "chatting/peer/:room",
        element: <ChatPage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
