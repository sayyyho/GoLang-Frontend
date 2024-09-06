import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import { HomePage } from "./pages/Home/Home.main.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { MyPage } from "./pages/MyPage/MyPage.jsx";
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
        path: "chatting",
        element: <ChatPage />,
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
