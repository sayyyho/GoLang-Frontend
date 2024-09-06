import { create } from "zustand";

const useRoomStore = create((set) => ({
  roomName: "",
  roomUUID: "",
  setRoomInfo: (name, uuid) => set({ roomName: name, roomUUID: uuid }),
}));

export default useRoomStore;
