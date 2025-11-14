import React, { FC } from "react";
import { Text } from "react-native";

interface QuestionTextProps {
  question: string;
}

const QuestionText: FC<QuestionTextProps> = ({ question }) => {
  return (
    <Text
      style={{ fontFamily: "RobotoBoldItalic" }}
      className="text-3xl leading-relaxed"
    >
      {question}
    </Text>
  );
};

export default QuestionText;
