import Button from "@/components/Button";
import Difficulty from "@/components/Difficulty";
import QuestionText from "@/components/QuestionText";
import RiddleFooter from "@/components/RiddleFooterButtons";
import { DifficultyT } from "@/types";
import { colors } from "@/utils/commonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { FC } from "react";
import { Text, View } from "react-native";

/* 
This component is a riddle page that shows question, riddle number, difficulty level, buttons and so on
*/

interface RiddlePageProps {
  question: string;
  difficulty: DifficultyT;
  riddleNumber: number;
  favourite?: boolean;
}

const RiddlePage: FC<RiddlePageProps> = ({
  question,
  difficulty,
  riddleNumber,
  favourite = false,
}) => {
  return (
    <View className="flex-1 px-4 py-4 gap-1">
      <View className="flex-1 px-4 py-4 bg-white rounded-xl">
        <View className="flex-1 rounded-xl">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-gray-500">Riddle #{riddleNumber}</Text>
            <Difficulty difficulty={difficulty} />
            <Ionicons
              name={favourite ? "heart" : "heart-outline"}
              size={24}
              color={favourite ? colors.favourite : colors.unFavourite}
            />
          </View>
          <QuestionText question={question} />
        </View>

        <Button
          color="light"
          backgroundColor="primary"
          variant="contained"
          width="full"
        >
          Reveal Answer
        </Button>
      </View>
      <RiddleFooter />
    </View>
  );
};

export default RiddlePage;
