import List from "../features/learn/List";
import Mode from "./Mode";
import Quiz from "../features/learn/Quiz";
import { useGetByCategoryQuery } from "./quizSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Category() {
  //get cards by dynamic category id
  const { id } = useParams();
  const { data: categoryCards, isError, isLoading } = useGetByCategoryQuery(id);
  //access redux store state for mode
  const mode = useSelector((state) => state.mode.mode);
  //handle loading and error
  if (isLoading) return
  if (isError) return

  return (
    <section>
      <h1>category page</h1>
      <Mode />
      { !mode ? (<List categoryCards={categoryCards} />) : (<Quiz categoryCards={categoryCards} />) }
    </section>
  );
}
