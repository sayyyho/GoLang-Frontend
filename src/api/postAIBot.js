import { instance } from "./instance";

export const postAIBot = async (chatMessage) => {
  try {
    const res = await instance.post("/api/chatrooms/ai-chat", {
      username: localStorage.getItem("username"),
      chatroomUUID: "b0d42bc1-5959-4d96-9d38-8823f490ce84",
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
