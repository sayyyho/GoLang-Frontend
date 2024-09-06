import { instance } from "./instance";
import useFilenameStore from "@/store/filename";

export const postPdf = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await instance.post("/api/chatrooms/details/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res) {
      useFilenameStore.getState().setFilename(res.data.data);
    } else {
      console.log("가져오 실패");
    }
  } catch (err) {
    console.log(err);
  }
};
