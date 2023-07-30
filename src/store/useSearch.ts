import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type MyState = {
  bears: number;
  addABear: () => void;
};

export const useBearStore = create<MyState>()(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: "recent-search",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ bears: state.bears }),
    }
  )
);
