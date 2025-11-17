import { colors } from "@/utils/commonStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import { SplashScreen, Tabs, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();

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

  // Deep linking handler
  useEffect(() => {
    const handleDeepLink = ({ url }: { url: string }) => {
      console.log("Deep link received:", url);

      // Parse URL manually
      // Example: thinky://riddle/42 or exp://192.168.1.5:8081/--/riddle/42
      try {
        const urlObj = new URL(url);
        const path = urlObj.pathname || urlObj.host; // Handle both formats

        console.log("Parsed path:", path);

        // Extract riddle ID
        if (path.includes("riddle/")) {
          const riddleId = path.split("riddle/")[1]?.split("/")[0]; // Get just the number

          if (riddleId && !isNaN(Number(riddleId))) {
            console.log("Navigating to riddle:", riddleId);

            // Small delay to ensure navigation is ready
            setTimeout(() => {
              router.push(`/(home)/riddle/${riddleId}`);
            }, 100);
          }
        }
      } catch (err) {
        console.error("Error parsing deep link:", err);
      }
    };

    // Listen for deep links while app is open
    const subscription = Linking.addEventListener("url", handleDeepLink);

    // Handle deep link that opened the app (cold start)
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log("Initial URL:", url);
        handleDeepLink({ url });
      }
    });

    return () => subscription.remove();
  }, [router]);

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
