import Forum from "./Forum";
import Carousel from "./Carousel";
import { useState } from "react";


export default function Quiz({ cards, saved, categoryCards }) {

  return (
    <>
      <Carousel cards={cards} categoryCards={categoryCards} saved={saved} />
      <Forum cards={cards} categoryCards={categoryCards} saved={saved} />
    </>
  );
}
