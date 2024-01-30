import { Link } from "react-router-dom";
import { useGetCardsQuery } from "../features/quiz/quizSlice";

export default function Home() {
  const { data: cards, error, isLoading } = useGetCardsQuery();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(cards, "cards");

  return (
    <section>
        <Link to="/ds">Data Structures</Link>
        <p className="text-3xl font-bold underline">hello</p>
        <Link to="/js">Javascript</Link>
        <Link to="/react">React</Link>
    </section>
  );
}
