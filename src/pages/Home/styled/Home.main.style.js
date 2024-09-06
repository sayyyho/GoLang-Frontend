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



///////////////////////////////////////////////////////////////
export const ButtonTotalWrapper = styled.div`
width: 90%;
    height: 30%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: pink;

`;

export const Button = styled.button`
    width: 100%;
    height: 120px;
    border-radius: 30px;
    background-color: white;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
export const ButtonCharacter = styled.img`
width: 150px;
    height:auto;
    
`;
export const ButtonCharacter2 = styled.img`
    width:140px;
    height: auto;
`;

export const ButtonTextWrapper = styled.div`
width: 50%;
    height: 30%;
    margin-bottom: 25px;
    display:flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items:center;
`;
export const ButtonTextWrapper2 = styled.div`
width: 50%;
    height: 30%;

    margin-bottom: 25px;
    display:flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items:center;
`;

export const ButtonText = styled.text`
font-size:20px;
    font-weight: 500;
    color:#5F7DD2;
`
export const ButtonImg = styled.img`
width:25px;
    height: 25px;
    margin-left: 6px;
    margin-bottom: 2px;
    transform: rotate(${(props)=>props.angle}deg);
`;

