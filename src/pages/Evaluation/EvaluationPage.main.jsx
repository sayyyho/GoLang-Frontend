import * as style from "./styled/EvaluationPage.style.js";
import mypageimg from "@/assets/img/myPage.png";
import {useNavigate} from "react-router-dom";
import { Header } from "../../components/Header/Header.jsx";
import {DoughnutChartComponent} from "./DoughnutChart.jsx";

export const EvaluationPage = () => {

    const navigate = useNavigate();
    const NavClick = (e,type) => {
        e.preventDefault();
        navigate(`${type}`)
    }



    return(
        <style.Frame>
            <style.Wrapper>

                <Header
                    color={"#1B536B"}>
                    <h2>{"채팅 평가"}</h2>
                    <button onClick={(e) => {
                        NavClick(e, '/mypage')
                    }}>
                        <img src={mypageimg}/>
                    </button>
                </Header>
                <style.ScrollWrapper>
                    <style.ContentWrapper>
                        <style.Title>{'홍길동'} 님과의 대화 분석 결과</style.Title>
                        <style.FirstWrapper>
                            <style.FirstWordCloudWrapper>
                               <DoughnutChartComponent />
                            </style.FirstWordCloudWrapper>

                            <style.FirstContentWrapper>
                                <style.RankingWrapper>
                                    <style.RankingPercent>{35}%</style.RankingPercent>
                                    <style.RankingTitle>{'테슬라'}</style.RankingTitle>
                                </style.RankingWrapper>
                                <style.RankingWrapper>
                                    <style.RankingPercent>{35}%</style.RankingPercent>
                                    <style.RankingTitle>{'테슬라'}</style.RankingTitle>
                                </style.RankingWrapper>
                                <style.RankingWrapper>
                                    <style.RankingPercent>{35}%</style.RankingPercent>
                                    <style.RankingTitle>{'테슬라'}</style.RankingTitle>
                                </style.RankingWrapper>

                            </style.FirstContentWrapper>
                        </style.FirstWrapper>

                        <style.SecondWrapper></style.SecondWrapper>

                        <style.ThirdWrapper></style.ThirdWrapper>
                    </style.ContentWrapper>
                </style.ScrollWrapper>
            </style.Wrapper>
        </style.Frame>
    )
};