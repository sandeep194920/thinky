import { ButtonVariant, ButtonWidth, Rounded } from "@/types/types";
import { Color, colors } from "@/utils/commonStyles";
import React, { FC, PropsWithChildren, ReactNode } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface ButtonProps extends PressableProps {
  color: Color;
  backgroundColor?: Color;
  width?: ButtonWidth;
  rounded?: Rounded;
  variant?: ButtonVariant;
  classes?: {
    root?: string;
    container?: string;
    text?: string;
    leftIcon?: string;
    rightIcon?: string;
  };
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  iconGap?: number; // gap between icon and text in pixels
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  color,
  backgroundColor = "light",
  classes,
  onPress,
  width = "small",
  rounded = "rounded-lg",
  variant = "outlined",
  leftIcon,
  rightIcon,
  iconGap = 8,
}) => {
  // If textOnly is true, override variant styling
  const textOnly = variant === "text";

  const buttonStyle = textOnly
    ? {}
    : {
        backgroundColor:
          variant === "contained" ? colors[backgroundColor] : "transparent",
        ...(variant === "outlined" && {
          borderWidth: 1,
          borderColor: colors[backgroundColor],
        }),
      };

  const baseClassName = textOnly
    ? "items-center justify-center self-start py-3"
    : `px-6 py-3 items-center justify-center self-start ${rounded} ${width === "full" ? "w-full" : ""}`;

  return (
    <Pressable
      onPress={onPress}
      style={buttonStyle}
      className={`${baseClassName} ${classes?.root || ""}`}
    >
      <View
        style={{ gap: iconGap }}
        className={`flex-row items-center justify-center ${classes?.container}`}
      >
        {leftIcon && <View className={classes?.leftIcon}>{leftIcon}</View>}

        <Text
          className={`font-semibold text-lg ${classes?.text}`}
          style={{ color: colors[color] }}
        >
          {children}
        </Text>

        {rightIcon && <View className={classes?.rightIcon}>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

export default Button;
