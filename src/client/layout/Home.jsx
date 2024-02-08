import { useGetCardsQuery } from "./quizSlice";
import { useState } from "react";
import List from "../features/learn/List";
import Quiz from "../features/learn/Quiz";
import { useSelector } from "react-redux";
import Mode from "./Mode";

export default function Home() {
 //api call to get all cards
 const { data: cards, isError, isLoading } = useGetCardsQuery();
 //access redux store state for mode
 const mode = useSelector((state) => state.mode.mode);
  
 if (isLoading) return
 if (isError) return

  return (
    <section>
      <h1>home</h1>
      <Mode/>
      { mode ? (<Quiz cards={cards} />) : (<List cards={cards} />) }
    </section>
  );
}
