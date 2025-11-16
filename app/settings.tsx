import Button from "@/components/Button";
import { useRevealedStore } from "@/store/revealStore";
import { View } from "react-native";

export default function Settings() {
  const resetStore = useRevealedStore((state) => state.resetStore);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Button
        onPress={resetStore}
        width="full"
        color="light"
        backgroundColor="primary"
        variant="contained"
      >
        Clear Data
      </Button>
    </View>
  );
}
