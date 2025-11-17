import { DifficultyT } from "@/types/types";
import { colors } from "@/utils/commonStyles";
import React from "react";
import { Text } from "react-native";

interface DifficultyProps {
  difficulty: DifficultyT;
}

const styles: Record<DifficultyT, string> = {
  easy: colors.green,
  medium: colors.yellow,
  hard: colors.orange,
  sherlock: colors.purple,
};

const Difficulty = ({ difficulty }: DifficultyProps) => {
  return (
    <Text
      style={{ backgroundColor: styles[difficulty] }}
      className={`font-bold text-xs text-white px-3 py-0.5 rounded-full text-center`}
    >
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase()}
    </Text>
  );
};

export default Difficulty;
