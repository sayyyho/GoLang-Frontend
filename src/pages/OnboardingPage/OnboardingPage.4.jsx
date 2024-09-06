import React from "react";
import * as style from "./styled/OnboardingPage.last.style.js";
import { useNavigate } from "react-router-dom";
import { getUserID } from "../../api/getID";
import onboardingWhaleAndRobot from "../../assets/img/onboardingWhaleAndRobot.png";

export const OnboardingPage4 = () => {
  const navigate = useNavigate();
  const getUser = async () => {
    await getUserID();
    setTimeout(() => {
      if (localStorage.getItem("nextpage")) {
        navigate(localStorage.getItem("nextpage"));
      } else {
        navigate("/home");
      }
    }, 1000);
  };
  return (
    <style.Frame>
      <style.Wrapper>
        <style.WhaleImage
          src={onboardingWhaleAndRobot}
          alt="Whale illustration"
        />
        <style.Text>AI와의 대화를 통해 대화스킬을 늘려보세요!</style.Text>
        <style.ContinueButton onClick={getUser} />
      </style.Wrapper>
    </style.Frame>
  );
};
