import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function Carousel({ cards, categoryCards, saved }) {
  const data = cards || categoryCards || saved;
  const arr = Object.values(data).flat();

  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {arr.map((card) => (
        <div key={card.id}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div>
              <h1>{card.question}</h1>
              <button onClick={handleFlip}>Flip</button>
            </div>

            <div>
              <p>{card.answer}</p>
              <button onClick={handleFlip}>Flip</button>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </Slider>
  );
}
