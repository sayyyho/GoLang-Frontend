import * as S from "./Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoadingImage from "../../assets/loadingPage.png";
import { getUserID } from "@/api/getID";

export const Loading = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      await getUserID();
    };
    getUser();
    // setTimeout(() => {
    //   navigation("/main");
    // }, 2500);
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
