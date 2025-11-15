import Button from "@/components/Button";
import { colors } from "@/utils/commonStyles";
import Feather from "@expo/vector-icons/Feather";
import React, { FC } from "react";
import { View } from "react-native";

interface RiddleFooterButtonsProps {
  onPrevious: VoidFunction;
  onNext: VoidFunction;
  hidePrevious: boolean;
  hideNext: boolean;
}

const RiddleFooterButtons: FC<RiddleFooterButtonsProps> = ({
  onPrevious,
  onNext,
  hidePrevious,
  hideNext,
}) => {
  return (
    <View className="flex-row justify-between">
      <Button
        color="primary"
        variant="text"
        leftIcon={
          <Feather name="chevron-left" size={24} color={colors.primary} />
        }
        onPress={onPrevious}
        classes={{
          root: hidePrevious ? "invisible" : "",
        }}
      >
        Previous
      </Button>

      <Button
        color="primary"
        variant="text"
        rightIcon={
          <Feather name="chevron-right" size={24} color={colors.primary} />
        }
        onPress={onNext}
        classes={{
          root: hideNext ? "invisible" : "",
        }}
      >
        Next
      </Button>
    </View>
  );
};

export default RiddleFooterButtons;
