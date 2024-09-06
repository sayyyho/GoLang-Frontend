import React from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styled/EvaluationPage.style.js";
import { Header } from "../../components/Header/Header.jsx";
import { DoughnutChartComponent } from "./DoughnutChart.jsx";
import { ProgressBar } from "./BarChart.jsx";

export const EvaluationPage = () => {
    const location = useLocation();

    const mockData = [
        {
            person: 'A',
            date: '2024.08.09',
            pieData: { 'A': 10, 'B': 9, 'C': 8, 'D': 7 },
            score: { positive: 50, neutral: 20, negative: 30 },
            result: { message: "이번 채팅은 누가 고집이 더 셌어요 그만 좀 부리세요." }
        },
        {
            person: 'B',
            date: '2024.08.20',
            pieData: { 'A': 7, 'B': 10, 'C': 6, 'D': 9 },
            score: { positive: 60, neutral: 25, negative: 15 },
            result: { message: "긍정적인 대화가 많았습니다!" }
        },
        {
            person: 'C',
            date: '2024.08.23',
            pieData: { 'A': 9, 'B': 8, 'C': 7, 'D': 6 },
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        }
    ];

    const { person = "익명" } = location.state || {};
    const selectedData = mockData.find((data) => data.person === person) || {};

    const { pieData = {}, score = { positive: 0, neutral: 0, negative: 0 }, result = { message: "" }, date = "알 수 없음" } = selectedData;
   console.log('전달할',pieData);
    return (
        <style.Frame>
            <style.Wrapper>
                <Header color={"#1B536B"}>
                    <h2>{`${person}`} 님과의 대화 평가</h2>

                    <style.HomeButton onClick={() => handleNavigate("/home")}>홈으로 이동</style.HomeButton>
                </Header>

                <style.ContentWrapper>
                    <h3>{`${date} 대화 분석`}</h3>


                        <DoughnutChartComponent pieData={pieData}/>


                    <ProgressBar positive={score.positive} neutral={score.neutral} negative={score.negative} />

                    <style.ThirdWrapper>
                        {result.message}
                    </style.ThirdWrapper>
                </style.ContentWrapper>
            </style.Wrapper>
        </style.Frame>
    );
};
