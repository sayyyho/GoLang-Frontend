import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const Header = ({ children, color, isBack }) => {
  const navigation = useNavigate();
  return (
    <S.Layout color={color} $isBack={isBack}>
      {isBack && (
        <S.BackIcon
          onClick={() => {
            navigation(-1);
          }}
        />
      )}
      {children}
    </S.Layout>
  );
};
