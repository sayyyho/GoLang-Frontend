import React from 'react';
import Slider from 'react-slick';
import * as style from './styled/Banner.styled.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImg1 from "../../assets/img/banner1.png";
import bannerImg2 from "../../assets/img/banner2.png"
import bannerImg3 from "../../assets/img/banner3.png"
import bannerImg4 from "../../assets/img/banner4.png"

// 이미지 배열 (Banners)
const Banners = [
    {
        num: 0,
        img: bannerImg1,
    },
    {
        num: 1,
        img: bannerImg2,
    },
    {
        num: 2,
        img: bannerImg3,
    },
    {
        num: 3,
        img: bannerImg4,
    },
];

const BannerSlider = () => {
    const settings = {
        dots: true,           // 점 네비게이션 활성화
        infinite: true,       // 무한 스크롤
        speed: 500,           // 슬라이드 전환 속도
        slidesToShow: 1,      // 한 번에 하나의 슬라이드만 보여줌
        slidesToScroll: 1,    // 한 번에 하나의 슬라이드를 넘김
        autoplay: false,       // 자동 슬라이드 활성화
        autoplaySpeed: 5000,  // 자동 슬라이드 속도 (5초)
    };



    return (
        <style.TotalWrapper>
            <Slider {...settings}>
                {Banners.map((card) => (
                    <style.BannerWrap key={card.num} >
                        <style.MainImg src={card.img} alt={`Banner ${card.num}`} />
                    </style.BannerWrap>
                ))}
            </Slider>
        </style.TotalWrapper>
    );
};

export default BannerSlider;
