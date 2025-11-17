import Riddles from "@/components/Riddles";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";

export default function RiddleScreen() {
  const { id } = useLocalSearchParams();
  const index = Number(id);

  return (
    <>
      <Riddles nextQuestion={index} />
      <Stack.Screen options={{ title: `Riddle ${index}` }} />
    </>
  );
}
