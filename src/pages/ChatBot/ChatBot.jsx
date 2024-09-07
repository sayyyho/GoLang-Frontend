import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { useRef, useEffect, useState } from "react";
import useSpeechToText from "@/hooks/useSpeechToText";
import { useNavigate, useParams } from "react-router-dom";
import { postAIBot } from "@/api/postAIBot";

export const ChatBot = () => {
  const customInput = useRef();
  const recommendZone = useRef();
  const { transcript, toggleListening } = useSpeechToText();
  const [messages, setMessages] = useState([]); // 메시지 배열

  const handleResizeHeight = () => {
    if (customInput.current && recommendZone.current) {
      customInput.current.style.height = "auto";
      customInput.current.style.height = `${customInput.current.scrollHeight}px`;

      const bottomOffset = 30 + customInput.current.scrollHeight;
      recommendZone.current.style.bottom = `${bottomOffset}px`;
    }
  };

  useEffect(() => {
    customInput.current.value = transcript;
    handleResizeHeight();
  }, [transcript]);

  const handleSendMessage = async () => {
    const message = customInput.current.value;
    if (message.trim()) {
      const newMessage = {
        text: message,
        isMine: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      customInput.current.value = "";
      handleResizeHeight();

      try {
        const response = await postAIBot(message);
        if (response.data.data) {
          const botResponse = {
            text: response.data.polishedMessage,
            isMine: false,
          };
          setMessages((prevMessages) => [...prevMessages, botResponse]);
          handleResizeHeight();
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handlePolishMessage = async () => {
    const chatMessage = customInput.current.value;
    if (chatMessage.trim()) {
      try {
        const response = await postAIBot({ chatMessage });
        if (response.data.data) {
          customInput.current.value = response.data.polishedMessage;
          handleResizeHeight();
        }
      } catch (error) {
        console.error("Error polishing message:", error);
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${CHATTING_LAYOUT})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <S.ChatLayout>
        <Header color="black">
          <p>고랭과 가상 채팅</p>
          <EndButton>끝내기</EndButton>
        </Header>
        <S.ChattingZone>
          <S.ResBox>
            <S.ResZone>
              반갑습니다 ☺️{localStorage.getItem("relation")}모드입니다.
            </S.ResZone>
            <S.ResImage
              style={{
                backgroundImage: `url(${BOT_IMG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></S.ResImage>
          </S.ResBox>
          {messages.map((message, index) =>
            message.isMine ? (
              <S.SendZone key={index}>{message.text}</S.SendZone>
            ) : (
              <S.ResBox key={index}>
                <S.ResZone>{message.text}</S.ResZone>
                <S.ResImage
                  style={{
                    backgroundImage: `url(${BOT_IMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></S.ResImage>
              </S.ResBox>
            )
          )}
        </S.ChattingZone>
      </S.ChatLayout>
      <S.BtnContainer>
        <S.OptionButton onClick={handlePolishMessage}>순화하기</S.OptionButton>
        <S.OptionButton>정리하기</S.OptionButton>
      </S.BtnContainer>

      <S.InputContainer>
        <S.StyledInput
          rows={1}
          ref={customInput}
          onChange={() => {}}
          onInput={handleResizeHeight}
          maxLength={500}
        />
        <S.MicrophoneIcon onClick={toggleListening} />
        <S.SendIcon onClick={handleSendMessage} />
      </S.InputContainer>
    </div>
  );
};
