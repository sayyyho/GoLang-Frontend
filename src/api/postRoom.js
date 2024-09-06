import { instance } from "./instance";

export const postRoom = async ({ chatroomName, chatroomType }) => {
  try {
    const res = await instance.post(`/api/chatrooms`, {
      username: localStorage.getItem("useranme"),
      chatroomName,
      chatroomType,
    });
  } catch (err) {
    console.log(err);
  }
};
