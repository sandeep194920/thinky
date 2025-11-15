import { Color, colors } from "@/utils/commonStyles";
import React, { FC, ReactElement } from "react";
import { Text, View } from "react-native";

interface TagsProps {
  title: string;
  bgColor: Color;
  color: Color;
  leftIcon?: ReactElement;
  classes?: {
    root?: string;
    text?: string;
  };
}

const Tags: FC<TagsProps> = ({ title, bgColor, color, leftIcon, classes }) => {
  return (
    <View
      className={[
        "px-4 py-1 flex-row gap-1 items-center self-start rounded-full",
        classes?.root,
      ].join(" ")}
      style={{ backgroundColor: colors[bgColor] }}
    >
      {leftIcon}
      <Text
        className={["text-sm", classes?.text].join(" ")}
        style={{ color: colors[color] }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Tags;
