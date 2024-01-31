import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./quizSlice";
import { useDispatch } from "react-redux";
import { update } from "./quizSlice";

function CategoryCard({ name, id }) {
  const categoryName = name.toLowerCase().split(" ").join("");
  //dynamically render the category cards by storing currently selected in slice
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(update({name, id}));
    console.log("payload updated from homepage")
  };
  
  return(
    <li>
      <Link to={`/${categoryName}`}  onClick={handleClick}>{name}</Link>
    </li>
  )
}
export default function Home() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  console.log(categories, "homepage categories");
  
  return (
    <section>
      <h1>Home</h1>
      {categories && (
        <ul>
          {categories.map((cat) => (
            <CategoryCard key={cat.id} id={cat.id} name={cat.name}/>
          ))}
        </ul>
      )}
      {isError && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </section>
  );
}
