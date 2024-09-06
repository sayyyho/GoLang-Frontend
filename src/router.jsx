import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import { HomePage } from "./pages/Home/Home.main.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { MyPage } from "./pages/MyPage/MyPage.jsx";
import {OnboardingPage1} from "./pages/OnboardingPage/OnboardingPage.1.jsx";
import {OnboardingPage2} from "./pages/OnboardingPage/OnboardingPage.2.jsx";
import {OnboardingPage3} from "./pages/OnboardingPage/OnboardingPage.3.jsx";
import {OnboardingPage4} from "./pages/OnboardingPage/OnboardingPage.4.jsx";
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
        path: "onboarding1",
        element: <OnboardingPage1 />,
      },
      {
        path: "onboarding2",
        element: <OnboardingPage2 />,
      },
      {
        path: "onboarding3",
        element: <OnboardingPage3 />,
      },
      {
        path: "onboarding4",
        element: <OnboardingPage4 />,
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
    ],
    // errorElement: <NotFound />,
  },
]);

export default router;
