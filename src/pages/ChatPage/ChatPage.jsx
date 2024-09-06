import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { useRef, useEffect, useState } from "react";
import useSpeechToText from "@/hooks/useSpeechToText";
import { useNavigate, useParams } from "react-router-dom";

export const ChatPage = () => {
  const customInput = useRef();
  const recommendZone = useRef();
  const { transcript, toggleListening } = useSpeechToText();
  const [messages, setMessages] = useState([]); // 메시지 배열
  const socketRef = useRef();
  const params = useParams();
  const navigate = useNavigate();

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
    const username = localStorage.getItem("username");
    localStorage.setItem("chatroomUUID", params.room);
    if (!username) {
      localStorage.setItem("nextpage", "/chatting/info/another");
      navigate("/");
    } else {
      // WebSocket 연결 설정
      const ws = new WebSocket(`${import.meta.env.VITE_BASE_API}/chat/ws`);

      ws.onopen = () => {
        console.log("WebSocket connected");
        ws.send(JSON.stringify({ type: "join", room: params.room }));
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      ws.onclose = () => {
        console.log("WebSocket disconnected");
      };

      socketRef.current = ws;

      return () => {
        ws.close();
      };
    }
  }, [navigate, params.room]);

  const handleSendMessage = () => {
    const message = customInput.current.value;
    if (message.trim()) {
      const newMessage = { text: message, isMine: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify(newMessage));
      }

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
