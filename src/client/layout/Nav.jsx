import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./quizSlice";
import { useDispatch } from "react-redux";
import { update } from "./quizSlice";

function LinkCard({ name, id, handleClick }) {

    return(
      <li onClick={()=>handleClick(name, id)}>
        <Link to={`/${id}`}>{name}</Link>
      </li>
    )
};


export default function Nav() {
  const dispatch = useDispatch();
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  
  if(isError) console.log("error from nav");
  if(isLoading) console.log("loading from nav");
  console.log(categories, "homepage categories");

  const handleClick = (name, id) => {
    dispatch(update({ name, id }));
    console.log("payload updated from navigation bar")
  };

  return (
    <nav>
      <h1>Nav</h1>
      {categories && (
        <ul>
          <li onClick={handleClick}>
            <Link to="/">Home</Link>
          </li>
          {categories.map((cat) => (
            <LinkCard key={cat.id} id={cat.id} name={cat.name} handleClick={handleClick} />
          ))}
        </ul>
      )}
    </nav>
  );
}
