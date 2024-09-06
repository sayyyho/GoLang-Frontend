import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";

export const ChatPage = () => {
  return (
    <S.ChatLayout
      style={{
        backgroundImage: `url(${CHATTING_LAYOUT})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header color="black">
        <p>고랭 : 2인 채팅</p>
        <EndButton>끝내기</EndButton>
      </Header>
    </S.ChatLayout>
  );
};
