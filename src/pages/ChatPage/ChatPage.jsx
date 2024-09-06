import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { DUMMY_TEXT } from "@/constant/dummy";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSpeechToText from "@/hooks/useSpeechToText";

export const ChatPage = () => {
  const customInput = useRef();
  const recommendZone = useRef();
  const { transcript, listening, toggleListening } = useSpeechToText();
  //   const { room } = useParams();

  const handleResizeHeight = () => {
    if (customInput.current && recommendZone.current) {
      customInput.current.style.height = "auto";
      customInput.current.style.height =
        customInput.current.scrollHeight + "px";

      const bottomOffset = 30 + customInput.current.scrollHeight;
      recommendZone.current.style.bottom = `${bottomOffset}px`;
    }
  };

  useEffect(() => {
    customInput.current.value = transcript;
    handleResizeHeight();
  }, [transcript]);

  return (
    <S.ChatLayout
      style={{
        backgroundImage: `url(${CHATTING_LAYOUT})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header color="black">
        <p>2인 채팅</p>
        <EndButton>끝내기</EndButton>
      </Header>
      <S.ChattingZone>
        {/* <S.SendZone>{DUMMY_TEXT}</S.SendZone>
        <S.ResBox>
          <S.ResZone>{DUMMY_TEXT}</S.ResZone>
          <S.ResImage
            style={{
              backgroundImage: `url(${BOT_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></S.ResImage>
        </S.ResBox> */}
      </S.ChattingZone>
      <S.RecommendTextContainer ref={recommendZone}>
        <S.RecommendText>추천1</S.RecommendText>
        <S.RecommendText>추천2</S.RecommendText>
      </S.RecommendTextContainer>
      <S.InputContainer>
        <S.StyledInput
          rows={1}
          ref={customInput}
          onChange={() => {}}
          onInput={handleResizeHeight}
          maxLength={500}
        />
        <S.MicrophoneIcon onClick={toggleListening} />
        <S.SendIcon />
      </S.InputContainer>
    </S.ChatLayout>
  );
};
