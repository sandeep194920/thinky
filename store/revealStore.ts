import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface RevealedStore {
  revealed: number[]; // Simple array
  isHydrated: boolean;

  // Actions
  revealRiddle: (riddleNumber: number) => void;
  isRevealed: (riddleNumber: number) => boolean;
  setHydrated: (hydrated: boolean) => void;
}

export const useRevealedStore = create<RevealedStore>()(
  persist(
    (set, get) => ({
      revealed: [],
      isHydrated: false,

      revealRiddle: (riddleNumber: number) => {
        set((state) => {
          // Use Set internally to prevent duplicates, then convert back to array
          const revealedSet = new Set(state.revealed);
          revealedSet.add(riddleNumber);
          return { revealed: Array.from(revealedSet) };
        });
      },

      isRevealed: (riddleNumber: number) => {
        return get().revealed.includes(riddleNumber);
      },

      setHydrated: (hydrated: boolean) => {
        set({ isHydrated: hydrated });
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
