import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
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
