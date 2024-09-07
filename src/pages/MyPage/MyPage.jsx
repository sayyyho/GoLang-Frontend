import React, { useEffect, useState } from "react";
import * as style from "./styled/MyPage.style.js";
import { Header } from "../../components/Header/Header.jsx";
import mypageimg from "@/assets/img/myPage.png";
import { MyDataComponent } from "../MyPage/MyDataComponent.jsx";
import { useNavigate } from "react-router-dom";
import { getChatResult } from "../../api/getChatResult.js";

export const MyPage = () => {
    const navigate = useNavigate();
    const [chatResults, setChatResults] = useState([]);

    // 목업 데이터 생성
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
        },
        {
            person: '김현수',
            date: '2024.09.07',
            pieData: { '꺼져': 9, '새끼': 8, '싫어': 7, '그만해': 6 ,'개':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        },
        {
            person: '김현수',
            date: '2024.09.07',
            pieData: { '꺼져': 9, '새끼': 8, '싫어': 7, '그만해': 6 ,'개':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        },
        {
            person: '김현수',
            date: '2024.09.07',
            pieData: { '꺼져': 9, '새끼': 8, '싫어': 7, '그만해': 6 ,'개':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        },
        {
            person: '김현수',
            date: '2024.09.07',
            pieData: { '꺼져': 9, '새끼': 8, '싫어': 7, '그만해': 6 ,'개':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        },
        {
            person: '김현수',
            date: '2024.09.07',
            pieData: { '꺼져': 9, '새끼': 8, '싫어': 7, '그만해': 6 ,'개':2},
            score: { positive: 40, neutral: 30, negative: 30 },
            result: { message: "대화가 약간 부정적이었습니다." }
        },
        {
            person: '문보경',
            date: '2024.09.07',
            pieData: { '좋다': 7, '사랑해': 10, '잘자': 6, '안녕': 9, '할것이다': 8 },
            score: { positive: 60, neutral: 25, negative: 15 },
            result: { message: "긍정적인 대화가 많았습니다!" }
        },
    ];

    // 클릭 시 해당 이름의 데이터를 EvaluationPage로 전달
    const handleClick = (person) => {
        const selectedData = mockData.find(data => data.person === person);
        if (selectedData) {
            navigate('/evaluation', { state: selectedData });
        }
    };

    return (
        <style.Frame>
            <style.Wrapper>
                <Header color={"#1B536B"} isBack={true}>
                    <h2>{"마이페이지"}</h2>
                    <button>
                        <img src={mypageimg} alt="My Page" />
                    </button>
                </Header>



                <style.SecondWrapper>
                    {mockData.map((data, index) => (
                        <MyDataComponent
                            key={index}
                            person={data.person}
                            date={data.date}
                            pieData={data.pieData}
                            score={data.score}
                            result={data.result.message}
                            onClick={() => handleClick(data.person)} // 클릭 시 데이터 전달
                        />
                    ))}
                </style.SecondWrapper>
            </style.Wrapper>
        </style.Frame>
    );
};