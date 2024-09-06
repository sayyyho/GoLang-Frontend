import {instance} from "./instance";

export const getChatResult= async () => {
    try {
        const response = await instance.get('/c');
        return response.data;
    } catch (error) {
        console.error("대화 결과 데이터 리스트 불러오기", error.message);
        throw error;
    }
};