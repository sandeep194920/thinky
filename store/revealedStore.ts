/*This file is similar to revealStore, but uses Set instead of array for optimization reasons.
We will need to fix somethings here. Let's use revealStore (other file) until then

*/

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, StateStorage } from "zustand/middleware";

interface RevealedStore {
  revealed: Set<number>; // Set has O(1) lookup - this will be in-memory
  isHydrated: boolean;

  // Actions
  revealRiddle: (riddleNumber: number) => void;
  isRevealed: (riddleNumber: number) => boolean;
  setHydrated: (hydrated: boolean) => void;
}

/* 
Since we are converting Set to Array (while storing the data into Async storage), 
and Array to Set (while retreiving data from Async storage), we can't use a helper function
like 

`storage: createJSONStorage(() => AsyncStorage)`

We were using this when we just used array. But this method actually behined the scenes 
sets and gets from AsyncStorage. 

Let's do it manually here ourselves since we are doing that Set to Array operations

*/
const revealedStorage: StateStorage = {
  /*
  'name' will be 'reveal-storage' - the name that we gave to our storage
  Also notice that we are doing JSON.stringify (converting to string) because the getItem method expects a string format of value.
  We will be stringifying the Set (that we convert from array).
  */
  getItem: async (name: string) => {
    try {
      const str = await AsyncStorage.getItem(name);
      if (!str) return null;

      const parsed = JSON.parse(str);

      // Convert array back to Set when loading from storage
      const transformed = {
        state: {
          ...parsed.state,
          revealed: parsed.state?.revealed
            ? new Set(parsed.state.revealed)
            : new Set(),
        },
        version: parsed.version,
      };

      return JSON.stringify(transformed);
    } catch (error) {
      console.error("Error in getItem:", error);
      return null;
    }
  },

  /* We will need to store a string into Async storage and not the array or set. Before we stringify, we need to convert the set into array 
  When Zustand interacts with setItem (setting value to async storage), zustand sends a stringified verison of set into async storage, hence we need 
  to first parse it before saving to the async store
  */
  setItem: async (name: string, value: string) => {
    try {
      // Handle case where value might already be an object
      let parsed;
      if (typeof value === "string") {
        parsed = JSON.parse(value);
      } else {
        parsed = value;
      }

      // Convert Set to array when saving to storage
      const toSave = {
        state: {
          ...parsed.state,
          revealed: parsed.state?.revealed
            ? Array.from(parsed.state.revealed)
            : [],
        },
        version: parsed.version,
      };

      await AsyncStorage.setItem(name, JSON.stringify(toSave));
    } catch (error) {
      console.error("Error in setItem:", error, "Value:", value);
    }
  },

  removeItem: async (name: string) => {
    // removes 'reveal-storage' key
    await AsyncStorage.removeItem(name);
  },
};

export const useRevealedStore = create<RevealedStore>()(
  persist(
    (set, get) => ({
      revealed: new Set<number>(),
      isHydrated: false,

      revealRiddle: (riddleNumber: number) => {
        set((state) => {
          const newRevealed = new Set(state.revealed);
          newRevealed.add(riddleNumber);
          return { revealed: newRevealed };
        });
      },

      isRevealed: (riddleNumber: number) => {
        return get().revealed.has(riddleNumber); // O(1)
      },

      setHydrated: (hydrated: boolean) => {
        set({ isHydrated: hydrated });
      },
    }),
    {
      name: "revealed-storage",
      /* helper that gives methods like setItem, getItem, removeItem directly when you use arrays */

      // storage: createJSONStorage(() => AsyncStorage)

      /* For set, we need to explicitly implement setItem, getItem and removeItem (which we are doing in revealedStorage()) */

      storage: revealedStorage,

      onRehydrateStorage: () => (state) => {
        // Called when hydration is complete
        state?.setHydrated(true);
      },
    }
  )
);
