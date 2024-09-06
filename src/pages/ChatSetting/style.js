import styled from "styled-components";
import { FaPlusCircle, FaFilePdf } from "react-icons/fa";

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  /* justify-content: center; */
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
  margin: 2rem 0;
  /* filter: blur(0.5px); */
`;
