import React from "react";
import * as style from "./styled/OnboardingPage.sub.style.js";
import { useNavigate } from "react-router-dom";
import onboardingFightWhales from "../../assets/img/onboardingFightWhales.png";

export const OnboardingPage2 = () => {
  const navigate = useNavigate();

  return (
    <style.Frame>
      <style.Wrapper>
        <style.WhaleImage
          src={onboardingFightWhales}
          alt="Whale illustration"
        />
        <style.Text>내가 보내려는 메시지를 순화해 보세요!</style.Text>
        <style.ContinueButton onClick={() => navigate("/onboarding/3")} />
      </style.Wrapper>
    </style.Frame>
  );
};
