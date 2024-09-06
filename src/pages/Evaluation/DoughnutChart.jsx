import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CharDataLabels from "chartjs-plugin-datalabels";
import * as style from "./styled/EvaluationPage.style.js";

// Chart.js 모듈 등록
ChartJS.register(ArcElement, Tooltip, Legend, CharDataLabels);

export const DoughnutChartComponent = () => {
    // 데이터 배열
    const data = {
        labels: ["테슬라", "애플", "아마존", "월마트", "삼성", "현대차"],
        datasets: [
            {
                label: "기업별 점유율",
                data: [80, 70, 60, 50, 40, 30], // 각 항목의 값
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40",
                ],
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                color: "black",
                formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex]; // 데이터의 라벨 표시
                },
                font: {
                    weight: "bold",
                    size: 14,
                },
            },
        },

        maintainAspectRatio: false,
    };

    return (
        <style.FirstWrapper>
            <style.FirstWordCloudWrapper>
                <div style={{width: "60%", height: "90%"}}>
                    <Doughnut data={data} options={options}/>
                </div>
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

    );
};


