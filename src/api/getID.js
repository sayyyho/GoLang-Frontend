import { instance } from "./instance";

export const getUserID = async () => {
  try {
    const res = await instance.post(`/api/login`, {});
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const Testing = "";
