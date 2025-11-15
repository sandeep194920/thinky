import Button from "@/components/Button";
import Difficulty from "@/components/Difficulty";
import QuestionText from "@/components/QuestionText";
import RiddleFooter from "@/components/RiddleFooterButtons";
import { riddles } from "@/data";
import { DifficultyT } from "@/types/types";
import { colors } from "@/utils/commonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
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
  const router = useRouter();

  const hidePrevious = riddleNumber === 1;
  const hideNext = riddles.length === riddleNumber;

  const handlePrevious = () => {
    const prevQuestion = Math.max(1, riddleNumber - 1);

    if (riddleNumber === 1) return;

    if (router.canGoBack()) {
      router.replace(`/${prevQuestion}`);
    }
  };

  const handleNext = () => {
    const nextQuestion = Math.min(riddles.length, riddleNumber + 1);
    if (nextQuestion === riddles.length + 1) return;

    router.push(`/${nextQuestion}`);
  };

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
      <RiddleFooter
        hidePrevious={hidePrevious}
        hideNext={hideNext}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </View>
  );
};

export default RiddlePage;
