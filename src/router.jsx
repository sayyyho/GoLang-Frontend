import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import App from "./App";
import { Loading } from "./pages/Loading/Loading.jsx";
import { HomePage } from "./pages/Home/Home.main.jsx";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { MyPage } from "./pages/MyPage/MyPage.jsx";
import { EvaluationPage } from "./pages/Evaluation/EvaluationPage.main.jsx";
import { OnboardingPage1 } from "./pages/OnboardingPage/OnboardingPage.1.jsx";
import { OnboardingPage2 } from "./pages/OnboardingPage/OnboardingPage.2.jsx";
import { OnboardingPage3 } from "./pages/OnboardingPage/OnboardingPage.3.jsx";
import { OnboardingPage4 } from "./pages/OnboardingPage/OnboardingPage.4.jsx";
import { ChatInfo } from "./pages/ChatSetting/ChatInfo";
import { ChatRelation } from "./pages/ChatSetting/ChatRelation";
import { Share } from "./pages/SharePage/Share";

// ProtectedRoute 컴포넌트 정의
const ProtectedRoute = ({ element }) => {
  const username = localStorage.getItem("username");

  // username이 없으면 "/onboarding/1" 경로로 리다이렉트
  return username ? element : <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <ProtectedRoute element={<HomePage />} />,
      },
      {
        path: "",
        element: <Loading />,
      },
      {
        path: "onboarding/1",
        element: <OnboardingPage1 />, // 온보딩 페이지는 보호되지 않음
      },
      {
        path: "onboarding/2",
        element: <OnboardingPage2 />, // 온보딩 페이지는 보호되지 않음
      },
      {
        path: "onboarding/3",
        element: <OnboardingPage3 />, // 온보딩 페이지는 보호되지 않음
      },
      {
        path: "onboarding/4",
        element: <OnboardingPage4 />, // 온보딩 페이지는 보호되지 않음
      },
      {
        path: "chatting/peer/:room",
        element: <ProtectedRoute element={<ChatPage />} />,
      },
      {
        path: "chatting/info",
        element: <ProtectedRoute element={<ChatInfo />} />,
      },
      {
        path: "chatting/info/relation",
        element: <ProtectedRoute element={<ChatRelation />} />,
      },
      {
        path: "mypage",
        element: <ProtectedRoute element={<MyPage />} />,
      },
      {
        path: "evaluation",
        element: <ProtectedRoute element={<EvaluationPage />} />,
      },
      {
        path: "share",
        element: <ProtectedRoute element={<Share />} />,
      },
    ],
  },
]);

export default router;
