import { colors } from "@/utils/commonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require("../assets/fonts/roboto/Roboto-Regular.ttf"),
    Handlee: require("../assets/fonts/Handlee/Handlee-Regular.ttf"),
    RobotoItalic: require("../assets/fonts/roboto/Roboto-Italic.ttf"),
    RobotoBold: require("../assets/fonts/roboto/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("../assets/fonts/roboto/Roboto-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primaryLight,
          tabBarInactiveTintColor: colors.gray,
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
          tabBarStyle: {
            backgroundColor: colors.tabBar,
          },
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Riddles",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "bulb" : "bulb-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favourites"
          options={{
            title: "Favourites",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="stats"
          options={{
            title: "Stats",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "stats-chart" : "stats-chart-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
