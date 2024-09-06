import React, { useEffect, useState } from "react";
import * as style from "./styled/EvaluationPage.style.js";
import mypageimg from "@/assets/img/myPage.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header.jsx";
import { DoughnutChartComponent } from "./DoughnutChart.jsx";
import { ProgressBar } from "./BarChart.jsx";
import { getEmotionData } from "../../api/getEmotionData.js";

export const EvaluationPage = () => {
    const [chatList, setChatList] = useState([]); // 상태 관리 추가

    const navigate = useNavigate();

    // 페이지 네비게이션 처리 함수
    const NavClick = (e, type) => {
        e.preventDefault();
        navigate(`${type}`);
    };

    // useEffect로 API 호출 및 데이터 가져오기
    useEffect(() => {
        const fetchEmotionList = async () => {
            try {
                const response = await getEmotionData(); // API 호출
                setChatList(response.data); // 데이터를 상태에 저장
                console.log('채팅방리스트', response);
            } catch (error) {
                console.error("Failed to fetch chat list", error);
            }
        };

        // API 호출
        fetchEmotionList();
    }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

    return (
        <style.Frame>
            <style.Wrapper>
                <Header color={"#1B536B"}>
                    <h2>{"채팅 평가"}</h2>
                    <button onClick={(e) => NavClick(e, "/mypage")}>
                        <img src={mypageimg} alt="My Page" />
                    </button>
                </Header>
                <style.ScrollWrapper>
                    <style.ContentWrapper>
                        <style.Title>{'홍길동'} 님과의 대화 분석 결과</style.Title>

                  
                        <DoughnutChartComponent />

                        <style.SecondWrapper>
                            <style.TitleWrapper>
                                <style.SecondTitle>필터링 이전보다</style.SecondTitle>
                                <style.SecondTitle>{40}% 향상된 긍정 점수</style.SecondTitle>
                            </style.TitleWrapper>

                            {/* Progress Bar 컴포넌트 */}
                            <ProgressBar positive={50} neutral={30} negative={20} />
                        </style.SecondWrapper>

                        <style.ThirdWrapper></style.ThirdWrapper>
                    </style.ContentWrapper>
                </style.ScrollWrapper>
            </style.Wrapper>
        </style.Frame>
    );
};
