import { DifficultyT } from "@/types/types";
import React from "react";
import { Text } from "react-native";

interface DifficultyProps {
  difficulty: DifficultyT;
}

const colors: Record<DifficultyT, string> = {
  easy: "bg-green-600",
  medium: "bg-yellow-600",
  hard: "bg-orange-600",
  sherlock: "bg-red-600",
};

const Difficulty = ({ difficulty }: DifficultyProps) => {
  return (
    <Text
      className={`${colors[difficulty]} font-bold text-xs text-white px-3 py-0.5 rounded-full text-center`}
    >
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase()}
    </Text>
  );
};

export default Difficulty;
