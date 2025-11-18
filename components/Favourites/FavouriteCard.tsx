import Difficulty from "@/components/Difficulty";
import { useRevealedStore } from "@/store/revealStore";
import { DifficultyT } from "@/types/types";
import { colors } from "@/utils/commonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";

interface FavoriteCardProps {
  id: number;
  displayOrder: number;
  question: string;
  difficulty: DifficultyT;
}

const FavouriteCard: FC<FavoriteCardProps> = ({
  id,
  displayOrder,
  question,
  difficulty,
}) => {
  const router = useRouter();
  const toggleFavorite = useRevealedStore((state) => state.toggleFavourite);

  const handlePress = () => {
    router.replace({
      pathname: "/riddle/[id]",
      params: { fromFavorites: "true", id },
    });
  };

  const handleToggle = () => {
    toggleFavorite(id);
  };

  return (
    <Pressable className="p-4 rounded-xl bg-white gap-1" onPress={handlePress}>
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-500">Riddle #{displayOrder}</Text>
        <Difficulty difficulty={difficulty} />
        <Ionicons
          onPress={handleToggle}
          name="heart"
          size={20}
          color={colors.favourite}
        />
      </View>
      <Text className="text-lg text-gray-600" numberOfLines={2}>
        {question}
      </Text>
    </Pressable>
  );
};

export default FavouriteCard;
