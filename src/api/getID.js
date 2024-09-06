import { instance } from "./instance";

export const getUserID = async () => {
  try {
    const res = await instance.post(`/api/login`, {});
    if (res.data && res.data.username) {
      localStorage.setItem("username", res.data.username);
    }
    // 또 링크 받았을 때, 아예 온보딩으로 이동시킨 뒤에 발급받고 채팅 참가하도록
  } catch (err) {
    console.log(err);
  }
};
