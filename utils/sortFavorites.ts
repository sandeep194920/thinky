// utils/sortFavorites.ts
import { DifficultyT, SortBy } from "@/types/types";

interface Riddle {
  id: number;
  displayOrder: number;
  difficulty: DifficultyT;
  question: string;
}

const difficultyOrder: Record<DifficultyT, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
  sherlock: 4,
};

export const sortFavorites = (
  riddles: Riddle[],
  favorites: number[],
  sortBy: SortBy
): Riddle[] => {
  const sorted = [...riddles];

  switch (sortBy) {
    case "newest":
      // Newest = order they were added to favorites (reverse of favorites array)
      return sorted.sort((a, b) => {
        const aIndex = favorites.indexOf(a.id);
        const bIndex = favorites.indexOf(b.id);
        return bIndex - aIndex; // Reverse order
      });

    case "oldest":
      // Oldest = order they were added to favorites
      return sorted.sort((a, b) => {
        const aIndex = favorites.indexOf(a.id);
        const bIndex = favorites.indexOf(b.id);
        return aIndex - bIndex;
      });

    case "difficulty":
      // Sort by difficulty: Easy → Medium → Hard → Sherlock
      return sorted.sort((a, b) => {
        const aDiff =
          difficultyOrder[a.difficulty.toLowerCase() as DifficultyT];
        const bDiff =
          difficultyOrder[b.difficulty.toLowerCase() as DifficultyT];
        return aDiff - bDiff;
      });

    case "number":
      // Sort by riddle number (ascending)
      return sorted.sort((a, b) => a.displayOrder - b.displayOrder);

    default:
      return sorted;
  }
};
