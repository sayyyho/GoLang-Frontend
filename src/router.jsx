import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import { HomePage } from "./pages/Home/Home.main.jsx";
import { MyPage } from "./pages/MyPage/MyPage.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { ChatInfo } from "./pages/ChatSetting/ChatInfo";
import { ChatRelation } from "./pages/ChatSetting/ChatRelation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "main",
        element: <HomePage />,
      },
      {
        path: "loading",
        element: <Loading />,
      },

      {
        path: "chatting/peer/:room",
        element: <ChatPage />,
      },
      {
        path: "chatting/info",
        element: <ChatInfo />,
      },
      {
        path: "chatting/info/relation",
        element: <ChatRelation />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
