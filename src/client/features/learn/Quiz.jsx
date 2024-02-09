import Forum from "./Forum";

function Flashcard({ cards, saved, categoryCards }) {
const data = cards || categoryCards || saved;
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

export default function Quiz({ cards, saved, categoryCards }) {

  return (
    <>
      <Flashcard cards={cards} categoryCards={categoryCards} saved={saved} />
      <Forum cards={cards} categoryCards={categoryCards} saved={saved} />
    </>
  );
}
