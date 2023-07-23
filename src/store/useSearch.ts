import { SearhResultType } from "@/types/searchResultType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const historyMaxSize = 5;

type State = {
  recent: SearhResultType[];
};

type Actions = {
  add: (search: SearhResultType) => void;
};

export const useCountStore = create<State & Actions>(
  persist(
    (set, get) => ({
      recent: [],
      add: (search: SearhResultType) => {
        const history = get().recent;

        history.push(search);

        if (history.length > historyMaxSize) {
          history.shift();
        }

        return set({ recent: history });
      },
    }),
    {}
  )
);
