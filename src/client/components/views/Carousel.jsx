import { useState } from "react";

export default function Carousel({ cards, categoryCards, saved }) {
  const data = cards || categoryCards || saved;
  const arr = Object.values(data).flat();

  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      {arr.map((card) => (
        <div key={card.id}>
            <div>
              <h1>{card.question}</h1>
              <button onClick={handleFlip}>Flip</button>
            </div>

            <div>
              <p>{card.answer}</p>
              <button onClick={handleFlip}>Flip</button>
            </div>
        </div>
      ))}
    </>
  );
}
