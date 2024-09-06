import React from 'react';
import * as style from './styled/OnboardingPage.sub.style.js';
import { useNavigate } from 'react-router-dom';
import onboardingGoodWhale from "../../assets/img/onboardingGoodWhale.png";

export const OnboardingPage3 = () => {
    const navigate = useNavigate();

    return (
        <style.Frame>
            <style.Wrapper>
                <style.WhaleImage
                    src={onboardingGoodWhale}
                    alt="Whale illustration"
                />
                <style.Text>
                    내가 보내려는 대화에 대한 평가를 받아보세요!
                </style.Text>
                <style.ContinueButton
                    onClick={() => navigate('/onboarding4')}
                />
            </style.Wrapper>
        </style.Frame>
    );
};
