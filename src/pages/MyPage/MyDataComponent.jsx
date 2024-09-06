import React from "react";
import * as style from "./styled/MyDataComponent.style.js";
import logoImg from "../../assets/img/logoImg.png";

export const MyDataComponent = ({ person, date, onClick }) => {
    return (
        <style.TotalWrapper onClick={onClick}>
            <style.ImgWrapper>
                <style.LogoImg src={logoImg} />
            </style.ImgWrapper>
            <style.ContentWrapper>
                <style.Title>
                    {`${person}`} 님과의 지난 대화
                </style.Title>
                <style.Time>
                    {date}
                </style.Time>
            </style.ContentWrapper>
        </style.TotalWrapper>
    );
};