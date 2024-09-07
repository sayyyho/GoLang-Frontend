import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
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
            person: '홍창기',
            date: '2024.09.07',
            pieData: { '응': 10, '그래': 9, '가보자고': 8, '싫어': 7 ,'먹자': 4},
            score: { positive: 50, neutral: 20, negative: 30 },
            result: { message: "이번 채팅은 누가 고집이 더 셌어요 그만 좀 부리세요." }
        },
        {
            person: '문보경',
            date: '2024.09.07',
            pieData: { '좋다': 7, '사랑해': 10, '잘자': 6, '안녕': 9, '할것이다': 8 },
            score: { positive: 60, neutral: 25, negative: 15 },
            result: { message: "긍정적인 대화가 많았습니다!" }
        },
        {
            person: '김현수',
            date: '2024.09.07',
            pieData: { '꺼져': 9, '새끼': 8, '싫어': 7, '그만해': 6 ,'개':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        }
    ];

    const { person = "익명" } = location.state || {};
    const selectedData = mockData.find((data) => data.person === person) || {};

    const { pieData = {}, score = { positive: 0, neutral: 0, negative: 0 }, result = { message: "" }, date = "알 수 없음" } = selectedData;
   console.log('전달할',mockData);
    return (
        <style.Frame>
            <style.Wrapper>
                <Header color={"#1B536B"}>
                    <h3>{`${person}`} 님과의 대화 평가</h3>

                    <style.HomeButton onClick={() => handleNavigate("/home")}>홈으로 이동</style.HomeButton>
                </Header>
                <style.ScrollWrapper>

                    <style.ContentWrapper>
                        <h3>{`${date} 대화 분석`}</h3>

                        <DoughnutChartComponent pieData={pieData}/>
                        <style.SecondWrapper>

                            <style.SecondTitle>
                                필터링 이전 보다
                            </style.SecondTitle>
                            <style.SecondTitle>
                                {40}% 향상된 긍정 점수
                            </style.SecondTitle>
                            <ProgressBar positive={score.positive} neutral={score.neutral} negative={score.negative}/>
                        </style.SecondWrapper>
                    </style.ContentWrapper>
                </style.ScrollWrapper>


            </style.Wrapper>
        </style.Frame>
    );
};
