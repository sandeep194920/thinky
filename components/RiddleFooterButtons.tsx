import Button from "@/components/Button";
import { colors } from "@/utils/commonStyles";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View } from "react-native";

const RiddleFooterButtons = () => {
  return (
    <View className="flex-row justify-between">
      <Button
        color="primary"
        variant="text"
        leftIcon={
          <Feather name="chevron-left" size={24} color={colors.primary} />
        }
      >
        Previous
      </Button>

      <Button
        color="primary"
        variant="text"
        rightIcon={
          <Feather name="chevron-right" size={24} color={colors.primary} />
        }
      >
        Next
      </Button>
    </View>
  );
};

export default RiddleFooterButtons;
