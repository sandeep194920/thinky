import { colors } from "@/utils/commonStyles";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
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
      <Stack.Screen name="index" options={{ title: "Riddles" }} />
      <Stack.Screen name="home-nested" options={{ title: "Riddles2" }} />
    </Stack>
  );
};

export default Layout;
