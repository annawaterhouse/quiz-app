import { useState } from "react";
import { useGetCardsQuery } from "./quizSlice";
import Learn from "./Learn";
import Quiz from "./Quiz";
import Form from "../common/Form";

export default function View() {
  //api call to get all cards
  const { data: cards, isError, isLoading } = useGetCardsQuery();
  const [mode, setMode] = useState(false);

  console.log(data);
  const formRef = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        handleClose();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClose]);

  return (
    <>
      {data &&
        Object.keys(data)?.map((dataId) => (
          <section key={dataId} className="container flow">
            <h2 className="text-500">
              {dataId}
              <span>{data[dataId]?.length}</span>
            </h2>
            <section className="tabs flex">
              <div className="mode-btn">
                <button onClick={() => !setMode}>Learn</button>
                <button onClick={() => !setMode}>Quiz</button>
              </div>
              <button onClick={()=>setMode(true)}>+</button>
            </section>
            {mode && <Form ref={formRef} />}
            {!mode ? <Learn cards={cards} /> : <Quiz cards={cards} />}
          </section>
        ))}
    </>
  );
}
