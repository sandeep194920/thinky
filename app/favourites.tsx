import EmptyCard from "@/components/Favourites/EmptyCard";
import FavouriteCard from "@/components/Favourites/FavouriteCard";
import { riddles } from "@/data";
import { useRevealedStore } from "@/store/revealStore";
import { DifficultyT } from "@/types/types";
import { View } from "react-native";

export default function Favourites() {
  const favourites = useRevealedStore((state) => state.favorites);

  const starredRiddles = riddles.filter((riddle) =>
    favourites.includes(riddle.id)
  );

  if (!starredRiddles.length) return <EmptyCard />;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
      className="m-4 gap-3"
    >
      {starredRiddles.map(({ id, question, difficulty, number }) => (
        <FavouriteCard
          key={id}
          id={id}
          question={question}
          difficulty={difficulty as DifficultyT}
          number={number}
        />
      ))}
    </View>
  );
}
