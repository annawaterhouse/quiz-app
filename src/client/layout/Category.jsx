import List from "./List";
import { useGetByCategoryQuery } from "./quizSlice";
import { useParams } from "react-router-dom";

export default function Category() {
  const { id } = useParams();
  const { data: categoryCards, isError, isLoading } = useGetByCategoryQuery(id);

  return (
    <section>
      <h1>category page</h1>
<List categoryCards={categoryCards} />
  </section>
  );
}
