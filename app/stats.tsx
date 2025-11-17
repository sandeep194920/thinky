import { useRevealedStore } from "@/store/revealStore";
import { colors } from "@/utils/commonStyles";
import { calculateStats } from "@/utils/statsHelper";
import { ScrollView, Text, View } from "react-native";

const difficultyConfig = {
  easy: { color: colors.green, emoji: "🟢", label: "Easy" },
  medium: { color: colors.yellow, emoji: "🟡", label: "Medium" },
  hard: { color: colors.orange, emoji: "🟠", label: "Hard" },
  sherlock: { color: colors.purple, emoji: "🟣", label: "Sherlock" },
};

export default function Stats() {
  const revealed = useRevealedStore((state) => state.revealed);
  const favorites = useRevealedStore((state) => state.favorites);
  const furthestRiddle = useRevealedStore((state) => state.furthestRiddle);

  const stats = calculateStats(revealed, favorites, furthestRiddle);

  return (
    <ScrollView
      className="flex-1 p-4"
      style={{ backgroundColor: colors.primaryBackground }}
    >
      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800 mb-6">
        📊 Your Stats
      </Text>

      {/* Main Stats Cards */}
      <View className="flex-row gap-3 mb-6">
        <View className="flex-1 bg-white rounded-xl p-4 items-center">
          <Text
            className="text-3xl font-bold"
            style={{ color: colors.primary }}
          >
            {stats.totalRevealed}
          </Text>
          <Text className="text-gray-600 text-sm mt-1">Revealed</Text>
        </View>

        <View className="flex-1 bg-white rounded-xl p-4 items-center">
          <Text
            className="text-3xl font-bold"
            style={{ color: colors.favourite }}
          >
            {stats.totalFavorites}
          </Text>
          <Text className="text-gray-600 text-sm mt-1">Favorites</Text>
        </View>
      </View>

      {/* Progress */}
      <View className="bg-white rounded-xl p-4 mb-6">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-gray-700 font-semibold">Progress</Text>
          <Text className="text-gray-500">
            Riddle #{stats.furthestRiddle}/{stats.totalRiddles}
          </Text>
        </View>
        <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <View
            className="h-full rounded-full"
            style={{
              backgroundColor: colors.primary,
              width: `${(stats.furthestRiddle / stats.totalRiddles) * 100}%`,
            }}
          />
        </View>
      </View>

      {/* By Difficulty */}
      <View className="bg-white rounded-xl p-4 mb-6">
        <Text className="text-lg font-bold text-gray-800 mb-4">
          You Revealed
        </Text>

        {stats.difficultyStats.map((stat) => {
          const config = difficultyConfig[stat.difficulty];
          return (
            <View key={stat.difficulty} className="mb-4 last:mb-0">
              <View className="flex-row items-center justify-between mb-2">
                <View className="flex-row items-center gap-2">
                  <Text className="text-lg">{config.emoji}</Text>
                  <Text className="text-gray-700 font-semibold">
                    {config.label}
                  </Text>
                </View>
                <Text className="text-gray-600">
                  {stat.revealed}/{stat.total}
                </Text>
              </View>
              {/* Progress Bar */}
              <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <View
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: config.color,
                    width: `${stat.percentage}%`,
                  }}
                />
              </View>
              <Text className="text-xs text-gray-500 mt-1">
                {stat.percentage}% revealed
              </Text>
            </View>
          );
        })}
      </View>

      {/* Daily Challenge - Coming Soon */}
      <View
        className="bg-white rounded-xl p-6 items-center"
        style={{
          borderColor: colors.primary,
          borderWidth: 2,
          borderStyle: "dashed",
        }}
      >
        <Text className="text-4xl mb-2">🎯</Text>
        <Text className="text-lg font-bold text-gray-800 mb-1">
          Daily Challenge
        </Text>
        <Text className="text-sm text-gray-500">Coming Soon!</Text>
      </View>

      <View className="h-8" />
    </ScrollView>
  );
}
