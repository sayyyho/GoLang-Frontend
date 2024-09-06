import * as S from "./Loading";
import LoadingImage from "../../assets/loadingPage.png";

export const Loading = () => {
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
