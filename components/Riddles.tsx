import RiddlePage from "@/components/RiddlePage";
import { riddles } from "@/data";
import { DifficultyT } from "@/types/types";
import React, { FC } from "react";

interface RiddlesProps {
  nextQuestion: number;
}

const Riddles: FC<RiddlesProps> = ({ nextQuestion }) => {
  const nextRiddle =
    riddles.find((riddle) => riddle.id === nextQuestion) ?? riddles[0];

  const { question, difficulty, id } = nextRiddle;

  return (
    <RiddlePage
      question={question}
      difficulty={difficulty as DifficultyT}
      riddleNumber={id}
    />
  );
};

export default Riddles;
