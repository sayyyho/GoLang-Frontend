import { instance } from "./instance";

export const postDetail = async ({ relationship, chatroomDetails }) => {
  try {
    const res = await instance.post(`/api/chatrooms/details`, {
      chatroomUUID: localStorage.getItem("chatroomUUID"),
      chatroomDetails,
      filename: localStorage.getItem("filename"),
      relationship,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
