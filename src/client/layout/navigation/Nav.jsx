import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/learn/quizSlice";
import Mode from "./Mode";
import Flyout from "./Flyout";

function LinkCard({ name, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{name}</Link>
    </li>
  );
}

export default function Nav() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();

  if (isError) console.log("error from nav");
  if (isLoading) console.log("loading from nav");

  return (
    <>
    <Flyout />
    <nav className="hidden md:block fixed h-[98vh] lg:w-80 md:p-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-lg text-gray-800">
      <Mode />
      {categories && (
        <ul className="flex flex-col gap-4 tracking-wide font-bold text-md">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
          <li>
            <p className="text-xs font-medium leading-loose">STUDY DECKS</p>
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
    </>

  );
}
