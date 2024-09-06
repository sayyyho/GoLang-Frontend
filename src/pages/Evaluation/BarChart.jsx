import React from "react";
import * as style from "./styled/EvaluationPage.style.js";

export const ProgressBar = ({ positive, neutral, negative }) => {

    const totalScore = positive + neutral + negative;
    const positiveWidth = (positive / totalScore) * 100;
    const neutralWidth = (neutral / totalScore) * 100;
    const negativeWidth = (negative / totalScore) * 100;

    return (
        <style.BarContainer>
            <style.Bar>
                {/* 긍정 바 */}
                <style.BarSection style={{ width: `${positiveWidth}%`, backgroundColor: '#b89ddb' }}>
                    <style.BarText>
                        긍정 {positive}%
                    </style.BarText>
                </style.BarSection>

                {/* 중립 바 */}
                <style.BarSection style={{ width: `${neutralWidth}%`, backgroundColor: '#ffcc80' }}>
                    <style.BarText>
                        중립 {neutral}%
                    </style.BarText>
                </style.BarSection>

                {/* 부정 바 */}
                <style.BarSection style={{ width: `${negativeWidth}%`, backgroundColor: '#f47c7c' }}>
                    <style.BarText>
                        부정 {negative}%
                    </style.BarText>
                </style.BarSection>
            </style.Bar>
        </style.BarContainer>
    );
};
