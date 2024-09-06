import { create } from "zustand";

const usePage = create((set) => ({
  page: "default",
  change: () => set(() => ({ page: "another" })),
}));

export default usePage;
