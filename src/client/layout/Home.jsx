import { useGetCardsQuery } from "./quizSlice";
import Learn from "../components/views/Learn";
import Quiz from "../components/views/Quiz";
import { useSelector } from "react-redux";
import Decks from "./nav/Decks";

export default function Home() {
 //api call to get all cards
 const { data: cards, isError, isLoading } = useGetCardsQuery();
 //access redux store state for mode
 const mode = useSelector((state) => state.mode.mode);
  
 if (isLoading) return
 if (isError) return

  return (
    <section>
    <Decks /> 
      { mode ? (<Quiz cards={cards} />) : (<Learn cards={cards} />) }
    </section>
  );
}
