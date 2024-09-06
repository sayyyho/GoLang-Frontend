import styled from "styled-components";
import onboardingBackground from "../../../assets/img/onboardingBackground.png";
import onboardingContinueButton from "../../../assets/img/onboardingContinueButton.png";

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
    background-image: url(${onboardingBackground});
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    justify-content: flex-end;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #374B83;
    font-weight: bold;
    margin-bottom: 10px;
    align-self: flex-start;
    margin-left: 30px;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    color: #397D9A;
    line-height: 1.5;
    margin-bottom: 10px;
    align-self: flex-start;
    margin-left: 30px;
`;

export const Counter = styled.p`
    font-size: 0.8rem;
    color: #397D9A;
    margin-top: 10px;
    align-self: flex-start;
    margin-left: 30px;
`;

export const WhaleImage = styled.img`
    width: 323px;
    max-width: 323px;
    height: 372px;
    margin-bottom: 80px;
    align-self: flex-end;
`;

export const ContinueButton = styled.button`
    width: 337px;
    height: 59px;
    max-width: 337px;
    margin-bottom: 30px;
    background-image: url(${onboardingContinueButton});
    background-size: cover;
    cursor: pointer;
`;
