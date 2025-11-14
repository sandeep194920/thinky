import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Favourite() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Favourite</Text>
      <Link href="/favourites/fav2" push asChild>
        <Button title="Go to Fav 2" />
      </Link>
    </View>
  );
}
