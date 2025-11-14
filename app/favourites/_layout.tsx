import { Stack, usePathname } from "expo-router";
import React from "react";

const FavouritesLayout = () => {
  const pathname = usePathname();

  return (
    <Stack
      screenOptions={{
        animation: pathname.startsWith("/favourites") ? "default" : "none", // https://claude.ai/share/55134a1d-ae2f-4896-87fb-7588d27f7bcd
        headerStyle: {
          backgroundColor: "#650d9bff",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="favourites" options={{ title: "Favourites" }} />
      <Stack.Screen name="fav2" options={{ title: "Favourites 2" }} />
    </Stack>
  );
};

export default FavouritesLayout;
