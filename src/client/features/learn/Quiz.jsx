import Forum from "./Forum";
import { useState } from "react";

function Flashcard() {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <article>
        <h2>Question</h2>
      </article>
      <article>
        <p>answer</p>
      </article>
    </>
  );
}

export default function Quiz({ categoryCards }) {
  return (
    <>
      <section>
        <Flashcard />
      </section>
      <Forum />
    </>
  );
}
