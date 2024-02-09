import { useGetSavedQuery } from "../features/learn/quizSlice";
import List from "../features/learn/List";
import Quiz from "../features/learn/Quiz";
import { useSelector } from "react-redux";

export default function Saved() {
 //api call to get all cards
 const { data: saved, isError, isLoading } = useGetSavedQuery();
 //access redux store state for mode
 const mode = useSelector((state) => state.mode.mode);
  
 if (isLoading) return
 if (isError) return

  return (
    <section>
      <h1>Saved</h1>
      { mode ? (<Quiz saved={saved} />) : (<List saved={saved} />) }
    </section>
  );
}