import { instance } from "./instance";

export const postAIBot = async (chatMessage) => {
  try {
    const res = await instance.post("/api/chatrooms/ai-chat", {
      username: localStorage.getItem("username"),
      chatroomUUID: localStorage.getItem("chatroomUUID"),
      chatMessage,
      chatType: "CHAT_SUMMARY",
      relation: localStorage.getItem("relation"),
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
