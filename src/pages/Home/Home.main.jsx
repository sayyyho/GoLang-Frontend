import React from "react";
import * as style from "./styled/Home.main.style.js";
import { useNavigate } from "react-router-dom";

import mypageimg from "../../assets/img/myPage.png";
import sendimg from "../../assets/img/send.png";
import buttonimg1 from "../../assets/img/buttonimg1.png";
import buttonimg2 from "../../assets/img/buttonimg2.png";
import { Header } from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import { postRoom } from "@/api/postRoom.js";

export const HomePage = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleMakingRoom = async () => {
        await postRoom({
            chatroomName: null,
            chatroomType: "CHAT_PERSON",
        });
        navigate("/chatting/info");
    };



    return (
        <div>
            <style.Frame>
                <style.Wrapper>
                    <Header color={"#1B536B"} >
                        <h1>고랭</h1>
                        <button
                            onClick={() => {
                                navigate("/mypage");
                            }}
                        >
                            <img src={mypageimg} alt="My Page" />
                        </button>
                    </Header>
                    <Banner />

                    <style.ButtonTotalWrapper>
                        <style.Button
                            onClick={() => handleNavigate("/evaluation")}
                        >
                            <style.ButtonCharacter src={buttonimg1} />
                            <style.ButtonTextWrapper>
                                <style.ButtonText>갈등 해결 채팅하기</style.ButtonText>
                                <style.ButtonImg src={sendimg} />
                            </style.ButtonTextWrapper>
                        </style.Button>

                        <style.Button>
                            <style.ButtonTextWrapper2>
                                <style.ButtonImg src={sendimg} angle={180} />
                                <style.ButtonText>고랭과 채팅하기</style.ButtonText>
                            </style.ButtonTextWrapper2>
                            <style.ButtonCharacter2 src={buttonimg2} />
                        </style.Button>
                    </style.ButtonTotalWrapper>
                </style.Wrapper>
            </style.Frame>
        </div>
    );
};
