import { useGetSavedQuery } from "./quizSlice";
import Learn from "../components/views/Learn";
import Quiz from "../components/views/Quiz";
import { useSelector } from "react-redux";

export default function Saved() {
 //api call to get all cards
 const { data: saved, isError, isLoading } = useGetSavedQuery();
 //access redux store state for mode
 const mode = useSelector((state) => state.mode.mode);
  
 if (isLoading) return
 if (isError) return

  return (
    <section className="">
      <h1>Saved</h1>
      { mode ? (<Quiz saved={saved} />) : (<Learn saved={saved} />) }
    </section>
  );
}