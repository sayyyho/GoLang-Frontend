import { instance } from "./instance";

export const postPdf = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await instance.post("/api/chatrooms/details/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
