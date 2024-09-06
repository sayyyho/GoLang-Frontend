import * as style from "./styled/MyDataComponent.style.js";
import logoImg from "../../assets/img/logoImg.png";
export const MyDataComponent =  () =>{
    return(
        <style.TotalWrapper>
            <style.ImgWrapper>
                <style.LogoImg src={logoImg}/>
            </style.ImgWrapper>
            <style.ContentWrapper>
                <style.Title>
                    {'홍길동'} 님과의 지난 대화
                </style.Title>
                <style.Time>
                    {"2024.08.30"}
                </style.Time>
            </style.ContentWrapper>
        </style.TotalWrapper>
    )
}