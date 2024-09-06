import * as S from "./Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingImage from "../../assets/loadingPage.png";

export const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username"); // localStorage에서 username 가져오기

    setTimeout(() => {
      if (username) {
        navigate("/home"); // username이 있으면 /home으로 이동
      } else {
        navigate("/onboarding1"); // username이 없으면 /onboarding1fh으로 이동
      }
    }, 2000);
  }, [navigate]);

  return (
    <S.Loading
      style={{
        backgroundImage: `url(${LoadingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></S.Loading>
  );
};
