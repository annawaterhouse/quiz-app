import { useGetCardsQuery } from "./quizSlice";
import List from "./List";

export default function Home() {
  const { data: cards, isError, isLoading } = useGetCardsQuery();
  
  if (isLoading) return
  if (isError) return
  

  return (
    <section>
      <h1>homepage</h1>
      <List cards={cards} />
    </section>
  );
}
