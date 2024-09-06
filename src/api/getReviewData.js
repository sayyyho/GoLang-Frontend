import {instance} from "./instance";

export const getReviewData= async () => {
    try {
        const response = await instance.get('/c');
        return response.data;
    } catch (error) {
        console.error("대화 최종 결과 데이터 불러오기", error.message);
        throw error;
    }
};