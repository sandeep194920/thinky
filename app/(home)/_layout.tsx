import { colors } from "@/utils/commonStyles";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: false,
        animationTypeForReplace: "pop",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerShadowVisible: false,
        headerTintColor: colors.light,
        contentStyle: {
          backgroundColor: colors.primaryBackground,
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" options={{ title: `Riddle` }} />
    </Stack>
  );
};

export default Layout;
