import { SearchResultType } from "@/types/searchResultType";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const maxSize = 5;

type SearchState = {
  history: SearchResultType[];
  addToHistory: (search: SearchResultType) => void;
};

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      history: [],
      addToHistory: (search) => {
        const newHistory = get().history.filter(
          (item) => search?.id !== item.id,
        );

        newHistory.unshift(search);

        if (newHistory.length > maxSize) {
          newHistory.pop();
        }

        set({ history: newHistory });
      },
    }),
    {
      name: "recent-search",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ history: state.history }),
    },
  ),
);
