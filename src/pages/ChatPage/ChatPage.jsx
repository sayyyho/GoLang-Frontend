import React, { useRef, useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { useNavigate, useParams } from "react-router-dom";
import useSpeechToText from "@/hooks/useSpeechToText";

export const ChatPage = () => {
  const customInput = useRef();
  const recommendZone = useRef();
  const { transcript, toggleListening } = useSpeechToText();
  const [messages, setMessages] = useState([]);
  const stompClient = useRef(null);
  const params = useParams();
  const navigate = useNavigate();
  const [currentRoomId, setCurrentRoomId] = useState(null);

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
      // SockJS와 Stomp 클라이언트 설정
      const socket = new SockJS(`${import.meta.env.VITE_BASE_API}/chat/ws`);
      stompClient.current = Stomp.over(socket);

      stompClient.current.connect({}, (frame) => {
        console.log('Connected: ' + frame);
        subscribeToRoom(params.room);
      });

      return () => {
        if (stompClient.current) {
          stompClient.current.disconnect();
        }
      };
    }
  }, [navigate, params.room]);

  const subscribeToRoom = (roomId) => {
    if (roomId === currentRoomId) {
      alert('You are already subscribed to this room.');
      return;
    }

    if (currentRoomId !== null) {
      stompClient.current.unsubscribe(`/sub/chatrooms/${currentRoomId}`);
      console.log(`Unsubscribed from room: ${currentRoomId}`);
    }

    setCurrentRoomId(roomId);

    stompClient.current.subscribe(`/sub/chatrooms/${roomId}`, (message) => {
      const chatMessage = JSON.parse(message.body);
      setMessages((prevMessages) => [...prevMessages, `${chatMessage.username}: ${chatMessage.message}`]);
    });

    console.log(`Subscribed to room: ${roomId}`);
  };

  const handleSendMessage = () => {
    const message = customInput.current.value;
    if (message.trim() === '' || currentRoomId === null) {
      alert('Please subscribe to a chat room and enter a message.');
      return;
    }

    const chatMessage = {
      chatroomUUID: currentRoomId,
      username: 'UserA',
      message: message
    };

    stompClient.current.send('/pub/messages', {}, JSON.stringify(chatMessage));
    setMessages((prevMessages) => [...prevMessages, `UserA: ${message}`]);
    customInput.current.value = "";
    handleResizeHeight();
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
        {messages.map((msg, index) => (
          <S.SendZone key={index}>{msg}</S.SendZone>
        ))}
      </S.ChattingZone>
      <S.RecommendTextContainer ref={recommendZone}>
        {/* <S.RecommendText>추천1</S.RecommendText>
        <S.RecommendText>추천2</S.RecommendText> */}
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