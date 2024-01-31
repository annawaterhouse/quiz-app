import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetByCategoryQuery } from '../../layout/quizSlice';
import List from './List';
import Quiz from './Quiz';

export default function Learn() {
  const { id } = useParams();
  const name = useSelector((state) => state.category.name);
  const { data: categoryCards, isError, isLoading } = useGetByCategoryQuery(id);
  if (isLoading) console.log("loading from learn");
  if (isError) console.log("error from learn");
  console.log(categoryCards, "categoryCards");

  return (
    <section>
      <h1>{name}</h1>
      <List categoryCards={categoryCards} />
      <Quiz categoryCards={categoryCards} />
    </section>
  );
}
