import {styled} from "styled-components";
import backgroundImg from "@/assets/img/backgroundPurple.png";

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
    height: auto;
    max-height: 100vh;
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

export const ScrollWrapper = styled.div`
    width: 100%;
    overflow-y: scroll;
`;

export const ContentWrapper = styled.div`
width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h3`
margin-top: 50px;
`;


export const FirstWrapper = styled.div`
 width: 90%;
    height: 400px;
    margin-top: 10px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

export const FirstWordCloudWrapper = styled.div`
width:95%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const FirstContentWrapper = styled.div`
width: 95%;
height: 35%;
    `;

export const RankingWrapper = styled.div`
width:100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #d7d7d7;
`;
export const RankingPercent = styled.div`
width: 20%;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d7d7d7;
    border-radius: 30px;
`;

export const RankingTitle = styled.h4`
margin-left: 20px;
`

export const SecondWrapper = styled.div`
 width: 90%;
    height: 300px;
    margin-top: 20px;
    border-radius: 30px;
    background-color: gray;
`;

export const ThirdWrapper = styled.div`
width: 90%;
    height: 400px;
    margin-top: 20px;
    margin-bottom: 50px;
    border-radius: 30px;
    background-color: white;
`;
