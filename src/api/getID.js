import { instance } from "./instance";

export const getUserID = async () => {
  try {
    const res = await instance.post(`/api/login`, {});
    console.log(res);
    localStorage.setItem("username", res.data.data.username);

    // 추가 작업: 링크를 받았을 때 온보딩 페이지로 이동시킨 후, 채팅에 참가시키는 로직 추가 가능
  } catch (err) {
    console.error("Error fetching user ID:", err);
  }
};
