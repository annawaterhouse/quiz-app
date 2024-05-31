import Carousel from "./Carousel";

export default function Quiz({ cards, saved, categoryCards }) {

  return (
    <>
      <Carousel cards={cards} categoryCards={categoryCards} saved={saved} />
    </>
  );
}
