import EmptyCard from "@/components/Favourites/EmptyCard";
import FavouriteCard from "@/components/Favourites/FavouriteCard";
import { riddles } from "@/data";
import { useRevealedStore } from "@/store/revealStore";
import { DifficultyT } from "@/types/types";
import { colors } from "@/utils/commonStyles";
import { sortFavorites } from "@/utils/sortFavorites";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Favourites() {
  const favourites = useRevealedStore((state) => state.favorites);
  const sortBy = useRevealedStore((state) => state.favoritesSortBy);
  const setSortBy = useRevealedStore((state) => state.setFavoritesSortBy);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const starredRiddles = riddles.filter((riddle) =>
    favourites.includes(riddle.id)
  );

  // Sort the riddles
  const sortedRiddles = sortFavorites(starredRiddles, favourites, sortBy);

  if (!starredRiddles.length) return <EmptyCard />;

  const sortOptions = [
    { value: "newest", label: "Newest First", icon: "time-outline" },
    { value: "oldest", label: "Oldest First", icon: "time" },
    { value: "difficulty", label: "By Difficulty", icon: "bar-chart-outline" },
    { value: "number", label: "By Number", icon: "list-outline" },
  ] as const;

  return (
    <View style={{ flex: 1 }} className="m-4">
      {/* Sort Header */}
      <View className="mb-4">
        <TouchableOpacity
          onPress={() => setShowSortMenu(!showSortMenu)}
          style={{ backgroundColor: colors.lightGray }}
          className="flex-row items-center justify-between p-3 rounded-lg"
        >
          <View className="flex-row items-center gap-2">
            <Ionicons name="filter" size={20} color={colors.primaryLight} />
            <Text className="text-gray-700 font-semibold">
              Sort: {sortOptions.find((o) => o.value === sortBy)?.label}
            </Text>
          </View>
          <Ionicons
            name={showSortMenu ? "chevron-up" : "chevron-down"}
            size={20}
            color={colors.primaryLight}
          />
        </TouchableOpacity>

        {/* Sort Menu */}
        {showSortMenu && (
          <View className="rounded-lg">
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => {
                  setSortBy(option.value);
                  setShowSortMenu(false);
                }}
                className={`flex-row items-center gap-3 p-2.5 border-b border-gray-200`}
              >
                <Ionicons
                  name={option.icon}
                  size={20}
                  color={
                    sortBy === option.value ? colors.primaryLight : colors.gray
                  }
                />
                <Text
                  style={{
                    color:
                      sortBy === option.value
                        ? colors.primaryLight
                        : colors.gray,
                  }}
                  className={`flex-1 ${
                    sortBy === option.value && "font-semibold"
                  }`}
                >
                  {option.label}
                </Text>
                {sortBy === option.value && (
                  <Ionicons name="checkmark" size={20} color={colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Favorites List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-3 pb-4">
          {sortedRiddles.map(({ id, question, difficulty, displayOrder }) => (
            <FavouriteCard
              key={id}
              id={id}
              question={question}
              difficulty={difficulty as DifficultyT}
              displayOrder={displayOrder}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
