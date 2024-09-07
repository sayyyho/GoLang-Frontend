import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { useRef, useEffect, useState } from "react";
import useSpeechToText from "@/hooks/useSpeechToText";
import { useNavigate, useParams } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

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
      customInput.current.style.height = `${customInput.current.scrollHeight}px`;

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
      // WebSocket 및 STOMP 클라이언트 설정
      const sock = new SockJS(`https://api.golang-ktb.site/chat/ws`);
      const stompClient = new Client({
        webSocketFactory: () => sock,
        debug: function (str) {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      stompClient.onConnect = () => {
        stompClient.subscribe(`/sub/chatrooms/${params.room}`, (message) => {
          const receivedMessage = JSON.parse(message.body);

          // 서버에서 수신한 메시지가 내가 보낸 메시지가 아닌 경우에만 추가
          if (receivedMessage.username !== localStorage.getItem("username")) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { ...receivedMessage, isMine: false },
            ]);
          }
        });
      };

      stompClient.onDisconnect = () => {
        console.log("Disconnected");
      };

      stompClient.activate();

      socketRef.current = stompClient;

      return () => {
        stompClient.deactivate();
      };
    }
  }, [navigate, params.room]);

  const handleSendMessage = () => {
    const message = customInput.current.value;
    if (message.trim()) {
      const newMessage = {
        chatroomUUID: localStorage.getItem("chatroomUUID"),
        username: localStorage.getItem("username"),
        message: message,
      };
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...newMessage, isMine: true },
      ]);

      if (socketRef.current && socketRef.current.connected) {
        socketRef.current.publish({
          destination: "/pub/messages",
          body: JSON.stringify(newMessage),
        });
      }

      customInput.current.value = "";
      handleResizeHeight();
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
          <p>2인 채팅</p>
          <EndButton>끝내기</EndButton>
        </Header>
        <S.ChattingZone>
          {messages.map((message, index) =>
            message.isMine ? (
              <S.SendZone key={index}>{message.message}</S.SendZone>
            ) : (
              <S.ResBox key={index}>
                <S.ResZone>{message.message}</S.ResZone>
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
