import {instance} from "./instance";

export const getTokenData= async () => {
    try {
        const response = await instance.get('/b');
        return response.data;
    } catch (error) {
        console.error("대화 토큰 결과 데이터 불러오기", error.message);
        throw error;
    }
};