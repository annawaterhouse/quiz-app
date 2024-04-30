import Learn from "../components/views/Learn";
import Quiz from "../components/views/Quiz";
import { useGetByCategoryQuery } from "./quizSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState, useRef } from "react";
import Form from "../components/common/Form";

export default function Category() {

  const [open, setOpen] = useState(false);
  //get cards by dynamic category id
  const { id } = useParams();
  const { data: categoryCards, isError, isLoading } = useGetByCategoryQuery(id);
  //access redux store state for mode
  const mode = useSelector((state) => state.mode.mode);
  //handle loading and error
  if (isLoading) return
  if (isError) return

  return (
    <section>
      {open && <Form setOpen={setOpen} />}
      { !mode ? (<Learn setOpen={setOpen} categoryCards={categoryCards} />) : (<Quiz categoryCards={categoryCards} />) }
    </section>
  );
}
