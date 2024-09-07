import { Header } from "@/components/Header/Header";
import { EndButton } from "@/components/Button/Button";
import * as S from "./style";
import BOT_IMG from "@/assets/bot.png";
import CHATTING_LAYOUT from "@/assets/chatLayout.svg";
import { useRef, useEffect, useState } from "react";
import useSpeechToText from "@/hooks/useSpeechToText";
import { useNavigate, useParams } from "react-router-dom";
import SockJS from "sockjs-client";

// Mock data for filtered employee messages
const filteredEmployeeMessages = [
  "안녕하세요, 팀장님. 프로젝트는 거의 마무리 단계에 와 있습니다. 다만, 클라이언트 측에서 추가 기능 요청이 있어, 약간의 추가 작업이 필요할 것 같습니다. 팀 내에서 해결 방안을 논의 중이며, 구체적인 계획을 곧 세워 보고드리겠습니다.",
  "안녕하세요, 팀장님! 프로젝트 진행 상황을 보고드리려고 합니다. 현재 전체 작업의 70%가 완료되었고, 나머지도 예정된 기한 내에 마무리될 수 있을 것 같습니다.",
  "팀장님, 프로젝트는 거의 마무리 단계에 있습니다. 클라이언트 요청으로 인해 몇 가지 추가 작업이 발생할 수 있어 이에 대해 보고드리고자 합니다.",
];

const managerResponses = [
  "수고 많았어요. 진행 상황이 순조롭게 진행되고 있다니 다행이네요. 클라이언트 요청 사항이 변경된 부분에 대해서는 어떤 추가 작업이 필요한지 구체적으로 알려줄 수 있을까요? 추가 시간이 필요한 부분이 있으면 미리 알려줘야 하니, 전체 일정을 다시 한번 검토해보고 제안 부탁드립니다. 또한, 다른 팀 간 협업에 어려움은 없었나요? 꼭 피드백 주세요.",
  "좋아요. 클라이언트 요청 사항을 정리한 후 다시 한 번 회의 일정을 잡아보죠. 필요한 부분이 있다면 적극적으로 논의하고 해결해 나가면 될 것 같습니다. 이번 프로젝트가 중요한 만큼, 계속해서 꼼꼼히 체크 부탁드리고, 문제가 생기면 즉시 보고해 주세요. 고생 많았습니다.",
];

export const ChatBot = () => {
  const customInput = useRef();
  const recommendZone = useRef();
  const { transcript, toggleListening } = useSpeechToText();
  const [messages, setMessages] = useState([]); // 메시지 배열
  const socketRef = useRef();
  const params = useParams();
  const navigate = useNavigate();
  const [responseIndex, setResponseIndex] = useState(0); // 응답 인덱스 관리
  const [filteredIndex, setFilteredIndex] = useState(0); // 순화된 메시지 인덱스 관리

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

  const handleSendMessage = () => {
    const message = customInput.current.value;
    if (message.trim()) {
      const newMessage = { text: message, isMine: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // 목데이터에서 응답 추가
      if (responseIndex < managerResponses.length) {
        const botResponse = {
          text: managerResponses[responseIndex],
          isMine: false,
        };
        setTimeout(() => {
          setMessages((prevMessages) => [...prevMessages, botResponse]);
          setResponseIndex(responseIndex + 1); // 다음 응답으로 인덱스 증가
        }, 1000);
      }

      customInput.current.value = "";
      handleResizeHeight();
    }
  };

  const handlePolishMessage = () => {
    if (filteredIndex < filteredEmployeeMessages.length) {
      customInput.current.value = filteredEmployeeMessages[filteredIndex];
      setFilteredIndex(filteredIndex + 1); // 다음 순화된 메시지로 인덱스 증가
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
