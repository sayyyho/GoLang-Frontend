import * as S from "./style";
import { Header } from "@/components/Header/Header";
import CHAT_LAYOUT from "@/assets/ChatLayout.png";

export const ChatInfo = () => {
  return (
    <S.Layout
      style={{
        backgroundImage: `url(${CHAT_LAYOUT})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header color="black" isBack={true}>
        2인 채팅
      </Header>
      <S.SettingZone></S.SettingZone>
    </S.Layout>
  );
};
