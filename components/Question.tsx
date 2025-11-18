import { riddleImages } from "@/assets/images/riddles";
import { Image } from "expo-image";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface QuestionTextProps {
  question: string;
  image?: string;
}

const Question: FC<QuestionTextProps> = ({ question, image }) => {
  return (
    <View className="gap-4 mb-4">
      <Text
        style={{ fontFamily: "RobotoItalic" }}
        className="text-2xl leading-relaxed"
      >
        {question}
      </Text>

      {image && (
        <Image
          style={styles.image}
          source={riddleImages[image]}
          placeholder={question}
          contentFit="contain"
          transition={500}
        />
      )}
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
  },
});
