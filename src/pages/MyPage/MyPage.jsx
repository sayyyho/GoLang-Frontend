import React from "react";
import * as style from "./styled/MyPage.style.js";
import { Header } from "../../components/Header/Header.jsx"
import mypageimg from "@/assets/img/myPage.png";
import { MyDataComponent }  from "../MyPage/MyDataComponent.jsx";

export const MyPage = () => {

    return(

        <style.Frame>
            <style.Wrapper>
                <Header
                    color={"#1B536B"}>
                    <h2>{"마이페이지"}</h2>
                    <button>
                        <img src={mypageimg}/>
                    </button>
                </Header>
                <style.FirstWrapper>
                    <style.TitleWrapper>
                        <style.Title>
                            일주일간 대화 분석 내역
                        </style.Title>
                    </style.TitleWrapper>
                    <style.EvaluationWrapper>

                    </style.EvaluationWrapper>
                </style.FirstWrapper>

                <style.SecondWrapper>
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />
                    <MyDataComponent />

                </style.SecondWrapper>
            </style.Wrapper>
        </style.Frame>
    )
};