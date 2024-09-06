import styled from "styled-components";
import backgroundImg from "../../../assets/img/homeBackground.png";
export const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
    
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



`;