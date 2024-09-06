import * as S from "./style";
import CHAT_LAYOUT from "@/assets/ChatLayout.png";
import REL_GOLANG from "@/assets/relationGolang.svg";
import { useState } from "react";
import { CHOOSE_TEXT } from "@/constant/chatSetting";
import { Header } from "@/components/Header/Header";
import { postDetailAnother } from "@/api/postDetailAnother";
import { chatJoin } from "@/api/chatJoin";
import { useNavigate } from "react-router-dom";

const relation = ["커플", "친구", "가족", "기타"];
const sendRelation = ["COUPLE", "FRIEND", "FAMILY", "ETC"];

export const ChatAnother = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState([false, false, false, false]);
  const [selectedNum, setSelectedNum] = useState(null);
  const [chatDetails, setChatDetails] = useState(""); // 상태 추가

  const handleSelect = (index) => {
    const box = [false, false, false, false];
    box[index] = true;
    setSelectedBox(box);
    setSelectedNum(index);
  };

  const handleInputChange = (event) => {
    setChatDetails(event.target.value); // 입력된 값을 상태에 저장
  };

  const handleSubmit = async () => {
    if (selectedNum !== null && chatDetails.trim() !== "") {
      const res = await postDetailAnother({
        chatroomDetails: chatDetails, // 입력된 값 사용
        relationship: sendRelation[selectedNum],
      });
      if (res.data.success) {
        console.log(
          `https://golang-ktb.site/chatting/peer/${localStorage.getItem(
            "chatroomUUID"
          )}`
        );
        const res = await chatJoin();
        if (res.data.success) {
          navigate(`/chatting/peer/${localStorage.getItem("chatroomUUID")}`);
        }
      }
    } else {
      alert("모든 필드를 채워주세요.");
    }
  };

  return (
    <S.Layout
      style={{
        backgroundImage: `url(${CHAT_LAYOUT})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header color="black" isBack={true}>
        2인 채팅
      </Header>

      <img src={REL_GOLANG} />
      {CHOOSE_TEXT.map((text, index) => (
        <S.Text key={index}>{text}</S.Text>
      ))}
      <S.RelationLayout>
        {relation.map((text, index) => (
          <S.SelectBox
            onClick={() => handleSelect(index)}
            key={index}
            $isCheckd={selectedBox[index]}
          >
            {text}
          </S.SelectBox>
        ))}
      </S.RelationLayout>
      <S.StyledInput
        maxLength={300}
        rows={7}
        placeholder="상대와의 갈등 상황을 입력해주세요."
        value={chatDetails}
        onChange={handleInputChange} // 입력 핸들러 추가
      />
      <S.CustomBtn onClick={handleSubmit}>
        <S.Text color="white">Start Chatting</S.Text>
      </S.CustomBtn>
    </S.Layout>
  );
};
