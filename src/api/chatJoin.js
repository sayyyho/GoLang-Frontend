import { instance } from "./instance";

export const chatJoin = async () => {
  try {
    const res = await instance.post(`/api/chatrooms/join`, {
      username: localStorage.getItem("username"),
      chatroomUUID: localStorage.getItem("chatroomUUID"),
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
