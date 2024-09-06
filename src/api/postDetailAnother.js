import { instance } from "./instance";

export const postDetailAnother = async ({ relationship, chatroomDetails }) => {
  try {
    const res = await instance.post(`/api/chatrooms/details/join`, {
      chatroomUUID: localStorage.getItem("chatroomUUID"),
      chatroomDetails,
      relationship,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
