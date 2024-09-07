import styled from "styled-components";
import { FaPlusCircle, FaFilePdf } from "react-icons/fa";

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SettingZone = styled.div`
  width: 100%;
  min-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.p`
  color: ${(props) => props.color || "black"};
  font-family: "EF_jejudoldam", sans-serif;
`;

export const UploadZone = styled.div`
  margin-top: 1rem;
  background-color: white;
  width: 250px;
  height: 250px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlusBtn = styled(FaPlusCircle)`
  font-size: 3.5rem;
  cursor: pointer;
`;

export const PdfImage = styled(FaFilePdf)`
  font-size: 3.5rem;
  cursor: pointer;
`;

export const PdfView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CustomBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 25px;
  background: rgba(21, 77, 186, 0.53);
  position: fixed;
  bottom: 3rem;
`;

export const RelationLayout = styled.div`
  margin-top: 2rem;
  width: 200px;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

export const SelectBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$isCheckd ? "#B0C3F8" : "#f5f5f5")};
  border-radius: 20px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const StyledInput = styled.textarea`
  /* height: 60px; */
  margin-top: 1.5rem;
  width: 250px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid #ddd;
  font-size: 14px;
  outline: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  font-family: Nunito;
`;
