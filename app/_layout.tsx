import { colors } from "@/utils/commonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require("../assets/fonts/roboto/Roboto-Bold.ttf"),
    Handlee: require("../assets/fonts/Handlee/Handlee-Regular.ttf"),
    RobotoItalic: require("../assets/fonts/roboto/Roboto-Italic.ttf"),
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
          tabBarActiveTintColor: colors.primary,
          headerStyle: {
            backgroundColor: colors.primary,
          },
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
            popToTopOnBlur: true,
            headerShown: false,
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
