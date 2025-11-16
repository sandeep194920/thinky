import React from "react";
import { Text, View } from "react-native";

const EmptyCard = () => {
  return (
    <View className="p-4 rounded-xl bg-white gap-1 w-[100%] items-center">
      <Text className="text-6xl">💭</Text>
      <Text className="text-lg text-gray-600 mb-4 mt-2">No favorites yet!</Text>
      <Text className="text-gray-600">
        Heart ❤️ riddles you love to save them here
      </Text>
    </View>
  );
};

export default EmptyCard;
