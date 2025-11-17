import { colors } from "@/utils/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        animationTypeForReplace: "pop",
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerBackground: () => (
          <LinearGradient
            colors={[
              colors.gradientStart,
              colors.gradientMiddle,
              colors.gradientEnd,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
        headerShadowVisible: false,
        headerTintColor: colors.light,
        contentStyle: {
          backgroundColor: colors.primaryBackground,
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="/riddle/[id]" options={{ title: `Riddle` }} />
    </Stack>
  );
};

export default Layout;
