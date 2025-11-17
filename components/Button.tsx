import { ButtonVariant, ButtonWidth, Rounded } from "@/types/types";
import { Color, colors } from "@/utils/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
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
  iconGap?: number;
  useGradient?: boolean; // New prop to enable gradient
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
  useGradient = true,
}) => {
  const textOnly = variant === "text";

  const buttonStyle = textOnly
    ? {}
    : {
        backgroundColor:
          variant === "contained" && !useGradient
            ? colors[backgroundColor]
            : "transparent",
        ...(variant === "outlined" && {
          borderWidth: 1,
          borderColor: useGradient ? "transparent" : colors[backgroundColor],
        }),
      };

  const baseClassName = textOnly
    ? "items-center justify-center self-start py-3"
    : `px-6 py-3 items-center justify-center self-start ${rounded} ${width === "full" ? "w-full" : ""}`;

  const content = (
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
  );

  if (useGradient && variant === "contained") {
    return (
      <Pressable
        onPress={onPress}
        className={`${baseClassName} ${classes?.root || ""} overflow-hidden self-start`}
      >
        <LinearGradient
          colors={[
            colors.gradientStart,
            colors.gradientMiddle,
            colors.gradientEnd,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        {content}
      </Pressable>
    );
  }

  if (useGradient && variant === "outlined") {
    return (
      <View
        className={`${rounded} ${width === "full" ? "w-full" : ""} overflow-hidden self-start`}
      >
        <LinearGradient
          colors={[
            colors.gradientStart,
            colors.gradientMiddle,
            colors.gradientEnd,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className={`p-[1px] ${rounded}`}
        >
          <Pressable
            onPress={onPress}
            style={{ backgroundColor: colors.light }}
            className={`${baseClassName} ${classes?.root || ""}`}
          >
            {content}
          </Pressable>
        </LinearGradient>
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={buttonStyle}
      className={`${baseClassName} ${classes?.root || ""}`}
    >
      {content}
    </Pressable>
  );
};

export default Button;
