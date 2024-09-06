import React from 'react';
import * as style from './styled/OnboardingPage.main.style.js';
import { useNavigate } from 'react-router-dom';
import onboardingMainWhale from "../../assets/img/onboardingMainWhale.png";

export const OnboardingPage1 = () => {
    const navigate = useNavigate();

    return (
        <style.Frame>
            <style.Wrapper>
                <style.Title>고랭</style.Title>
                <style.Text>
                    일상 속 불편한 갈등은 이제 그만<br />
                    이제 고랭으로 언어갈등을 해결해요
                </style.Text>
                <style.Counter>벌써 000개의 갈등이 해결됐어요.</style.Counter>
                <style.WhaleImage
                    src={onboardingMainWhale}
                    alt="Whale illustration"
                />
                <style.ContinueButton
                    onClick={() => navigate('/onboarding2')}
                />
            </style.Wrapper>
        </style.Frame>
    );
};
