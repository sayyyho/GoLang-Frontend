import {instance} from "./instance";

export const getEmotionData= async () => {
    try {
        const response = await instance.get('/a');
        return response.data;
    } catch (error) {
        console.error("대화 분석 결과 데이터 불러오기", error.message);
        throw error;
    }
};