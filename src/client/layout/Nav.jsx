import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./quizSlice";
import { useDispatch } from "react-redux";

function LinkCard({ name, id, handleClick }) {

    return(
      <li>
        <Link to={`/${id}`} onClick={()=>handleClick(name, id)}>{name}</Link>
      </li>
    )
};


export default function Nav() {
  const dispatch = useDispatch();
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  
  if(isError) console.log("error from nav");
  if(isLoading) console.log("loading from nav");

  const handleClick = (name, id) => {
    dispatch(update({ name, id }));
    console.log("payload updated from navigation bar")
  };

  return (
    <nav>
      <h1>Nav</h1>
      {categories && (
        <ul>
          <li>
            <Link to="/" onClick={()=>handleClick(`home`, null)}>Home</Link>
          </li>
          {categories.map((cat) => (
            <LinkCard key={cat.id} id={cat.id} name={cat.name} handleClick={handleClick} />
          ))}
          <li>
            <button>+</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
