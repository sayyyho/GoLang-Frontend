import React from "react";
import WordCloud from "react-wordcloud";

const words = [
    { text: "테슬라", count: 80 },
    { text: "애플", count: 70 },
    { text: "아마존", count: 60 },
    { text: "월마트", count: 50 },
    { text: "삼성", count: 40 },
    { text: "현대차", count: 30 },
    { text: "구글", count: 20 },
    { text: "넥슨", count: 10 },
    { text: "SK하이닉스", count: 25 },
    { text: "LG생활건강", count: 8 },
    { text: "카카오", count: 5 },
    { text: "텐센트", count: 3 },
    { text: "페이스북", count: 7 },
    { text: "넷마블", count: 24 },
    { text: "쇼박스", count: 35 },
    { text: "CJ E&M", count: 16 },
    { text: "디즈니", count: 47 },
    { text: "넷플릭스", count: 19 },
    { text: "기업A", count: 3 },
    { text: "기업B", count: 3 },
    { text: "기업C", count: 3 },
    { text: "기업D", count: 3 },
    { text: "기업E", count: 3 },
];

const options = {
    rotations: 2,        // 단어의 회전 각도
    rotationAngles: [-90, 0], // 회전 각도 범위
    fontSizes: [10, 90], // 글자의 크기 범위
    fontFamily: "sans-serif", // 기본 글꼴
    colors: ["#61dafb", "#282c34", "#f88c00", "#999999"], // 단어 색상
};

export const WordCloudComponent = () => {
    return <WordCloud words={words} options={options} />;
};


