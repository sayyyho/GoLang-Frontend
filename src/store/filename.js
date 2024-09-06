import { create } from "zustand";

const useFilenameStore = create((set) => ({
  filename: "",
  setFilename: (name) => set({ filename: name }),
}));

export default useFilenameStore;
