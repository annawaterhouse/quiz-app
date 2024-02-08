import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./quizSlice";
import { useDispatch } from "react-redux";

function LinkCard({ name, id, handleClick }) {

    return(
      <li>
        <Link to={`/${id}`}>{name}</Link>
      </li>
    )
};


export default function Nav() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  
  if(isError) console.log("error from nav");
  if(isLoading) console.log("loading from nav");


  return (
    <nav className="bg-blue-200 h-full">
      <h1 className="">Navigation</h1>
      {categories && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
          <li>
            <p className="text-xs">DECKS</p>
          </li>
          {categories.map((cat) => (
            <LinkCard key={cat.id} id={cat.id} name={cat.name} />
          ))}
          <li>
            <button>+</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
