import * as S from "./style";
import { useRef, useState } from "react";
import { Header } from "@/components/Header/Header";
import CHAT_LAYOUT from "@/assets/ChatLayout.png";
import REL_GOLANG from "@/assets/relationGolang.svg";
import { RELATION_TEXT } from "@/constant/chatSetting";
import { postPdf } from "@/api/postPdf";
import { useNavigate } from "react-router-dom";

export const BotInfo = () => {
  const fileInputRef = useRef();
  const [isUpload, setIsUpload] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (file) {
      await postPdf(file);
      navigate("relation");
    } else {
      navigate("relation");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setIsUpload(true);
      setFile(selectedFile);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
        고랭과 채팅
      </Header>
      <S.SettingZone>
        <img src={REL_GOLANG} />
        {RELATION_TEXT.map((text, index) => (
          <S.Text key={index}>{text}</S.Text>
        ))}
        <S.UploadZone>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {!isUpload ? (
            <S.PlusBtn onClick={handleUploadClick} />
          ) : (
            <S.PdfView>
              <S.PdfImage />
              <p
                style={{
                  fontSize: "0.8rem",
                  textAlign: "center",
                }}
              >
                {file.name}
              </p>
            </S.PdfView>
          )}
        </S.UploadZone>
        <S.CustomBtn onClick={handleSubmit}>
          <S.Text color="white">Start Chatting</S.Text>
        </S.CustomBtn>
      </S.SettingZone>
    </S.Layout>
  );
};
