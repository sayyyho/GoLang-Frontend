import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import SEND_IMG from "@/assets/send.svg";
import { DUMMY_TEXT } from "@/constant/dummy";

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
      <S.ChattingZone>
        <S.SendZone>{DUMMY_TEXT}</S.SendZone>
        <S.ResBox>
          <S.ResZone>{DUMMY_TEXT}</S.ResZone>
          <S.ResImage
            style={{
              backgroundImage: `url(${BOT_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></S.ResImage>
        </S.ResBox>
      </S.ChattingZone>
      <S.BtnContainer>
        <S.OptionButton>
          순화하기
          <S.SendCustomIcon />
        </S.OptionButton>
        <S.OptionButton>
          정리하기
          <S.SendCustomIcon />
        </S.OptionButton>
      </S.BtnContainer>
      <S.InputContainer>
        <S.StyledInput placeholder="메시지를 입력하세요..." />
        <S.MicrophoneIcon />
        <S.SendIcon />
      </S.InputContainer>
    </S.ChatLayout>
  );
};
