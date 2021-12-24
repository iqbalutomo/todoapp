import create from "zustand";

const useStore = create((set) => ({
  isModal: false,
  setIsModal: () => set(() => ({ isModal: true })),
}));

export default useStore;
