import styled from "styled-components";
import backgroundImg from "../../../assets/img/homeBackground.png";
export const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "EF_jejudoldam", sans-serif;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 420px;
  background-color: white;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;


export const SecondWrapper = styled.div`
width: 90%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y:scroll;
    margin-top: 40px;
`;
