// app/(home)/settings.tsx
import { riddles } from "@/data";
import { useRevealedStore } from "@/store/revealStore";
import { colors } from "@/utils/commonStyles";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const resetStore = useRevealedStore((state) => state.resetStore);
  const totalRiddles = riddles.length;

  const handleRateUs = () => {
    // We'll implement this when you publish
    Alert.alert("Rate Us", "This will open the App/Play Store when published!");
  };

  const handleResetData = () => {
    Alert.alert(
      "Reset All Data?",
      "This will clear all your progress, favorites, and revealed answers.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            resetStore();
            Alert.alert("Success", "All data has been cleared!");
          },
        },
      ]
    );
  };

  return (
    <View
      className="flex-1 p-4"
      style={{ backgroundColor: colors.primaryBackground }}
    >
      {/* About Section */}
      <View className="bg-white rounded-xl p-4 mb-4">
        <Text className="text-lg font-bold text-gray-800 mb-3">About</Text>

        <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
          <Text className="text-gray-700">App Name</Text>
          <Text className="text-gray-600 font-semibold">Thinky</Text>
        </View>

        <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
          <Text className="text-gray-700">Version</Text>
          <Text className="text-gray-600">
            {Constants.expoConfig?.version || "1.0.0"}
          </Text>
        </View>

        <View className="flex-row items-center justify-between py-3">
          <Text className="text-gray-700">Total Riddles</Text>
          <Text className="text-gray-600 font-semibold">{totalRiddles}</Text>
        </View>
      </View>

      {/* Actions Section */}
      <View className="bg-white rounded-xl p-4 mb-4">
        <Text className="text-lg font-bold text-gray-800 mb-3">Actions</Text>

        <TouchableOpacity
          onPress={handleRateUs}
          className="flex-row items-center justify-between py-3 border-b border-gray-100"
        >
          <View className="flex-row items-center gap-3">
            <Ionicons name="star" size={24} color={colors.yellow} />
            <Text className="text-gray-700 font-semibold">Rate Us</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.gray} />
        </TouchableOpacity>

        {__DEV__ && (
          <TouchableOpacity
            onPress={handleResetData}
            className="flex-row items-center justify-between py-3"
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name="trash" size={24} color={colors.favourite} />
              <Text className="text-red-600 font-semibold">
                Reset All Data (Dev)
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.favourite}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Footer */}
      <Text className="text-center text-gray-500 text-sm mt-4">
        Made with ❤️ for puzzle lovers
      </Text>
    </View>
  );
}
