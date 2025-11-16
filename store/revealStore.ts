import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface RevealedStore {
  revealed: number[]; // Simple array
  isHydrated: boolean;
  favorites: number[]; // holds user favorites
  furthestRiddle: number; // helper that holds the last seen riddle. This is helpful when user comes to riddles page from favorites

  // Actions
  toggleReveal: (riddleNumber: number) => void;
  isRevealed: (riddleNumber: number) => boolean;
  setHydrated: (hydrated: boolean) => void;
  toggleFavourite: (riddleNumber: number) => void;
  updateProgress: (riddleNumber: number) => void; // this helps updating last seen riddle when each question is shown
  resetStore: () => void; // 👈 Add this
}

export const useRevealedStore = create<RevealedStore>()(
  persist(
    (set, get) => ({
      revealed: [],
      favorites: [],
      isHydrated: false,
      furthestRiddle: 1,

      toggleReveal: (riddleNumber: number) => {
        set((state) => {
          const isRevealed = state.revealed.includes(riddleNumber);

          if (isRevealed) {
            return {
              revealed: state.revealed.filter(
                (questionNumber) => questionNumber !== riddleNumber
              ),
            };
          } else {
            return {
              revealed: [...state.revealed, riddleNumber],
            };
          }
        });
      },

      isRevealed: (riddleNumber: number) => {
        return get().revealed.includes(riddleNumber);
      },

      setHydrated: (hydrated: boolean) => {
        set({ isHydrated: hydrated });
      },

      toggleFavourite: (riddleNumber: number) => {
        set((state) => {
          const isFavourited = state.favorites.includes(riddleNumber);

          if (isFavourited) {
            return {
              favorites: state.favorites.filter(
                (questionNumber) => questionNumber !== riddleNumber
              ),
            };
          } else {
            return { favorites: [...state.favorites, riddleNumber] };
          }
        });
      },

      updateProgress(riddleNumber: number) {
        set((state) => {
          return {
            furthestRiddle: Math.max(state.furthestRiddle, riddleNumber),
          };
        });
      },

      // Use this to clear storage for testing purpose - from settings page
      resetStore: async () => {
        set({
          revealed: [],
          favorites: [],
          furthestRiddle: 0,
        });
        // Also clear from AsyncStorage
        await AsyncStorage.removeItem("revealed-storage");
      },
    }),
    {
      name: "revealed-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        // Called when hydration is complete
        state?.setHydrated(true);
      },
    }
  )
);
