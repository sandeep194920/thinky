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
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { FC, useEffect } from "react";
import { Alert, Share, Text, TouchableOpacity, View } from "react-native";

/* 
This component is a riddle page that shows question, riddle number, difficulty level, buttons and so on
*/

interface RiddlePageProps {
  question: string;
  difficulty: DifficultyT;
  riddleNumber: number;
  answer: string;
}

const RiddlePage: FC<RiddlePageProps> = ({
  question,
  difficulty,
  riddleNumber,
  answer,
}) => {
  const router = useRouter();

  const toggleReveal = useRevealedStore((state) => state.toggleReveal);
  const revealed = useRevealedStore((state) => state.revealed);
  const isRiddleRevealed = revealed.includes(riddleNumber);

  /* Code related to Favourite page -> to -> Riddle page */
  const params = useLocalSearchParams();
  const fromFavorites = params.fromFavorites === "true";
  const furthestRiddle = useRevealedStore((state) => state.furthestRiddle);
  const updateProgress = useRevealedStore((state) => state.updateProgress);
  const canResume = fromFavorites && furthestRiddle >= riddleNumber;
  const resumableRiddle = Math.min(furthestRiddle, riddles.length);

  /* favorite toggle */
  const toggleFavorite = useRevealedStore((state) => state.toggleFavourite);
  const favorites = useRevealedStore((state) => state.favorites);
  const isStarred = favorites.includes(riddleNumber);

  const hidePrevious = riddleNumber === 1;
  const hideNext = riddles.length === riddleNumber;

  // Update progress when viewing this riddle (this keeps track of furtherestRiddle)
  useEffect(() => {
    if (!fromFavorites) {
      updateProgress(riddleNumber);
    }
  }, [riddleNumber, fromFavorites, updateProgress]);

  const handlePrevious = () => {
    const prevQuestion = Math.max(1, riddleNumber - 1);

    if (riddleNumber === 1) return;

    if (router.canGoBack()) {
      router.replace(`/riddle/${prevQuestion}`);
      // router.back();
    }
  };

  const handleNext = () => {
    const nextQuestion = Math.min(riddles.length, riddleNumber + 1);
    if (nextQuestion === riddles.length + 1) return;
    router.push(`/riddle/${nextQuestion}`);
  };

  // Resumes normal flow - so the users don't have to see the repeated questions if they don't want to
  const handleResume = () => {
    router.replace(`/riddle/${resumableRiddle}`);
  };

  const handleFavoriteToggle = () => {
    toggleFavorite(riddleNumber);
  };

  const handleUnsolved = () => {
    toggleReveal(riddleNumber);
  };

  const handleShare = async () => {
    const deepLink = `thinky://riddle/${riddleNumber}`;

    try {
      const result = await Share.share({
        message: `🧩 Can you solve this riddle?\n\n"${question}"\n\nRiddle #${riddleNumber} - ${difficulty}\n\nOpen in Thinky: ${deepLink}`,
      });

      if (result.action === Share.sharedAction) {
        console.log("Shared with deep link!");
      }
    } catch (error) {
      Alert.alert("Error", "Could not share riddle");
    }
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
          onPress: () => toggleReveal(riddleNumber),
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

            <View className="flex-row gap-8 items-center">
              {/* Favorite Button */}
              <TouchableOpacity onPress={handleFavoriteToggle}>
                <Ionicons
                  onPress={handleFavoriteToggle}
                  name={isStarred ? "heart" : "heart-outline"}
                  size={24}
                  color={isStarred ? colors.favourite : colors.unFavourite}
                />
              </TouchableOpacity>

              {/* Share Button */}
              <TouchableOpacity onPress={handleShare}>
                <Ionicons
                  name="share-social"
                  size={24}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <QuestionText question={question} />
        </View>
        <RevealSection
          onReveal={showRevealConfirmation}
          revealed={isRiddleRevealed}
          answer={answer}
          onUnsolve={handleUnsolved}
        />
      </View>

      {/* Resume to furthest */}

      {canResume && (
        <View
          className="p-3 mt-1 rounded-lg"
          style={{ backgroundColor: colors.lightBlue }}
        >
          <Text style={{ color: colors.darkBlue }} className="text-sm mb-2">
            📍 You were on Riddle #{resumableRiddle}
          </Text>
          <Button
            color="darkBlue"
            variant="outlined"
            classes={{ text: "text-sm" }}
            onPress={handleResume}
            // useGradient={false}
          >
            Resume from Riddle #{resumableRiddle}
          </Button>
        </View>
      )}

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
  answer: string;
  onUnsolve: VoidFunction;
}

const RevealSection: FC<RevealSectionProps> = ({
  onReveal,
  revealed = false,
  answer,
  onUnsolve,
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
            {answer}
          </Text>
        </View>

        <Button
          classes={{ root: "px-2", text: "text-base" }}
          variant="text"
          color="primaryLight"
          useGradient
          onPress={onUnsolve}
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
