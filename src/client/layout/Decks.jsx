import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./quizSlice";
import { useCreateCategoryMutation } from "./quizSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDeleteCategoryMutation } from "./quizSlice";
import { MdAdd } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import DeletePopup from "./nav/DeletePopup";

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
      <button
        className="transition ease-in-out duration-200 opacity-0 group-hover:opacity-100"
        onClick={onConfirm}
      >
        <TiDelete />
      </button>
      {message && <DeletePopup message={message} setMessage={setMessage} name={name} onDelete={onDelete} id={id} />}
    </li>
  );
}

export default function Decks() {
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
 <>
      {categories && (
        <ul className="mt-6 p-6 bg-white grid text-xl gap-8 tracking-wide font-bold text-md">
          <li>
            <p className="text-xs font-medium leading-loose">STUDY DECKS</p>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
          {categories.map((cat) => (
            <LinkCard key={cat.id} id={cat.id} name={cat.name} />
          ))}
          <li>
            {!active ? (
              <button onClick={onActivate}>
                <MdAdd />
              </button>
            ) : (
              <form onSubmit={handleCreate}>
                <input
                  type="text"
                  placeholder="Add New Deck"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-transparent text-xs font-light"
                />
                <button type="submit" disabled={!active} className="">
                  <IoMdCheckmark />
                </button>
              </form>
            )}
          </li>
        </ul>
      )}
    </>
  );
}

