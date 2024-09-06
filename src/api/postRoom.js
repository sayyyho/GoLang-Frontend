import { instance } from "./instance";
import useRoomStore from "@/store/room";

export const postRoom = async ({ chatroomName, chatroomType }) => {
  try {
    const res = await instance.post(`/api/chatrooms`, {
      username: localStorage.getItem("username"),
      chatroomName: "test",
      chatroomType,
    });
    if (res.data.success) {
      const { chatroomName, chatRoomUUID } = res.data.data;
      useRoomStore.getState().setRoomInfo(chatroomName, chatRoomUUID);
    } else {
      console.log("가져오기 실패");
    }
  } catch (err) {
    console.log(err);
  }
};
