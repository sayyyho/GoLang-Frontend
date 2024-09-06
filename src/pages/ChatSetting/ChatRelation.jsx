import * as S from "./style";
import CHAT_LAYOUT from "@/assets/ChatLayout.png";
import REL_GOLANG from "@/assets/relationGolang.svg";
import { useState } from "react";
import { CHOOSE_TEXT } from "@/constant/chatSetting";
import { Header } from "@/components/Header/Header";
import { postDetail } from "@/api/postDetail";

const relation = ["커플", "친구", "가족", "기타"];
const sendRelation = ["COUPLE", "FRIEND", "FAMLIY", "ETC"];

export const ChatRelation = () => {
  const [selectedBox, setSelectedBox] = useState([false, false, false, false]);
  const [selectedNum, setSelectedNum] = useState(null);
  const handleSelect = (index) => {
    const box = [false, false, false, false];
    box[index] = true;
    setSelectedBox(box);
    setSelectedNum(index);
  };
  const handleSubmit = async () => {
    const res = await postDetail({
      chatroomUUID: "id",
      chatroomDetails: "detail",
      filename: "file",
      relationship: sendRelation[selectedNum],
    });
    console.log(res);
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
            onClick={() => {
              handleSelect(index);
            }}
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
      />
      <S.CustomBtn onClick={handleSubmit}>
        <S.Text color="white">Start Chatting</S.Text>
      </S.CustomBtn>
    </S.Layout>
  );
};
