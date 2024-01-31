import { useGetCategoriesQuery } from "./quizSlice";
import { useState } from "react";

export default function Home() {
  const [isQuizMode, setQuizMode] = useState(false);
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  
  return (
    <section>
      <h1>Home</h1>
    </section>
  );
}
