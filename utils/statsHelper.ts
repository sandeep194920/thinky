// utils/statsHelper.ts
import { riddles } from "@/data";
import { DifficultyT } from "@/types/types";

export interface DifficultyStats {
  difficulty: DifficultyT;
  revealed: number;
  total: number;
  percentage: number;
}

export const calculateStats = (
  revealed: number[],
  favorites: number[],
  furthestRiddle: number
) => {
  // Count by difficulty
  const difficultyStats: Record<
    DifficultyT,
    { revealed: number; total: number }
  > = {
    easy: { revealed: 0, total: 0 },
    medium: { revealed: 0, total: 0 },
    hard: { revealed: 0, total: 0 },
    sherlock: { revealed: 0, total: 0 },
  };

  riddles.forEach((riddle) => {
    const diff = riddle.difficulty as DifficultyT;
    difficultyStats[diff].total += 1;

    if (revealed.includes(riddle.id)) {
      difficultyStats[diff].revealed += 1;
    }
  });

  // Convert to array with percentages
  const difficultyArray: DifficultyStats[] = Object.entries(
    difficultyStats
  ).map(([difficulty, stats]) => ({
    difficulty: difficulty as DifficultyT,
    revealed: stats.revealed,
    total: stats.total,
    percentage:
      stats.total > 0 ? Math.round((stats.revealed / stats.total) * 100) : 0,
  }));

  return {
    totalRiddles: riddles.length,
    totalRevealed: revealed.length,
    totalFavorites: favorites.length,
    furthestRiddle,
    difficultyStats: difficultyArray,
  };
};
