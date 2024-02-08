import Forum from "./Forum";
import { useState } from "react";

function Flashcard({ cards, categoryCards }) {
const data = cards || categoryCards;
console.log(data, "flashcard data")
const shuffledArr = Object.values(data).flat().sort(() => Math.random() - 0.5);
  
return (
    <>
      {shuffledArr ? (
        shuffledArr.map((card) => {
          return (
            <div key={card.id}>
              <div>
                <h3>{card.question}</h3>
                <button>Flip</button>
              </div>
              <div>
                <h3>{card.answer}</h3>
                <button>Flip</button>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default function Quiz({ cards, categoryCards }) {

  return (
    <>
      <Flashcard cards={cards} categoryCards={categoryCards} />
      <Forum cards={cards} categoryCards={categoryCards} />
    </>
  );
}
