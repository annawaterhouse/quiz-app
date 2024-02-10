import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../features/learn/quizSlice";
import { useCreateCategoryMutation } from "../../features/learn/quizSlice";
import { useNavigate } from "react-router-dom";
import Mode from "./Mode";
import { useEffect, useRef, useState } from "react";
import { useDeleteCategoryMutation } from "../../features/learn/quizSlice";
import { MdAdd } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { TiDelete } from "react-icons/ti";


function LinkCard({ name, id }) {
  const navigate = useNavigate();
  const [deleteCategory] = useDeleteCategoryMutation();
  //handle delete confirmation pop-up open state
  const [message, setMessage] = useState(false);
  const ref = useRef(null);
  //category delete confirmation
  const onConfirm = () => {
    setMessage(!message);
  };

  //delete categry by id api req
  const onDelete = async (id) => {
    try {
      const response = await deleteCategory(id).unwrap();
      if (response.message) {
        setMessage(!message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setMessage(false);
      navigate("/");
    }
  };

    //close delete confirmation pop-up if clicked outside
    useEffect(() => {
      const checkClickAway = (e) => {
        if (message && ref.current && !ref.current.contains(e.target)) {
          setMessage(false);
        }
      };
      document.addEventListener("mousedown", checkClickAway);
      document.addEventListener("touchstart", checkClickAway);
      return () => {
        document.removeEventListener("mousedown", checkClickAway);
        document.removeEventListener("touchstart", checkClickAway);
      };
    }),
      [message];

  return (
    <li key={id} ref={ref} className="flex justify-between items-center group">
      <Link to={`/${id}`}>{name}</Link>
      <button className="opacity-0 group-hover:opacity-100" onClick={onConfirm}><TiDelete /></button>
      {message && 
      <div className={message ? "absolute bottom-4 left-0 bg-white z-10" : "hidden"}>
      <section className="bg-blue-100 p-8 w-full">
        <button onClick={()=>setMessage(false)}>x</button>
        <p className="text-xs">Are you sure you'd like to delete {name}?</p>
        <button onClick={()=>onDelete(id)}>yes</button>
      </section></div>}
    </li>
  );
}

export default function Nav() {
  const { data: categories, isError, isLoading } = useGetCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();

  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (isError) console.log("error from nav");
  if (isLoading) console.log("loading from nav");
  //toggle create category form
  const onActivate = () => {
    setActive(!active);
  };
  //create category
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    //dont make api call if input is empty
    const val = name.trim();
    if (val === "") return setActive(!active);
  
    try {
      const response = await createCategory({ name: val }).unwrap();
      if (response.message) {
        setActive(!active);
      } else {
        setError(true);
      } 
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  
  

  return (
    <>

    <nav className="relative hidden md:block md:p-4 bg-gray-100 text-gray-800">
      <Mode />
      {categories && (
        <ul className="grid gap-4 tracking-wide font-bold text-md">
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
          {!active ? (<button onClick={onActivate}><MdAdd /></button>) : (
          <form onSubmit={handleCreate}>
            <input 
              type="text"
              placeholder="Add New Deck"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent text-xs font-light"
            />
            <button type="submit" disabled={!active} className=""><IoMdCheckmark /></button>
          </form>
          )}
          </li>
        </ul>
      )}
    </nav>
    </>

  );
}