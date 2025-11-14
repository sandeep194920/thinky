import RiddlePage from "@/components/RiddlePage";
import React from "react";

const question =
  "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?";

const Riddles = () => {
  return <RiddlePage question={question} difficulty="easy" riddleNumber={4} />;
};

export default Riddles;
