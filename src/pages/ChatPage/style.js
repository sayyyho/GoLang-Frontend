import styled from "styled-components";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

export const ChatLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const ChattingZone = styled.div`
  width: 100%;
  display: grid;
  padding: 1.5rem 1rem;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 1rem;
`;

export const SendZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px 0px 25px 25px;
  background: #5879d4;
  grid-column: 7/2;
  padding: 1rem;
  font-family: Nunito;
`;

export const ResBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-column: 1/6;
  margin-top: 40px;
  font-family: Nunito;
`;

export const ResZone = styled.div`
  border-radius: 25px 25px 25px 0px;
  background: #ddd;
  justify-content: center;
  margin-left: 40px;
  padding: 1rem;
`;

export const ResImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 20px;
`;

export const StyledInput = styled.textarea`
  /* height: 60px; */
  width: 100%;
  background-color: white;
  padding: 10px 70px 10px 20px;
  border-radius: 15px;
  border: 1px solid #ddd;
  font-size: 16px;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #a1a1a1;
  font-family: Nunito;
`;

export const MicrophoneIcon = styled(FaMicrophone)`
  position: absolute;
  right: 45px;
  font-size: 20px;
  color: #aaa;
  cursor: pointer;
`;

export const SendIcon = styled(FaPaperPlane)`
  position: absolute;
  right: 15px;
  font-size: 20px;
  color: #5879d4;
  cursor: pointer;
`;

export const BtnContainer = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 90px;
`;

export const OptionButton = styled.button`
  position: relative;
  margin: 0 auto;
  width: 45%;
  height: 100%;
  border-radius: 30px;
  background: rgba(21, 77, 186, 0.53);
  filter: blur(0.5px);
  justify-content: center;
  align-items: center;
  font-family: "EF_jejudoldam", sans-serif;
  color: #ffffff;
`;

export const SendCustomIcon = styled(FaPaperPlane)`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

export const RecommendTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  bottom: 70px;
  width: 85%;
  margin: 0 auto;
  gap: 0.5rem;
`;

export const RecommendText = styled.div`
  width: 100%;
  background-color: #b0c3f8;
  padding: 1rem;
  border-radius: 15px;
  font-size: 16px;
  box-shadow: 5px 4px 20px 0px rgba(0, 0, 0, 0.13);
  color: #fff;
  font-family: Nunito;
`;
