import Button from "@/components/Button";
import Difficulty from "@/components/Difficulty";
import QuestionText from "@/components/QuestionText";
import RiddleFooter from "@/components/RiddleFooterButtons";
import Tags from "@/components/Tags";
import { riddles } from "@/data";
import { useRevealedStore } from "@/store/revealStore";
import { DifficultyT } from "@/types/types";
import { colors } from "@/utils/commonStyles";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Alert, Text, View } from "react-native";
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

  // const revealRiddle = useRevealedStore((state) => state.revealRiddle);
  // const isRevealed = useRevealedStore((state) =>
  //   state.isRevealed(riddleNumber)
  // );

  const revealRiddle = useRevealedStore((state) => state.revealRiddle);
  const revealed = useRevealedStore((state) => state.revealed);
  const isRiddleRevealed = revealed.includes(riddleNumber);

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

  const showRevealConfirmation = () => {
    Alert.alert(
      "Are you sure you want to reveal the answer?",
      "Share with your close ones to see if they can get it!",
      [
        {
          text: "Share this riddle",
          onPress: () => console.log("Sharing the riddle"),
        },
        {
          text: "Reveal",
          onPress: () => revealRiddle(riddleNumber),
          style: "destructive",
        },

        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View className="flex-1 px-4 py-4 gap-1">
      <View className="flex-1 px-4 py-4 bg-white rounded-xl">
        <View className="flex-1 rounded-xl mb-4">
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
        <RevealSection
          onReveal={showRevealConfirmation}
          revealed={isRiddleRevealed}
        />
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

interface RevealSectionProps {
  onReveal: VoidFunction;
  revealed?: boolean;
}

const RevealSection: FC<RevealSectionProps> = ({
  onReveal,
  revealed = false,
}) => {
  if (revealed) {
    return (
      <React.Fragment>
        <Tags
          title="Solved"
          classes={{
            root: "self-center mb-4",
            text: "font-semibold",
          }}
          leftIcon={<Entypo name="check" size={14} color={colors.darkGreen} />}
          color="darkGreen"
          bgColor="lightGreen"
        />
        <View
          className="p-4 gap-2 rounded-xl"
          style={{ backgroundColor: colors.lightGreen }}
        >
          <Text
            className="text-lg font-bold"
            style={{ color: colors.darkGreen }}
          >
            Answer
          </Text>

          <Text
            className="text-lg"
            style={{ color: colors.darkGreen, fontFamily: "Robot" }}
          >
            5 minutes. Each machine makes one t-shirt in 5 minutes, so 100
            machines will make 100 t-shirts in the same 5 minutes.
          </Text>
        </View>

        <Button
          classes={{ root: "px-2", text: "text-base" }}
          variant="text"
          color="primary"
        >
          Mark it Unsolved
        </Button>
      </React.Fragment>
    );
  }

  return (
    <Button
      color="light"
      backgroundColor="primary"
      variant="contained"
      width="full"
      onPress={onReveal}
    >
      Reveal Answer
    </Button>
  );
};
