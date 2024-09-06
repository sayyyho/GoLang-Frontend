import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CharDataLabels from "chartjs-plugin-datalabels";
import * as style from "./styled/EvaluationPage.style.js";

// Chart.js 모듈 등록
ChartJS.register(ArcElement, Tooltip, Legend, CharDataLabels);

export const DoughnutChartComponent = ({ pieData = {} }) => {

    console.log("가져온데이터",pieData);

    const totalValue = Object.values(pieData).reduce((acc, value) => acc + value, 0);
    const labels = Object.keys(pieData).length > 0 ? Object.keys(pieData) : ["데이터 없음"];
    const values = Object.values(pieData).length > 0
        ? Object.values(pieData).map(value => ((value / totalValue) * 100).toFixed(2)) // 백분율 계산
        : [100];

    const data = {
        labels: labels, // pieData의 키를 labels로 사용
        datasets: [
            {
                label: "데이터 비율",
                data: values, // 백분율로 변환된 값을 data로 사용
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
                    return `${context.chart.data.labels[context.dataIndex]}: ${value}%`; // 데이터의 라벨과 백분율 표시
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
                <div style={{ width: "60%", height: "90%" }}>
                    <Doughnut data={data} options={options} />
                </div>
            </style.FirstWordCloudWrapper>

            <style.FirstContentWrapper>
                {/* pieData에 있는 상위 3개의 항목을 보여줌 */}
                {labels.slice(0, 3).map((key, index) => (
                    <style.RankingWrapper key={index}>
                        <style.RankingPercent>{values[index]}%</style.RankingPercent>
                        <style.RankingTitle>{key}</style.RankingTitle>
                    </style.RankingWrapper>
                ))}
            </style.FirstContentWrapper>
        </style.FirstWrapper>
    );
};