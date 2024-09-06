import * as S from "./Loading";
import LoadingImage from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Loading = () => {
  const navigation = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigation("/main");
    }, 2500);
  }, []);
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
