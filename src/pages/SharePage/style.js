import styled from "styled-components";
import { FaShareAlt } from "react-icons/fa";

export const Layout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  height: 35vh;
  width: 80%;
  border-radius: 25px;
  display: flex;
  padding-top: 2rem;
  align-items: center;
  flex-direction: column;
  margin-top: 25vh;
  background-color: white;
  box-shadow: 5px 4px 20px 0px rgba(0, 0, 0, 0.13);
  color: #647dc3;
  gap: 5rem;
`;

export const ShareImg = styled(FaShareAlt)`
  font-size: 25px;
`;

export const Text = styled.p`
  color: ${(props) => props.color || "black"};
  font-family: "EF_jejudoldam", sans-serif;
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
