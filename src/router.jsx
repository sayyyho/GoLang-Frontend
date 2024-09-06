import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import { HomePage } from "./pages/Home/Home.main.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { MyPage } from "./pages/MyPage/MyPage.jsx";
import { EvaluationPage } from "./pages/Evaluation/EvaluationPage.main.jsx";
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
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "evaluation",
        element: <EvaluationPage />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
