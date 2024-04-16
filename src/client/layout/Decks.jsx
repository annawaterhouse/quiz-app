import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "./quizSlice";
import { useCreateCategoryMutation } from "./quizSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDeleteCategoryMutation } from "./quizSlice";
import DeletePopup from "./nav/DeletePopup";
import "./decks.scss";

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
    <li key={id} ref={ref} className="category-li">
      <button>
      <Link to={`/${id}`}>{name}</Link>
      </button>
      <button className="delete-btn" onClick={onConfirm}>
        x
      </button>
      {message && (
        <DeletePopup
          message={message}
          setMessage={setMessage}
          name={name}
          onDelete={onDelete}
          id={id}
        />
      )}
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
    <section className="decks grid container">

      <h1>Study Decks</h1>

      {categories && (
        <ul className="grid">
          {categories.map((cat) => (
            <LinkCard key={cat.id} id={cat.id} name={cat.name} />
          ))}
          <li>
            {!active ? (
              <button className="newcat-btn" onClick={onActivate}>+</button>
            ) : (
              <form onSubmit={handleCreate}>
                <input
                  type="text"
                  placeholder="Add New Deck"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=""
                />
                <button type="submit" disabled={!active} className="">
                  Check
                </button>
              </form>
            )}
          </li>
        </ul>
      )}
    </section>
  );
}
