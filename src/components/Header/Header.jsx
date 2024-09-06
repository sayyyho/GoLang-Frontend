import * as S from "./style";

export const Header = ({ children, color }) => {
  return <S.Layout color={color}>{children}</S.Layout>;
};
