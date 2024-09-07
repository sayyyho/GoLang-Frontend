import React, { useState, useEffect, useRef } from "react";
import * as Stomp from "@stomp/stompjs";
import SockJS from "sockjs-client";
import * as S from "./style";
import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const chatBoxRef = useRef(null);
  const stompClient = useRef(null);

  useEffect(() => {
    const socket = new SockJS("https://api.golang-ktb.site/chat/ws");
    stompClient.current = Stomp.over(socket);

    stompClient.current.connect({}, () => {
      console.log("Connected to WebSocket");
    });

    return () => {
      if (stompClient.current) {
        stompClient.current.disconnect();
      }
    };
  }, []);

  const subscribeToRoom = (roomId) => {
    if (currentRoomId === roomId) {
      alert("Already subscribed to this room.");
      return;
    }

    if (currentRoomId !== null) {
      stompClient.current.unsubscribe(`/sub/chatrooms/${currentRoomId}`);
      console.log(`Unsubscribed from room: ${currentRoomId}`);
    }

    setCurrentRoomId(roomId);

    stompClient.current.subscribe(`/sub/chatrooms/${roomId}`, (message) => {
      const chatMessage = JSON.parse(message.body);
      setMessages((prevMessages) => [
        ...prevMessages,
        `${chatMessage.username} (${chatMessage.nickname}): ${chatMessage.message}`,
      ]);
    });

    console.log(`Subscribed to room: ${roomId}`);
  };

  const sendMessage = () => {
    if (inputMessage.trim() === "" || currentRoomId === null) {
      alert("Please enter a message and subscribe to a room first.");
      return;
    }

    const chatMessage = {
      chatroomUUID: currentRoomId,
      username: "UserA",
      message: inputMessage,
    };

    stompClient.current.send("/pub/messages", {}, JSON.stringify(chatMessage));
    setInputMessage(""); // Clear the input field
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <S.ChatLayout>
        <Header color="black">
          <p>2인 채팅</p>
          <EndButton>끝내기</EndButton>
        </Header>
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter chat room ID"
              onKeyDown={(e) =>
                e.key === "Enter" && subscribeToRoom(e.target.value)
              }
            />
          </div>
          <div
            ref={chatBoxRef}
            className="h-96 overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg"
          >
            {messages.length === 0 ? (
              <h5 className="text-center text-gray-400">
                Messages will appear here...
              </h5>
            ) : (
              messages.map((msg, idx) => <p key={idx}>{msg}</p>)
            )}
          </div>
          <div className="flex">
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-green-600 transition duration-200"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </S.ChatLayout>
    </div>
  );
};

export default ChatPage;
