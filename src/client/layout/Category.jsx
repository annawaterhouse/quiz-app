import List from "./List";
import { useGetByCategoryQuery } from "./quizSlice";
import { useParams } from "react-router-dom";

export default function Category() {
  const { id } = useParams();
  const { data: categoryCards, isError, isLoading } = useGetByCategoryQuery(id);
  if(isError) console.log("error from category");
  if(isLoading) console.log("loading from category");
  return (
    <section>
      <h1>category page</h1>
      <List categoryCards={categoryCards} />
  </section>
  );
}
