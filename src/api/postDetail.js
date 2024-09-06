import { instance } from "./instance";

// chatroomid -> zustand
// chatroomDetails -> zustand

export const postDetail = async ({
  chatroomUUID,
  chatroomDetails,
  filename,
  relationship,
}) => {
  try {
    const res = await instance.post(`/api/chatrooms/details`, {
      chatroomUUID,
      chatroomDetails,
      filename,
      relationship,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
