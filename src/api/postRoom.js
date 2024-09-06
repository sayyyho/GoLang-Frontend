import { instance } from "./instance";
import useRoomStore from "@/store/room";

export const postRoom = async ({ chatroomType }) => {
  try {
    const res = await instance.post(`/api/chatrooms`, {
      username: localStorage.getItem("username"),
      chatroomName: "test",
      chatroomType,
    });
    if (res.data.success) {
      console.log(res.data.data);
      localStorage.setItem("chatroomName", res.data.data.chatroomName);
      localStorage.setItem("chatroomUUID", res.data.data.chatroomUUID);
    } else {
      console.log("가져오기 실패");
    }
  } catch (err) {
    console.log(err);
  }
};
