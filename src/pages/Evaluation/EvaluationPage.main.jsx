import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as style from "./styled/EvaluationPage.style.js";
import { Header } from "../../components/Header/Header.jsx";
import { DoughnutChartComponent } from "./DoughnutChart.jsx";
import { ProgressBar } from "./BarChart.jsx";

export const EvaluationPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const mockData = [
        {
            person: 'A',
            date: '2024.08.09',
            pieData: { '싫어': 10, '진짜': 9, '너무': 8, '꺼져': 7 },
            score: { positive: 50, neutral: 20, negative: 30 },
            result: { message: "이번 채팅은 누가 고집이 더 셌어요 그만 좀 부리세요." }
        },
        {
            person: 'B',
            date: '2024.08.20',
            pieData: { '사랑하': 7, '그래': 10, '아': 6, '잘자': 9 },
            score: { positive: 60, neutral: 25, negative: 15 },
            result: { message: "긍정적인 대화가 많았습니다!" }
        },
        {
            person: 'C',
            date: '2024.08.23',
            pieData: { '아 진짜': 9, '너': 8, '꺼져': 7, '새끼': 6 , '킹받는다':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        }
    ];

    const { person = "익명" } = location.state || {};
    const selectedData = mockData.find((data) => data.person === person) || {};

    const { pieData = {}, score = { positive: 0, neutral: 0, negative: 0 }, result = { message: "" }, date = "알 수 없음" } = selectedData;

    return (
        <style.Frame>
            <style.Wrapper>
                <Header color={"#1B536B"}>
                    <h2>{`${person}`} 님과의 대화 평가</h2>
                    {/* onClick 이벤트 핸들러 수정 */}
                    <style.HomeButton onClick={() => handleNavigate("/home")}>홈으로 이동</style.HomeButton>
                </Header>
                <style.ScrollWrapper>
                    <style.ContentWrapper>
                        <h3>{`${date} 대화 분석`}</h3>

                        {/* Pie 차트 */}
                        <DoughnutChartComponent pieData={pieData}/>

                        <style.SecondWrapper>
                            <style.TitleWrapper>
                                <style.SecondTitle>
                                    나의 감정 분포
                                </style.SecondTitle>
                            </style.TitleWrapper>
                            <ProgressBar positive={score.positive} neutral={score.neutral} negative={score.negative}/>
                        </style.SecondWrapper>

                        <style.ThirdWrapper>
                            {result.message}
                        </style.ThirdWrapper>
                    </style.ContentWrapper>
                </style.ScrollWrapper>

            </style.Wrapper>
        </style.Frame>
    );
};
