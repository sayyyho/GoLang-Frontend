import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { useRef, useEffect, useState } from "react";
import useSpeechToText from "@/hooks/useSpeechToText";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

export const ChatPage = () => {
  const customInput = useRef();
  const recommendZone = useRef();
  const { transcript, toggleListening } = useSpeechToText();
  const [messages, setMessages] = useState([]); // 메시지 배열
  const socketRef = useRef();
  const params = useParams();

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

  useEffect(() => {
    // 소켓 연결 설정
    socketRef.current = io(`https://api.golang-ktb.site/${params.room}`);

    // 특정 방에 조인
    const roomName = "y";
    socketRef.current.emit("join", roomName);

    // 메시지 수신 시 처리
    socketRef.current.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    const message = customInput.current.value;
    if (message.trim()) {
      // 내가 보낸 메시지 추가
      const newMessage = { text: message, isMine: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // 서버로 메시지 전송
      socketRef.current.emit("send-message", newMessage);

      // 입력창 비우기
      customInput.current.value = "";
      handleResizeHeight();
    }
  };

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
        <S.SendIcon onClick={handleSendMessage} />
      </S.InputContainer>
    </S.ChatLayout>
  );
};
