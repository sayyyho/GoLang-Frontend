import { instance } from "./instance";
import useRoomStore from "@/store/room";
import useFilenameStore from "@/store/filename";

export const postDetail = async ({ relationship, chatroomDetails }) => {
  try {
    const { chatroomUUID } = useRoomStore.getState(); // 상태에서 값 불러오기
    const { filename } = useFilenameStore.getState(); // 상태에서 파일명 불러오기
    const res = await instance.post(`/api/chatrooms/details`, {
      chatroomUUID: chatroomUUID,
      chatroomDetails,
      filename: filename,
      relationship,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
